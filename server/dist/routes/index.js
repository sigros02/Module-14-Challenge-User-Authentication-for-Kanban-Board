import { Router } from "express";
import authRoutes from "./auth-routes.js";
import apiRoutes from "./api/index.js";
import { authenticateToken } from "../middleware/auth.js";
const router = Router();
router.use("/auth", authRoutes);
// TODO: Add authentication to the API routes
// SG: Express router handles routes with same resource path in order they are defined
router.use("/api", authenticateToken);
router.use("/api", apiRoutes);
export default router;
