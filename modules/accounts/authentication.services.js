const { createSignedToken } = require("../../utils");
const AccountModel = require("./account.model");

async function createAccount(req, res, next) {
    
    try {
        if (!req.body.email) {
            throw new Error("Email is a required field");
        }
        const matchingUser = await AccountModel.find({ email: req.body.email }); // [{}, {}]
        if (matchingUser.length > 0) {
            return res.status(400).json({
                message: "User account already exists. Login instead!",
                success: false
            })
        }
        const account = new AccountModel(req.body);
        const result = await account.save();
        if (result) {
            return res.status(201).json({
                message: "User account created successfully!",
                success: true
            })
        } else {
            throw new Error("Account creation failed!")
        }
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            success: false,
            error: error.message
        })
    }
}

async function login(req, res, next) {
    try {
        if (!req.body.email) {
            throw new Error("Email is a required field");
        }

        const matchingUser = await AccountModel.findOne({ email: req.body.email }); // {} or null

        if(!matchingUser) {
            return res.status(404).json({
                message: "Account doesnt exists",
                success: false
            });
        }

        if(!(req.body.password === matchingUser.password)) {
            return res.status(400).json({
                message: "Bad credentials",
                success: false
            });
        }

        // Create a token and attach it with response body
        return res.status(200).json({
            success: true,
            message: "Signin successfull",
            token: createSignedToken({ uId: matchingUser._id, role: matchingUser.role })
        })

    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            success: false,
            error: error.message
        })
    }
}

module.exports = {
    createAccount,
    login
};