const mongoose = require("mongoose");

const { Schema } = mongoose;

const orderSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
