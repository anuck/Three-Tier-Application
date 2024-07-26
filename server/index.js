const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const PYTHON_SERVICE_URL = 'http://python-service:5000';

app.get('/items', async (req, res) => {
    try {
        const Response = await axios.get('${PYTHON_SERVICE_URL}/items');
        res.json(express.response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.post('/items', async (req, res) => {
    try {
        const response = await axios.post('${PYTHON_SERVICE_URL}/iems', req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(4000, () => {
    console.log('NodeJS service listening on pott 4000');
});