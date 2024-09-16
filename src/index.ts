import express from "express";
import { config } from "dotenv";
import cors from "cors";
import connectDB from "../src/infrastructure/db/mongodb";
import connectRedis from "../src/infrastructure/db/redis";
import authRoute from "../src/presentation/routes/auth.route";
import adminRoute from "../src/presentation/routes/admin.route";

config({ path: __dirname + "/../.env" });

const app = express();

const allowedOrigins = [
  "http://localhost:4000",
];

const corsOptions = {
  origin: allowedOrigins,
  methods:["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionSuccessStatus: 200,
  credentials: true,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use("/auth", authRoute);
app.use("/admin", adminRoute);

connectDB();
connectRedis();

app.listen(process.env.PORT || 4001, () =>
  console.log("user service listening actively...")
);
