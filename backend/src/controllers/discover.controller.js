import { fetchCategoryBooks } from "../services/discover.service.js";

export const getCategoryBooks = async (req, res) => {
  const category = req.params.category;
  try {
    const data = await fetchCategoryBooks(category);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
