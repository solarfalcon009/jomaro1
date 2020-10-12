const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.get('/', (req, res) => {
  res.render('index2', { title: 'First Web Node' });
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Page' });
});

router.post('/send-email',(req, res) => {
  const {name,companyname,email,phone,message} = req.body
  contentHTML = `
       <h1>User Information</h1>
       <ul>
           <li>name: ${name}</li>
           <li>companyname: ${companyname}</li>
           <li>email: ${email}</li>
           <li>phone: ${phone}</li>
       </ul>
       <p>${message}</p>
   `;
  res.send("recived");
  });


module.exports = router;
