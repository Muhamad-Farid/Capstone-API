const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const historyRouter = require('./routes/history');
const coffeeRouter = require('./routes/coffee');
const aboutPage = require('./routes/about');
const searchRouter = require('./routes/search');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/history', historyRouter);
app.use('/coffee', coffeeRouter);
app.use('/about', aboutPage);
app.use('/search', searchRouter);




app.get('/', (req, res) => {
    console.log('Response success');
    res.send('Response Success!');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log('Server is up and listening on ' + PORT);
});

