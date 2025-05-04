const { createAExpense } = require('./expense.services');

const ExpenseRouter = require('express').Router();

// Create a Transactions
ExpenseRouter.post('/create', createAExpense)
// Get all transactions
// Get a transaction by id
// Update a transaction by id
// Delete a transaction by id

module.exports = ExpenseRouter;