// Script to create an admin user
const https = require('http');

const adminData = {
  name: "Admin User",
  email: "admin@chromeaccountants.com.au", 
  password: "admin123456",
  type: "admin"
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
      console.log('✅ Admin user created successfully!');
      console.log('Email: admin@chromeaccountants.com.au');
      console.log('Password: admin123456');
    } else {
      console.log('❌ Failed to create admin user');
    }
  });
});

req.on('error', (e) => {
  console.error(`Problem with request: ${e.message}`);
});

req.write(postData);
req.end();
