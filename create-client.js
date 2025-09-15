// Script to create an admin user
const https = require('http');

const adminData = {
  name: "Shammo Faiyaz Ahmed",
  email: "shammo@chromeaccountants.com.au", 
  password: "caclient1234",
  type: "client"
};

const postData = JSON.stringify(adminData);

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/users/signup',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = https.request(options, (res) => {
  console.log(`Status: ${res.statusCode}`);
  console.log(`Headers: ${JSON.stringify(res.headers)}`);
  
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log('Response:', data);
    if (res.statusCode === 201) {
      console.log('✅ client user created successfully!');
      console.log('Email :', {email});
      console.log('Password :', {password});
    } else {
      console.log('❌ Failed to create client user');
    }
  });
});

req.on('error', (e) => {
  console.error(`Problem with request: ${e.message}`);
});

req.write(postData);
req.end();
