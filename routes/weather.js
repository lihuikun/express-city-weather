const express = require('express');
const axios = require('axios');
const router = express.Router();

const API_KEY = '187d6c3dd15f4d2d99e2a7e0ee08ba04';

router.get('/', async (req, res) => {
  const city = req.query.city;
  console.log("🚀 ~ router.get ~ city:", city)

  if (!city) {
    return res.status(400).json({ error: 'city query parameter is required' });
  }

  try {
    const response = await axios.get(`https://geoapi.qweather.com/v2/city/lookup`, {
      params: {
        location: city,
        key: API_KEY
      }
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;