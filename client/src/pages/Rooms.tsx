import React, { useState, useEffect } from 'react';
import RoomCard from '@/components/RoomCard';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { rooms, Room } from '@/data/rooms';

const Rooms: React.FC = () => {
  const roomCategories = [
    { id: 'all', name: 'Alle Zimmer' },
    { id: 'comfort', name: 'Komfort' },
    { id: 'deluxe', name: 'Deluxe' },
    { id: 'premium-suite', name: 'Premium Suite' },
    { id: 'premium-family', name: 'Familien Suite' }
  ];
  
  const [activeTab, setActiveTab] = useState('all');

  // Scroll to rooms section if hash is present
  useEffect(() => {
    if (window.location.hash === '#rooms-section') {
      const element = document.getElementById('rooms-section');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);
  
  // Pro Kategorie nur ein repräsentatives Zimmer anzeigen
  const filteredRooms = activeTab === 'all' 
    ? [
        rooms.find(room => room.category === 'comfort'),
        rooms.find(room => room.category === 'deluxe'),
        rooms.find(room => room.category === 'premium-suite'),
        rooms.find(room => room.category === 'premium-family')
      ].filter(Boolean) as Room[]
    : [rooms.find(room => room.category === activeTab)].filter(Boolean) as Room[];
  
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
            Entdecken Sie unsere komfortablen Zimmer und Suiten.
          </p>
        </div>
      </section>
      
      {/* Rooms Filter and List */}
      <section className="py-12 bg-white" id="rooms-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Tabs 
              defaultValue="all" 
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full max-w-6xl mx-auto"
            >
              <TabsList className="flex flex-wrap justify-center gap-0.5 md:gap-1 lg:gap-2 p-1">
                {roomCategories.map(category => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="flex-1 min-w-0 text-[8px] xs:text-[9px] md:text-[10px] lg:text-sm xl:text-base px-0.5 xs:px-1 md:px-2 lg:px-3 py-1 md:py-1.5 lg:py-2 leading-tight"
                    style={{ 
                      fontSize: 'clamp(8px, 1.8vw, 14px)',
                      minWidth: 'max-content'
                    }}
                  >
                    <span className="block leading-tight text-center whitespace-nowrap">
                      {category.name}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <div className="mt-8">
                <div className="container mx-auto px-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {filteredRooms.map(room => (
                      <RoomCard key={room.id} room={room} />
                    ))}
                  </div>
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
      <section className="py-12 bg-neutral-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-neutral-dark mb-8 text-center">
            Hotelausstattung
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium border-b border-neutral pb-4 mb-4">Inklusivleistungen</h3>
              <ul className="space-y-2">

                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Kostenloses WLAN</span>
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
