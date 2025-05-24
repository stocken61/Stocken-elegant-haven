import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLanguage } from '@/i18n/LanguageContext';
import stockenFacade from '../assets/stocken-facade-square.jpg';

const About: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative py-12 bg-cover bg-center bg-primary" 
      >
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-3">
            {t.about.title}
          </h1>
          <p className="text-xl text-white mx-auto">
            {t.about.description}
          </p>
        </div>
      </section>
      
      {/* History Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start">
            <div className="lg:w-5/12 p-4 flex justify-center items-start">
              <div className="rounded-lg overflow-hidden shadow-lg w-3/4">
                <img src={stockenFacade} alt="Stocken Hotel Historisches Gebäude" className="w-full h-auto object-cover" />
              </div>
            </div>
            <div className="lg:w-7/12 p-4">
              <h2 className="text-3xl font-serif font-bold text-neutral-dark mb-6">
                {t.about.history.title}
              </h2>
              <p className="text-lg text-neutral-dark mb-4">
                {t.about.history.paragraph1}
              </p>
              <p className="text-lg text-neutral-dark mb-4">
                {t.about.history.paragraph2}
              </p>
              <p className="text-lg text-neutral-dark">
                {t.about.history.paragraph3}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Philosophy Section */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-neutral-dark mb-4">
              {t.about.philosophy.title}
            </h2>
            <p className="text-lg text-neutral-dark">
              {t.about.philosophy.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light rounded-full text-white mb-6">
                <FontAwesomeIcon icon="leaf" className="text-2xl" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">{t.about.features.sustainability.title}</h3>
              <p className="text-neutral-dark">
                {t.about.features.sustainability.description}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light rounded-full text-white mb-6">
                <FontAwesomeIcon icon="utensils" className="text-2xl" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">{t.about.features.cuisine.title}</h3>
              <p className="text-neutral-dark">
                {t.about.features.cuisine.description}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light rounded-full text-white mb-6">
                <FontAwesomeIcon icon="users" className="text-2xl" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">{t.about.features.atmosphere.title}</h3>
              <p className="text-neutral-dark">
                {t.about.features.atmosphere.description}
              </p>
            </div>
          </div>
        </div>
      </section>
      

      {/* Location Section */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-7/12 p-4">
              <h2 className="text-3xl font-serif font-bold text-neutral-dark mb-4">
                Unsere Lage
              </h2>
              <p className="text-lg text-neutral-dark mb-4">
                Das Stocken Hotel liegt im malerischen St. Gallen an der Kräzernstrasse 10, mit seiner reichen Geschichte und kulturellen Vielfalt. Die idyllische Lage bietet einen wunderschönen Ausgangspunkt, um die Stadt und die Umgebung zu erkunden.
              </p>
              <p className="text-lg text-neutral-dark mb-4">
                Unser Hotel ist der perfekte Ausgangspunkt für Ausflüge in die Stadt und die umliegende Region. Die Gegend bietet zahlreiche kulturelle Sehenswürdigkeiten, Einkaufsmöglichkeiten und Freizeitaktivitäten für jeden Geschmack.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-medium mb-3">Anfahrt</h3>
                <div className="flex items-start mb-2">
                  <FontAwesomeIcon icon="car" className="text-primary-light mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Mit dem Auto</p>
                    <p className="text-neutral-dark">
                      Über die A1 bis Ausfahrt St. Gallen-Kreuzbleiche, dann der Beschilderung Richtung St. Gallen-Ost folgen. Nach ca. 3 km erreichen Sie die Kräzernstrasse und unser Hotel.
                    </p>
                  </div>
                </div>
                <div className="flex items-start mb-2">
                  <FontAwesomeIcon icon="train" className="text-primary-light mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Mit der Bahn</p>
                    <p className="text-neutral-dark">
                      Die Bahn fährt direkt bis zur Haltestelle St. Gallen Bruggen. Von dort aus sind es nur 6 Minuten zu Fuß bis zu unserem Hotel.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon icon="train" className="text-primary-light mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Mit dem Bus</p>
                    <p className="text-neutral-dark">
                      Die Buslinie 1 vom Hauptbahnhof St. Gallen fährt direkt zu unserem Hotel. Steigen Sie an der Haltestelle "Stocken" aus, die sich direkt vor dem Eingang befindet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-5/12 p-4 flex justify-center items-start">
              <div className="rounded-lg overflow-hidden shadow-lg w-full h-80">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2694.0939024457154!2d9.366933876775936!3d47.4234029017655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b1e4f36b7e5f7%3A0x7e5a8cd0240b91d8!2sKr%C3%A4zernstrasse%2010%2C%209014%20St.%20Gallen%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1698920523071!5m2!1sen!2sus"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps - Stocken Hotel"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
