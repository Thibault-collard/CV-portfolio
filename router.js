var express = require('express');
var router = express.Router();
require('dotenv').config()

const sgMail = require('@sendgrid/mail');
console.log(process.env.SENDGRID_API_KEY)
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.get('/api/test', function (req,res){
  res.send('lol')
})
router.post('/api/sendEmail', function(req, res) {
  const msg = {
    to: req.body.email,
    from: 'thibault.collard@gmail.com',
    subject: `${req.body.name} sent you a message on your website`,
    text: req.body.message,
  };
  sgMail
  .send(msg)
  .then((response) => {
    if(response[0].statusCode){
      res.send(response)
    }
  })
  .catch((error) => {
    console.error(error.response.data);
  })
})

module.exports = router;
