import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@/components/ui/button';
import logoImage from '@assets/logo_transparent_highres_green.png';

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
    <header className={`bg-white shadow-md sticky top-0 z-50 transition-all ${scrolled ? 'py-0' : 'py-0'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center -my-4">
          <img src={logoImage} alt="Stocken Hotel Logo" className="h-44" />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className={`nav-link ${isActive('/') ? 'text-primary font-medium' : 'text-neutral-dark hover:text-primary transition duration-300'}`}>
            Home
          </Link>
          <Link href="/about" className={`nav-link ${isActive('/about') ? 'text-primary font-medium' : 'text-neutral-dark hover:text-primary transition duration-300'}`}>
            Über uns
          </Link>
          <Link href="/rooms" className={`nav-link ${isActive('/rooms') ? 'text-primary font-medium' : 'text-neutral-dark hover:text-primary transition duration-300'}`}>
            Zimmer
          </Link>
          <Link href="/restaurant" className={`nav-link ${isActive('/restaurant') ? 'text-primary font-medium' : 'text-neutral-dark hover:text-primary transition duration-300'}`}>
            Restaurant
          </Link>
          <Link href="/contact" className={`nav-link ${isActive('/contact') ? 'text-primary font-medium' : 'text-neutral-dark hover:text-primary transition duration-300'}`}>
            Kontakt
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
          <Link 
            href="/"
            className={`block ${isActive('/') ? 'text-primary font-medium' : 'text-neutral-dark hover:text-primary transition duration-300'} py-2`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            href="/about"
            className={`block ${isActive('/about') ? 'text-primary font-medium' : 'text-neutral-dark hover:text-primary transition duration-300'} py-2`}
            onClick={closeMenu}
          >
            Über uns
          </Link>
          <Link 
            href="/rooms"
            className={`block ${isActive('/rooms') ? 'text-primary font-medium' : 'text-neutral-dark hover:text-primary transition duration-300'} py-2`}
            onClick={closeMenu}
          >
            Zimmer
          </Link>
          <Link 
            href="/restaurant"
            className={`block ${isActive('/restaurant') ? 'text-primary font-medium' : 'text-neutral-dark hover:text-primary transition duration-300'} py-2`}
            onClick={closeMenu}
          >
            Restaurant
          </Link>
          <Link 
            href="/contact"
            className={`block ${isActive('/contact') ? 'text-primary font-medium' : 'text-neutral-dark hover:text-primary transition duration-300'} py-2`}
            onClick={closeMenu}
          >
            Kontakt
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
