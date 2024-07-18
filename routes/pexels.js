const express = require('express');
const axios = require('axios');
const router = express.Router();

const PEXELS_API_KEY = process.env.PEXELS_KEY;
/**
 * @swagger
 * /wallpapers?page=1:
 *   get:
 *     summary: 获取壁纸
 *     description: 获取壁纸接口
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         required: true
 *         description: 页数
 *     responses:
 *       '200':
 *         description: 成功获取壁纸
 */
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
