import { useQuery } from "@tanstack/react-query";
import { searchBooks } from "../api/books";
import BookList from "./BookList";

export default function SearchResults({ query }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["search", query],
    queryFn: () => searchBooks(query),
    enabled: query.length > 2
  });

  if (isLoading) return <p className="text-sm text-gray-500">Searching...</p>;
  if (error) return <p className="text-sm text-red-500">Error fetching results</p>;
  if (!data?.length) return <p className="text-sm text-gray-400">No results found</p>;

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Search Results</h2>
      <BookList books={data} />
    </div>
  );
}
