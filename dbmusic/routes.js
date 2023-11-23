const { Router } = require("express");
const controller = require("./controller");
const cors = require("cors");
const router = Router();

router.get("/", cors(), controller.getMusic);
router.post("/", cors(), controller.addMusic);
router.get("/:id", cors(), controller.getMusicById);
router.put("/:id", cors(), controller.updateMusic);
router.delete("/:id", cors(), controller.deleteMusic);
module.exports = router;
