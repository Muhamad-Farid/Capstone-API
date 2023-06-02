const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');
const multer = require('multer');
const tf = require('@tensorflow/tfjs-node');
const { loadGraphModel } = require('@tensorflow/tfjs-node');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const prisma = new PrismaClient();
const secretKey = 'your-secret-key'; // Replace with your own secret key
const upload = multer({ dest: 'uploads/' });

app.use(bodyParser.json());

// Registration API
app.post('/register', async (req, res) => {
  // ... Existing registration code ...
});

// Login API
app.post('/login', async (req, res) => {
  // ... Existing login code ...
});

// Access Token Generation
function generateAccessToken(user) {
  // ... Existing access token generation code ...
}

// Token Authentication Middleware
function authenticateToken(req, res, next) {
  // ... Existing token authentication middleware ...
}

app.post('/coffee-quality', authenticateToken, upload.single('image'), async (req, res) => {
  try {
    const { path } = req.file;

    // Load the MobileNet model
    const model = await loadGraphModel('https://tfhub.dev/google/imagenet/mobilenet_v2_100_224/feature_vector/4/default/1', { fromTFHub: true });

    // Read and preprocess the image
    const imageBuffer = await fs.promises.readFile(path);
    const imageTensor = tf.node.decodeImage(imageBuffer);
    const resizedImage = tf.image.resizeBilinear(imageTensor, [224, 224]);
    const expandedImage = resizedImage.expandDims();
    const preprocessedImage = expandedImage.toFloat().div(tf.scalar(127)).sub(tf.scalar(1));

    // Perform inference on the image
    const predictions = await model.predict(preprocessedImage);

    // Get the top prediction
    const topPrediction = predictions.argMax(1).dataSync()[0];

    // Retrieve the coffee quality information from the database
    const coffeeQuality = await prisma.coffeeQuality.findUnique({
      where: { id: topPrediction },
    });

    if (!coffeeQuality) {
      return res.status(404).json({ error: 'Coffee quality not found' });
    }

    // Save the result in the history
    const decodedToken = jwt.decode(req.headers.authorization.split(' ')[1]);
    const userId = decodedToken.email;

    await prisma.history.create({
      data: {
        userId,
        coffeeQualityId: coffeeQuality.id,
      },
    });

    res.json(coffeeQuality);
  } catch (error) {
    console.error('Error processing image:', error);
    res.status(500).json({ error: 'Failed to process image' });
  }
});

app.get('/history', authenticateToken, async (req, res) => {
  try {
    const decodedToken = jwt.decode(req.headers.authorization.split(' ')[1]);
    const userId = decodedToken.email;

    // Retrieve the history for the user
    const history = await prisma.history.findMany({
      where: { userId },
      include: { coffeeQuality: true },
    });

    res.json(history);
  } catch (error) {
    console.error('Error retrieving history:', error);
    res.status(500).json({ error: 'Failed to retrieve history' });
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
