import express from "express";
import { config } from "dotenv";
import cors from "cors";
import connectDB from "../src/infrastructure/db/mongodb";
import connectRedis from "../src/infrastructure/db/redis";
import authRoute from "../src/presentation/routes/auth.route";
import adminRoute from "../src/presentation/routes/admin.route";

config({ path: __dirname + "/../.env" });

const app = express();

const allowedOrigins = ["http://localhost:4000"];

const corsOptions = {
  origin: allowedOrigins,
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  console.log("bodyyyy", JSON.stringify(req.body));
  next();
});

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));


connectDB();
connectRedis();

app.use("/auth", authRoute);
app.use("/admin", adminRoute);

app.listen(process.env.PORT || 4001, () =>
  console.log("user service listening actively...")
);
