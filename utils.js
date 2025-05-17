const jwt = require("jsonwebtoken");
const SECRET_KEY = 'ABCD_EXPENSE_TRACKER_EFGH';

function createSignedToken(payload) {
    return jwt.sign({...payload}, SECRET_KEY, {
        algorithm: "HS256",
        expiresIn: "1h"
    });
}

function decodedToken(payload) {
    return jwt.decode(payload);
}

module.exports = {
    createSignedToken,
    SECRET_KEY,
    decodedToken
};