const sendMailsetup =  (name, email, resultsLink, submissionLink) => {
  const mailgun = require("mailgun-js");
  const DOMAIN = 'sandboxa740530eef4d487da705faf4807a37b9.mailgun.org';
  const api_key = process.env.API_KEY;
  const mg = mailgun({apiKey: api_key, domain: DOMAIN});




  const data = {
   from: 'Decision Maker <testlhlcompass@gmail.com>',
   to: email,
   subject: `Hey ${name}! your poll info is here`,
   html:`
      <html>
      <body>
        <h2>Poll Results</h2>
        <p>Here are your poll results: <a href="${resultsLink}">here</a></p>
        <br>
        <h2>Poll Share</h2>
        <p>Share your Poll with Friends! <a href="${submissionLink}">here</a></p>
      </body>
    </html>`
  };

  mg.messages().send(data, function (error, body) {
    if (error) {
      console.log(error)
    }
   console.log(body);
  });

  }

  const sendMailvoted =  (name, email, resultsLink, submissionLink) => {
    const mailgun = require("mailgun-js");
    const DOMAIN = 'sandboxa740530eef4d487da705faf4807a37b9.mailgun.org';
    const api_key = process.env.API_KEY;
    const mg = mailgun({apiKey: api_key, domain: DOMAIN});




    const data = {
     from: 'Decision Maker <testlhlcompass@gmail.com>',
     to: email,
     subject: `Hey ${name}! someone voted on your poll`,
     html:`
        <html>
        <body>
          <h2>Poll Results</h2>
          <p>Here are your poll results: <a href="${resultsLink}">here</a></p>
          <br>
          <h2>Poll Share</h2>
          <p>Share your Poll with Friends! <a href="${submissionLink}">here</a></p>
        </body>
      </html>`
    };

    mg.messages().send(data, function (error, body) {
      if (error) {
        console.log(error)
      }
     console.log(body);
    });

    }

  module.exports = {sendMailsetup,sendMailvoted};
