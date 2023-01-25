# Project starter

## Getting Started
Setting up the Google Doc

1. Create a new Google Doc by copying the [content from this file](https://docs.google.com/document/d/1JVgKtEPUdLLqzicXy20eEMH3JnWJ5-MDzD6jqAqqQkI/edit).
2. Share the newly created doc with divtagguywebsite@thedivtagguy.iam.gserviceaccount.com
3. Add the Google Doc ID to the google.json file.

## Configuring the package.json

1. Include your project name
2. Homepage URL should be equal to your Netlify URL for staging deployment.
3. Subdirectory URL for your main website.

## Setting up the .env file

Create a new .env file and add the following details:

    GOOGLE_APPLICATION_CREDENTIALS = 'C:/Users/LENOVO/Documents/website/keys.json'
    GCLOUD_PROJECT = 'thedivtagguy'

Your document is now set up and ready to go!

## Developing

Run npm run dev to start the development server.
