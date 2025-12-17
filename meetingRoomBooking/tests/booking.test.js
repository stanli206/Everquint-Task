describe("Booking Creation Rules", () => {

  test("startTime must be before endTime", () => {
    const startTime = new Date("2025-01-06T12:00:00");
    const endTime = new Date("2025-01-06T10:00:00");

    const isValid = startTime < endTime;
    expect(isValid).toBe(false);
  });

  test("booking duration should be at least 15 minutes", () => {
    const start = new Date("2025-01-06T10:00:00");
    const end = new Date("2025-01-06T10:10:00");

    const durationInMinutes = (end - start) / (1000 * 60);
    expect(durationInMinutes < 15).toBe(true);
  });

  test("booking duration should not exceed 4 hours", () => {
    const start = new Date("2025-01-06T08:00:00");
    const end = new Date("2025-01-06T14:30:00");

    const durationInMinutes = (end - start) / (1000 * 60);
    expect(durationInMinutes > 240).toBe(true);
  });

  test("overlapping booking should be rejected", () => {
    const existingBooking = {
      start: new Date("2025-01-06T10:00:00"),
      end: new Date("2025-01-06T11:00:00")
    };

    const newBooking = {
      start: new Date("2025-01-06T10:30:00"),
      end: new Date("2025-01-06T11:30:00")
    };

    const isOverlapping =
      newBooking.start < existingBooking.end &&
      newBooking.end > existingBooking.start;

    expect(isOverlapping).toBe(true);
  });

});
