const express = require("express");
const https = require('https');
const router = express.Router();

router.post("/", (req, res) => {
    let data = JSON.stringify({emails: req.body.emails});

    var options = {
        host: 'us-central1-raffler-185618.cloudfunctions.net',
        path: '/randomGET',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(data)
        }
        
    };

   var req = https.request(options, function(res) {
        res.setEncoding('utf-8');
        res.on('data', function (chunk) {
            console.log("body: " + chunk);
        });
    });

    req.write(data);
    req.end();    

    //var winner = encodeURIComponent('Success');
    //res.redirect('/?winner=' + winner + '&emails=' + );
});

module.exports = router;
