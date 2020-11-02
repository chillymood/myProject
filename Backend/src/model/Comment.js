const mongoose = require('../db/db')
//Comment Model

const moogoose = require('../db/db')
const CommentSchema = moogoose.Schema({
    content: {
        type: String,
        require:true //必須
    },
    title: {
        type: String,
        require:true //必須
    },
    imageUrl: String,
    username: String
}, {
    timestamps: true //時間戳
})

const Coment = mongoose.model("comment", CommentSchema)

module.exports = Coment