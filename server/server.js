const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const app = express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('hello')
})

app.get('/:userInput', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    const { userInput } = req.params
    axios.get(`http://${userInput}/ads.txt`)
        .then(response => {
            res.json(response.data)
        })
        .catch(error => {
            console.log(error)
        })
})



app.listen(5000, () => {
    console.log('Server is listening')
})