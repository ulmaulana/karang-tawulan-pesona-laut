
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Ikan Asap',
    price: 'Rp25.000 - Rp40.000',
    image: 'https://images.unsplash.com/photo-1603073163308-9627cb051823',
    description: 'Ikan segar yang diolah dengan teknik pengasapan tradisional selama berjam-jam untuk menghasilkan rasa yang khas dan aroma yang menggugah selera.',
    category: 'olahan',
    weight: '250g - 500g',
    sellerName: 'Pak Darmin'
  },
  {
    id: 2,
    name: 'Kerupuk Rumput Laut',
    price: 'Rp15.000',
    image: 'https://images.unsplash.com/photo-1591985666643-1ecc67616216',
    description: 'Kerupuk renyah berbahan dasar rumput laut segar yang diolah secara tradisional. Cocok sebagai camilan atau pendamping makan.',
    category: 'olahan',
    weight: '100g',
    sellerName: 'Bu Siti'
  },
  {
    id: 3,
    name: 'Ikan Asin',
    price: 'Rp30.000 - Rp45.000',
    image: 'https://images.unsplash.com/photo-1580554530778-ca36943938b2',
    description: 'Ikan yang diawetkan dengan metode penggaraman dan penjemuran alami di bawah sinar matahari pantai Karang Tawulan.',
    category: 'olahan',
    weight: '300g - 500g',
    sellerName: 'Pak Slamet'
  },
  {
    id: 4,
    name: 'Kerajinan Kerang',
    price: 'Rp50.000 - Rp150.000',
    image: 'https://images.unsplash.com/photo-1613740105081-e88271c0211d',
    description: 'Berbagai kerajinan tangan dari kerang dan cangkang laut yang dibuat oleh pengrajin lokal. Tersedia dalam berbagai bentuk dan ukuran.',
    category: 'kerajinan',
    weight: 'Bervariasi',
    sellerName: 'Keluarga Nelayan Cimanuk'
  },
  {
    id: 5,
    name: 'Terasi Udang',
    price: 'Rp20.000',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5',
    description: 'Bumbu masak berbahan dasar udang rebon yang difermentasi secara alami. Memberikan cita rasa gurih dan aroma khas pada masakan.',
    category: 'olahan',
    weight: '100g',
    sellerName: 'Bu Yanti'
  },
  {
    id: 6,
    name: 'Ikan Teri Crispy',
    price: 'Rp18.000',
    image: 'https://images.unsplash.com/photo-1555126634-323283e090fa',
    description: 'Ikan teri yang diolah dengan bumbu khusus dan digoreng hingga renyah. Sangat cocok sebagai lauk atau camilan.',
    category: 'olahan',
    weight: '150g',
    sellerName: 'Bu Mimin'
  },
  {
    id: 7,
    name: 'Hiasan Dinding Laut',
    price: 'Rp75.000 - Rp200.000',
    image: 'https://images.unsplash.com/photo-1531685932387-e60fae5f6163',
    description: 'Hiasan dinding bertema laut yang dibuat dari kombinasi kayu apung, kerang, dan material alami lainnya.',
    category: 'kerajinan',
    weight: 'Bervariasi',
    sellerName: 'Sanggar Kreatif Pantai'
  },
  {
    id: 8,
    name: 'Ikan Segar',
    price: 'Rp35.000 - Rp100.000/kg',
    image: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d',
    description: 'Berbagai jenis ikan segar hasil tangkapan nelayan lokal. Tersedia setiap pagi dan sore hari.',
    category: 'segar',
    weight: 'Per kilogram',
    sellerName: 'Koperasi Nelayan Cimanuk'
  },
  {
    id: 9,
    name: 'Udang dan Kepiting',
    price: 'Rp80.000 - Rp150.000/kg',
    image: 'https://images.unsplash.com/photo-1565680018160-64b74dd0fd2c',
    description: 'Udang dan kepiting segar hasil tangkapan langsung dari perairan Karang Tawulan.',
    category: 'segar',
    weight: 'Per kilogram',
    sellerName: 'Koperasi Nelayan Cimanuk'
  }
];

const categories = [
  { id: 'all', name: 'Semua Produk' },
  { id: 'segar', name: 'Hasil Laut Segar' },
  { id: 'olahan', name: 'Olahan Laut' },
  { id: 'kerajinan', name: 'Kerajinan' }
];

const ProdukNelayan = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);
  
  return (
    <div className="min-h-screen bg-sand pt-20">
      {/* Hero Section */}
      <div className="relative py-20 bg-sea-blue text-white text-center">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1534177616072-ef7dc120449d")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Produk Nelayan</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Temukan hasil laut segar dan berbagai olahan tradisional dari nelayan lokal Pantai Karang Tawulan
          </p>
        </div>
        <svg className="absolute bottom-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#f8f1e5" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,138.7C384,149,480,139,576,138.7C672,139,768,149,864,144C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <p className="text-center mb-8 max-w-2xl mx-auto text-gray-700">
            Produk-produk di bawah ini dapat Anda temukan langsung di Kampung Nelayan Cimanuk atau melalui koperasi nelayan setempat. 
            Setiap pembelian akan langsung mendukung ekonomi masyarakat lokal.
          </p>
          
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
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg overflow-hidden shadow-lg card-hover transition-all duration-300"
                onClick={() => setSelectedProduct(product.id === selectedProduct ? null : product.id)}
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-sea-blue">{product.name}</h3>
                    <span className="bg-coral/10 text-coral text-xs py-1 px-2 rounded">
                      {product.category === 'segar' && 'Segar'}
                      {product.category === 'olahan' && 'Olahan'}
                      {product.category === 'kerajinan' && 'Kerajinan'}
                    </span>
                  </div>
                  
                  <p className="text-coral font-semibold mb-4">{product.price}</p>
                  
                  <p className="text-gray-700 mb-4">
                    {selectedProduct === product.id 
                      ? product.description 
                      : `${product.description.substring(0, 100)}...`}
                  </p>
                  
                  <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
                    <div>Berat: {product.weight}</div>
                    <div>Penjual: {product.sellerName}</div>
                  </div>
                  
                  <button 
                    className="w-full mt-4 text-center bg-sea-blue hover:bg-[#0092e0] text-white py-2 px-4 rounded transition-colors duration-300"
                  >
                    Tertarik dengan produk ini
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">Tidak ada produk dalam kategori ini.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title mb-8">Informasi Produk Nelayan</h2>
            
            <div className="bg-sand/50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-sea-blue mb-4">Cara Pembelian</h3>
              <p className="mb-6">
                Saat ini, pembelian produk nelayan dapat dilakukan dengan cara:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li>Mengunjungi langsung Kampung Nelayan Cimanuk</li>
                <li>Melalui Koperasi Nelayan di pusat informasi Pantai Karang Tawulan</li>
                <li>Pre-order melalui WhatsApp untuk pengiriman ke luar kota (minimal pembelian tertentu)</li>
              </ul>
              
              <h3 className="text-xl font-bold text-sea-blue mb-4">Jam Operasional</h3>
              <ul className="space-y-2">
                <li><strong>Pasar Ikan Segar:</strong> 06.00 - 09.00 WIB (setelah nelayan kembali melaut)</li>
                <li><strong>Toko Olahan & Kerajinan:</strong> 08.00 - 17.00 WIB (setiap hari)</li>
                <li><strong>Koperasi Nelayan:</strong> 08.00 - 16.00 WIB (Senin - Sabtu)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProdukNelayan;
