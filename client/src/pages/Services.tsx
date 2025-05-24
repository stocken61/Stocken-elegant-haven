import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLanguage } from '@/i18n/LanguageContext';
import stiftsBibliothekImg from '../assets/attractions/stiftsbibliothek.webp';
import dreiWeierenImg from '../assets/attractions/dreiweieren.png';
import textilmuseumImg from '../assets/attractions/textilmuseum.jpg';

const Services: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <>
      {/* Header Section */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Entdecken Sie St. Gallen
          </h1>
        </div>
      </section>
      
      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <p className="text-lg text-neutral-dark mb-12">
            St. Gallen bietet zahlreiche Sehenswürdigkeiten und Aktivitäten. Hier sind einige Highlights in der Nähe unseres Hotels:
          </p>
        </div>
      </section>
      
      {/* Attractions Grid */}
      <section className="py-12 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stiftsbibliothek */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img 
                  src={stiftsBibliothekImg}
                  alt="Stiftsbibliothek St. Gallen" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-heading-gray">Stiftsbibliothek St. Gallen</h3>
                <p className="text-neutral-dark mb-4">
                  Die Stiftsbibliothek St. Gallen ist eine der ältesten und schönsten Bibliotheken der Welt und gehört zum UNESCO-Weltkulturerbe.
                </p>
                <div className="flex items-center text-neutral-dark mt-4">
                  <FontAwesomeIcon icon="map-marker-alt" className="mr-2 text-primary" />
                  <span>Entfernung: ca. 1.5 km</span>
                </div>
              </div>
            </div>
            
            {/* Drei Weiern */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img 
                  src={dreiWeierenImg}
                  alt="Drei Weiern" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-heading-gray">Drei Weiern</h3>
                <p className="text-neutral-dark mb-4">
                  Die Drei Weiern sind beliebte Naherholungsgebiete mit wunderschönen Aussichtspunkten über die Stadt.
                </p>
                <div className="flex items-center text-neutral-dark mt-4">
                  <FontAwesomeIcon icon="map-marker-alt" className="mr-2 text-primary" />
                  <span>Entfernung: ca. 2 km</span>
                </div>
              </div>
            </div>
            
            {/* Textilmuseum */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img 
                  src={textilmuseumImg}
                  alt="Textilmuseum" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-heading-gray">Textilmuseum</h3>
                <p className="text-neutral-dark mb-4">
                  Das Textilmuseum zeigt die reiche Geschichte der Textilindustrie in St. Gallen und beeindruckende Stickereien.
                </p>
                <div className="flex items-center text-neutral-dark mt-4">
                  <FontAwesomeIcon icon="map-marker-alt" className="mr-2 text-primary" />
                  <span>Entfernung: ca. 1 km</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Hotel Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-neutral-dark mb-12 text-center">
            Hotelservices
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="p-6 rounded-lg shadow-md text-center">
              <div className="text-primary text-4xl mb-4">
                <FontAwesomeIcon icon="wifi" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-heading-gray">Kostenloses WLAN</h3>
              <p className="text-neutral-dark">
                Highspeed-Internet im gesamten Hotel kostenfrei verfügbar.
              </p>
            </div>
            
            <div className="p-6 rounded-lg shadow-md text-center">
              <div className="text-primary text-4xl mb-4">
                <FontAwesomeIcon icon="phone" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-heading-gray">Concierge-Service</h3>
              <p className="text-neutral-dark">
                Wir helfen Ihnen gerne bei der Planung von Aktivitäten in der Region.
              </p>
            </div>
            
            <div className="p-6 rounded-lg shadow-md text-center">
              <div className="text-primary text-4xl mb-4">
                <FontAwesomeIcon icon="car" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-heading-gray">Parkplätze</h3>
              <p className="text-neutral-dark">
                Kostenfreie Parkplätze direkt am Hotel (nach Verfügbarkeit).
              </p>
            </div>
            
            <div className="p-6 rounded-lg shadow-md text-center">
              <div className="text-primary text-4xl mb-4">
                <FontAwesomeIcon icon="utensils" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-heading-gray">Restaurant Pontera</h3>
              <p className="text-neutral-dark">
                Genießen Sie unser authentisches Genusskonzept mit Black Sea-Fondue.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Public Transport */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-serif font-bold text-neutral-dark mb-6 text-center">
              Anreise & Verkehrsanbindung
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <FontAwesomeIcon icon="bus" className="text-primary-light mt-1 mr-3 text-2xl" />
                <div>
                  <h3 className="text-xl font-medium mb-2">Öffentliche Verkehrsmittel</h3>
                  <p className="text-neutral-dark mb-2">
                    Buslinie 1 hält direkt vor dem Hotel an der Haltestelle "Stocken".
                  </p>
                  <p className="text-neutral-dark">
                    Der Bahnhof St. Gallen Bruggen ist nur 6 Gehminuten entfernt.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FontAwesomeIcon icon="car" className="text-primary-light mt-1 mr-3 text-2xl" />
                <div>
                  <h3 className="text-xl font-medium mb-2">Mit dem Auto</h3>
                  <p className="text-neutral-dark">
                    Das Hotel ist über die Autobahn A1 gut erreichbar. Kostenfreie Parkplätze stehen zur Verfügung.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FontAwesomeIcon icon="map-marker-alt" className="text-primary-light mt-1 mr-3 text-2xl" />
                <div>
                  <h3 className="text-xl font-medium mb-2">Adresse</h3>
                  <p className="text-neutral-dark">
                    Krätzernstraße 10, 9014 St. Gallen, Schweiz
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;