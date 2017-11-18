const rafflerRoutes = require("./raffler");

const constructorMethod = app => {
    app.use("/raffler", rafflerRoutes);

    app.get('/', (req, res) => {
        let winner = "";
        let emails = "";
        let emailTo = "";
        if(req.query.winner)
            winner = decodeURIComponent(req.query.winner);
        if(req.query.emails)
            emails = decodeURIComponent(req.query.emails);
        if(req.query.emailTo)
            emailTo = decodeURIComponent(req.query.emailTo);
        res.render("raffle/form", {raffleWinner: winner, emails: emails, emailTo: emailTo});
    });

    app.use('*', (req, res) => {
        res.json({ error: "not a valid route" });
    });
};

module.exports = constructorMethod;
