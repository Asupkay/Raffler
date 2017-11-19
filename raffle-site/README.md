# The Raffler

**Description:** This is a node express server utilizing handlebars that is designed to run on Google Cloud Platform's App Engine. The raffler displays a form where users can put emails into a text area one email per line. There is also an input for an email that if filled will send the text area to the email. When the button is hit is sends the email (if applicable) and then formulates an https request to the google serverless function in the other folder. Once the winner is returned handlebars updates the page and displays the winner.

## Start up

1. First there are two files missing from this repository for security issues (regards to email passwords) they are as follows:
    * **app.yaml** - For configuration for the server here is what it needs to look like:
    ```
    env: flex
    runtime: nodejs
    env_variables:
    EMAIL_VARI: 'Your sender email password here'
    EMAIL_USER: 'Your sender password here'
    skip_files:
    - .env
    ```
    * **.env** - For configuration for the localhost here is what it needs to look like:
    ```
    EMAIL_VARI="Your sender email password here"
    EMAIL_USER="Your sender password here"
    ```

2. Once those two files are set up run `npm install`
3. Run `npm start` to start up a local server
4. Navigate to `localhost:3000`
5. You can then work with the raffler by putting emails one per line in the text area and an email in the email area and press run raffle
6. If you install gcloud sdk you can deploy this app using `gcloud app deploy`
