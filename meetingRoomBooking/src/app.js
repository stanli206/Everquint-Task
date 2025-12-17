import express from "express";
import roomRoutes from "./routes/room.routes.js";
import bookingRoutes from "./routes/booking.routes.js";
import reportRoutes from "./routes/report.routes.js";

const app = express();
app.use(express.json());


app.use("/rooms", roomRoutes);
app.use("/bookings", bookingRoutes);
app.use("/reports", reportRoutes);

export default app;
