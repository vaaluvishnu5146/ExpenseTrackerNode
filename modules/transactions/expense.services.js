const { decodedToken } = require("../../utils");
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

async function updateAExpenseById(req, res, next) {
    try {
        const { expenseId } = req.params;

        if(!expenseId) {
            return res.status(400).json({
                success: false,
                message: "Expense id is missing"
            });
        }

        const token = decodedToken(req.headers['authorization']);

        if(!token) {
            return res.status(401).json({
                success: false,
                message: "Un authorized access"
            });
        }

        console.log(expenseId, token.uId);

        const response = await ExpenseModel.findOneAndUpdate({ _id: new m.Types.ObjectId(expenseId), user: new m.Types.ObjectId(token.uId) }, req.body, { new: true });

        if(!response) {
            return res.status(400).json({
                success: false,
                error: "Unauthorized access",
            });
        }

        return res.status(201).json({
            success: true,
            message: "Expense updated successfully",
            result: response
        });


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error
        });
    }
}

async function deleteAExpenseById() {
    
}


module.exports = {
    createAExpense,
    fetchAllExpenses,
    updateAExpenseById
};