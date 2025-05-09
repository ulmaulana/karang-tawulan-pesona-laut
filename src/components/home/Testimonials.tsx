
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Budi Santoso',
    location: 'Jakarta',
    text: 'Pantai Karang Tawulan memiliki pemandangan yang sangat menakjubkan. Tebing karang dan ombaknya sangat indah untuk difoto. Ikan asap yang dijual di sana juga sangat lezat!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 2,
    name: 'Siti Nurhaliza',
    location: 'Bandung',
    text: 'Berkunjung ke Pantai Karang Tawulan adalah pengalaman yang menyenangkan. Pemandunya ramah dan informatif. Paket wisata yang ditawarkan juga sangat worth it.',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 3,
    name: 'Agung Hermawan',
    location: 'Yogyakarta',
    text: 'Suasana pantai yang tenang dan tidak terlalu ramai membuat liburan keluarga kami sangat menyenangkan. Anak-anak sangat senang bermain di pantai yang bersih.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/22.jpg'
  },
  {
    id: 4,
    name: 'Lisa Permatasari',
    location: 'Surabaya',
    text: 'Kerajinan kerang yang dijual oleh penduduk lokal sangat unik dan berkualitas. Pantainya juga sangat indah dan cocok untuk spot foto pre-wedding.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/57.jpg'
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const next = () => {
    setCurrent(current === testimonials.length - itemsToShow ? 0 : current + 1);
  };
  
  const prev = () => {
    setCurrent(current === 0 ? testimonials.length - itemsToShow : current - 1);
  };
  
  const displayedTestimonials = testimonials.slice(current, current + itemsToShow);
  if (displayedTestimonials.length < itemsToShow && testimonials.length > itemsToShow) {
    // Add items from the beginning if we're near the end
    const remaining = itemsToShow - displayedTestimonials.length;
    const additionalItems = testimonials.slice(0, remaining);
    displayedTestimonials.push(...additionalItems);
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto">Apa Kata Pengunjung</h2>
        
        <div className="relative mt-12">
          <div className="flex space-x-6 overflow-hidden">
            {displayedTestimonials.map((testimonial, index) => (
              <div 
                key={`${testimonial.id}-${index}`} 
                className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-lg shadow-lg p-6 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.location}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      fill={i < testimonial.rating ? "#ff6f61" : "none"} 
                      color={i < testimonial.rating ? "#ff6f61" : "#d1d5db"} 
                    />
                  ))}
                </div>
                <p className="text-gray-700">{testimonial.text}</p>
              </div>
            ))}
          </div>
          
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white rounded-full shadow-lg w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-600 hover:text-sea-blue transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white rounded-full shadow-lg w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-600 hover:text-sea-blue transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        <div className="flex justify-center mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`w-2 h-2 mx-1 rounded-full ${
                idx >= current && idx < current + itemsToShow ? 'bg-coral' : 'bg-gray-300'
              }`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
