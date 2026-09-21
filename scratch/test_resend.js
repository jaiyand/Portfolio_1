const http = require('http');

const data = JSON.stringify({
  name: "Recruiter Test",
  email: "test.recruiter@example.com",
  subject: "Software Developer Role Opportunity",
  message: "Hi Jaiyand, I reviewed your portfolio and would like to connect regarding a full-stack developer role."
});

const req = http.request({
  hostname: 'localhost',
  port: 3001,
  path: '/api/contact',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data)
  }
}, (res) => {
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', () => {
    console.log('HTTP Status Code:', res.statusCode);
    console.log('Response Body:', body);
  });
});

req.on('error', (e) => {
  console.error('Request Error:', e);
});

req.write(data);
req.end();
