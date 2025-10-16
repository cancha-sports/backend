import express from "express";
import { SportRoutes } from "./http/routes/SportRoutes.js";
import { RecreationAreaTypeRoutes } from "./http/routes/RecreationAreaTypeRoutes.js";
import { UserRoutes } from "./http/routes/UserRoutes.js";
import { EstablishmentRoutes } from "./http/routes/EstablishmentRoutes.js";
import { CourtRoutes } from "./http/routes/CourtRoutes.js";
import { RecreationAreaRoutes } from "./http/routes/RecreationAreaRoutes.js";
import { CourtScheduleRoutes } from "./http/routes/CourtScheduleRoutes.js";
import { RecreationAreaScheduleRoutes } from "./http/routes/RecreationAreaScheduleRoutes.js";
import { CourtBookingRoutes } from "./http/routes/CourtBookingRoutes.js";
import { RecreationAreaBookingRoutes } from "./http/routes/RecreationAreaBookingRoutes.js";
import { AuthRoutes } from "./http/routes/AuthRoutes.js";

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).json({ ok: "true" });
});

app.use("/auth", AuthRoutes);
app.use("/sports", SportRoutes);
app.use("/recreation-area-types", RecreationAreaTypeRoutes);
app.use("/users", UserRoutes);
app.use("/establishments", EstablishmentRoutes);
app.use("/courts", CourtRoutes);
app.use("/recreation-areas", RecreationAreaRoutes);
app.use("/court-schedules", CourtScheduleRoutes);
app.use("/recreation-area-schedules", RecreationAreaScheduleRoutes);
app.use("/court-bookings", CourtBookingRoutes);
app.use("/recreation-area-bookings", RecreationAreaBookingRoutes);

export default app;
