import { useQuery } from "@tanstack/react-query";
import { getFavorites, removeFavorite } from "../api/books";

export default function Favorites() {
  const { data, refetch } = useQuery({
    queryKey: ["favorites"],
    queryFn: getFavorites
  });

  const remove = async (id) => {
    await removeFavorite(id);
    refetch();
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-slate-800">My Favorites</h2>
        <span className="text-slate-500 font-medium">{data?.length || 0} books</span>
      </div>
      
      {data?.length === 0 ? (
         <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-medium text-slate-900 mb-2">No favorites yet</h3>
            <p className="text-slate-500">Books you mark as favorite will appear here.</p>
         </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {data?.map(f => (
            <div key={f.id} className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col">
                <div className="p-4 flex-1">
                    <h3 className="font-semibold text-slate-800 line-clamp-2 mb-2">{f.title}</h3>
                </div>
                <div className="p-4 pt-0 mt-auto">
                     <button 
                        onClick={() => remove(f.id)}
                        className="w-full py-2 px-3 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                     >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                        Remove
                    </button>
                </div>
            </div>
            ))}
        </div>
      )}
    </div>
  );
}
