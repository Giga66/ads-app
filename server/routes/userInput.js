const express = require('express')
const router = express.Router()
const axios = require('axios')
const getDomains = require('../controllers/getDomains')

router.get('/getAds', async (req, res) => {
    const { website } = req.query
    try {
        const response = await axios.get(`https://${website}/ads.txt`)
        getDomains(response)
        res.json(response.data)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router