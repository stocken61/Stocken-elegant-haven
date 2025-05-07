import React from 'react';

interface StockenLogoProps {
  className?: string;
  inverted?: boolean;
}

const StockenLogo: React.FC<StockenLogoProps> = ({ className = '', inverted = false }) => {
  const color = inverted ? '#ffffff' : '#166534'; // Grün (primary) oder Weiß
  
  return (
    <div className={`${className} flex items-center`}>
      <svg 
        viewBox="0 0 200 60" 
        width="200" 
        height="60" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill={color}>
          {/* Logo Symbol - Einfaches stilisiertes Haus/Hotel */}
          <path d="M20 30 L10 40 L10 55 L30 55 L30 40 L20 30 Z" />
          <path d="M20 10 L40 25 L0 25 L20 10 Z" />
          
          {/* Text "STOCKEN" */}
          <text x="50" y="35" fontFamily="Georgia, serif" fontSize="24" fontWeight="bold">
            STOCKEN
          </text>
          
          {/* Text "HOTEL" */}
          <text x="50" y="50" fontFamily="Arial, sans-serif" fontSize="14">
            BOUTIQUE HOTEL
          </text>
        </g>
      </svg>
    </div>
  );
};

export default StockenLogo;