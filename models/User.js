const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    displayName: String,
    email: String,
    password: String,
    joinDate: Date
});

const User = mongoose.model('users', UserSchema);

// ./index.js is handling the exports
module.exports = User;

// from stackoverflow
// var userSchema = new Schema({
//     twittername: String,
//     twitterID: Number,
//     displayName: String,
//     profilePic: String,
// });

// var  User = mongoose.model('User')


// /* USERS */
// /* 1 */
// {
//     "_id" : ObjectId("5ec2c3bd74eb1c1a41714151"),
//     "username" : "hello_me_hi",
//     "password" : "123"
// }