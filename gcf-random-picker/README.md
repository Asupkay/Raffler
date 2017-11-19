# The Raffler

**Description:** This is the Google Cloud Platform serverless function. It is used to recieve an https request parse the body for all the emails in the body and to pick a random one. Usually you would not use a serverless function for something as simple as this. The reason it is done this way is for demonstration purposes

## Notes

If you choose to host this function you will have to change where the raffle-site points to hit the function in the route is 'raffle.js'
