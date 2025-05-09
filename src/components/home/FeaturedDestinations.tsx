
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const destinations = [
  {
    id: 1,
    title: 'Karang Tawulan',
    description: 'Formasi karang yang menjulang di tengah laut dengan panorama matahari terbenam yang memukau.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e'
  },
  {
    id: 2,
    title: 'Batu Kalde',
    description: 'Pantai berpasir putih dengan batuan karang unik yang sempurna untuk fotografi dan berenang.',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716'
  },
  {
    id: 3,
    title: 'Pantai Cimanuk',
    description: 'Teluk tenang dengan pemandangan perbukitan hijau dan aktivitas nelayan tradisional yang menarik.',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb'
  }
];

const FeaturedDestinations = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto">Destinasi Unggulan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {destinations.map((destination) => (
            <div 
              key={destination.id}
              className="rounded-lg overflow-hidden shadow-lg bg-white card-hover"
              onMouseEnter={() => setHoveredId(destination.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="h-60 overflow-hidden relative">
                <img 
                  src={destination.image} 
                  alt={destination.title} 
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{ transform: hoveredId === destination.id ? 'scale(1.1)' : 'scale(1)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold font-poppins">{destination.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{destination.description}</p>
                <Link 
                  to="/destinasi" 
                  className="inline-flex items-center text-sea-blue hover:text-coral transition-colors duration-300"
                >
                  Lihat Detail
                  <ArrowUpRight className="ml-1" size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
