import React from 'react'

export default function DirectionalButtons() {
  // Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/xml'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

const handleClick = () => {
  postData('/button', { test: 'test' })
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
}

  // curl -d '' "http://$ROKU_DEV_TARGET:8060/keypress/${}"
  return (
    <div>
      <button onClick={handleClick}>Up</button>
      <button>Right</button>
      <button>Down</button>
      <button>Left</button>
    </div>
  )
}
