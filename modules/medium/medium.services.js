const MediumModel = require("./medium.model");

async function getAllMedium(req, res, next) {
    try {
        const result = await MediumModel.find();
        return res.status(200).json({
            success: true,
            message: "Medium fetched successfully!",
            result
        })
    } catch (error) {
        return res.status(200).json({
            success: false,
            message: "Error fetching medium",
            error: error.message
        })
    }
}

// Creata a purpose
async function createAMedium(req, res, next) {
    try {
        const Medium = new MediumModel(req.body);
        const result = await Medium.save();
        return res.status(201).json({
            message: "Medium created successfully",
            success: true,
            result
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error creating medium",
            success: false,
            error: error.message
        })
    }
}


module.exports = {
    getAllMedium,
    createAMedium
};