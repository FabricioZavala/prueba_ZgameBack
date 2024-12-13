const mongoose = require("mongoose");

const BetSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", },
    eventId: { type: String, },
    eventName: { type: String, },
    selectedOutcomeName: { type: String, },
    odds: { type: Number, },
    stake: { type: Number, },
    potentialWin: { type: Number, },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bet", BetSchema);
