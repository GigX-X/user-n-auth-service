import express from "express";
import connectDB from "../src/infrastructure/db/mongodb";
import connectRedis from "../src/infrastructure/db/redis";
import { config } from "dotenv";
import authRoute from "../src/presentation/routes/auth.route";
import adminRoute from "../src/presentation/routes/admin.route";
import cors from "cors";

config({ path: __dirname + "/../.env" });

const app = express();

// const allowedOrigins = ["http://localhost:4000"];

// const corsOptions = {
//   origin: allowedOrigins,
//   credentials: true,
//   optionSuccessStatus: 200,
// };

// app.use(cors(corsOptions));
// app.options("*", cors(corsOptions));

app.use(cors());

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.use("/auth", authRoute);
app.use("/admin", adminRoute);

connectDB();
connectRedis();

app.listen(process.env.PORT, () =>
  console.log("user service listening actively...")
);
