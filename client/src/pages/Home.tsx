import React from 'react';
import { Link } from 'wouter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/i18n/LanguageContext';
import heroImage from '@assets/hero_main.png';

const Home: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <>
      {/* Hero Section */}
      <section 
        className="hero relative h-[65vh] min-h-[400px] max-h-[550px]" 
        style={{ 
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="hero-content text-center py-12 absolute inset-0 flex flex-col items-center justify-start pt-12 md:pt-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
            {t.home.hero.title}
          </h1>
          <p className="text-xl text-white mb-6">
            {t.home.hero.subtitle}
          </p>
          <div className="hero-buttons flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 mt-8">
            <Link 
              href="/rooms"
              className="bg-primary hover:bg-primary-light text-white py-3 px-6 rounded-md transition duration-300 text-center w-full sm:w-auto inline-block min-w-[140px]"
            >
              {t.home.hero.ourRooms}
            </Link>
            <a 
              href="https://www.booking.com/hotel/ch/boutique-stocken-by-pontera.de.html" 
              target="_blank" 
              rel="noopener" 
              className="bg-[#8B5A2B] hover:bg-[#7A4A1D] text-white py-3 px-6 rounded-md transition duration-300 text-center w-full sm:w-auto inline-block book-button min-w-[140px]"
            >
              {t.home.hero.bookNow}
            </a>
          </div>
        </div>
      </section>
      
      {/* Hotel Benefits Section */}
      <section className="hotel-benefits -mt-1 bg-neutral-light py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-primary text-3xl mb-2">
                <FontAwesomeIcon icon="map-marker-alt" />
              </div>
              <h3 className="font-semibold mb-1">{t.home.benefits.perfectLocation.title}</h3>
              <p className="text-sm text-neutral-dark">{t.home.benefits.perfectLocation.description}</p>
            </div>
            
            <div className="p-4">
              <div className="text-primary text-3xl mb-2">
                <FontAwesomeIcon icon="star" />
              </div>
              <h3 className="font-semibold mb-1">{t.home.benefits.bestPrice.title}</h3>
              <p className="text-sm text-neutral-dark">{t.home.benefits.bestPrice.description}</p>
            </div>
            
            <div className="p-4">
              <div className="text-primary text-3xl mb-2">
                <FontAwesomeIcon icon="coffee" />
              </div>
              <h3 className="font-semibold mb-1">{t.home.benefits.breakfast.title}</h3>
              <p className="text-sm text-neutral-dark">{t.home.benefits.breakfast.description}</p>
            </div>
            
            <div className="p-4">
              <div className="text-primary text-3xl mb-2">
                <FontAwesomeIcon icon="wifi" />
              </div>
              <h3 className="font-semibold mb-1">{t.home.benefits.wifi.title}</h3>
              <p className="text-sm text-neutral-dark">{t.home.benefits.wifi.description}</p>
            </div>
          </div>
          
          {/* Der "Jetzt buchen" Button wurde nach unten versetzt */}
        </div>
      </section>

      {/* About Section */}
      {/* Buchen Button wurde entfernt */}
      
      <section className="about-preview py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 p-6">
              <h2 className="text-3xl font-serif font-bold text-neutral-dark mb-6">
                Boutique Hotel Stocken
              </h2>
              <p className="text-lg text-neutral-dark mb-6">
                {t.about.description}
              </p>
              <Link href="/about" className="text-primary hover:text-primary-dark font-medium transition-colors">
                {t.about.learnMore}
              </Link>
            </div>
            <div className="lg:w-1/2 p-6">
              <div className="aspect-square overflow-hidden shadow-lg rounded-lg max-w-sm md:max-w-sm lg:max-w-md mx-auto">
                <img 
                  src="/reception_desk_new.jpg" 
                  alt="Hotel Empfangsbereich - Moderne Rezeption mit Mooswand" 
                  className="w-full h-full object-cover rounded-lg"
                  style={{ objectPosition: 'center 70%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Categories Preview */}
      <section className="rooms-preview py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center text-neutral-dark mb-10">
            {t.home.rooms.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Deluxe Zimmer */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col h-full">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/assets/rooms/deluxe-room.png" 
                  alt="Deluxe Zimmer" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-heading-gray">{t.home.rooms.deluxe}</h3>
                <p className="text-neutral-dark mb-4 flex-grow">{t.home.rooms.deluxeDesc}</p>
                <Link 
                  href="/rooms#deluxe" 
                  className="text-primary hover:text-white hover:bg-primary hover:shadow-lg font-medium transition-all duration-300 px-4 py-2 rounded-md inline-block mt-auto"
                >
                  {t.rooms.details.viewDetails}
                </Link>
              </div>
            </div>
            
            {/* Premium Suite */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col h-full">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/assets/rooms/premium-suite-bed.png" 
                  alt="Premium Suite" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-heading-gray">{t.home.rooms.premium}</h3>
                <p className="text-neutral-dark mb-4 flex-grow">{t.home.rooms.premiumDesc}</p>
                <Link 
                  href="/rooms#premium-suite" 
                  className="text-primary hover:text-white hover:bg-primary hover:shadow-lg font-medium transition-all duration-300 px-4 py-2 rounded-md inline-block mt-auto"
                >
                  {t.rooms.details.viewDetails}
                </Link>
              </div>
            </div>
            
            {/* Premium Family Suite */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col h-full">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/assets/rooms/premium-family-suite-bed.png" 
                  alt="Premium Family Suite" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-heading-gray">Premium Family Suite</h3>
                <p className="text-neutral-dark mb-4 flex-grow">{t.home.rooms.familyDesc}</p>
                <Link 
                  href="/rooms#premium-family" 
                  className="text-primary hover:text-white hover:bg-primary hover:shadow-lg font-medium transition-all duration-300 px-4 py-2 rounded-md inline-block mt-auto"
                >
                  {t.rooms.details.viewDetails}
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link href="/rooms">
              <Button className="bg-primary hover:bg-primary-light text-white py-3 px-6 rounded-md transition-colors text-center">
                {t.home.rooms.viewAll}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center text-neutral-dark mb-10">
            {t.home.services.title}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-primary text-4xl mb-4">
                <FontAwesomeIcon icon="utensils" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-heading-gray">Restaurant</h3>
              <p className="text-neutral-dark">
                {t.home.services.restaurant}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-primary text-4xl mb-4">
                <FontAwesomeIcon icon="coffee" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-heading-gray">Exklusives Frühstück</h3>
              <p className="text-neutral-dark">
                {t.home.services.breakfast}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-primary text-4xl mb-4">
                <FontAwesomeIcon icon="wifi" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-heading-gray">Kostenloses WLAN</h3>
              <p className="text-neutral-dark">
                {t.home.services.wifi}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-primary text-4xl mb-4">
                <FontAwesomeIcon icon="map-marker-alt" />
              </div>
              <h3 className="text-xl font-bold mb-2">Zentrale Lage</h3>
              <p className="text-neutral-dark">
                {t.home.services.location}
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link href="/services">
              <Button className="bg-primary hover:bg-primary-light text-white py-3 px-6 rounded-md transition-colors">
                {t.home.services.discoverAll}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="contact-preview py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start">
            <div className="lg:w-1/2 p-6">
              <h2 className="text-3xl font-serif font-bold text-neutral-dark mb-6">
                {t.home.contact.title}
              </h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <FontAwesomeIcon icon="map-marker-alt" className="text-primary mt-1 mr-3" />
                  <p>Krätzernstraße 10, 9014 St. Gallen, Schweiz</p>
                </div>
                
                <div className="flex items-start">
                  <FontAwesomeIcon icon="phone" className="text-primary mt-1 mr-3" />
                  <p>+41 79 300 01 61</p>
                </div>
                
                <div className="flex items-start">
                  <FontAwesomeIcon icon="envelope" className="text-primary mt-1 mr-3" />
                  <p>reservation@hotelstocken.com</p>
                </div>
              </div>
              
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary-light text-white py-3 px-6 rounded-md transition-colors">
                  {t.home.contact.getInTouch}
                </Button>
              </Link>
            </div>
            
            <div className="lg:w-1/2 p-6">
              <div className="bg-white h-80 rounded-lg shadow-md p-8 flex flex-col items-center justify-center">
                <h3 className="text-2xl font-serif font-bold text-neutral-dark mb-4">{t.home.location.title}</h3>
                <div className="mb-8 text-center space-y-4">
                  <p className="flex items-center justify-center">
                    <FontAwesomeIcon icon="map-marker-alt" className="text-primary mr-2" />
                    <span>Kräzernstrasse 10, 9014 St. Gallen, Schweiz</span>
                  </p>
                  <p className="flex items-center justify-center">
                    <FontAwesomeIcon icon="phone" className="text-primary mr-2" />
                    <span>+41 79 300 01 61</span>
                  </p>
                  <p className="flex items-center justify-center">
                    <FontAwesomeIcon icon="envelope" className="text-primary mr-2" />
                    <span>reservation@hotelstocken.com</span>
                  </p>
                </div>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.google.com/maps/place/Kräzernstrasse+10,+9014+St.+Gallen"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary hover:bg-primary-light text-white py-3 px-6 rounded-md transition-colors inline-flex items-center"
                  >
                    <FontAwesomeIcon icon="map-marker-alt" className="mr-2" />
                    {t.home.location.viewLocation}
                  </a>
                  <a 
                    href="tel:+41793000161"
                    className="bg-secondary hover:bg-secondary-light text-white py-3 px-6 rounded-md transition-colors inline-flex items-center"
                  >
                    <FontAwesomeIcon icon="phone" className="mr-2" />
                    {t.home.location.call}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
