import axios from 'axios'

const sendCommand = async (path, button) => {
  await axios.post(`http://10.0.0.162:5000/api/`, { path, button })
  .then(res => console.log(res))
  .catch(error => console.error(error.message))
}

export default sendCommand