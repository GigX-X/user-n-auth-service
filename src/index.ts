import express from "express";
import connectDB from "../src/infrastructure/db/mongodb";
import { config } from "dotenv";
import authRoute from "../src/presentation/routes/auth.route";
import adminRoute from "../src/presentation/routes/admin.route";

config({ path: __dirname + "/../.env" });

const app = express();

app.use(express.json());

app.use("/auth", authRoute);
app.use("/admin", adminRoute);

connectDB();

app.listen(process.env.PORT, () =>
  console.log("user service listening actively...")
);
