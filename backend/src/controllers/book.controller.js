import { fetchBookSearch, fetchBookDetails } from "../services/book.service.js";

export const searchBooks = async (req, res) => {
    try {
        const query = req.query.query;
        const data = await fetchBookSearch(query);
        res.json(data);
    } catch (err) {
        res.status(500).json({error: err.message});
    };
};

export const getBookDetails = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await fetchBookDetails(id);
        res.json(data);
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}