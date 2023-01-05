const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const path = require('path')
const port = process.env.PORT || 5000

const userInputRouter = require('./routes/getAds')


app.use(express.static(path.resolve(__dirname, '../client/build')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())


app.use(userInputRouter)


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})