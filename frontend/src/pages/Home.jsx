import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";
import SearchResults from "../components/SearchResults";
import { getCategory } from "../api/books";


export default function Home() {
  const [query, setQuery] = useState("");

  const { data: fantasy } = useQuery({
    queryKey: ["fantasy"],
    queryFn: () => getCategory("fantasy")
  });

  const { data: sciFi } = useQuery({
    queryKey: ["sci_fi"],
    queryFn: () => getCategory("science_fiction")
  });

  const { data: romance } = useQuery({
    queryKey: ["romance"],
    queryFn: () => getCategory("love")
  });

  return (
    <div className="space-y-10">
      <div className="bg-linear-to-r from-blue-600 to-indigo-700 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16 text-center text-white mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Find Your Next Adventure</h1>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Explore our vast collection of books across all genres.</p>
        <div className="flex justify-center">
            <SearchBar value={query} onChange={setQuery} placeholder="Search by title, author, or ISBN..." />
        </div>
      </div>

      {query.length > 2 ? (
        <div className="container mx-auto px-4">
             <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                Search Results
            </h2>
            <SearchResults query={query} />
        </div>
      ) : (
        <div className="space-y-12 container mx-auto px-4">
          <section>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                    <span className="w-1 h-8 bg-blue-600 rounded-full"></span>
                    Fantasy
                </h2>
                <Link to="/category/fantasy" className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1 group">
                    View all <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
            </div>
            {fantasy && <BookList books={fantasy} />}
          </section>

          <section>
             <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                    <span className="w-1 h-8 bg-purple-600 rounded-full"></span>
                    Science Fiction
                </h2>
                 <Link to="/category/science_fiction" className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center gap-1 group">
                    View all <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
             </div>
            {sciFi && <BookList books={sciFi} />}
          </section>

          <section>
             <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                    <span className="w-1 h-8 bg-pink-600 rounded-full"></span>
                    Romance
                </h2>
                 <Link to="/category/romance" className="text-pink-600 hover:text-pink-700 font-medium text-sm flex items-center gap-1 group">
                    View all <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
             </div>
            {romance && <BookList books={romance} />}
          </section>
        </div>
      )}
    </div>
  );
}
