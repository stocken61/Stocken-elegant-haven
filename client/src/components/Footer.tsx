import React from 'react';
import { Link } from 'wouter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StockenLogo from '@/assets/stockenLogo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="h-16 mb-6">
              <StockenLogo className="text-white" />
            </div>
            <p className="mb-4">
              Seit 1784 verkörpern wir die Tradition der Schweizer Gastfreundschaft mit modernem Luxus.
            </p>
            <div className="flex space-x-4">
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
          
          <div>
            <h3 className="text-xl font-serif font-bold mb-6">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex">
                <FontAwesomeIcon icon="map-marker-alt" className="mt-1 mr-3" />
                <span>Bergstrasse 123<br />6340 Baar, Schweiz</span>
              </li>
              <li className="flex">
                <FontAwesomeIcon icon="phone-alt" className="mt-1 mr-3" />
                <span>+41 44 123 45 67</span>
              </li>
              <li className="flex">
                <FontAwesomeIcon icon="envelope" className="mt-1 mr-3" />
                <span>info@stocken.ch</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-bold mb-6">Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <a className="hover:text-secondary-light transition">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="hover:text-secondary-light transition">Über uns</a>
                </Link>
              </li>
              <li>
                <Link href="/rooms">
                  <a className="hover:text-secondary-light transition">Zimmer</a>
                </Link>
              </li>
              <li>
                <Link href="/restaurant">
                  <a className="hover:text-secondary-light transition">Restaurant</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:text-secondary-light transition">Kontakt</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-bold mb-6">Newsletter</h3>
            <p className="mb-4">
              Abonnieren Sie unseren Newsletter, um über spezielle Angebote und Events informiert zu werden.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="Ihre E-Mail-Adresse" 
                className="w-full p-2 rounded-md focus:outline-none text-neutral-dark" 
              />
              <Button 
                type="submit" 
                className="bg-secondary-dark hover:bg-secondary text-white py-2 px-4 rounded-md transition duration-300 w-full"
              >
                Abonnieren
              </Button>
            </form>
          </div>
        </div>
        
        <hr className="border-primary-light mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            &copy; {currentYear} Stocken Hotel. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-4 text-sm">
            <Link href="/legal/terms">
              <a className="hover:text-secondary-light transition">AGB</a>
            </Link>
            <Link href="/legal/privacy">
              <a className="hover:text-secondary-light transition">Datenschutz</a>
            </Link>
            <Link href="/legal/imprint">
              <a className="hover:text-secondary-light transition">Impressum</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
