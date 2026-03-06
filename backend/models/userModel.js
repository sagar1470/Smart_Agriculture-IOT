import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstName: { type: String, default: null },
    lastName: { type: String, default: null },
    email: { type: String, required: true, unique: true },
    emailVerified: { type: Date, required: true, default: null },
    currency: { type: String, default: "USD" }
}, {
    timestamps: true
})

const UserModel = mongoose.models.user || mongoose.model('user', userSchema)

export default UserModel