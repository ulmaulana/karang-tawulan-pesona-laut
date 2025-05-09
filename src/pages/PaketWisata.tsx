
import { Clock, Users, MapPin, Calendar, Coffee, Utensils } from 'lucide-react';

const packages = [
  {
    id: 1,
    title: 'Paket Eksplorasi Karang Tawulan',
    price: 'Rp350.000/orang',
    duration: '1 hari',
    people: '2-10 orang',
    location: 'Pantai Karang Tawulan',
    description: 'Paket wisata satu hari penuh untuk menjelajahi keindahan Pantai Karang Tawulan dengan dipandu oleh pemandu lokal yang berpengalaman.',
    image: 'https://images.unsplash.com/photo-1537824598505-99ee03483384',
    schedule: [
      { time: '08:00', activity: 'Kedatangan & Welcome Drink' },
      { time: '08:30', activity: 'Penjelasan tentang Karang Tawulan' },
      { time: '09:00', activity: 'Eksplorasi Pantai & Tebing' },
      { time: '12:00', activity: 'Makan Siang di Gazebo Pantai' },
      { time: '13:30', activity: 'Perjalanan ke Bukit Pandang' },
      { time: '15:00', activity: 'Snorkeling/Berenang (Opsional)' },
      { time: '17:00', activity: 'Menikmati Sunset' },
      { time: '18:30', activity: 'Kembali & Makan Malam' },
    ],
    includes: [
      'Transportasi lokal dari meeting point',
      'Pemandu wisata lokal',
      'Makan siang dan makan malam',
      'Air mineral',
      'Perlengkapan snorkeling',
      'Dokumentasi foto'
    ],
    excludes: [
      'Transportasi ke meeting point',
      'Pengeluaran pribadi',
      'Asuransi perjalanan'
    ]
  },
  {
    id: 2,
    title: 'Paket Keluarga Pantai Cimanuk',
    price: 'Rp500.000/orang',
    duration: '2 hari 1 malam',
    people: '3-6 orang',
    location: 'Pantai Cimanuk & Sekitarnya',
    description: 'Paket liburan keluarga yang dirancang untuk memberikan pengalaman bahari yang berkesan dengan aktivitas yang cocok untuk semua usia.',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300',
    schedule: [
      { time: 'Hari 1, 10:00', activity: 'Kedatangan di Penginapan & Check-in' },
      { time: 'Hari 1, 12:00', activity: 'Makan Siang & Istirahat' },
      { time: 'Hari 1, 14:00', activity: 'Eksplorasi Pantai Cimanuk' },
      { time: 'Hari 1, 16:00', activity: 'Workshop Kerajinan Kerang' },
      { time: 'Hari 1, 18:30', activity: 'BBQ Makan Malam di Pantai' },
      { time: 'Hari 2, 06:00', activity: 'Melihat Matahari Terbit (Opsional)' },
      { time: 'Hari 2, 08:00', activity: 'Sarapan' },
      { time: 'Hari 2, 09:30', activity: 'Mengunjungi Kampung Nelayan' },
      { time: 'Hari 2, 12:00', activity: 'Makan Siang & Kembali' }
    ],
    includes: [
      'Penginapan (homestay/guest house)',
      'Transportasi lokal',
      '3x makan (makan siang & malam hari 1, sarapan hari 2)',
      'Aktivitas keluarga',
      'Pemandu wisata lokal',
      'Dokumentasi foto'
    ],
    excludes: [
      'Transportasi ke meeting point',
      'Pengeluaran pribadi',
      'Makan siang hari ke-2',
      'Asuransi perjalanan'
    ]
  },
  {
    id: 3,
    title: 'Paket Fotografi Landscape',
    price: 'Rp450.000/orang',
    duration: '1 hari',
    people: '1-5 orang',
    location: 'Karang Tawulan, Bukit Pandang & Goa Pantai',
    description: 'Paket khusus untuk fotografer atau penggemar fotografi yang ingin mengabadikan keindahan panorama Pantai Karang Tawulan dari berbagai sudut terbaik.',
    image: 'https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81',
    schedule: [
      { time: '05:00', activity: 'Bertemu di Meeting Point (Subuh)' },
      { time: '05:30', activity: 'Perjalanan ke Bukit Pandang' },
      { time: '06:00', activity: 'Sesi Foto Sunrise' },
      { time: '08:00', activity: 'Sarapan' },
      { time: '09:30', activity: 'Eksplorasi & Foto di Tebing Karang' },
      { time: '12:00', activity: 'Istirahat & Makan Siang' },
      { time: '14:30', activity: 'Sesi Foto di Goa Pantai (saat air surut)' },
      { time: '17:00', activity: 'Sesi Foto Sunset di Pantai' },
      { time: '19:00', activity: 'Evaluasi Hasil Foto & Makan Malam' }
    ],
    includes: [
      'Guide Fotografer Profesional',
      'Transportasi lokal',
      'Sarapan, makan siang dan makan malam',
      'Akses ke spot foto terbaik',
      'Tips & trik fotografi landscape',
      'Post-processing workshop singkat'
    ],
    excludes: [
      'Peralatan fotografi',
      'Transportasi ke meeting point',
      'Pengeluaran pribadi',
      'Asuransi perjalanan'
    ]
  }
];

