import cors, { CorsOptions } from "cors";
import dotenv from "dotenv";
import express, { Express } from "express";
import mongoSanitize from "express-mongo-sanitize";
import mongoose from "mongoose";
import { router } from "src/routes";

dotenv.config();

const app: Express = express();

const port = process.env.PORT || 3334;

const corsOptions: CorsOptions = {
  origin: process.env.WEBAPP_URL || "http://localhost:3000",
  optionsSuccessStatus: 200,
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
};

app.use(express.json());

app.use(
  mongoSanitize({
    replaceWith: "_",
  })
); // Padroniza _id para id

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(router);

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URL || "", {
    autoIndex: true,
    autoCreate: true,
    dbName: process.env.MONGO_DB_NAME || "test",
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((err) => {
    console.log(err);
  });
