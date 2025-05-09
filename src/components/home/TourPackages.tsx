
import { Clock, Users, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const packages = [
  {
    id: 1,
    title: 'Paket Eksplorasi Karang Tawulan',
    price: 'Rp350.000/orang',
    duration: '1 hari',
    people: '2-10 orang',
    location: 'Pantai Karang Tawulan',
    features: ['Transportasi Lokal', 'Pemandu Wisata', 'Makan Siang', 'Aktivitas Pantai']
  },
  {
    id: 2,
    title: 'Paket Keluarga Pantai Cimanuk',
    price: 'Rp500.000/orang',
    duration: '2 hari 1 malam',
    people: '3-6 orang',
    location: 'Pantai Cimanuk & Sekitarnya',
    features: ['Penginapan', 'Transportasi', '3x Makan', 'Aktivitas Keluarga']
  }
];

const TourPackages = () => {
  return (
    <section className="py-16 bg-sea-blue text-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white text-center mx-auto">Paket Wisata Unggulan</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto text-white/80">
          Nikmati pengalaman wisata lengkap dengan paket perjalanan yang telah kami siapkan untuk eksplorasi Pantai Karang Tawulan dan sekitarnya.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packages.map(pkg => (
            <div key={pkg.id} className="bg-white text-gray-800 rounded-lg overflow-hidden shadow-lg card-hover">
              <div className="bg-[#0092e0] p-4">
                <h3 className="text-xl font-bold text-white">{pkg.title}</h3>
              </div>
              <div className="p-6">
                <div className="text-2xl font-bold text-sea-blue mb-4">{pkg.price}</div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <Clock size={18} className="text-sea-blue mr-2" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={18} className="text-sea-blue mr-2" />
                    <span>{pkg.people}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={18} className="text-sea-blue mr-2" />
                    <span>{pkg.location}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="font-semibold mb-2">Termasuk:</div>
                  <ul className="space-y-1">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-4 h-4 text-coral mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  to="/paket-wisata"
                  className="block w-full text-center bg-coral hover:bg-[#ff5a4c] text-white font-semibold py-2 px-4 rounded transition-colors duration-300"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/paket-wisata"
            className="inline-block border-2 border-white text-white hover:bg-white hover:text-sea-blue font-semibold py-3 px-8 rounded-full transition-colors duration-300"
          >
            Lihat Semua Paket
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TourPackages;
