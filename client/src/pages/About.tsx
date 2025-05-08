import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import stockenFacade from '../assets/stocken-facade.png';

const About: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center" 
        style={{ 
          backgroundColor: '#8C6A2F',
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Über Stocken
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Entdecken Sie die Geschichte und Philosophie unseres historischen Boutique-Hotels.
          </p>
        </div>
      </section>
      
      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img src={stockenFacade} alt="Stocken Hotel Historisches Gebäude" className="rounded-lg shadow-lg w-full h-auto object-cover" />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-serif font-bold text-neutral-dark mb-6">
                Unsere Geschichte
              </h2>
              <p className="text-lg text-neutral-dark mb-4">
                Das Stocken Hotel blickt auf eine lange und traditionsreiche Geschichte zurück. Im Jahr 1784 gegründet, begann es als kleines Gasthaus für Reisende, die die malerische Stadt St. Gallen besuchten.
              </p>
              <p className="text-lg text-neutral-dark mb-4">
                Im Laufe der Jahrhunderte hat sich unser Haus stetig weiterentwickelt und angepasst, ohne dabei seinen ursprünglichen Charme und seine Authentizität zu verlieren. Die charakteristische gelbe Fassade mit dem Schweizer Wappen ist seit Generationen ein bekannter Anblick in der Region.
              </p>
              <p className="text-lg text-neutral-dark">
                2015 wurde das Hotel umfassend renoviert und modernisiert, wobei besonderer Wert auf die Erhaltung historischer Elemente gelegt wurde. Heute vereint das Stocken Hotel historischen Charme mit zeitgemäßem Komfort und bietet seinen Gästen ein unvergessliches Erlebnis.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Philosophy Section */}
      <section className="py-20 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-neutral-dark mb-6">
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
              <h3 className="text-xl font-serif font-bold mb-4">Lokale Küche</h3>
              <p className="text-neutral-dark">
                Unsere Küche setzt auf Schweizer Spezialitäten mit modernem Touch, zubereitet mit frischen Zutaten von lokalen Produzenten.
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
      
      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-neutral-dark mb-6 text-center">
            Unser Team
          </h2>
          <p className="text-lg text-neutral-dark text-center max-w-3xl mx-auto mb-16">
            Hinter dem Stocken Hotel steht ein engagiertes Team von Fachleuten, die sich der Exzellenz und dem Service verschrieben haben.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-40 h-40 mx-auto bg-neutral-light rounded-full mb-4 flex items-center justify-center">
                <span className="text-4xl font-serif text-primary">MH</span>
              </div>
              <h3 className="text-xl font-medium mb-1">Michael Huber</h3>
              <p className="text-neutral-dark mb-3">Hotelmanager</p>
              <p className="text-sm text-neutral-dark">
                Seit mehr als 15 Jahren in der Hotellerie tätig, bringt Michael seine umfassende Erfahrung und Leidenschaft für exzellenten Service ein.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-40 h-40 mx-auto bg-neutral-light rounded-full mb-4 flex items-center justify-center">
                <span className="text-4xl font-serif text-primary">SB</span>
              </div>
              <h3 className="text-xl font-medium mb-1">Sophie Berger</h3>
              <p className="text-neutral-dark mb-3">Küchenchefin</p>
              <p className="text-sm text-neutral-dark">
                Mit ihrem innovativen Ansatz für traditionelle Schweizer Küche sorgt Sophie für unvergessliche kulinarische Erlebnisse.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-40 h-40 mx-auto bg-neutral-light rounded-full mb-4 flex items-center justify-center">
                <span className="text-4xl font-serif text-primary">LW</span>
              </div>
              <h3 className="text-xl font-medium mb-1">Lukas Weber</h3>
              <p className="text-neutral-dark mb-3">Concierge</p>
              <p className="text-sm text-neutral-dark">
                Als Einheimischer kennt Lukas die Region wie seine Westentasche und teilt gerne seine Insider-Tipps mit unseren Gästen.
              </p>
            </div>
            
            {/* Team Member 4 */}
            <div className="text-center">
              <div className="w-40 h-40 mx-auto bg-neutral-light rounded-full mb-4 flex items-center justify-center">
                <span className="text-4xl font-serif text-primary">AM</span>
              </div>
              <h3 className="text-xl font-medium mb-1">Anna Müller</h3>
              <p className="text-neutral-dark mb-3">Event-Managerin</p>
              <p className="text-sm text-neutral-dark">
                Anna organisiert unvergessliche Veranstaltungen und sorgt dafür, dass jedes Detail perfekt ist.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Location Section */}
      <section className="py-20 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-serif font-bold text-neutral-dark mb-6">
                Unsere Lage
              </h2>
              <p className="text-lg text-neutral-dark mb-4">
                Das Stocken Hotel liegt im malerischen Ort St. Gallen, mit seiner reichen Geschichte und kulturellen Vielfalt. Die idyllische Lage bietet einen wunderschönen Ausgangspunkt, um die Stadt und die Umgebung zu erkunden.
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
                      Über die A1 bis Ausfahrt St. Gallen-Kreuzbleiche, dann der Beschilderung in die Innenstadt folgen.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon icon="train" className="text-primary-light mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Mit der Bahn</p>
                    <p className="text-neutral-dark">
                      Bis Bahnhof St. Gallen, dann 5 Minuten zu Fuß oder mit dem Taxi zum Hotel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img src="/assets/hero_main.png" alt="Umgebung des Stocken Hotels" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
