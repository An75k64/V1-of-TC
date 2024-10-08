const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  type: { type: String, required: true }, // e.g., 'company', 'college', 'student', 'contact'
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  read: { type: Boolean, default: false },
});

module.exports = mongoose.model("Notification", notificationSchema);
