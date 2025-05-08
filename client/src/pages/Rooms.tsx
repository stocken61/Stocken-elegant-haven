import React, { useState } from 'react';
import RoomCard from '@/components/RoomCard';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { rooms } from '@/data/rooms';

const Rooms: React.FC = () => {
  const roomCategories = [
    { id: 'all', name: 'Alle Zimmer' },
    { id: 'standard', name: 'Standard' },
    { id: 'deluxe', name: 'Deluxe' },
    { id: 'suite', name: 'Suiten' }
  ];
  
  const [activeTab, setActiveTab] = useState('all');
  
  const filteredRooms = rooms.filter(room => {
    if (activeTab === 'all') return true;
    return room.category === activeTab;
  });
  
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative py-12 bg-cover bg-center bg-primary" 
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Unsere Zimmer
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Entdecken Sie unsere komfortablen Zimmer und Suiten mit Blick auf die Schweizer Alpen.
          </p>
        </div>
      </section>
      
      {/* Rooms Filter and List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Tabs 
              defaultValue="all" 
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full max-w-xl mx-auto"
            >
              <TabsList className="grid grid-cols-4">
                {roomCategories.map(category => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="text-sm md:text-base"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <div className="mt-8 text-left">
                <p className="text-neutral-dark mb-4">
                  {filteredRooms.length} Zimmer gefunden
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredRooms.map(room => (
                    <RoomCard key={room.id} room={room} />
                  ))}
                </div>
                
                {filteredRooms.length === 0 && (
                  <div className="text-center py-20">
                    <p className="text-lg text-neutral-dark">
                      Keine Zimmer in dieser Kategorie gefunden.
                    </p>
                  </div>
                )}
              </div>
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* Amenities Section */}
      <section className="py-20 bg-neutral-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-neutral-dark mb-12 text-center">
            Hotelausstattung
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium border-b border-neutral pb-4 mb-4">Inklusivleistungen</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Reichhaltiges Frühstücksbuffet</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Kostenloses WLAN</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Zugang zum Wellnessbereich</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Tägliche Zimmerreinigung</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Gepäckaufbewahrung</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium border-b border-neutral pb-4 mb-4">Wellness & Spa</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Finnische Sauna</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Dampfbad</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Ruhebereich</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Massageanwendungen*</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Kosmetikbehandlungen*</span>
                </li>
                <li className="text-xs text-neutral-dark mt-4">*Gegen Aufpreis</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium border-b border-neutral pb-4 mb-4">Aktivitäten</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Geführte Wanderungen*</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Mountainbike-Verleih*</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Skipass-Service (Winter)*</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Schneeschuhwandern (Winter)*</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Tagesausflüge*</span>
                </li>
                <li className="text-xs text-neutral-dark mt-4">*Gegen Aufpreis</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium border-b border-neutral pb-4 mb-4">Services</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>24h Rezeption</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Concierge-Service</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Shuttleservice*</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Wäscheservice*</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Parkplatz</span>
                </li>
                <li className="text-xs text-neutral-dark mt-4">*Gegen Aufpreis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rooms;
