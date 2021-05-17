const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

async function sendCommand(path, button) {
  await axios({
    method: 'post',
    url: `http://10.0.0.243:8060/${path}/${button}`,
    data: ''
  })
}

app.post('/api', async (req, res) => {
  await sendCommand(req.body.path, req.body.button)
  .catch(error => res.send(error))
})

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})