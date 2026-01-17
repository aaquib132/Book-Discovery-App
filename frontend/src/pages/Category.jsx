import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../api/books";
import BookList from "../components/BookList";

export default function Category() {
  const { category } = useParams();
  
  const { data: books, isLoading, error } = useQuery({
    queryKey: ["category", category],
    queryFn: () => getCategory(category)
  });

  const displayCategory = category.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <span>/</span>
        <span className="text-slate-900 font-medium">{displayCategory}</span>
      </div>

      <div className="flex items-center gap-3 mb-8">
        <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
        <h1 className="text-3xl font-bold text-slate-900">{displayCategory} Books</h1>
      </div>

      {isLoading && (
        <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      )}

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg">
            Error loading books. Please try again later.
        </div>
      )}

      {books && <BookList books={books} />}
      
      {!isLoading && books && books.length === 0 && (
         <div className="text-center py-20 text-slate-500">
            No books found in this category.
         </div>
      )}
    </div>
  );
}
