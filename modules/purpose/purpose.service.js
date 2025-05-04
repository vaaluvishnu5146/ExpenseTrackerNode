const PurposeModel = require("./purpose.model");

// Get all the pupose
async function getAllPurpose(req, res, next) {
    // const Purpose = new PurposeModel();
    try {
        const result = await PurposeModel.find();
        return res.status(200).json({
            success: true,
            message: "Purpose fetched successfully",
            result
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error fetching purpose",
            error: error.message
        })
    }
}

// Creata a purpose
async function createAPurpose(req, res, next) {
    try {
        const Purpose = new PurposeModel(req.body);
        const result = await Purpose.save();
        return res.status(201).json({
            message: "Purpose created successfully",
            success: true,
            result
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error creating purpose",
            success: false,
            error: error.message
        })
    }
}

module.exports = {
    getAllPurpose,
    createAPurpose
};