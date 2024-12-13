const { Router } = require("express");

module.exports = function ({ SportEventController }) {
  const router = Router();

  router.get("/get-all", SportEventController.getAll);
  router.get("/get/:id", SportEventController.getOne);
  router.post("/create", SportEventController.create);
  router.put("/update/:id", SportEventController.update);
  router.delete("/delete/:id", SportEventController.delete);

  return router;
};
