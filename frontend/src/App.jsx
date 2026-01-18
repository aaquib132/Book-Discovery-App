import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Details from "./pages/Details";
import Category from "./pages/Category";


export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
   
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center gap-8">
                <Link to="/" className="text-2xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                  Book Nest
                </Link>
                <div className="hidden md:flex items-center gap-6">
                   <Link to="/" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                    Home
                  </Link>
                  <Link to="/favorites" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                    Favorites
                  </Link>
                </div>
              </div>
              
             
              <div className="md:hidden flex items-center">
                 <Link to="/favorites" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                    Favorites
                  </Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="/book/:id" element={<Details />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
