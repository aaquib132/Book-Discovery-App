import { readFavorites, writeFavorites } from "../services/favorite.service.js";

export const getFavorites = async (req, res) => {
  const data = await readFavorites();
  res.json(data);
};

export const addFavorite = async (req, res) => {
  const book = req.body;

  const favorites = await readFavorites();
  const exists = favorites.find(f => f.id === book.id);

  if (exists) {
    return res.status(400).json({ message: "Already in favorites" });
  }

  favorites.push(book);
  await writeFavorites(favorites);

  res.json({ message: "Added to favorites", book });
};

export const removeFavorite = async (req, res) => {
  const id = req.params.id;

  const favorites = await readFavorites();
  const newList = favorites.filter(f => f.id !== id);

  await writeFavorites(newList);
  res.json({ message: "Removed from favorites" });
};
