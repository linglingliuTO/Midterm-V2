const sendMail =  (emailData) => {
  const mailgun = require("mailgun-js");
  const DOMAIN = 'sandboxa740530eef4d487da705faf4807a37b9.mailgun.org';
  const api_key = process.env.API_KEY;
  const mg = mailgun({apiKey: api_key, domain: DOMAIN});
  const data = {
   from: 'Decision Maker <testlhlcompass@gmail.com>',
   to: 'testlhlcompass@gmail.com',
   subject: 'Hello',
   text: emailData
  };
  mg.messages().send(data, function (error, body) {
   console.log(body);
  });

  }

  const testData = 'testing123'
  sendMail(testData);

  module.exports = {sendMail};
