
import { useState } from 'react';

const destinations = [
  {
    id: 1,
    name: 'Tebing Karang Tawulan',
    description: 'Formasi karang yang menjulang di tengah laut dengan panorama matahari terbenam yang memukau. Anda dapat melihatnya dari bibir pantai atau dengan menyewa perahu nelayan untuk melihat dari dekat.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    activities: ['Fotografi', 'Menikmati Sunset', 'Perahu Keliling'],
    distance: '0 km (lokasi utama)'
  },
  {
    id: 2,
    name: 'Pantai Batu Kalde',
    description: 'Pantai berpasir putih dengan batuan karang unik yang sempurna untuk fotografi dan berenang. Ombak di pantai ini relatif tenang sehingga aman untuk berenang dan bermain air.',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
    activities: ['Berenang', 'Bermain Pasir', 'Snorkeling', 'Fotografi'],
    distance: '2 km dari Karang Tawulan'
  },
  {
    id: 3,
    name: 'Pantai Cimanuk',
    description: 'Teluk tenang dengan pemandangan perbukitan hijau dan aktivitas nelayan tradisional yang menarik. Anda dapat melihat langsung para nelayan yang pulang melaut di pagi hari.',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
    activities: ['Mengamati Nelayan', 'Memancing', 'Piknik'],
    distance: '3 km dari Karang Tawulan'
  },
  {
    id: 4,
    name: 'Goa Pantai Selatan',
    description: 'Gua alami di tebing pantai yang dapat diakses saat air laut surut. Di dalam gua terdapat bentukan stalaktit dan stalakmit yang indah dan menarik untuk dijelajahi.',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
    activities: ['Eksplorasi Goa', 'Fotografi', 'Pengetahuan Geologi'],
    distance: '5 km dari Karang Tawulan'
  },
  {
    id: 5,
    name: 'Bukit Pandang Karang Tawulan',
    description: 'Bukit dengan pemandangan panorama luas Pantai Karang Tawulan dan sekitarnya. Tempat terbaik untuk melihat matahari terbit dan terbenam.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    activities: ['Hiking', 'Camping', 'Fotografi Pemandangan'],
    distance: '1.5 km dari Karang Tawulan'
  },
  {
    id: 6,
    name: 'Kampung Nelayan Cimanuk',
    description: 'Perkampungan nelayan tradisional dimana Anda bisa melihat kehidupan sehari-hari masyarakat pesisir dan proses pengolahan hasil laut.',
    image: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf',
    activities: ['Wisata Budaya', 'Belajar Pengolahan Ikan', 'Berinteraksi dengan Penduduk Lokal'],
    distance: '2.5 km dari Karang Tawulan'
  }
];

const Destinasi = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  
  const toggleOpen = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-sand pt-20">
      {/* Hero Section */}
      <div 
        className="relative py-20 bg-sea-blue text-white text-center"
      >
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Destinasi Wisata</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Jelajahi tempat-tempat menarik di sekitar Pantai Karang Tawulan yang siap memikat hati Anda
          </p>
        </div>
        <svg className="absolute bottom-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#f8f1e5" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,138.7C384,149,480,139,576,138.7C672,139,768,149,864,144C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      {/* Destinations Listing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <p className="text-center mb-12 max-w-2xl mx-auto text-gray-700">
            Pantai Karang Tawulan dan sekitarnya menawarkan berbagai keindahan alam dan pengalaman budaya yang tak terlupakan. 
            Berikut adalah beberapa tempat menarik yang bisa Anda kunjungi.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map(destination => (
              <div 
                key={destination.id} 
                className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col" 
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-sea-blue">{destination.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{destination.distance}</p>
                  <p className="text-gray-700 mb-4">
                    {openId === destination.id 
                      ? destination.description
                      : `${destination.description.substring(0, 100)}...`}
                  </p>
                  
                  <button 
                    onClick={() => toggleOpen(destination.id)}
                    className="text-sea-blue hover:text-coral transition-colors duration-300 text-sm font-medium mb-4"
                  >
                    {openId === destination.id ? "Lihat Lebih Sedikit" : "Lihat Lebih Banyak"}
                  </button>
                  
                  <div className="mt-auto">
                    <div className="font-semibold text-sm text-gray-700 mb-2">Aktivitas:</div>
                    <div className="flex flex-wrap gap-2">
                      {destination.activities.map((activity, idx) => (
                        <span 
                          key={idx}
                          className="bg-sea-blue/10 text-sea-blue text-xs py-1 px-2 rounded"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-sea-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Siap Untuk Berpetualang?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Jelajahi semua keindahan Pantai Karang Tawulan dan sekitarnya bersama guide lokal kami
          </p>
          <a 
            href="/paket-wisata" 
            className="inline-block bg-coral hover:bg-[#ff5a4c] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
          >
            Lihat Paket Wisata
          </a>
        </div>
      </section>
    </div>
  );
};

export default Destinasi;
