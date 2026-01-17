import {Router} from 'express'
import {  searchBooks ,getBookDetails } from '../controllers/book.controller.js';

const router = Router();

router.get("/search", searchBooks);
router.get("/:id", getBookDetails);

export default router