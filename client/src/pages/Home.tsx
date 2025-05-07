import React from 'react';
import { Link } from 'wouter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@/components/ui/button';
import RoomCard from '@/components/RoomCard';
import TestimonialCard from '@/components/TestimonialCard';
import { rooms } from '@/data/rooms';
import { testimonials } from '@/data/testimonials';

const Home: React.FC = () => {
  // Display only first 3 rooms on homepage
  const featuredRooms = rooms.slice(0, 3);
  
  return (
    <>
      {/* Hero Section */}
      <section 
        className="hero-section relative" 
        style={{ 
          backgroundImage: `url('/assets/hero_main.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        <div className="container mx-auto px-4 py-24 min-h-[80vh] flex items-center relative z-10">
          <div className="max-w-xl fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
              Urlaub im Herzen der Schweizer Alpen
            </h1>
            <p className="text-lg text-white mb-8">
              Genießen Sie die atemberaubende Aussicht und erstklassigen Service in unserem Boutique-Hotel seit 1784.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Link href="/rooms">
                <Button className="bg-primary hover:bg-primary-light text-white py-3 px-6 rounded-md transition duration-300 text-center w-full sm:w-auto">
                  Zimmer entdecken
                </Button>
              </Link>
              <Button 
                variant="secondary"
                className="bg-white hover:bg-neutral-light text-primary hover:text-primary-dark py-3 px-6 rounded-md transition duration-300 text-center w-full sm:w-auto"
                onClick={() => {
                  document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Verfügbarkeit prüfen
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img src="/assets/facade.webp" alt="Stocken Hotel Facade" className="w-full h-auto rounded-lg shadow-lg object-cover" />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-dark mb-6">
                Über Stocken
              </h2>
              <p className="text-lg text-neutral-dark mb-6">
                Seit 1784 verkörpert Stocken die Tradition der Schweizer Gastfreundschaft mit modernem Luxus. Unser historisches Gebäude wurde liebevoll renoviert, um Ihnen den Komfort des 21. Jahrhunderts zu bieten, ohne den zeitlosen Charme zu verlieren.
              </p>
              <p className="text-lg text-neutral-dark mb-8">
                Umgeben von der atemberaubenden Schönheit der Schweizer Alpen bietet unser Boutique-Hotel eine einzigartige Mischung aus Ruhe, Abenteuer und Kulinarik - eine wahre Oase für Reisende, die das Besondere suchen.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start">
                  <FontAwesomeIcon icon="leaf" className="text-primary-light text-xl mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium text-lg">Nachhaltigkeit</h3>
                    <p className="text-neutral-dark">Umweltbewusster Hotelbetrieb</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon icon="utensils" className="text-primary-light text-xl mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium text-lg">Küche</h3>
                    <p className="text-neutral-dark">Regionale Spezialitäten</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon icon="hiking" className="text-primary-light text-xl mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium text-lg">Aktivitäten</h3>
                    <p className="text-neutral-dark">Wandern und Skifahren</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon icon="spa" className="text-primary-light text-xl mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium text-lg">Wellness</h3>
                    <p className="text-neutral-dark">Sauna und Massage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Rooms Section */}
      <section id="rooms" className="py-20 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-dark mb-6">
              Unsere Zimmer
            </h2>
            <p className="text-lg text-neutral-dark">
              Jedes unserer Zimmer verbindet modernen Komfort mit alpenländischem Charme. Genießen Sie die Ruhe und den atemberaubenden Ausblick auf die Bergwelt.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map(room => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/rooms">
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Alle Zimmer anzeigen
                <FontAwesomeIcon icon="arrow-right" className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Restaurant Section */}
      <section id="restaurant" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-dark mb-6">
                Kulinarisches Erlebnis
              </h2>
              <p className="text-lg text-neutral-dark mb-6">
                Unser Restaurant "Bergblick" bietet eine exquisite Auswahl an traditionellen Schweizer Gerichten mit modernem Touch. Unser engagiertes Küchenteam verwendet ausschließlich frische, saisonale Zutaten von lokalen Produzenten.
              </p>
              <p className="text-lg text-neutral-dark mb-8">
                Genießen Sie Ihr Essen in unserem eleganten Speisesaal mit atemberaubendem Blick auf die umliegenden Berge oder auf unserer Terrasse bei gutem Wetter.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border-l-4 border-primary-light pl-4">
                  <h3 className="font-medium text-xl mb-2">Frühstück</h3>
                  <p className="text-neutral-dark">07:00 - 10:30 Uhr</p>
                </div>
                <div className="border-l-4 border-primary-light pl-4">
                  <h3 className="font-medium text-xl mb-2">Mittagessen</h3>
                  <p className="text-neutral-dark">12:00 - 14:00 Uhr</p>
                </div>
                <div className="border-l-4 border-primary-light pl-4">
                  <h3 className="font-medium text-xl mb-2">Abendessen</h3>
                  <p className="text-neutral-dark">18:00 - 22:00 Uhr</p>
                </div>
                <div className="border-l-4 border-primary-light pl-4">
                  <h3 className="font-medium text-xl mb-2">Bar</h3>
                  <p className="text-neutral-dark">14:00 - 24:00 Uhr</p>
                </div>
              </div>
              
              <Link href="/restaurant">
                <Button 
                  variant="link" 
                  className="inline-flex items-center text-primary font-medium hover:underline px-0"
                >
                  <span>Speisekarte ansehen</span>
                  <FontAwesomeIcon icon="arrow-right" className="ml-2 text-xs" />
                </Button>
              </Link>
            </div>
            <div className="lg:w-1/2">
              <img src="/assets/restaurant.webp" alt="Restaurant Bergblick" className="w-full h-auto rounded-lg shadow-lg object-cover" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-dark mb-6">
              Was unsere Gäste sagen
            </h2>
            <p className="text-lg text-neutral-dark">
              Entdecken Sie die Erfahrungen unserer Gäste und lassen Sie sich von ihren Erlebnissen inspirieren.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Booking Section */}
      <section id="booking" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center text-neutral-dark mb-8">
              Buchen Sie Ihren Aufenthalt
            </h2>
            
            <div className="bg-neutral-light p-6 rounded-lg shadow-sm">
              <iframe 
                src="https://booking-widget.example.com" 
                title="Booking Widget"
                className="w-full h-[450px] border-0 rounded"
              >
                {/* Fallback content if iframe doesn't load */}
                <p>Ihr Browser unterstützt keine iFrames. Bitte buchen Sie direkt über unsere Website oder rufen Sie uns an.</p>
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
