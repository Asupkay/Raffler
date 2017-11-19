const express = require("express");
const https = require('https');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post("/", (req, res) => {
    //Grab the emails and emailto from req
    let emails = req.body.emails;
    let emailTo = req.body.emailTo;

    //Check if the email is valid if it is run the send emails list to email
    if(validateEmail(emailTo)) {
        sendEmailsToEmail(emails, emailTo);
    }

    //Put the emails into JSON format
    let data = JSON.stringify({emails: emails});

    //Set up the options for hitting the serverless function
    const options = {
        host: 'us-central1-raffler-185618.cloudfunctions.net',
        path: '/randomGET',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(data)
        }
        
    };

    //Set up http request function callback
    var req = https.request(options, function(resT) {
        resT.setEncoding('utf-8');
        let fullRes = "";
        resT.on('data', function (chunk) {
            fullRes += chunk;
        });
        resT.on('end', function() {
            let winner = encodeURIComponent(fullRes);
            res.redirect('/?winner=' + winner + '&emails=' + emails + '&emailTo=' + emailTo);
        });
    });

    //Run the http request and close it
    req.write(data);
    req.end();    
});

//Use nodemailer to send an email
function sendEmailsToEmail(emails, emailTo) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',

        //The two variables here are environment variables for the randomRaffler email
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_VARI
        }
    });

    var mailOptions = {
        from: process.env.EMAIL_USER,
        to: emailTo,
        subject: 'Emails from Google Cloud',
        text: emails
    };

    //Send the actual mail
    transporter.sendMail(mailOptions, function(error, info){
        if(error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}


//A function to make sure the string is a valid email
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

module.exports = router;
