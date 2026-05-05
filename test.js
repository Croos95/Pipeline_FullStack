const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/products',
  method: 'GET'
};

const req = http.request(options, res => {
    if (res.statusCode === 400 || res.statusCode === 401 || res.statusCode === 403) {
        console.log("Test Ok (La api se protege con autenticación)");
        process.exit(0);
    }else{
        console.log("Test Falla");
        process.exit(1);
    }
});

req.on('error', error => {
  console.error(error);
  process.exit(1);
});

req.end();