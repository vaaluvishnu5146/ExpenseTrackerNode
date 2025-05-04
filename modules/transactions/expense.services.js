const ExpenseModel = require("./expense.model");

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

module.exports = {
    createAExpense
};