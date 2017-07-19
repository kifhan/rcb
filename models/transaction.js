var mongoose = require('mongoose')
var Schema = mongoose.Schema
var transactionSchema = new Schema({
    id: Schema.Types.ObjectId,
    date: Schema.Types.Date,
    sending_account_id: Schema.Types.String,
    receiving_account_id: Schema.Types.String,
    amount: Schema.Types.Number,
    handshake: Schema.Types.String,
    namespace: Schema.Types.Mixed
})
module.exports = mongoose.model('transaction', transactionSchema)
