const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

const sendButtonClick = async (button) => {
  return await axios({
    method: 'post',
    url: `http://10.0.0.243:8060/keypress/${button}`,
    data: ''
  })
}

app.post('/api', (req, res) => {
  sendButtonClick(req.body.button)
  res.send('Command sent!')
})

app.get('/api', (req, res) => {
  res.send('Command sent!')
})

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})