const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const { Schema } = mongoose;

const UserSchema = new Schema(
    {
        _id: { type: String, default: uuidv4 },
        name: String,
        birth: Date,
        email: String,
        status: Number,
        password: String,
        address: {
            street: String,
            complement: String,
            city: String,
            state: String,
            country: String,
        }
    }, {
    timestamps: {}
}
)

module.exports = new mongoose.model("User", UserSchema);