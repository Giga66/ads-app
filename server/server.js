const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const path = require('path')

const userInputRouter = require('./routes/getAds')


app.use(express.static(path.resolve(__dirname, '../client/build')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())


app.use(userInputRouter)


app.listen(5000, () => {
    console.log('Server is listening')
})