# The Raffler

**Description:** This is the Google Cloud Function. It is used to recieve an HTTPS POST request, parse the body for all the emails, and pick a random one which it puts into a response. 

## Notes

* Usually you would not use a serverless function for something as simple as this. The reason it is done this way is for demonstration purposes.

* If you choose to host this function you will have to change where the raffle-site points to hit the function this is located in the route file 'raffle.js'
