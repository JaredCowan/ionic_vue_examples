'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  SENTRY_URI_KEY: '"replaceThis"',
  SENTRY_PROJECT_ID: '"000"',
  GOOGLE_ANALYTICS_TOKEN: '"000"'
})
