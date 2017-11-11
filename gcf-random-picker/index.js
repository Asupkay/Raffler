/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.randomGET = function randomGET (req, res) {
    let emails = req.body;
    res.send('Hello World!');
};

let getRandomEmail = (emails) => {
    //let emailArray = emails.split('\n');
}
