const { createJWT, isTokenValid, attachCookiesToResponse } = require('./jwt')
const createTokenUser = require('./createTokenUser')
const checkPermissions = require('./checkPermissions')
const sendVerificationEMail = require('./sendVerificationEmail')
const sendResetPasswordEMail = require('./sendResetPasswordEmail')
const createHash = require('./createHash')

module.exports = {
  createJWT,
  isTokenValid,
  attachCookiesToResponse,
  createTokenUser,
  checkPermissions,
  sendVerificationEMail,
  sendResetPasswordEMail,
  createHash,
}
