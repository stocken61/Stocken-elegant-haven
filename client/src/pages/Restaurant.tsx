import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RestaurantImg from '../assets/restaurant-image.png';

const Restaurant: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative py-12 bg-cover bg-center bg-primary" 
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Restaurant Pontera
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Where Suisse Design meets Türkisch Taste
          </p>
        </div>
      </section>
      
      {/* About Restaurant Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="max-w-4xl mx-auto">
              <img 
                src={RestaurantImg} 
                alt="Restaurant Pontera Innenraum" 
                className="w-full h-auto rounded-lg shadow-lg mx-auto object-cover max-h-[500px]" 
              />
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-3xl font-serif font-bold text-neutral-dark mb-6 text-center">
              Kulinarische Erlebnisse im Stocken
            </h2>
            <p className="text-lg text-neutral-dark mb-4 text-center max-w-4xl mx-auto">
              Unser Restaurant "Pontera" ist ein kulinarisches Highlight, das traditionelle Schweizer Gerichte mit modernen Einflüssen verbindet. In gemütlicher Atmosphäre genießen Sie eine erstklassige Küche, die auf frischen, saisonalen und lokalen Zutaten basiert.
            </p>
            <p className="text-lg text-neutral-dark mb-6 text-center max-w-4xl mx-auto">
              Unser leidenschaftliches Küchenteam unter der Leitung von Küchenchefin Sophie Berger kreiert Gerichte, die sowohl authentisch als auch innovativ sind und Ihnen ein unvergessliches Geschmackserlebnis bieten.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-4 max-w-4xl mx-auto">
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
            
            <p className="text-sm text-neutral-dark italic text-center mt-4">
              Wir empfehlen für das Abendessen eine Reservierung.
            </p>
          </div>
        </div>
      </section>
      
      {/* Menu Section */}
      <section className="py-20 bg-neutral-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-neutral-dark mb-12 text-center">
            Unsere Speisekarte
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Menu Category: Breakfast */}
            <div className="mb-14 bg-secondary-lightest p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-serif border-b border-primary-light pb-2 mb-6 text-center">
                Pontus Breakfast Menü
              </h3>
              
              <div className="text-center mb-6">
                <span className="text-primary-dark font-bold text-2xl mb-1 block">
                  CHF 69.– pro Person
                </span>
                <p className="text-neutral-dark italic">Kinder bis 14 Jahre kostenlos</p>
              </div>
              
              <div className="mb-10">
                <h4 className="text-xl font-medium flex items-center mb-4">
                  <span className="text-primary-dark mr-2">🍳</span>
                  Wählen Sie 3 warme Speisen:
                </h4>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6 ml-6">
                  <li className="text-neutral-dark">Kuymak im Kupferpfännchen</li>
                  <li className="text-neutral-dark">Spiegelei mit Sucuk oder vegetarisch</li>
                  <li className="text-neutral-dark">Rührei mit frischen Kräutern</li>
                  <li className="text-neutral-dark">Tomate-Mozzarella mit Olivenöl & Basilikum</li>
                  <li className="text-neutral-dark">Spinat-Zwiebel-Champignon-Pfanne</li>
                  <li className="text-neutral-dark">Menemen (türkisches Rührei mit Tomaten & Peperoni)</li>
                </ul>
                
                <div className="bg-white p-4 rounded-md">
                  <p className="font-medium mb-3">Alle Pfannengerichte sind auch einzeln erhältlich:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-6">
                    <li className="flex justify-between text-neutral-dark">
                      <span>Kuymak</span>
                      <span className="font-medium">CHF 22.–</span>
                    </li>
                    <li className="flex justify-between text-neutral-dark">
                      <span>Spiegelei mit Sucuk</span>
                      <span className="font-medium">CHF 18.–</span>
                    </li>
                    <li className="flex justify-between text-neutral-dark">
                      <span>Rührei mit Kräutern</span>
                      <span className="font-medium">CHF 17.–</span>
                    </li>
                    <li className="flex justify-between text-neutral-dark">
                      <span>Tomate-Mozzarella</span>
                      <span className="font-medium">CHF 16.–</span>
                    </li>
                    <li className="flex justify-between text-neutral-dark">
                      <span>Spinat-Zwiebel-Champignon-Pfanne</span>
                      <span className="font-medium">CHF 18.–</span>
                    </li>
                    <li className="flex justify-between text-neutral-dark">
                      <span>Menemen</span>
                      <span className="font-medium">CHF 18.–</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-10">
                <h4 className="text-xl font-medium flex items-center mb-4">
                  <span className="text-primary-dark mr-2">🧀</span>
                  Tischplatte zum Teilen
                </h4>
                <p className="mb-4 italic">Angerichtet in Schälchen auf Olivenholz:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-6">
                  <li className="text-neutral-dark">Ausgewählte Oliven (schwarz & grün)</li>
                  <li className="text-neutral-dark">Beyaz Peynir, Kasar & lokaler Schnittkäse</li>
                  <li className="text-neutral-dark">Honig mit Wabenstück</li>
                  <li className="text-neutral-dark">Hausgemachte Marmelade (Feige, Aprikose)</li>
                  <li className="text-neutral-dark">Butter, Tahin & Pekmez</li>
                  <li className="text-neutral-dark">Frisches Brot, Simit, Fladenbrot</li>
                </ul>
              </div>
              
              <div className="mb-10">
                <h4 className="text-xl font-medium flex items-center mb-4">
                  <span className="text-primary-dark mr-2">🍵</span>
                  Getränke inklusive:
                </h4>
                <ul className="ml-6">
                  <li className="text-neutral-dark mb-2">Türkischer Tee in Silberkannen</li>
                  <li className="text-neutral-dark mb-2">Frisch gepresster Orangensaft</li>
                  <li className="text-neutral-dark">Wasser mit Zitrone & Minze</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-medium flex items-center mb-4">
                  <span className="text-primary-dark mr-2">☕️</span>
                  Zum Abschluss:
                </h4>
                <ul className="ml-6">
                  <li className="text-neutral-dark mb-2">Türkischer Kaffee auf Wunsch</li>
                  <li className="text-neutral-dark">Kleine süße Überraschung (z. B. Baklava oder Lokum)</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-neutral-dark italic mb-2">
              Alle Preise inkl. MwSt. Die vollständige Weinkarte erhalten Sie im Restaurant.
            </p>
            <p className="text-neutral-dark">
              Bei Allergien und Unverträglichkeiten beraten wir Sie gerne.
            </p>
          </div>
        </div>
      </section>
      
      {/* Reservation Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-neutral-dark mb-6">
              Tisch reservieren
            </h2>
            <p className="text-lg text-neutral-dark mb-8">
              Sichern Sie sich einen Tisch in unserem Restaurant und genießen Sie die hervorragende Küche und den atemberaubenden Ausblick.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <a href="tel:+41793000161" className="inline-flex items-center justify-center bg-primary hover:bg-primary-light text-white py-3 px-6 rounded-md transition duration-300">
                <FontAwesomeIcon icon="phone-alt" className="mr-2" />
                <span>+41 79 300 01 61</span>
              </a>
              <a href="mailto:restaurant@stocken.ch" className="inline-flex items-center justify-center bg-secondary-dark hover:bg-secondary text-white py-3 px-6 rounded-md transition duration-300">
                <FontAwesomeIcon icon="envelope" className="mr-2" />
                <span>restaurant@stocken.ch</span>
              </a>
            </div>
            
            <p className="text-sm text-neutral-dark mt-6">
              Für Gruppen ab 8 Personen bitten wir um Reservierung mindestens 48 Stunden im Voraus.
            </p>
          </div>
        </div>
      </section>
      
      {/* Private Events Section */}
      <section className="py-20 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-neutral-dark mb-6">
              Private Events & Feiern
            </h2>
            <p className="text-lg text-neutral-dark mb-4">
              Unser Restaurant bietet den perfekten Rahmen für Ihre privaten Feiern und Firmenveranstaltungen. Von Geburtstagen und Jubiläen bis hin zu Geschäftsessen und Teamevents – wir sorgen für ein unvergessliches Erlebnis.
            </p>
            <p className="text-lg text-neutral-dark mb-6">
              Unser Event-Team hilft Ihnen gerne bei der Planung und Umsetzung Ihrer Veranstaltung. Wir können Menüs nach Ihren Wünschen anpassen und bieten verschiedene Räumlichkeiten für unterschiedliche Gruppengrößen.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <FontAwesomeIcon icon="users" className="text-primary-light mt-1 mr-3" />
                <div>
                  <h3 className="font-medium">Kapazität</h3>
                  <p className="text-neutral-dark">
                    Bis zu 25 Personen im Restaurant
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <FontAwesomeIcon icon="utensils" className="text-primary-light mt-1 mr-3" />
                <div>
                  <h3 className="font-medium">Anlässe</h3>
                  <p className="text-neutral-dark">
                    Hochzeiten, Geburtstage, Jubiläen, Firmenfeiern, Weihnachtsfeiern
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <FontAwesomeIcon icon="envelope" className="text-primary-light mt-1 mr-3" />
                <div>
                  <h3 className="font-medium">Anfragen</h3>
                  <p className="text-neutral-dark">
                    Bitte kontaktieren Sie uns unter{' '}
                    <a 
                      href="mailto:event@hotelstocken.com" 
                      className="text-primary hover:text-primary-dark transition-colors inline-flex items-center"
                    >
                      event@hotelstocken.com
                      <FontAwesomeIcon icon="arrow-right" className="ml-1 text-xs" />
                    </a>{' '}
                    für weitere Informationen
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

export default Restaurant;