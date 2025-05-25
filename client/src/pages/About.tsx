import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const About: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative py-12 bg-cover bg-center bg-primary" 
      >
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-3">
            Über Stocken
          </h1>
          <p className="text-xl text-white mx-auto">
            Entdecken Sie die Geschichte und Philosophie unseres historischen Boutique-Hotels.
          </p>
        </div>
      </section>
      
      {/* History Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start">
            <div className="lg:w-5/12 p-4 flex justify-center items-start">
              <div className="rounded-lg overflow-hidden shadow-lg w-3/4">
                <img src="/images/facade.webp" alt="Stocken Hotel Historisches Gebäude" className="w-full h-auto object-cover" loading="lazy" />
              </div>
            </div>
            <div className="lg:w-7/12 p-4">
              <h2 className="text-3xl font-serif font-bold text-neutral-dark mb-6">
                Unsere Geschichte
              </h2>
              <p className="text-lg text-neutral-dark mb-4">
                Das Boutique Hotel Stocken vereint Geschichte und Gegenwart auf einzigartige Weise. Unser traditionsreiches Gebäude stammt aus dem Jahr 1784 und wurde mit großer Sorgfalt restauriert, um seinen historischen Charme zu bewahren. Gleichzeitig haben wir es mit zeitgemäßem Design und modernstem Komfort ausgestattet.
              </p>
              <p className="text-lg text-neutral-dark mb-4">
                Die Geschichte unseres Hauses beginnt im 18. Jahrhundert – heute schreiben wir sie mit einer neuen Vision weiter: einen Ort zu schaffen, der die kulturelle Tiefe und architektonische Schönheit von St. Gallen würdigt und zugleich ein stilvolles Zuhause für Reisende von heute bietet.
              </p>
              <p className="text-lg text-neutral-dark">
                Jedes Detail – von der Fassade bis zur Einrichtung – erzählt von unserer Leidenschaft für Qualität, Gastfreundschaft und Ästhetik.
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
              Unsere Philosophie
            </h2>
            <p className="text-lg text-neutral-dark">
              Wir glauben an authentische Schweizer Gastfreundschaft, nachhaltige Praktiken und die Schaffung unvergesslicher Erlebnisse für unsere Gäste.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light rounded-full text-white mb-6">
                <FontAwesomeIcon icon="leaf" className="text-2xl" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">Nachhaltigkeit</h3>
              <p className="text-neutral-dark">
                Wir setzen auf erneuerbare Energien, lokale Produkte und abfallreduzierende Maßnahmen, um unseren ökologischen Fußabdruck zu minimieren.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light rounded-full text-white mb-6">
                <FontAwesomeIcon icon="utensils" className="text-2xl" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">Exklusive Küche</h3>
              <p className="text-neutral-dark">
                Unsere Küche verbindet Qualität, Authentizität und ausgewählte Zutaten. Inspiriert von der Schwarzmeerregion und verfeinert mit Schweizer Handwerkskunst, servieren wir Spezialitäten in stilvoller Atmosphäre – exklusiv, ehrlich und handgemacht.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light rounded-full text-white mb-6">
                <FontAwesomeIcon icon="users" className="text-2xl" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">Familiäre Atmosphäre</h3>
              <p className="text-neutral-dark">
                Wir legen Wert auf persönlichen Service und schaffen eine warme, einladende Atmosphäre, in der sich unsere Gäste wie zu Hause fühlen.
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
