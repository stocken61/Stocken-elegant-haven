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
    <div className="fixed inset-0 z-50 flex flex-col bg-black bg-opacity-90">
      {/* Close Button - Always at top */}
      <div className="flex justify-end p-4">
        <button 
          onClick={onClose}
          className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
        >
          <X className="h-8 w-8 stroke-2" />
        </button>
      </div>
      
      {/* Main Image */}
      <div className="flex-1 flex items-center justify-center px-4 pb-4">
        <div className="relative w-full h-full max-w-4xl">
          <div className="flex items-center justify-center h-[50vh] md:h-[60vh] w-full mb-4">
            <img 
              src={images[currentIndex]} 
              alt={`${alt} - slide ${currentIndex + 1}`} 
              className="max-h-full max-w-full object-contain mx-auto"
              style={{ objectFit: 'contain' }}
            />
          </div>
          
          {/* Thumbnail Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
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
          
          {/* Navigation Arrows */}
          <div className="absolute left-0 top-1/4 flex w-full justify-between px-4">
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
          
          {/* Image Counter */}
          <div className="absolute bottom-0 left-0 w-full flex justify-center mb-20">
            <div className="bg-black bg-opacity-50 px-4 py-2 rounded-full">
              <span className="text-white">
                {currentIndex + 1} / {images.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};