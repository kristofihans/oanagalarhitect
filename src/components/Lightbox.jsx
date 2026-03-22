import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Lightbox.css';

const Lightbox = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext(e);
      if (e.key === 'ArrowLeft') onPrev(e);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        <X size={32} />
      </button>
      <button className="lightbox-nav prev" onClick={onPrev} aria-label="Previous image">
        <ChevronLeft size={48} />
      </button>
      <img src={images[currentIndex]} alt="Proiect mărit" className="lightbox-image" onClick={(e) => e.stopPropagation()} />
      <button className="lightbox-nav next" onClick={onNext} aria-label="Next image">
        <ChevronRight size={48} />
      </button>
    </div>
  );
};

export default Lightbox;
