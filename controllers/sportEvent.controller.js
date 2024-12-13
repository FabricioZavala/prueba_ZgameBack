const BaseController = require("./base.controller");

module.exports = class SportEventController extends BaseController {
  constructor({ SportEventService }) {
    super(SportEventService);
  }
};
