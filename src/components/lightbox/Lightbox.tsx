
import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: { id: number; src: string; alt: string }[];
  currentImage: number;
  onClose: () => void;
}

const Lightbox = ({ images, currentImage, onClose }: LightboxProps) => {
  const [current, setCurrent] = useState(currentImage);
  
  useEffect(() => {
    // Disable scrolling when lightbox is open
    document.body.style.overflow = 'hidden';
    
    // Handle keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    // Cleanup
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);
  
  const next = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };
  
  const prev = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-coral transition-colors duration-300"
        aria-label="Close lightbox"
      >
        <X size={32} />
      </button>
      
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-coral transition-colors duration-300"
        aria-label="Previous image"
      >
        <ChevronLeft size={40} />
      </button>
      
      <div className="relative max-h-[80vh] max-w-[90vw]">
        <img 
          src={images[current].src} 
          alt={images[current].alt}
          className="max-h-[80vh] max-w-[90vw] object-contain"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 text-center">
          {images[current].alt}
        </div>
      </div>
      
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-coral transition-colors duration-300"
        aria-label="Next image"
      >
        <ChevronRight size={40} />
      </button>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full ${idx === current ? 'bg-coral' : 'bg-white/50'}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Lightbox;
