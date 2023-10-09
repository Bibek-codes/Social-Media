import express from "express";
import "dotenv";
import { socialRouter } from "./api/social";
import cors from "cors";
import "./models/index";
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use("/social", socialRouter);
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log(`Listening...${process.env.PORT}`);
});
