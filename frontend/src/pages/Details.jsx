import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBookDetails, addFavorite } from "../api/books";

export default function Details() {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["book", id],
    queryFn: () => getBookDetails(id),
  });

  const handleFavorite = async () => {
    await addFavorite({
      id: id,
      title: data.title,
      
    });
    alert("Added to favorites!");
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading book details</p>;

  const { title, description, subjects } = data;

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
        <div className="grid md:grid-cols-[300px_1fr] gap-8">
         
             <div className="bg-slate-50 p-8 flex flex-col items-center border-r border-slate-100">
                <div className="w-48 aspect-2/3 bg-white rounded-lg shadow-lg mb-6 overflow-hidden">
                   
                     <img 
                        src={
                            data.coverId
                                ? `https://covers.openlibrary.org/b/id/${data.coverId}-L.jpg`
                                : "https://via.placeholder.com/300x450?text=No+Cover"
                            }
 
                        onError={(e) => e.target.src = "https://via.placeholder.com/300x450?text=No+Cover"}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>
                <button 
                    onClick={handleFavorite}
                    className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg font-semibold shadow-md active:scale-95 transition-all hover:bg-blue-700 hover:shadow-lg flex items-center justify-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.312 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                    </svg>
                    Add to Favorites
                </button>
             </div>

             
             <div className="p-8 md:pl-0">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h1>
                
                <div className="prose prose-slate max-w-none mb-8">
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Description</h3>
                    <p className="text-slate-600 leading-relaxed">
                        {typeof description === "string" 
                            ? description 
                            : description?.value || "No description available for this book."}
                    </p>
                </div>

                {subjects?.length > 0 && (
                    <div className="border-t border-slate-100 pt-6">
                        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Subjects</h3>
                        <div className="flex flex-wrap gap-2">
                            {subjects.slice(0, 15).map((s) => (
                                <span key={s} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors cursor-default">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
             </div>
        </div>
    </div>
  );
}
