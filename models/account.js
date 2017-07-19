var mongoose = require('mongoose')
var Schema = mongoose.Schema
var accountSchema = new Schema({
    id: Schema.Types.ObjectId,
    owner: Schema.Types.String,
    deposit: Schema.Types.Number,
    namespace: Schema.Types.Mixed
})
module.exports = mongoose.model('account', accountSchema)
