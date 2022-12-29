const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

const userInputRouter = require('./routes/userInput')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())


app.use(userInputRouter)



app.listen(5000, () => {
    console.log('Server is listening')
})