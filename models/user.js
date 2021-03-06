const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    role: String,
    verified: Boolean,
    email: String,
    verificationCode: Number,
    verificationCodeSentTime: Date,
    registeredModules: [mongoose.Schema({
        moduleCode: mongoose.Types.ObjectId,
        lectureHours: Array,
    }, {_id: false})],
    currentRegistration: {
        semester: Number,
        modules: Array
    }
});

module.exports = mongoose.model('user', userSchema, 'user');
