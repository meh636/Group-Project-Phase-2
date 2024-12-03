const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); // For parsing form data

app.get('/', (req, res) => {
    res.render('index', { photo: null, error: null });
});

app.post('/fetch', async (req, res) => {
    const date = req.body.date;
    const apiKey = 'DEMO_KEY'; // Replace with your API key if needed

    // Simple date validation (YYYY-MM-DD)
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(date)) {
        return res.render('index', { photo: null, error: 'Please enter a valid date (YYYY-MM-DD).' });
    }

    try {
        const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`);
        res.render('index', { photo: response.data, error: null });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.render('index', { photo: null, error: 'Error fetching the data. Please try again.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
