import express from "express";
import cors from "cors";
import { UserRoutes } from "./http/routes/UserRoutes.js";
import { EstablishmentRoutes } from "./http/routes/EstablishmentRoutes.js";
import { CourtRoutes } from "./http/routes/CourtRoutes.js";
import { CourtScheduleRoutes } from "./http/routes/CourtScheduleRoutes.js";
import { CourtBookingRoutes } from "./http/routes/CourtBookingRoutes.js";
import { AuthRoutes } from "./http/routes/AuthRoutes.js";

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).json({ ok: "true" });
});

app.use("/auth", AuthRoutes);
app.use("/users", UserRoutes);
app.use("/establishments", EstablishmentRoutes);
app.use("/courts", CourtRoutes);
app.use("/court-schedules", CourtScheduleRoutes);
app.use("/court-bookings", CourtBookingRoutes);

export default app;
