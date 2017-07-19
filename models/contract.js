var mongoose = require('mongoose')
var Schema = mongoose.Schema
var contractSchema = new Schema({
    id: Schema.Types.ObjectId,
    date: Schema.Types.Date,
    user_id: Schema.Types.String,
    type: Schema.Types.String,
    amount: Schema.Types.Number,
    approved: Schema.Types.String,
    processed: Schema.Types.String,
    namespace: Schema.Types.Mixed
})
module.exports = mongoose.model('contract', contractSchema)
