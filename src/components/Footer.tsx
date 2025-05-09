
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-sea-blue text-white">
      <div className="wave-divider transform rotate-180"></div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-poppins font-bold mb-4">Pantai Karang Tawulan</h3>
            <p className="mb-4">
              Temukan pesona pantai selatan Jawa Barat dengan pemandangan tebing karang yang memukau dan budaya nelayan yang kaya.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="hover:text-coral transition-colors duration-300">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com" className="hover:text-coral transition-colors duration-300">
                <Facebook size={24} />
              </a>
              <a href="https://twitter.com" className="hover:text-coral transition-colors duration-300">
                <Twitter size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-poppins font-bold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-coral transition-colors duration-300">Beranda</Link></li>
              <li><Link to="/destinasi" className="hover:text-coral transition-colors duration-300">Destinasi</Link></li>
              <li><Link to="/paket-wisata" className="hover:text-coral transition-colors duration-300">Paket Wisata</Link></li>
              <li><Link to="/produk-nelayan" className="hover:text-coral transition-colors duration-300">Produk Nelayan</Link></li>
              <li><Link to="/galeri" className="hover:text-coral transition-colors duration-300">Galeri</Link></li>
              <li><Link to="/tentang-kami" className="hover:text-coral transition-colors duration-300">Tentang Kami</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-poppins font-bold mb-4">Kontak</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <p>
                  Kampung Cimanuk, Desa Kalapagenep, Kecamatan Cikalong, Kabupaten Tasikmalaya, Jawa Barat, Indonesia
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} />
                <p>+62 812-3456-7890</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} />
                <p>info@karangtawulan.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#00598a] py-4 text-center text-sm">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Pantai Karang Tawulan. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
