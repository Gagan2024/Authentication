const express = require('express')
const app = express()
const jwt=require('jsonwebtoken')
const Web3=require('web3')
const port = 4000

const web3 = new Web3('https://cloudflare-eth.com/')
const jwtSceret='secret value'

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})