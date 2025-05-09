
import { useState } from 'react';
import Lightbox from '../components/lightbox/Lightbox';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    alt: 'Pemandangan Pantai Karang Tawulan dari ketinggian',
    category: 'landscape'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
    alt: 'Ombak besar menghantam karang di pantai selatan',
    category: 'landscape'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf',
    alt: 'Aktivitas nelayan tradisional di pagi hari',
    category: 'culture'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1603073163308-9627cb051823',
    alt: 'Proses pengasapan ikan oleh penduduk lokal',
    category: 'food'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
    alt: 'Air terjun kecil di sekitar area pantai',
    category: 'landscape'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1591985666643-1ecc67616216',
    alt: 'Kerupuk rumput laut hasil olahan nelayan',
    category: 'food'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1556760544-74068565f05c',
    alt: 'Sunset di Pantai Karang Tawulan',
    category: 'landscape'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1613740105081-e88271c0211d',
    alt: 'Kerajinan kerang buatan penduduk lokal',
    category: 'culture'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1596005554384-d293674c91d7',
    alt: 'Perahu nelayan tradisional di bibir pantai',
    category: 'culture'
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1548032885-b5e38734688a',
    alt: 'Ikan segar hasil tangkapan nelayan',
    category: 'food'
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57',
    alt: 'Pemandangan laut dari tepi pantai',
    category: 'landscape'
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1552084117-56a987666449',
    alt: 'Pelancong menikmati suasana pantai',
    category: 'people'
  }
];

const categories = [
  { id: 'all', name: 'Semua Foto' },
  { id: 'landscape', name: 'Pemandangan' },
  { id: 'culture', name: 'Budaya' },
  { id: 'food', name: 'Kuliner' },
  { id: 'people', name: 'Pengunjung' }
];

const Galeri = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  
  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);
  
  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };
  
  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className="min-h-screen bg-sand pt-20">
      {/* Hero Section */}
      <div className="relative py-20 bg-sea-blue text-white text-center">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1556760544-74068565f05c")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Galeri</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Jelajahi keindahan Pantai Karang Tawulan melalui koleksi foto-foto kami
          </p>
        </div>
        <svg className="absolute bottom-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#f8f1e5" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,138.7C384,149,480,139,576,138.7C672,139,768,149,864,144C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-sea-blue text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id} 
                className="overflow-hidden rounded-lg shadow-md cursor-pointer h-64 relative group"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="w-full p-4 text-white">
                    <p className="font-medium text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">Tidak ada foto dalam kategori ini.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox 
          images={filteredImages}
          currentImage={currentImage}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
};

export default Galeri;
