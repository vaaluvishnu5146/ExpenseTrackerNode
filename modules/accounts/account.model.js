const m = require('mongoose');

const address = m.Schema({
    addressLine1: { type: String, required: false },
    addressLine2: { type: String, required: false },
    town: { type: String, required: false },
    city: { type: String, required: false },
    state: { type: String, required: false },
    country: { type: String, required: false },
    zip: { type: Number, required: false }
});

const AccountSchema = m.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    contactnumber: { type: String, required: true },
    password: { type: String, required: true },
    address: {
        type: [address],
        default: []
    },
    role: { type: String, enum: ["admin", "user"], default: "user" }
}, { timestamps: true });

const AccountModel = m.model('accounts', AccountSchema);

module.exports = AccountModel;