const rafflerRoutes = require("./raffler");

const constructorMethod = app => {
    app.use("/raffler", rafflerRoutes);

    app.use("/", (req, res) => {
        let winner = "";
        let emails = "";
        if(req.query.winner)
            winner = decodeURIComponent(req.query.winner);
        if(req.query.emails)
            emails = decodeURIComponent(req.query.emails);
        res.render("raffle/form", {raffleWinner: winner, emails: emails});
    });
};

module.exports = constructorMethod;
