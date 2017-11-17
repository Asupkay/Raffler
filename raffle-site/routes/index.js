const rafflerRoutes = require("./raffler");

const constructorMethod = app => {
    app.use("/raffler", rafflerRoutes);

    app.use("/", (req, res) => {
        res.render("raffle/form");
    });
};

module.exports = constructorMethod;
