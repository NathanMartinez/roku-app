import axios from "axios";

const sendCommand = async (path, button) => {
  await axios
    .post(`http://10.0.0.207:5050/api/`, { path, button })
    .then((res) => console.log(res))
    .catch((error) => console.error(error.message));
};

export default sendCommand;
