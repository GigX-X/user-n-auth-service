import { Router } from "express";
import { adminLogin, getUsers } from "../controllers/admin.controller";

const router = Router();

router.post('/login', adminLogin);
router.get('/all-users', getUsers);


export default router;
