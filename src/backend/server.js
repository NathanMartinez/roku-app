const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()
const port = 3030

app.use(cors())

const sendButtonClick = async () => {
  return await axios({
    method: 'post',
    url: 'http://10.0.0.243:8060/keypress/VolumeUp',
    data: ''
  })
}

app.post('/button', (req, res) => {
  sendButtonClick()
  console.log(req)
  // res.send('Command sent!')
})

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})