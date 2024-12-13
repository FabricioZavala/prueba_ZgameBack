const mongoose = require("mongoose");

const SportEventSchema = new mongoose.Schema(
  {
    eventId: { type: String,  unique: true },
    sportEventName: { type: String,  },
    scheduled: { type: Date,  },
    competitorHome: {
      name: { type: String,  },
      country: { type: String },
    },
    competitorAway: {
      name: { type: String,  },
      country: { type: String },
    },
    tournament: { name: { type: String,  } },
    eventStatus: { status: { type: String,  } },
    markets: [
      {
        marketId: { type: String,  },
        marketName: { type: String,  },
        outcomes: [
          {
            outcomeId: { type: String,  },
            outcomeName: { type: String,  },
            odds: { type: Number,  },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("SportEvent", SportEventSchema);
