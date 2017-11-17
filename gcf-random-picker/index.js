/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.randomGET = function randomGET (req, res) {
    let emails = req.body.emails;
    let randomEmail = getRandomEmail(emails);
    res.send(randomEmail);
};

let getRandomEmail = (emails) => {
    let emailArray = emails.split('\n');
    let randomIndex = Math.floor(Math.random() * emailArray.length);

    return emailArray[randomIndex];
}
