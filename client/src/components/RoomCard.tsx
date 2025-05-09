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
      <div className="aspect-square sm:aspect-video overflow-hidden">
        <img 
          src={room.images[0]} 
          alt={room.name} 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-serif font-bold">{room.name}</h3>
          <span className="text-primary-dark font-medium">ab {room.price} CHF</span>
        </div>
        <p className="text-neutral-dark text-sm mb-4">
          {room.shortDescription.length > 70 ? room.shortDescription.substring(0, 70) + '...' : room.shortDescription}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="flex items-center text-xs text-neutral-dark">
            <FontAwesomeIcon icon="user-friends" className="mr-1" />
            <span>{room.capacity} {room.capacity === 1 ? 'Person' : 'Personen'}</span>
          </div>
          <div className="flex items-center text-xs text-neutral-dark ml-2">
            <FontAwesomeIcon icon="vector-square" className="mr-1" />
            <span>{room.size} m²</span>
          </div>
          <div className="flex items-center text-xs text-neutral-dark w-full mt-1">
            <FontAwesomeIcon icon="bed" className="mr-1" />
            <span>{room.bed}</span>
          </div>
        </div>
        <div className="flex gap-2 mt-auto">
          <Link href={`/room/${room.id}`}>
            <Button variant="outline" className="flex-1 text-sm py-1 h-auto">
              Details
            </Button>
          </Link>
          <Link href={`/room/${room.id}#booking`}>
            <Button className="bg-primary hover:bg-primary-light text-white flex-1 text-sm py-1 h-auto">
              Buchen
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
