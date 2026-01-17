import apiClient from "../utils/apiClient.js";

export const fetchBookSearch = async (query) => {
  const res = await apiClient.get(`/search.json?q=${query}`);

  const docs = res.data?.docs || [];

  return docs.slice(0, 20).map(book => ({
    id: book.key?.replace("/works/", ""),
    title: book.title,
    author: book.author_name?.[0] || "Unknown",
    coverId: book.cover_i || null
  }));
};

export const fetchBookDetails = async (id) => {
  const [workRes, editionRes] = await Promise.all([
    apiClient.get(`/works/${id}.json`),
    apiClient.get(`/works/${id}/editions.json?limit=1`)
  ]);

  const edition = editionRes.data.entries?.[0];
  const coverId = workRes.data.covers?.[0] || edition?.covers?.[0] || null;

  return {
    id,
    title: workRes.data.title,
    description: workRes.data.description?.value || workRes.data.description || "No description",
    subjects: workRes.data.subjects || [],
    coverId
  };
};
