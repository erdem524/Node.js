const fetch = require('node-fetch')
const express = require('express')
const app = express()
const port = 3000

const url = 'https://reservation100-sandbox.mxapps.io/api/reservations'
const body = {
  name: 'Enwer Memet',
  numberOfPeople: 5
}

app.get('/', (req, res) => {
  fetch(url, {
    method: 'post',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => res.text())
    .then(text => res.send(text))
    .catch(err => res.send('ooooops', err))
})

app.listen(port, () => console.log(`The port started at ${port}`))
