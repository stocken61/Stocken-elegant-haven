import React from 'react';
import { Link } from 'wouter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Room } from '@/data/rooms';
import { Button } from '@/components/ui/button';

interface RoomCardProps {
  room: Room;
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  return (
    <div className="room-card bg-white rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg h-full flex flex-col min-h-[420px]">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={room.images[0]} 
          alt={room.name} 
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            console.error('Failed to load image:', room.images[0]);
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm md:text-base font-serif font-bold">{room.name}</h3>
          <span className="text-primary-dark font-medium text-sm whitespace-nowrap">ab {room.price} CHF</span>
        </div>
        <p className="text-neutral-dark text-sm mb-3 text-left flex-grow">
          {room.shortDescription}
        </p>
        <div className="flex flex-wrap mb-4 gap-2">
          <div className="flex items-center text-sm text-neutral-dark">
            <FontAwesomeIcon icon="user-friends" className="mr-1" />
            <span>{room.capacity}</span>
          </div>
          <div className="flex items-center text-sm text-neutral-dark">
            <FontAwesomeIcon icon="vector-square" className="mr-1" />
            <span>{room.size} m²</span>
          </div>
          <div className="flex items-center text-sm text-neutral-dark">
            <FontAwesomeIcon icon="bed" className="mr-1" />
            <span className="whitespace-nowrap">{room.bed}</span>
          </div>
        </div>
        <div className="flex gap-2 mt-auto">
          <Link href={`/room/${room.id}`} className="w-1/2">
            <Button variant="outline" size="sm" className="w-full text-sm py-2 min-w-[140px]">
              Details
            </Button>
          </Link>
          <a 
            href="https://www.booking.com/hotel/ch/boutique-stocken-by-pontera.de.html" 
            target="_blank" 
            rel="noopener" 
            className="w-1/2 bg-primary hover:bg-primary-light text-white text-sm py-2 rounded-md transition-colors flex items-center justify-center book-button min-w-[140px]"
          >
            Buchen
          </a>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
