const catchControllerAsync = require('../utils/catch-controller-async');
const BaseController = require("./base.controller");

module.exports = class BetController extends BaseController {
  constructor({ BetService }) {
    super(BetService);
  }

  create = catchControllerAsync(async (req, res) => {
    const { eventId, eventName, selectedOutcomeName, odds, stake, potentialWin } = req.body;

    if (!eventId || !eventName || !selectedOutcomeName || !odds || !stake || !potentialWin) {
      return res.status(400).json({ message: 'Faltan datos para crear la apuesta' });
    }

    const betData = {
      eventId,
      eventName,
      selectedOutcomeName,
      odds,
      stake,
      potentialWin,
    };

    const result = await this.service.create(betData);
    res.status(201).send(result);
  });
};
