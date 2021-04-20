const URL = 'https://api.nasa.gov/planetary/apod?api_key=2XLVBt8SC09b9rI2nxK0qwhhGw9kCt1e9ZoTaJc9'
const newUrl = "http://localhost:3000/images/"

fetch(URL)
.then(res => res.json())
.then(handleData => handleData)

function renderNASA()