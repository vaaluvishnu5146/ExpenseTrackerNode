const { createAExpense, fetchAllExpenses, updateAExpenseById } = require('./expense.services');

const ExpenseRouter = require('express').Router();

// Create a Expenses
ExpenseRouter.post('/create', createAExpense)
// Get all Expense
ExpenseRouter.get('/', fetchAllExpenses)
// Get all expense for a userId
ExpenseRouter.get('/:userId', fetchAllExpenses)
// Get a Expense by id
// Update a Expense by id
ExpenseRouter.patch('/update/:expenseId', updateAExpenseById)

// Delete a Expense by id
ExpenseRouter.delete('/:expenseId', fetchAllExpenses)

module.exports = ExpenseRouter;