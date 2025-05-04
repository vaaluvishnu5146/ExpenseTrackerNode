const { createAccount } = require('./authentication.services');

const AuthenticationRouter = require('express').Router();

// Creating account
// 1. Check whether account already exists
// 2. Try to create the account
AuthenticationRouter.post('/createAccount', createAccount)

module.exports = AuthenticationRouter;