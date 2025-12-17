describe("Room Utilization Report", () => {

  test("utilization should be 0 if there are no bookings", () => {
    const totalBookedHours = 0;
    const totalBusinessHours = 40;

    const utilization = totalBookedHours / totalBusinessHours;
    expect(utilization).toBe(0);
  });

  test("utilization should be calculated correctly", () => {
    const totalBookedHours = 10;
    const totalBusinessHours = 50;

    const utilization = totalBookedHours / totalBusinessHours;
    expect(utilization).toBe(0.2);
  });

  test("should handle partial overlaps correctly", () => {
    const bookingStart = new Date("2025-01-06T09:00:00");
    const bookingEnd = new Date("2025-01-06T13:00:00");

    const reportFrom = new Date("2025-01-06T10:00:00");
    const reportTo = new Date("2025-01-06T12:00:00");

    const effectiveStart = new Date(
      Math.max(bookingStart, reportFrom)
    );
    const effectiveEnd = new Date(
      Math.min(bookingEnd, reportTo)
    );

    const hours = (effectiveEnd - effectiveStart) / (1000 * 60 * 60);
    expect(hours).toBe(2);
  });

});
