var paypal = require('paypal-rest-sdk');
const express = require('express')
const app = express()
const port = 3000

app.get('/hari', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))