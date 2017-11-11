/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.randomGET = function randomGET (req, res) {
    let emails = req.body.emails;
    console.log(emails);
    let randomEmail = getRandomEmail(emails);
    console.log(randomEmail);
    res.send(randomEmail);
};

let getRandomEmail = (emails) => {
    let emailArray = emails.split(' ');
    console.log(emailArray);
    let randomIndex = Math.floor(Math.random() * emailArray.length);
    console.log(randomIndex);

    return emailArray[randomIndex];
}
