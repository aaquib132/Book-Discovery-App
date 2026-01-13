import { Link } from "react-router-dom";
import { addFavorite } from "../api/books";

export default function BookCard({ book }) {
  const cover = book.coverId
    ? `https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`
    : "https://via.placeholder.com/120x180.png?text=No+Cover";

  const handleAddFav = async () => {
    await addFavorite(book);
    alert("Added to favorites!");
  };

  return (
    <div className="group min-w-40 w-40 flex flex-col rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white border border-slate-100 overflow-hidden relative">
      <Link to={`/book/${book.id}`} className="block relative aspect-2/3 overflow-hidden bg-slate-100">
        <img
          src={cover}
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
          <span className="text-white text-xs font-medium truncate w-full">View Details</span>
        </div>
      </Link>

      <div className="p-3 flex flex-col flex-1">
        <h3 className="text-sm font-semibold text-slate-800 line-clamp-2 leading-tight mb-2 min-h-[2.5em]" title={book.title}>
          {book.title}
        </h3>
        
        <div className="mt-auto pt-2">
          <button
            className="w-full text-xs font-medium bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-blue-600 border border-slate-200 hover:border-blue-200 px-2 py-1.5 rounded transition-colors flex items-center justify-center gap-1"
            onClick={handleAddFav}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
            Favorite
          </button>
        </div>
      </div>
     </div>
  );
}