const PaketWisata = () => {
  return (
    <div className="min-h-screen bg-sand pt-20">
      {/* Hero Section */}
      <div className="relative py-20 bg-sea-blue text-white text-center">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1537824598505-99ee03483384")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Paket Wisata</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Nikmati pengalaman wisata terbaik di Pantai Karang Tawulan dengan paket perjalanan yang telah kami rancang khusus
          </p>
        </div>
        <svg className="absolute bottom-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#f8f1e5" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,138.7C384,149,480,139,576,138.7C672,139,768,149,864,144C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      {/* Tour Packages Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <p className="text-center mb-12 max-w-2xl mx-auto text-gray-700">
            Setiap paket wisata kami dirancang untuk memberikan pengalaman terbaik dengan didampingi pemandu lokal yang berpengalaman. 
            Semua harga dapat disesuaikan berdasarkan jumlah peserta.
          </p>
          
          <div className="space-y-12">
            {packages.map((pkg, index) => (
              <div 
                key={pkg.id} 
                className={`bg-white rounded-lg shadow-lg overflow-hidden ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} md:flex`}
              >
                <div className="md:w-2/5">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title} 
                    className="w-full h-full object-cover"
                    style={{ minHeight: '300px' }}
                  />
                </div>
                
                <div className="p-6 md:w-3/5">
                  <h2 className="text-2xl font-bold text-sea-blue mb-2">{pkg.title}</h2>
                  <div className="text-xl font-semibold text-coral mb-4">{pkg.price}</div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
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
                  
                  <p className="text-gray-700 mb-6">{pkg.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="font-bold text-gray-800 flex items-center mb-3">
                      <Calendar size={18} className="mr-2 text-sea-blue" />
                      Jadwal
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {pkg.schedule.slice(0, 6).map((item, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className="font-medium w-16 flex-shrink-0">{item.time}</div>
                            <div>{item.activity}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold text-gray-800 flex items-center mb-3">
                        <Coffee size={18} className="mr-2 text-sea-blue" />
                        Termasuk
                      </h3>
                      <ul className="space-y-1">
                        {pkg.includes.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-4 h-4 text-coral mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-gray-800 flex items-center mb-3">
                        <Utensils size={18} className="mr-2 text-sea-blue" />
                        Tidak Termasuk
                      </h3>
                      <ul className="space-y-1">
                        {pkg.excludes.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-4 h-4 text-gray-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <a 
                    href="https://wa.me/6281234567890?text=Saya%20tertarik%20dengan%20paket%20wisata%20" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-coral hover:bg-[#ff5a4c] text-white font-semibold py-2 px-6 rounded-full mt-6 transition-colors duration-300"
                  >
                    Pesan Sekarang via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mx-auto">Pertanyaan Umum</h2>
          
          <div className="max-w-3xl mx-auto mt-8">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Berapa minimal peserta untuk booking paket wisata?</h3>
                <p className="text-gray-700">Setiap paket memiliki ketentuan minimal peserta yang berbeda, namun umumnya minimal 2 orang. Untuk solo traveler, kami dapat menyesuaikan paket dengan harga yang berbeda.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Bagaimana cara melakukan reservasi?</h3>
                <p className="text-gray-700">Reservasi dapat dilakukan melalui WhatsApp atau menghubungi kontak yang tersedia di website. Pembayaran uang muka sebesar 30% diperlukan untuk mengkonfirmasi pemesanan.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Apakah paket wisata dapat disesuaikan?</h3>
                <p className="text-gray-700">Ya, kami dapat menyesuaikan paket wisata berdasarkan kebutuhan dan permintaan khusus Anda. Silakan hubungi kami untuk mendiskusikan paket wisata yang Anda inginkan.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Bagaimana jika cuaca tidak mendukung?</h3>
                <p className="text-gray-700">Untuk alasan keamanan, kami berhak menunda atau mengubah jadwal tur jika cuaca tidak mendukung. Kami akan menawarkan penjadwalan ulang atau alternatif aktivitas lain.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaketWisata;
