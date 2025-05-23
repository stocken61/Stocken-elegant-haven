import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Prüfen ob Cookie-Zustimmung bereits erteilt wurde
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-2">
            Cookie-Einstellungen
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
            Diese helfen uns dabei, die Website-Funktionalität zu verbessern und Ihnen relevante Inhalte anzuzeigen. 
            Durch die weitere Nutzung unserer Website stimmen Sie der Verwendung von Cookies zu.
          </p>
          <div className="mt-2">
            <a 
              href="/datenschutz" 
              className="text-primary hover:text-primary-dark text-sm underline"
            >
              Mehr in unserer Datenschutzerklärung
            </a>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 min-w-fit">
          <button
            onClick={declineCookies}
            className="px-4 py-2 text-sm border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
          >
            Ablehnen
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 text-sm bg-primary text-white hover:bg-primary-dark rounded-md transition-colors"
          >
            Alle akzeptieren
          </button>
          <button
            onClick={declineCookies}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Cookie-Banner schließen"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}