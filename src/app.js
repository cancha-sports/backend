import express from "express";
import { SportRoutes } from "./http/routes/SportRoutes.js";

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).json({ ok: "true" });
});

app.use("/sports", SportRoutes);

export default app;
