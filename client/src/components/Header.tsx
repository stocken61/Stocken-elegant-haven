import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/i18n/LanguageContext';


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className={`bg-white shadow-md sticky top-0 z-50 transition-all ${scrolled ? 'py-0' : 'py-0'}`}>
      <div className="container mx-auto px-1 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center -my-4 ml-2 md:ml-[-20px]">
          <img src="/images/logo_transparent_highres_green.webp" alt="Stocken Hotel Logo" className="h-36 md:h-40 lg:h-44 object-contain" loading="lazy" />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:pl-6 lg:pl-0">
          <div className="flex space-x-6 md:space-x-8 lg:space-x-10">
            <Link href="/" className={`nav-link text-sm lg:text-base ${isActive('/') ? 'text-primary font-medium' : 'text-neutral-dark hover:text-primary transition duration-300'}`}>
              {t.nav.home}
            </Link>
            <Link href="/about" className={`nav-link text-sm lg:text-base ${isActive('/about') ? 'text-primary font-medium' : 'text-neutral-dark hover:text-primary transition duration-300'}`}>
              <span className="md:hidden lg:inline">{t.nav.about}</span>
              <span className="hidden md:inline lg:hidden">{t.nav.about.replace(' ', '\u00A0')}</span>
            </Link>
            <Link href="/rooms" className={`nav-link text-sm lg:text-base ${isActive('/rooms') ? 'text-primary font-medium' : 'text-neutral-dark hover:text-primary transition duration-300'}`}>
              {t.nav.rooms}
            </Link>
            <Link href="/restaurant" className={`nav-link text-sm lg:text-base ${isActive('/restaurant') ? 'text-primary font-medium' : 'text-neutral-dark hover:text-primary transition duration-300'}`}>
              {t.nav.restaurant}
            </Link>
            <Link href="/services" className={`nav-link text-sm lg:text-base ${isActive('/services') ? 'text-primary font-medium' : 'text-neutral-dark hover:text-primary transition duration-300'}`}>
              {t.nav.services}
            </Link>
            <Link href="/contact" className={`nav-link text-sm lg:text-base ${isActive('/contact') ? 'text-primary font-medium' : 'text-neutral-dark hover:text-primary transition duration-300'}`}>
              {t.nav.contact}
            </Link>
          </div>
        </nav>
        
        {/* Language Toggle and Booking Button */}
        <div className="hidden md:flex items-center md:space-x-2 lg:space-x-6 md:ml-8 lg:ml-0">
          <div className="flex space-x-1 md:space-x-2 text-xs lg:text-sm">
            <button 
              onClick={() => setLanguage('de')} 
              className={`${language === 'de' ? 'font-medium text-primary' : 'text-neutral-dark hover:text-primary transition'}`}
            >
              DE
            </button>
            <button 
              onClick={() => setLanguage('en')} 
              className={`${language === 'en' ? 'font-medium text-primary' : 'text-neutral-dark hover:text-primary transition'}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLanguage('fr')} 
              className={`${language === 'fr' ? 'font-medium text-primary' : 'text-neutral-dark hover:text-primary transition'}`}
            >
              FR
            </button>
          </div>
          
          <a 
            href="https://www.booking.com/hotel/ch/boutique-stocken-by-pontera.de.html" 
            target="_blank" 
            rel="noopener" 
            className="bg-primary hover:bg-primary-light text-white text-xs lg:text-sm py-1 h-8 px-2 lg:px-3 rounded-md transition-colors inline-flex items-center book-button"
          >
            <span>{t.nav.book}</span>
            <FontAwesomeIcon icon="arrow-right" className="ml-1 lg:ml-2 text-xs" />
          </a>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-neutral-dark hover:text-primary mr-4"
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          <FontAwesomeIcon icon="bars" className="text-xl" />
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <nav 
        className={`bg-white md:hidden py-5 px-4 border-t absolute w-full shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 invisible'}`}
      >
        <div className="space-y-4">
          <Link 
            href="/"
            className={`block ${isActive('/') ? 'text-primary font-medium' : 'text-neutral-dark hover:text-primary transition duration-300'} py-2`}
            onClick={closeMenu}
          >
            {t.nav.home}
          </Link>
          <Link 
            href="/about"
            className={`block ${isActive('/about') ? 'text-primary font-medium' : 'text-neutral-dark hover:text-primary transition duration-300'} py-2`}
            onClick={closeMenu}
          >
            {t.nav.about}
          </Link>
          <Link 
            href="/rooms"
            className={`block ${isActive('/rooms') ? 'text-primary font-medium' : 'text-neutral-dark hover:text-primary transition duration-300'} py-2`}
            onClick={closeMenu}
          >
            {t.nav.rooms}
          </Link>
          <Link 
            href="/restaurant"
            className={`block ${isActive('/restaurant') ? 'text-primary font-medium' : 'text-neutral-dark hover:text-primary transition duration-300'} py-2`}
            onClick={closeMenu}
          >
            {t.nav.restaurant}
          </Link>
          <Link 
            href="/services"
            className={`block ${isActive('/services') ? 'text-primary font-medium' : 'text-neutral-dark hover:text-primary transition duration-300'} py-2`}
            onClick={closeMenu}
          >
            {t.nav.services}
          </Link>
          <Link 
            href="/contact"
            className={`block ${isActive('/contact') ? 'text-primary font-medium' : 'text-neutral-dark hover:text-primary transition duration-300'} py-2`}
            onClick={closeMenu}
          >
            {t.nav.contact}
          </Link>
          
          <div className="pt-3 border-t border-neutral">
            <p className="text-sm text-neutral-dark mb-2">Sprache:</p>
            <div className="flex space-x-4 text-sm">
              <button 
                onClick={() => setLanguage('de')} 
                className={`${language === 'de' ? 'font-medium text-primary' : 'text-neutral-dark hover:text-primary transition'}`}
              >
                DE
              </button>
              <button 
                onClick={() => setLanguage('en')} 
                className={`${language === 'en' ? 'font-medium text-primary' : 'text-neutral-dark hover:text-primary transition'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage('fr')} 
                className={`${language === 'fr' ? 'font-medium text-primary' : 'text-neutral-dark hover:text-primary transition'}`}
              >
                FR
              </button>
            </div>
          </div>
          
          <a 
            href="https://www.booking.com/hotel/ch/boutique-stocken-by-pontera.de.html" 
            target="_blank" 
            rel="noopener" 
            className="block bg-primary hover:bg-primary-light text-white py-3 px-4 rounded-md transition duration-300 text-center mt-4 w-full book-button"
            onClick={closeMenu}
          >
{t.nav.book}
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
