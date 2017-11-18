const express = require("express");
const app = express();
const static = express.static(__dirname +'/public');
const bodyParser = require("body-parser");
const configRoutes = require("./routes");
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }));
const exphbs = require('express-handlebars');

app.use("/public", static);
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

configRoutes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running on http://localhost:" + PORT);
});
