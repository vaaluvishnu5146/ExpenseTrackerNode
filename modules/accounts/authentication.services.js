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

module.exports = {
    createAccount
};