import React, { useState } from 'react';
import { useRoute } from 'wouter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Lightbox } from '@/components/ui/lightbox';
import BookingForm from '@/components/BookingForm';
import { rooms } from '@/data/rooms';

const RoomDetail: React.FC = () => {
  const [match, params] = useRoute('/room/:id');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  if (!match || !params) {
    return <div>Room not found</div>;
  }
  
  const room = rooms.find(r => r.id === params.id);
  
  if (!room) {
    return <div>Room not found</div>;
  }
  
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-7/12">
            <div className="mb-8">
              <div className="mb-4">
                <div className="aspect-[4/3] overflow-hidden rounded-lg">
                  <img 
                    src={room.images[0]} 
                    alt={`${room.name} Hauptansicht`} 
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => openLightbox(0)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {room.images.slice(0, 4).map((image, index) => (
                  <div 
                    key={index} 
                    className="aspect-square overflow-hidden rounded cursor-pointer hover:opacity-80 transition"
                    onClick={() => openLightbox(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${room.name} Ansicht ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <h2 className="text-3xl font-serif font-bold text-neutral-dark mb-6">
              {room.name}
            </h2>
            
            <div className="mb-8">
              <p className="text-lg text-neutral-dark mb-4">
                {room.description}
              </p>
              <p className="text-lg text-neutral-dark mb-4">
                {room.extendedDescription}
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Zimmerausstattung</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {room.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <FontAwesomeIcon icon="check" className="text-primary mr-2" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Room specs */}
            <div className="mb-8 bg-neutral-light p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Zimmerdetails</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <FontAwesomeIcon icon="vector-square" className="text-primary-light text-2xl mb-2" />
                  <p className="font-medium">{room.size} m²</p>
                  <p className="text-sm text-neutral-dark">Zimmergröße</p>
                </div>
                <div className="text-center">
                  <FontAwesomeIcon icon="user-friends" className="text-primary-light text-2xl mb-2" />
                  <p className="font-medium">{room.capacity}</p>
                  <p className="text-sm text-neutral-dark">Kapazität</p>
                </div>
                <div className="text-center">
                  <FontAwesomeIcon icon="bed" className="text-primary-light text-2xl mb-2" />
                  <p className="font-medium whitespace-nowrap">{room.bed}</p>
                  <p className="text-sm text-neutral-dark">Betttyp</p>
                </div>
                <div className="text-center">
                  <FontAwesomeIcon icon="mountain" className="text-primary-light text-2xl mb-2" />
                  <p className="font-medium">{room.view}</p>
                  <p className="text-sm text-neutral-dark">Aussicht</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Booking Sidebar */}
          <div className="lg:w-5/12 bg-neutral-light p-6 rounded-lg shadow-sm" id="booking">
            <h3 className="text-2xl font-serif font-bold text-neutral-dark mb-6">
              Verfügbarkeit prüfen
            </h3>
            <BookingForm roomId={room.id} roomPrice={room.price} />
          </div>
        </div>
      </div>
      
      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox 
          images={room.images}
          alt={room.name}
          initialIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </section>
  );
};

export default RoomDetail;
