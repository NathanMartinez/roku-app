import axios from 'axios'

 async function sendKeypress(button) {
  await axios.post('http://10.0.0.32:5000/api', { button: button })
}

const queries = {
  sendKeypress
}

export default queries;