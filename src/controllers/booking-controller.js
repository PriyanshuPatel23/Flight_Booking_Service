const { StatusCodes } = require("http-status-codes");

const { BookingService } = require("../services/index");
const { createChannel, publishMessage } = require("../utils/messageQueue");
const { REMINDER_BINDING_KEY } = require("../config/serverConfig");

const bookingServices = new BookingService();

class BookingController {
  constructor() {}

  async sendMessageToQueue(req, res) {
    const channel = await createChannel();
    const payload = {
      data: {
        subject: "This is a noti from queue",
        content: "some queue will be subscribe this",
        recepientEmail: "bookingservices236@gmail.com",
        notificationTime: "2023-01-08T09:49:00",
      },
      service: "CREATE_TICKET",
    };
    publishMessage(channel, REMINDER_BINDING_KEY, JSON.stringify(payload));
    return res.status(200).json({
      message: "successfully published the event",
    });
  }

  async create(req, res) {
    try {
      const response = await bookingServices.createBooking(req.body);
      return res.status(StatusCodes.OK).json({
        message: "Completed booking",
        success: true,
        err: {},
        data: response,
      });
    } catch (error) {
      console.log(error);
      return res.status(StatusCodes.OK).json({
        message: "Request Failed",
        success: false,
        err: "Something went wrong",
        data: {},
      });
    }
  }
}

module.exports = BookingController;
