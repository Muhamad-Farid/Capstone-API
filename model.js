const express = require('express');
const multer = require('multer');
const tf = require('@tensorflow/tfjs');
const { loadGraphModel } = require('@tensorflow/tfjs-node');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/coffee-quality', upload.single('image'), async (req, res) => {
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

    res.json(coffeeQuality);
  } catch (error) {
    console.error('Error processing image:', error);
    res.status(500).json({ error: 'Failed to process image' });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
