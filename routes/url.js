const express = require('express');
const router = express.Router();
const { shortUrl } = require('../services/shortUrlService')

router.post('/', shortUrl);

module.exports = router;