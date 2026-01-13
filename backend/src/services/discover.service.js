import apiClient from "../utils/apiClient.js";

export const fetchCategoryBooks = async (category) => {
  try {
    const res = await apiClient.get(`/subjects/${category}.json`);

    const works = res.data?.works || [];

    return works.slice(0, 15).map(work => ({
      id: work.key?.replace("/works/", ""),
      title: work.title,
      coverId: work.cover_id || null,
      authors: work.authors?.map(a => a.name) || []
    }));
  } catch (err) {
    console.error(`Category fetch failed for ${category}:`, err.message);
    return []; 
  }
};
