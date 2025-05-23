import React from 'react';
import { Link } from 'wouter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import footerLogo from '@assets/logo_beige_transparent_highres_optimized.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6 lg:gap-12 xl:gap-16 mb-12">
          <div className="flex flex-col items-start -ml-2 md:-ml-2 lg:-ml-6 xl:-ml-4 md:mb-6 lg:mb-0">
            <div className="mb-3">
              <img src={footerLogo} alt="Stocken Hotel Logo" className="h-40 md:h-44 lg:h-48 xl:h-52" />
            </div>
            <p className="mb-3 max-w-xs text-left ml-4 md:ml-0 lg:ml-0 text-sm md:text-base lg:text-sm xl:text-base">
              Wir verkörpern die Tradition der Schweizer Gastfreundschaft mit modernem Luxus.
            </p>
            <div className="flex space-x-4 ml-4 md:ml-0 lg:ml-0">
              <a href="#" className="text-white hover:text-secondary-light transition">
                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
              </a>
              <a href="#" className="text-white hover:text-secondary-light transition">
                <FontAwesomeIcon icon={['fab', 'instagram']} />
              </a>
              <a href="#" className="text-white hover:text-secondary-light transition">
                <FontAwesomeIcon icon={['fab', 'twitter']} />
              </a>
            </div>
          </div>
          
          <div className="md:mb-6 lg:mb-0 lg:pr-4">
            <h3 className="text-lg md:text-xl lg:text-lg xl:text-xl font-serif font-bold mb-4 md:mb-6">Kontakt</h3>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base lg:text-sm xl:text-base">
              <li className="flex">
                <FontAwesomeIcon icon="map-marker-alt" className="mt-1 mr-3 text-sm" />
                <span>Krätzernstraße 10<br />9014 St. Gallen, Schweiz</span>
              </li>
              <li className="flex">
                <FontAwesomeIcon icon="phone-alt" className="mt-1 mr-3 text-sm" />
                <span>+41 79 300 01 61</span>
              </li>
              <li className="flex">
                <FontAwesomeIcon icon="envelope" className="mt-1 mr-3 text-sm" />
                <span>reservation@hotelstocken.com</span>
              </li>
            </ul>
          </div>
          
          <div className="md:mb-6 lg:mb-0 lg:pr-4">
            <h3 className="text-lg md:text-xl lg:text-lg xl:text-xl font-serif font-bold mb-4 md:mb-6">Links</h3>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base lg:text-sm xl:text-base">
              <li>
                <Link href="/" className="hover:text-secondary-light transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-secondary-light transition">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-secondary-light transition">
                  Zimmer
                </Link>
              </li>
              <li>
                <Link href="/restaurant" className="hover:text-secondary-light transition">
                  Restaurant
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary-light transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary-light transition">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-2 lg:col-span-1 lg:max-w-sm">
            <h3 className="text-lg md:text-xl lg:text-lg xl:text-xl font-serif font-bold mb-4 md:mb-6">Newsletter</h3>
            <p className="mb-4 text-sm md:text-base lg:text-sm xl:text-base">
              Abonnieren Sie unseren Newsletter, um über spezielle Angebote und Events informiert zu werden.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="Ihre E-Mail-Adresse" 
                className="w-full p-2 rounded-md focus:outline-none text-neutral-dark text-sm md:text-base lg:text-sm xl:text-base" 
              />
              <Button 
                type="submit" 
                className="bg-secondary-dark hover:bg-secondary text-white py-2 px-4 rounded-md transition duration-300 w-full text-sm md:text-base lg:text-sm xl:text-base"
              >
                Abonnieren
              </Button>
            </form>
          </div>
        </div>
        
        <hr className="border-primary-light mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center md:space-y-0 space-y-4">
          <p className="text-xs md:text-sm mb-0 order-2 md:order-1 text-center md:text-left">
            &copy; {currentYear} Stocken Hotel. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-3 md:space-x-4 text-xs md:text-sm order-1 md:order-2">
            <Link href="/legal/terms" className="hover:text-secondary-light transition">
              AGB
            </Link>
            <Link href="/legal/privacy" className="hover:text-secondary-light transition">
              Datenschutz
            </Link>
            <Link href="/legal/imprint" className="hover:text-secondary-light transition">
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
