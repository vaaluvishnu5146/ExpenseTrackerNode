const ExpenseModel = require("./expense.model");
const m = require('mongoose');

async function createAExpense(req, res, next) {
    try {
        const Expense = new ExpenseModel(req.body);
        const result = await Expense.save();
        return res.status(200).json({
            success: true,
            message: "Expense completed successfully",
            result
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Expense creation failed",
            error: error.message
        });
    }
}

async function fetchAllExpenses(req, res, next) {
    const { userId } = req.params;
    try {
        const result = await ExpenseModel.find(userId ? { user: new m.Types.ObjectId(userId) } : {});
        return res.status(200).json({
            success: true,
            message: "Expense fetched successfully",
            result
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Expense fetching failed",
            error: error.message
        });
    }
}

module.exports = {
    createAExpense,
    fetchAllExpenses
};