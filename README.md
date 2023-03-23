# Project starter

## Getting Started
Setting up the Google Doc

1. Create a new Google Doc by copying the [content from this file](https://docs.google.com/document/d/1JVgKtEPUdLLqzicXy20eEMH3JnWJ5-MDzD6jqAqqQkI/edit).
2. Share the newly created doc with `divtagguywebsite@thedivtagguy.iam.gserviceaccount.com` (or whatever your service account is, if you don't have one read below).
3. Add the Google Doc ID to the google.json file.

## Configuring the package.json

1. Include your project name. Same as your website url without the domain name.
2. Homepage URL should be equal to your Netlify URL for staging deployment. IMPORTANT.
3. Subdirectory URL for your main website.

## Get your keys

1. Generate a Google Drive API key [using the console](https://console.cloud.google.com/apis/credentials)
2. Create a service account on the same page.
3. Download the keys for the service account [here](https://console.cloud.google.com/iam-admin/serviceaccounts/)

## Setting up the .env file

Create a new .env file and add the following details:

    GOOGLE_APPLICATION_CREDENTIALS = 'C:/Users/LENOVO/Documents/website/keys.json'
    GCLOUD_PROJECT = 'thedivtagguy'

Your document is now set up and ready to go!

## Developing

Run npm run dev to start the development server.

## Netlify

1. Build command: npm run build
2. Build directory: dist/cdn
