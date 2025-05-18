import React from 'react';

/**
 * Komponente zum direkten Anzeigen des Empfangsbereichs
 * Da wir Probleme mit dem Laden des Originalbildes haben, erstellen wir hier eine einfache Komponente
 */
const ReceptionImage: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-primary-light rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
        <div className="text-center mb-4">
          <h3 className="text-2xl font-bold text-primary mb-2">Boutique Hotel Stocken</h3>
          <p className="text-lg text-neutral-dark">Moderne Empfangstheke mit Mooswänden</p>
        </div>
        <div className="w-4/5 h-16 bg-neutral-light rounded-lg flex items-center justify-center border-2 border-primary">
          <span className="text-2xl font-bold text-primary">stocken</span>
          <span className="text-xl ml-2 text-neutral-dark">by Pontera</span>
        </div>
      </div>
    </div>
  );
};

export default ReceptionImage;