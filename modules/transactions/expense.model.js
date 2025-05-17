const m = require('mongoose');

const ExpenseSchema = m.Schema({
    title: { type: String, required: false },
    description: { type: String, required: false },
    purpose: { type: m.Types.ObjectId, required: true },
    medium: { type: m.Types.ObjectId, required: false },
    type: { type: String, required: true, enum: ['credit', 'debit'] },
    amount: { type: Number, required: [true, 'Required field'] },
    user: { type: m.Types.ObjectId, required: true }
}, { timestamps: true });

const ExpenseModel = m.model('expense', ExpenseSchema);

module.exports = ExpenseModel;