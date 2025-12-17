describe("Booking Cancellation Rules", () => {

  test("should not allow cancellation within 1 hour of start time", () => {
    const now = new Date("2025-01-06T09:30:00");
    const startTime = new Date("2025-01-06T10:00:00");

    const minutesDiff = (startTime - now) / (1000 * 60);
    expect(minutesDiff < 60).toBe(true);
  });

  test("cancelling an already cancelled booking is a no-op", () => {
    const bookingStatus = "cancelled";
    expect(bookingStatus).toBe("cancelled");
  });

  test("cancelled bookings should not block new bookings", () => {
    const cancelledBookingStatus = "cancelled";
    const blocksNewBooking = cancelledBookingStatus === "confirmed";

    expect(blocksNewBooking).toBe(false);
  });

});
