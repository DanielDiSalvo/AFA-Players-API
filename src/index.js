import express from "express";
import cors from "cors";

import { PORT } from "./config.js";

import playersRouter from "./routes/players.routes.js";

const app = express();

app.use(cors());

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/players", playersRouter);

// Listen on port 4000
app.listen(PORT, () => {
  console.log(`Connected to db and listening on port ${PORT}`);
});
