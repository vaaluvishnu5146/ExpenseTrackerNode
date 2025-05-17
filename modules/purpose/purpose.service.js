const PurposeModel = require("./purpose.model");

// Get all the pupose
async function getAllPurpose(req, res, next) {
    const { purposeId } = req.params;
    try {
        const result = await PurposeModel.find(purposeId? { _id: purposeId } : {});
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

// Update a purppose
async function updateAPurpose(req, res, next) {
    try {
        const { purposeId } = req.params;
        if(!purposeId) {
            return res.status(400).json({
                success: false,
                message: "Purpose Id is missing"
            })
        }
        const response = await PurposeModel.findOneAndUpdate({ _id: purposeId }, req.body, { new: true });
        return res.status(201).json({
            success: true,
            message: "Response update successfully",
            result: response
        })
    } catch (error) {
        return res.status(500).json({
                success: false,
                message: "Something went wrong",
                error
            })
    }
}

// Delete a purpose
async function deleteAPurpose(req, res, next) {
    try {
        const { purposeId } = req.params;
        if(!purposeId) {
            return res.status(400).json({
                success: false,
                message: "Purpose Id is missing"
            })
        }
        const response = await PurposeModel.findOneAndDelete({ _id: purposeId });
        return res.status(201).json({
            success: true,
            message: "Response deleted successfully",
            result: response
        })
    } catch (error) {
        return res.status(500).json({
                success: false,
                message: "Something went wrong",
                error
            })
    }
}

module.exports = {
    getAllPurpose,
    createAPurpose,
    updateAPurpose,
    deleteAPurpose
};