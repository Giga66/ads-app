const express = require('express')
const router = express.Router()
const axios = require('axios')
const parseDomains = require('../controllers/parseDomains')

router.get('/getAds', async (req, res) => {
    const { website } = req.query

    try {
        const websiteResponse = await axios.get(`https://${website}/ads.txt`)
        const domains = parseDomains(websiteResponse.data)

        if (!domains || Object.entries(domains).length === 0) {
            return res.status(200).json({message: `No ads.txt file`})
        }

        res.json(domains)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router