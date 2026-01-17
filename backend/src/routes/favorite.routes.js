import { Router } from "express";
import { getFavorites, addFavorite, removeFavorite } from "../controllers/favorite.controller.js";

const router = Router();

router.get("/", getFavorites);
router.post("/", addFavorite);
router.delete("/:id", removeFavorite);

export default router;
