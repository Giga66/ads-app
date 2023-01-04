const express = require('express')
const router = express.Router()
const axios = require('axios')
const parseDomains = require('../controllers/parseDomains')
var cacheService = require("express-api-cache");
var cache = cacheService.cache;

router.get('/getAds', cache('5 minutes'), async (req, res) => {
    const { website } = req.query

    try {
        const websiteResponse = await axios.get(`https://${website}/ads.txt`)
        const domains = parseDomains(websiteResponse.data)

        if (!domains || Object.entries(domains).length === 0) {
            return res.status(404).send({ error: 'No ads.txt file' })
        }

        res.json(domains)
    } catch (error) {
        res.status(error?.status || 500).json({ error: 'Failed to parse Ads.txt'})
    }
})

module.exports = router