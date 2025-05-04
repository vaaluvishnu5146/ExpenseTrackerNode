const m = require('mongoose');

const MediumSchema = m.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
}, { timestamps: true });

const MediumModel = m.model("medium", MediumSchema);

module.exports = MediumModel;