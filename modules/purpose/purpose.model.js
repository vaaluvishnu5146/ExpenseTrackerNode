const m = require('mongoose');

const PurposeSchema = m.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
}, { timestamps: true });

const PurposeModel = m.model("purpose", PurposeSchema);

module.exports = PurposeModel;