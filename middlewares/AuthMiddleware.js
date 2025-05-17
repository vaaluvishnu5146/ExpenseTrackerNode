const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../utils");

function checkTokenValid(req, res, next) {
    try {
        const token = req.headers['authorization'];
        jwt.verify(token, SECRET_KEY);
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            error: error,
            message: "Token is invalid or expired"
        });
    }
}

async function checkUserIsAdmin(req, res, next) {
    try {
        const token = req.headers['authorization'];
        const decodedToken = jwt.verify(token, SECRET_KEY);
        if(!decodedToken.uId) {
            return res.status(401).json({
                success: false,
                message: "Token is invalid"
            });
        }
        if(!(decodedToken.role === "admin")) {
            return res.status(401).json({
                success: false,
                message: "Un authorized access"
            });
        }
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            error: error,
            message: "Token is invalid or expired"
        });
    }
}

module.exports = {
    checkTokenValid,
    checkUserIsAdmin
};