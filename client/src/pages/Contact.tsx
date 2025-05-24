import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactForm from '@/components/ContactForm';

const Contact: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative py-12 bg-cover bg-center bg-primary" 
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Kontakt
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Wir freuen uns auf Ihre Anfrage und stehen Ihnen für Fragen und Informationen zur Verfügung.
          </p>
        </div>
      </section>
      
      {/* Contact Info Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-dark mb-6">
                Kontakt
              </h2>
              <p className="text-lg text-neutral-dark mb-8">
                Haben Sie Fragen oder benötigen Sie weitere Informationen? Unser Team steht Ihnen gerne zur Verfügung.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div>
                  <h3 className="font-semibold text-xl mb-3">Adresse</h3>
                  <p className="text-neutral-dark mb-1">Boutique Hotel Stocken</p>
                  <p className="text-neutral-dark mb-1">Kräzernstrasse 10</p>
                  <p className="text-neutral-dark mb-1">9014 St. Gallen</p>
                  <p className="text-neutral-dark">Schweiz</p>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3">Kontaktdaten</h3>
                  <p className="text-neutral-dark mb-1">Tel: +41 79 300 01 61</p>
                  <p className="text-neutral-dark">E-Mail: reservation@hotelstocken.com</p>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="font-semibold text-xl mb-3">Anfahrt</h3>
                <div className="bg-neutral rounded-lg w-full h-80">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2694.0939024457154!2d9.366933876775936!3d47.4234029017655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b1e4f36b7e5f7%3A0x7e5a8cd0240b91d8!2sKr%C3%A4zernstrasse%2010%2C%209014%20St.%20Gallen%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1698920523071!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-xl mb-3">Folgen Sie uns</h3>
                <div className="flex space-x-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light transition">
                    <FontAwesomeIcon icon={['fab', 'facebook-f']} className="text-xl" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light transition">
                    <FontAwesomeIcon icon={['fab', 'instagram']} className="text-xl" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light transition">
                    <FontAwesomeIcon icon={['fab', 'twitter']} className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-serif font-bold text-neutral-dark mb-6">
                Schreiben Sie uns
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-neutral-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-neutral-dark mb-12 text-center">
            Häufig gestellte Fragen
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-3">Was sind die Check-in und Check-out Zeiten?</h3>
                <p className="text-neutral-dark">
                  Der Check-in ist ab 15:00 Uhr möglich, der Check-out bis 11:00 Uhr. Früher Check-in und später Check-out können je nach Verfügbarkeit auf Anfrage arrangiert werden.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-3">Bieten Sie einen Flughafentransfer an?</h3>
                <p className="text-neutral-dark">
                  Ja, wir bieten gegen eine zusätzliche Gebühr einen Flughafentransfer an. Bitte kontaktieren Sie uns im Voraus, um diesen Service zu buchen.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-3">Ist das Frühstück im Zimmerpreis inbegriffen?</h3>
                <p className="text-neutral-dark">
                  Nein, das Frühstück ist nicht im Zimmerpreis enthalten. Unser reichhaltiges Frühstücksbuffet können Sie täglich von 07:00 bis 10:30 Uhr im Restaurant gegen Aufpreis genießen.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-3">Gibt es Parkplätze beim Hotel?</h3>
                <p className="text-neutral-dark">
                  Ja, wir bieten kostenfreie Parkplätze für unsere Gäste an. Diese sind grundsätzlich verfügbar und müssen nicht reserviert werden.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-3">Sind Haustiere im Hotel erlaubt?</h3>
                <p className="text-neutral-dark">
                  Ja, Haustiere sind grundsätzlich erlaubt, mit Ausnahme von Hunden. Bitte informieren Sie uns bei der Buchung über Ihr Haustier.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-3">Gibt es WLAN im Hotel?</h3>
                <p className="text-neutral-dark">
                  Ja, kostenloses Highspeed-WLAN steht in allen Zimmern und öffentlichen Bereichen des Hotels zur Verfügung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
