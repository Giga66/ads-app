const express = require('express')
const router = express.Router()
const axios = require('axios')
const makeArray = require('../controllers/makeArray')

router.get('/getAds', async (req, res) => {
    const { website } = req.query
    try {
        const response = await axios.get(`https://${website}/ads.txt`)
        res.json(response.data)
        makeArray(response)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router