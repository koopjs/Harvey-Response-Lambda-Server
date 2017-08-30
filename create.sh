#!/bin/bash
claudia create --name koop-harvey-google-sheets --handler lambda.handler --deploy-proxy-api --region us-east-1 --set-env KOOP_PORT=80,GOOGLESHEETS_AUTH=$GOOGLESHEETS_AUTH
