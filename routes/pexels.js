const express = require('express');
const axios = require('axios');
const router = express.Router();

const PEXELS_API_KEY = process.env.PEXELS_KEY;
router.get('/', async (req, res) => {
  const { page } = req.query;
  try {
    const response = await axios.get(`https://api.pexels.com/v1/curated?page=${page}`, {
      headers: {
        Authorization: PEXELS_API_KEY
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from Pexels API:', error);
    res.status(error.response.status || 500).json({ error: error.message });
  }
});

module.exports = router;
