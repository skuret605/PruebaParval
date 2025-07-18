import express from "express";
import authUserRole from "../middleware/userRole.js";
import authToken from "../middleware/authenticationMD.js";
import {
  getAllInvestments,
  addInvestment,
  deleteInvestment,
} from "../controllers/investmentApiController.js";
const router = express.Router();

router.use(authToken);

router.get("/getallinvestments", getAllInvestments);
router.post("/addinvestment", authUserRole("admin"), addInvestment);
router.delete("/deleteinvestment/:id", authUserRole("admin"), deleteInvestment);

export default router;
