const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  dueDate: {
    type: Date,
    require: true,
  },
  status: {
    type: Boolean,
    require: true,
  },
});

module.exports = mongoose.model("task", taskSchema);
