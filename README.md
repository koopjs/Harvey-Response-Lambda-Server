# Harvey-Response-Lambda-Server
## Installation
1. Install Claudia JS: https://claudiajs.com/tutorials/installing.html
2. `npm i`

## Plugins Installed
- Google Sheets Provider
- GeoServices Output
- WFS Output

## Local Development
- `DEPLOY=dev node server.js`

## Environment Variables
- `GOOGLESHEETS_AUTH`: Get from the Google Cloud Console. Must be set for Google Sheets provider to function

## Deployment
- `./create.sh`: creates new lambda function and api gateway
- `./update.sh`: updates the lamda function
