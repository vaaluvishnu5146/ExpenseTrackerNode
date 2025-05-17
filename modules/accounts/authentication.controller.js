const { createAccount, login } = require('./authentication.services');

const AuthenticationRouter = require('express').Router();

// Creating account
// 1. Check whether account already exists
// 2. Try to create the account
AuthenticationRouter.post('/createAccount', createAccount)

// Login account
// 1. Check whether given information is valid
// 2. Check whether the user email is associated with DB
// 3. Check whether the password is associated with the correct account
AuthenticationRouter.post('/login', login)

module.exports = AuthenticationRouter;