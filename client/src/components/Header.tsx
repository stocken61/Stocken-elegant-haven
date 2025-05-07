import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StockenLogo from '@/assets/stockenLogo';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

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
    <header className={`bg-white shadow-md sticky top-0 z-50 transition-all ${scrolled ? 'py-2' : 'py-3'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center">
            <StockenLogo className="h-14" />
          </a>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/">
            <a className={`nav-link ${isActive('/') ? 'text-primary font-medium' : 'text-neutral-dark hover:text-primary transition duration-300'}`}>
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className={`nav-link ${isActive('/about') ? 'text-primary font-medium' : 'text-neutral-dark hover:text-primary transition duration-300'}`}>
              Über uns
            </a>
          </Link>
          <Link href="/rooms">
            <a className={`nav-link ${isActive('/rooms') ? 'text-primary font-medium' : 'text-neutral-dark hover:text-primary transition duration-300'}`}>
              Zimmer
            </a>
          </Link>
          <Link href="/restaurant">
            <a className={`nav-link ${isActive('/restaurant') ? 'text-primary font-medium' : 'text-neutral-dark hover:text-primary transition duration-300'}`}>
              Restaurant
            </a>
          </Link>
          <Link href="/contact">
            <a className={`nav-link ${isActive('/contact') ? 'text-primary font-medium' : 'text-neutral-dark hover:text-primary transition duration-300'}`}>
              Kontakt
            </a>
          </Link>
        </nav>
        
        {/* Language Toggle and Booking Button */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex space-x-2 text-sm">
            <a href="#" className="font-medium text-primary">DE</a>
            <a href="#" className="text-neutral-dark hover:text-primary transition">EN</a>
            <a href="#" className="text-neutral-dark hover:text-primary transition">FR</a>
          </div>
          
          <Button 
            variant="default" 
            className="bg-primary hover:bg-primary-light text-white"
          >
            <span>Buchen</span>
            <FontAwesomeIcon icon="arrow-right" className="ml-2 text-xs" />
          </Button>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-neutral-dark hover:text-primary"
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
          <Link href="/">
            <a 
              className={`block ${isActive('/') ? 'text-primary font-medium' : 'text-neutral-dark hover:text-primary transition duration-300'} py-2`}
              onClick={closeMenu}
            >
              Home
            </a>
          </Link>
          <Link href="/about">
            <a 
              className={`block ${isActive('/about') ? 'text-primary font-medium' : 'text-neutral-dark hover:text-primary transition duration-300'} py-2`}
              onClick={closeMenu}
            >
              Über uns
            </a>
          </Link>
          <Link href="/rooms">
            <a 
              className={`block ${isActive('/rooms') ? 'text-primary font-medium' : 'text-neutral-dark hover:text-primary transition duration-300'} py-2`}
              onClick={closeMenu}
            >
              Zimmer
            </a>
          </Link>
          <Link href="/restaurant">
            <a 
              className={`block ${isActive('/restaurant') ? 'text-primary font-medium' : 'text-neutral-dark hover:text-primary transition duration-300'} py-2`}
              onClick={closeMenu}
            >
              Restaurant
            </a>
          </Link>
          <Link href="/contact">
            <a 
              className={`block ${isActive('/contact') ? 'text-primary font-medium' : 'text-neutral-dark hover:text-primary transition duration-300'} py-2`}
              onClick={closeMenu}
            >
              Kontakt
            </a>
          </Link>
          
          <div className="pt-3 border-t border-neutral">
            <p className="text-sm text-neutral-dark mb-2">Sprache:</p>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="font-medium text-primary">DE</a>
              <a href="#" className="text-neutral-dark hover:text-primary transition">EN</a>
              <a href="#" className="text-neutral-dark hover:text-primary transition">FR</a>
            </div>
          </div>
          
          <Button 
            className="block bg-primary hover:bg-primary-light text-white py-3 px-4 rounded-md transition duration-300 text-center mt-4 w-full"
          >
            Buchen
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
