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
    <div className="room-card bg-white rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg h-full flex flex-col">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={room.images[0]} 
          alt={room.name} 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="p-2 sm:p-3 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-xs sm:text-sm md:text-base font-serif font-bold w-3/5">{room.name}</h3>
          <span className="text-primary-dark font-medium text-xs whitespace-nowrap">ab {room.price} CHF</span>
        </div>
        <p className="text-neutral-dark text-xs mb-1 text-left">
          {room.shortDescription}
        </p>
        <div className="flex flex-wrap mb-1">
          <div className="flex items-center text-xs text-neutral-dark">
            <FontAwesomeIcon icon="user-friends" className="mr-1" />
            <span className="text-[10px] sm:text-xs">{room.capacity}</span>
          </div>
          <div className="flex items-center text-xs text-neutral-dark ml-2">
            <FontAwesomeIcon icon="vector-square" className="mr-1" />
            <span className="text-[10px] sm:text-xs">{room.size} m²</span>
          </div>
          <div className="flex items-center text-xs text-neutral-dark ml-2">
            <FontAwesomeIcon icon="bed" className="mr-1" />
            <span className="text-[10px] sm:text-xs">{room.bed}</span>
          </div>
        </div>
        <div className="flex gap-1 mt-1">
          <Link href={`/room/${room.id}`} className="w-1/2">
            <Button variant="outline" size="sm" className="w-full text-[10px] sm:text-xs py-1 h-7 px-1">
              Details
            </Button>
          </Link>
          <Link href={`/room/${room.id}#booking`} className="w-1/2">
            <Button size="sm" className="w-full bg-primary hover:bg-primary-light text-white text-[10px] sm:text-xs py-1 h-7 px-1">
              Buchen
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
