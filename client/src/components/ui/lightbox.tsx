import React, { useState, useEffect, useCallback } from 'react';
import { X } from 'lucide-react';
import { Button } from './button';

interface LightboxProps {
  images: string[];
  alt: string;
  initialIndex?: number;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  alt,
  initialIndex = 0,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'ArrowLeft') handlePrev();
    if (e.key === 'Escape') onClose();
  }, [handleNext, handlePrev, onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    // Prevent scrolling when lightbox is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [handleKeyDown]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
      <div className="relative max-w-4xl w-full p-4">
        <Button 
          variant="ghost" 
          className="absolute right-2 top-2 text-white z-10 hover:bg-black/20"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>
        
        <div className="flex items-center justify-center h-[70vh] w-full">
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src={images[currentIndex]} 
              alt={`${alt} - slide ${currentIndex + 1}`} 
              className="max-h-[calc(70vh-32px)] max-w-full object-contain mx-auto"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
        
        <div className="mt-4 grid grid-cols-3 sm:grid-cols-5 gap-2">
          {images.map((image, index) => (
            <div 
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`aspect-square overflow-hidden rounded cursor-pointer transition ${
                index === currentIndex ? 'border-2 border-primary' : 'opacity-70 hover:opacity-100'
              }`}
            >
              <img 
                src={image}
                alt={`${alt} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        <div className="absolute left-0 top-1/2 -translate-y-1/2 flex w-full justify-between px-4">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-black/20 h-12 w-12 rounded-full"
            onClick={handlePrev}
          >
            &lsaquo;
          </Button>
          <Button 
            variant="ghost" 
            className="text-white hover:bg-black/20 h-12 w-12 rounded-full"
            onClick={handleNext}
          >
            &rsaquo;
          </Button>
        </div>
        
        <div className="absolute bottom-4 left-0 w-full flex justify-center">
          <div className="bg-black bg-opacity-50 px-4 py-2 rounded-full">
            <span className="text-white">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
