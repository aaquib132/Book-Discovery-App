import axios from "axios";

const api = axios.create({
  baseURL: "https://book-discovery-app.onrender.com"
});

export const searchBooks = (query) =>
  api.get(`/books/search?query=${query}`).then(res => res.data);

export const getBookDetails = (id) =>
  api.get(`/books/${id}`).then(res => res.data);

export const getFavorites = () =>
  api.get(`/favorites`).then(res => res.data);

export const addFavorite = (book) =>
  api.post(`/favorites`, book).then(res => res.data);

export const removeFavorite = (id) =>
  api.delete(`/favorites/${id}`).then(res => res.data);

export const getCategory = (cat) =>
  api.get(`/discover/${cat}`).then(res => res.data);
