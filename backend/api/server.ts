import cors from "cors";
import express from "express";
import { db } from "./connect.js";

const app = express();
const port = 3001;

app.use(
  cors({
    origin: "*",
  })
);

app.get("/artists", async (req, res) => {
  res.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async (req, res) => {
  res.send(await db.collection("songs").find({}).toArray());
});

app.listen(port, () => console.log(`Server running on port: ${port}`));
