import { Router } from "express";
import { login, logout } from "../controller/auth.controller.js";
import { verifySession } from "../middleware/verifySession.js";

const userRoutes = Router();

userRoutes.post("/login", login);
userRoutes.post("/logout", verifySession, logout);
userRoutes.get("/protected", verifySession, (req, res) => {
  res.json({ user: req.user });
});

export default userRoutes;
