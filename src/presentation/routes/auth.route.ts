import { Router } from "express";
import {
  login,
  sendOtp,
  verifyOtpAndSignUp,
} from "../controllers/auth.controller";

const router = Router();
router.get('/test', (req, res) => {
  res.send("get req working");
})
router.post("/send-otp", async (req, res) => {
  console.log("reached sendotp route");
  await sendOtp(req, res);
});
router.post("/signup", verifyOtpAndSignUp);
router.post("/login", login);

export default router;
