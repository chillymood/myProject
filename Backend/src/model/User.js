//User Model
const mongoose = require('../db/db')

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,//必須
        unique: true,//唯一 不可重複
    },
    password: String,
    age: Number,
    city: String,
    gender: {
        type: Number,
        default:0 //0保密  1男 2女
    },
},
    {timestamps:true} //時間戳
)

const User = mongoose.model('user', UserSchema)

module.exports = User