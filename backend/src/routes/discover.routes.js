import { Router } from "express";
import { getCategoryBooks } from "../controllers/discover.controller.js";

const router = Router();

router.get("/:category", getCategoryBooks);

export default router;
