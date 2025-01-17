const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://jayantguru:mvbzCxZO4B7itHkP@cluster0.v5mjkad.mongodb.net/paytm');
mongoose.connect('mongodb://localhost:27017/paytm');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxlength: 40
    },

    password: {
        type: String,
        required: true,
        minLength: 6
    },

    firstName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },

    lastName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
})

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    balance: {
        type: Number,
        required: true,
    },
});

const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account', accountSchema);

module.exports = {
    User,
    Account,
}