
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Ikan Asap',
    price: 'Rp25.000',
    image: 'https://images.unsplash.com/photo-1603073163308-9627cb051823?q=80&w=500',
    category: 'olahan'
  },
  {
    id: 2,
    name: 'Kerupuk Rumput Laut',
    price: 'Rp15.000',
    image: 'https://images.unsplash.com/photo-1591985666643-1ecc67616216?q=80&w=500',
    category: 'olahan'
  },
  {
    id: 3,
    name: 'Ikan Asin',
    price: 'Rp30.000',
    image: 'https://images.unsplash.com/photo-1580554530778-ca36943938b2?q=80&w=500',
    category: 'olahan'
  },
  {
    id: 4,
    name: 'Kerajinan Kerang',
    price: 'Rp50.000',
    image: 'https://images.unsplash.com/photo-1613740105081-e88271c0211d?q=80&w=500',
    category: 'kerajinan'
  }
];

const ProductPreview = () => {
  const [visibleProducts, setVisibleProducts] = useState(products.slice(0, 3));
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleProducts(products.slice(0, 2));
      } else {
        setVisibleProducts(products.slice(0, 4));
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-16 bg-sand">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto">Produk Nelayan</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          Temukan berbagai hasil olahan laut terbaik dari nelayan lokal Pantai Karang Tawulan.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-lg card-hover">
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                <p className="text-coral font-semibold mb-4">{product.price}</p>
                <Link 
                  to="/produk-nelayan" 
                  className="text-sea-blue hover:text-coral transition-colors duration-300 font-medium text-sm"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            to="/produk-nelayan"
            className="inline-flex items-center bg-sea-blue hover:bg-[#006094] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
          >
            Lihat Semua Produk
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;
