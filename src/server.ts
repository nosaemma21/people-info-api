import dotenv from "dotenv";
import express from "express";
import { Application } from "express";
import notFoundMiddleware from "./middlewares/notFoundMiddleware";
import mongoConnect from "./db/mongoConnect";
import peopleRouter from "./routes/people.routes";

dotenv.config();

const PORT: number = (process.env.PORT as unknown as number) || 3000;
const MONGO_URI: string = process.env.MONGO_URI as string;

const app: Application = express();

app.use("/api/people", peopleRouter);

app.use(notFoundMiddleware);

const startUp = () => {
  mongoConnect(MONGO_URI);
  app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT} 📦📦`);
  });
};
startUp();
