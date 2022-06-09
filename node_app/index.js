const http = require('http');
const axios = require('axios');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

axios
    .get('http://127.0.0.1:8000')
    .then(res => {
        // console.log(`statusCode: ${res.status}`);
        console.log(res.data);
    })
    .catch(error => {
        console.error(error);
    });