const express = require('express')
const router = express.Router()
const axios = require('axios')
const getDomains = require('../controllers/getDomains')

router.get('/getAds', async (req, res) => {
    const { website } = req.query
    try {
        const response = await axios.get(`https://${website}/ads.txt`)
        const domains = getDomains(response)
        res.json(domains)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
})

module.exports = router