import { Router } from "express";
import {
  login,
  sendOtp,
  verifyOtpAndSignUp,
} from "../controllers/auth.controller";

const router = Router();
router.post('/test', (req, res) => {
  console.log("send asdasdfasdf")
  res.send("get req working");
})
router.post("/sendOtp", async (req, res) => {
  console.log("reached sendotp route");
  await sendOtp(req, res);
});
router.post("/signup", verifyOtpAndSignUp);
router.post("/login", login);

export default router;
