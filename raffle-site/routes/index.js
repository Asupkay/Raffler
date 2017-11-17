const rafflerRoutes = require("./raffler");

const constructorMethod = app => {
    app.use("/raffler", rafflerRoutes);

    app.get('/', (req, res) => {
        let winner = "";
        let emails = "";
        if(req.query.winner)
            winner = decodeURIComponent(req.query.winner);
        if(req.query.emails)
            emails = decodeURIComponent(req.query.emails);
        res.render("raffle/form", {raffleWinner: winner, emails: emails});
    });

    app.use('*', (req, res) => {
        res.json({ error: "not a valid route" });
    });
};

module.exports = constructorMethod;
