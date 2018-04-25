const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workorderSchema = new Schema({
  subject: String,
  submitter: String,
  status: String,
  details: String
});

const WorkOrder = mongoose.model('WorkOrder', workorderSchema);

module.exports = WorkOrder;
