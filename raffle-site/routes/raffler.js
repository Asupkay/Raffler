const express = require("express");
const https = require('https');
const router = express.Router();

router.post("/", (req, res) => {
    let emails = req.body.emails;

    console.log(process.env.EMAIL_VARI);

    let data = JSON.stringify({emails: emails});

    const options = {
        host: 'us-central1-raffler-185618.cloudfunctions.net',
        path: '/randomGET',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(data)
        }
        
    };

    var req = https.request(options, function(resT) {
        resT.setEncoding('utf-8');
        let fullRes = "";
        resT.on('data', function (chunk) {
            fullRes += chunk;
        });
        resT.on('end', function() {
            let winner = encodeURIComponent(fullRes);
            res.redirect('/?winner=' + winner + '&emails=' + emails);
        });
    });

    req.write(data);
    req.end();    
});

module.exports = router;
