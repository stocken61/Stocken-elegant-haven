import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
          <p className="text-xl text-white max-w-3xl mx-auto mb-2">
            Where Suisse Design meets Türkisch Test
          </p>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Genießen Sie traditionelle Schweizer Küche mit modernem Touch und atemberaubendem Ausblick.
          </p>
        </div>
      </section>
      
      {/* About Restaurant Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img src="/assets/restaurant.webp" alt="Restaurant Pontera" className="rounded-lg shadow-lg" />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-serif font-bold text-neutral-dark mb-6">
                Kulinarische Erlebnisse im Stocken
              </h2>
              <p className="text-lg text-neutral-dark mb-4">
                Unser Restaurant "Pontera" ist ein kulinarisches Highlight, das traditionelle Schweizer Gerichte mit modernen Einflüssen verbindet. In gemütlicher Atmosphäre und mit Panoramablick auf die Alpen genießen Sie eine erstklassige Küche, die auf frischen, saisonalen und lokalen Zutaten basiert.
              </p>
              <p className="text-lg text-neutral-dark mb-6">
                Unser leidenschaftliches Küchenteam unter der Leitung von Küchenchefin Sophie Berger kreiert Gerichte, die sowohl authentisch als auch innovativ sind und Ihnen ein unvergessliches Geschmackserlebnis bieten.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
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
              
              <p className="text-sm text-neutral-dark italic">
                Wir empfehlen für das Abendessen eine Reservierung.
              </p>
            </div>
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
            {/* Menu Category: Starters */}
            <div className="mb-12">
              <h3 className="text-2xl font-serif border-b border-primary-light pb-2 mb-6">
                Vorspeisen
              </h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-medium">Alpenkräutersalat</h4>
                    <p className="text-neutral-dark">
                      Frische Blattsalate mit hausgemachtem Kräuterdressing, Alpkäse-Croutons und gerösteten Nüssen
                    </p>
                  </div>
                  <span className="text-primary-dark font-medium whitespace-nowrap ml-4">
                    16 CHF
                  </span>
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-medium">Bergtaler Rindscarpaccio</h4>
                    <p className="text-neutral-dark">
                      Hauchdünn geschnittenes Schweizer Rindfleisch mit Trüffelöl, Rucola und Parmesan
                    </p>
                  </div>
                  <span className="text-primary-dark font-medium whitespace-nowrap ml-4">
                    24 CHF
                  </span>
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-medium">Hausgemachte Berghütten-Suppe</h4>
                    <p className="text-neutral-dark">
                      Cremige Kartoffelsuppe mit Bergkräutern, gerösteten Pilzen und Crème fraîche
                    </p>
                  </div>
                  <span className="text-primary-dark font-medium whitespace-nowrap ml-4">
                    14 CHF
                  </span>
                </div>
              </div>
            </div>
            
            {/* Menu Category: Main Courses */}
            <div className="mb-12">
              <h3 className="text-2xl font-serif border-b border-primary-light pb-2 mb-6">
                Hauptgerichte
              </h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-medium">Schweizer Käsefondue</h4>
                    <p className="text-neutral-dark">
                      Traditionelles Käsefondue mit Gruyère und Vacherin, serviert mit Brot, Kartoffeln und Gemüse
                    </p>
                  </div>
                  <span className="text-primary-dark font-medium whitespace-nowrap ml-4">
                    32 CHF
                  </span>
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-medium">Alpweiden-Lammrücken</h4>
                    <p className="text-neutral-dark">
                      Saftig gebratener Lammrücken mit Kräuterkruste, Bergkartoffeln und saisonalem Gemüse
                    </p>
                  </div>
                  <span className="text-primary-dark font-medium whitespace-nowrap ml-4">
                    42 CHF
                  </span>
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-medium">Schweizer Forelle</h4>
                    <p className="text-neutral-dark">
                      Gebratene Forelle aus lokalen Gewässern mit Mandelbutter, Wildkräutern und hausgemachtem Kartoffelpüree
                    </p>
                  </div>
                  <span className="text-primary-dark font-medium whitespace-nowrap ml-4">
                    36 CHF
                  </span>
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-medium">Bergkräuter-Risotto (vegetarisch)</h4>
                    <p className="text-neutral-dark">
                      Cremiges Risotto mit Alpenkräutern, saisonalen Pilzen und gehobeltem Alpkäse
                    </p>
                  </div>
                  <span className="text-primary-dark font-medium whitespace-nowrap ml-4">
                    28 CHF
                  </span>
                </div>
              </div>
            </div>
            
            {/* Menu Category: Desserts */}
            <div>
              <h3 className="text-2xl font-serif border-b border-primary-light pb-2 mb-6">
                Desserts
              </h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-medium">Apfelstrudel</h4>
                    <p className="text-neutral-dark">
                      Hausgemachter Apfelstrudel mit Vanillesoße und Walnusseis
                    </p>
                  </div>
                  <span className="text-primary-dark font-medium whitespace-nowrap ml-4">
                    14 CHF
                  </span>
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-medium">Schokoladen-Fondant</h4>
                    <p className="text-neutral-dark">
                      Warmer Schokoladenkuchen mit flüssigem Kern, serviert mit Himbeersorbet
                    </p>
                  </div>
                  <span className="text-primary-dark font-medium whitespace-nowrap ml-4">
                    16 CHF
                  </span>
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-medium">Käseauswahl</h4>
                    <p className="text-neutral-dark">
                      Selektion von regionalen Schweizer Käsesorten, serviert mit Feigensenf und Früchtebrot
                    </p>
                  </div>
                  <span className="text-primary-dark font-medium whitespace-nowrap ml-4">
                    18 CHF
                  </span>
                </div>
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
              <a href="tel:+41441234567" className="inline-flex items-center justify-center bg-primary hover:bg-primary-light text-white py-3 px-6 rounded-md transition duration-300">
                <FontAwesomeIcon icon="phone-alt" className="mr-2" />
                <span>+41 44 123 45 67</span>
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
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
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
                      Bis zu 60 Personen im Hauptrestaurant, bis zu 25 Personen im privaten Speiseraum
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon icon="glass-cheers" className="text-primary-light mt-1 mr-3" />
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
                      Bitte kontaktieren Sie uns unter events@stocken.ch für weitere Informationen
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img src="/assets/restaurant.webp" alt="Private Dining" className="rounded-lg shadow-md" />
                <img src="/assets/room_main.webp" alt="Event Setup" className="rounded-lg shadow-md" />
                <img src="/assets/room_main.webp" alt="Banquet Setup" className="rounded-lg shadow-md" />
                <img src="/assets/restaurant.webp" alt="Celebration" className="rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Restaurant;
