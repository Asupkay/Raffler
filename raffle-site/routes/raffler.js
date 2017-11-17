const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    res.render("raffle/form", {raffleWinner: "Success"});
});

module.exports = router;
