
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-sand flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-sea-blue mb-6">
          <svg className="w-24 h-24 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h1 className="text-5xl font-bold text-sea-blue mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-8">
          Maaf, halaman yang Anda cari tidak ditemukan.
        </p>
        <p className="text-gray-600 mb-8">
          Halaman mungkin telah dipindahkan atau dihapus. Mari kembali ke halaman utama.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center bg-sea-blue hover:bg-[#0092e0] text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
        >
          <ArrowLeft className="mr-2" size={20} />
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
