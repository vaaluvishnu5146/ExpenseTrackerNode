const { createAExpense, fetchAllExpenses } = require('./expense.services');

const ExpenseRouter = require('express').Router();

// Create a Transactions
ExpenseRouter.post('/create', createAExpense)
// Get all Expense
ExpenseRouter.get('/', fetchAllExpenses)
// Get all expense for a userId
ExpenseRouter.get('/:userId', fetchAllExpenses)
// Get a transaction by id
// Update a transaction by id
// Delete a transaction by id

module.exports = ExpenseRouter;