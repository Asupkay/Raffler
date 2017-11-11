const path = require("path");

const constructorMethod = app => {
    app.use("*", (req, res) => {
        res.render("raffle/form");
    });
};

module.exports = constructorMethod;
