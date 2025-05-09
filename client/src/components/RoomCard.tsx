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
    <div className="room-card bg-white rounded-lg overflow-hidden shadow-md">
      <div className="aspect-square overflow-hidden">
        <img 
          src={room.images[0]} 
          alt={room.name} 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-serif font-bold">{room.name}</h3>
          <span className="text-primary-dark font-medium">ab {room.price} CHF</span>
        </div>
        <p className="text-neutral-dark mb-6">
          {room.shortDescription}
        </p>
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center text-sm text-neutral-dark">
            <FontAwesomeIcon icon="user-friends" className="mr-2" />
            <span>{room.capacity} {room.capacity === 1 ? 'Person' : 'Personen'}</span>
          </div>
          <div className="flex items-center text-sm text-neutral-dark">
            <FontAwesomeIcon icon="vector-square" className="mr-2" />
            <span>{room.size} m²</span>
          </div>
          <div className="flex items-center text-sm text-neutral-dark">
            <FontAwesomeIcon icon="bed" className="mr-2" />
            <span>{room.bed}</span>
          </div>
        </div>
        <div className="flex gap-3">
          <Link href={`/room/${room.id}`}>
            <Button variant="outline" className="flex-1">
              Details
            </Button>
          </Link>
          <Link href={`/room/${room.id}#booking`}>
            <Button className="bg-primary hover:bg-primary-light text-white flex-1">
              Buchen
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
