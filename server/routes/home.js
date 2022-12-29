const express = require('express')
const router = express.Router()
const axios = require('axios')
const getDomains = require('../controllers/getDomains')

router.get('/', async (req, res) => {
    try {
        const response = await axios('msn.com/ads.txt')
        const domains = getDomains(response)
        res.json(domains)
    } catch (error) {
        console.log(error)
    }
})