const Koop = require('koop')
const wfs = require('@koopjs/output-wfs')
const googleSheets = require('@koopjs/provider-google-sheets')
const config = require('config')

const koop = new Koop()
koop.register(wfs)
koop.register(googleSheets)

var env = Object.create( process.env );
console.log("Env", env.DEPLOY)

// Run locally: DEPLOY=dev node server.js
if(env.DEPLOY == "dev") {
  koop.server.listen(1337)
} else {
  module.exports = koop.server
}
