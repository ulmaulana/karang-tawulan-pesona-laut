
const TentangKami = () => {
  return (
    <div className="min-h-screen bg-sand pt-20">
      {/* Hero Section */}
      <div className="relative py-20 bg-sea-blue text-white text-center">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1516690561799-46d8f74f9abf")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tentang Kami</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Mengenal lebih dekat Pantai Karang Tawulan dan komunitas nelayan yang menjaga keindahannya
          </p>
        </div>
        <svg className="absolute bottom-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#f8f1e5" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,138.7C384,149,480,139,576,138.7C672,139,768,149,864,144C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title mb-8">Sejarah Pantai Karang Tawulan</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-md mb-12">
              <p className="mb-4 text-lg leading-relaxed">
                Pantai Karang Tawulan telah menjadi bagian penting dari kehidupan penduduk Kampung Cimanuk, Desa Kalapagenep 
                selama berabad-abad. Nama "Karang Tawulan" berasal dari formasi karang yang menjulang di tengah laut yang disebut 
                "Tawulan" oleh penduduk setempat.
              </p>
              <p className="mb-4 text-lg leading-relaxed">
                Secara historis, pantai ini adalah tempat nelayan tradisional mencari ikan dan menjalankan tradisi melaut yang 
                diturunkan dari generasi ke generasi. Hingga saat ini, banyak penduduk lokal masih mengandalkan laut sebagai 
                sumber mata pencaharian utama mereka.
              </p>
              <p className="text-lg leading-relaxed">
                Dalam beberapa tahun terakhir, keindahan alam Pantai Karang Tawulan mulai dikenal lebih luas dan menarik minat 
                wisatawan yang mencari destinasi pantai yang masih alami dan tidak terlalu ramai. Hal ini membuka peluang baru 
                bagi masyarakat lokal untuk mengembangkan ekonomi melalui sektor pariwisata sambil tetap melestarikan budaya 
                dan kearifan lokal.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-bold text-sea-blue mb-4">Visi</h2>
                <div className="bg-white p-6 rounded-lg shadow-md h-full">
                  <p className="text-gray-700">
                    Menjadikan Pantai Karang Tawulan sebagai destinasi ekowisata unggulan di Jawa Barat yang berkelanjutan, 
                    melestarikan alam dan budaya lokal, serta menyejahterakan masyarakat sekitar pantai.
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-sea-blue mb-4">Misi</h2>
                <div className="bg-white p-6 rounded-lg shadow-md h-full">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-coral mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Mengembangkan pariwisata bahari yang ramah lingkungan dan berkelanjutan</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-coral mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Memberdayakan masyarakat nelayan melalui pelatihan dan pengembangan usaha</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-coral mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Melestarikan kearifan lokal dan tradisi nelayan</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-coral mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Menjaga kelestarian ekosistem laut dan pantai</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <h2 className="section-title mb-8">Komunitas Nelayan</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-md mb-12">
              <p className="mb-6 text-lg leading-relaxed">
                Komunitas nelayan Pantai Karang Tawulan telah hidup berdampingan dengan laut selama berabad-abad. Dengan teknik 
                tradisional yang diwariskan dari generasi ke generasi, mereka menangkap ikan dengan tetap memperhatikan keberlanjutan 
                ekosistem laut.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-bold text-sea-blue mb-2">Aktivitas Nelayan</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-coral mr-2">•</span>
                      <span>Melaut pada dini hari hingga pagi</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-coral mr-2">•</span>
                      <span>Pengolahan hasil tangkapan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-coral mr-2">•</span>
                      <span>Pembuatan alat tangkap tradisional</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-coral mr-2">•</span>
                      <span>Ritual dan upacara tradisional</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-sea-blue mb-2">Inisiatif Keberlanjutan</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-coral mr-2">•</span>
                      <span>Pembatasan alat tangkap yang merusak</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-coral mr-2">•</span>
                      <span>Perlindungan terumbu karang</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-coral mr-2">•</span>
                      <span>Pembersihan pantai rutin</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-coral mr-2">•</span>
                      <span>Edukasi wisatawan tentang ekosistem</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <p className="text-lg leading-relaxed">
                Melalui pengembangan wisata bahari, komunitas nelayan kini memiliki tambahan sumber pendapatan dari menjadi 
                pemandu wisata, menyewakan perahu, dan menjual hasil olahan laut kepada pengunjung.
              </p>
            </div>
            
            <h2 className="section-title mb-8">Lokasi</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-md mb-12">
              <div className="mb-6 overflow-hidden rounded-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126300.83331013024!2d108.06078596985098!3d-7.742278436600159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e658eab90b882c5%3A0x3027a76e252e1e0e!2sCikalong%2C%20Tasikmalaya%20Regency%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1714338825641!5m2!1sen!2sid" 
                  width="100%" 
                  height="400" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map of Karang Tawulan Beach"
                ></iframe>
              </div>
              
              <h3 className="font-bold text-sea-blue text-xl mb-4">Cara Mencapai Lokasi</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1">Dari Bandung:</h4>
                  <p className="text-gray-700">
                    Perjalanan sekitar 4-5 jam melalui Garut, Tasikmalaya, kemudian menuju Kecamatan Cikalong. 
                    Dari pusat Kecamatan Cikalong, ikuti petunjuk arah menuju Desa Kalapagenep (sekitar 30 menit).
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-1">Dari Jakarta:</h4>
                  <p className="text-gray-700">
                    Perjalanan sekitar 7-8 jam melalui tol Cipularang, Tasikmalaya, kemudian menuju Kecamatan Cikalong. 
                    Dari pusat Kecamatan Cikalong, ikuti petunjuk arah menuju Desa Kalapagenep (sekitar 30 menit).
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-1">Dari Tasikmalaya:</h4>
                  <p className="text-gray-700">
                    Perjalanan sekitar 1.5-2 jam menuju Kecamatan Cikalong, kemudian ikuti petunjuk arah menuju 
                    Desa Kalapagenep (sekitar 30 menit).
                  </p>
                </div>
              </div>
            </div>
            
            <h2 className="section-title mb-8">Kontak</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="font-bold text-sea-blue text-xl mb-4">Informasi Kontak</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-coral mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <p className="text-gray-700">
                      Kampung Cimanuk, Desa Kalapagenep,<br />
                      Kecamatan Cikalong, Kabupaten Tasikmalaya,<br />
                      Jawa Barat, Indonesia
                    </p>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-coral mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <p className="text-gray-700">+62 812-3456-7890</p>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-coral mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <p className="text-gray-700">info@karangtawulan.com</p>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-coral mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                    </svg>
                    <p className="text-gray-700">www.karangtawulan.com</p>
                  </div>
                </div>
                
                <div className="mt-6 flex space-x-4">
                  <a href="https://instagram.com" className="text-gray-600 hover:text-coral transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.272.636 1.772 1.153.499.5.886 1.104 1.153 1.772.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.903 4.903 0 01-1.153 1.772c-.5.5-1.104.886-1.772 1.153-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.903 4.903 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="https://facebook.com" className="text-gray-600 hover:text-coral transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="https://twitter.com" className="text-gray-600 hover:text-coral transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="font-bold text-sea-blue text-xl mb-4">Kirim Pesan</h3>
                
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nama</label>
                    <input 
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sea-blue focus:border-transparent"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input 
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sea-blue focus:border-transparent"
                      placeholder="Masukkan email Anda"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Pesan</label>
                    <textarea 
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sea-blue focus:border-transparent"
                      placeholder="Tulis pesan Anda di sini..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-sea-blue hover:bg-[#0092e0] text-white font-bold py-3 px-4 rounded transition-colors duration-300"
                  >
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TentangKami;
