const express = require("express");

const { BookingController } = require("../../controllers/index");

const bookingController = new BookingController();
const router = express.Router();

router.get("/info", (req, res) => {
  return res.json({
    message: "inside routes",
  });
});
router.post("/bookings", bookingController.create);
router.post("/publish", bookingController.sendMessageToQueue);

module.exports = router;
