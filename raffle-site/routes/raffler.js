const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    var winner = encodeURIComponent('Success');
    res.redirect('/?winner=' + winner + '&emails=' + req.body.emails);
});

module.exports = router;
