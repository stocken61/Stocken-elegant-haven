import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Testimonial } from '@/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  // Render stars based on rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(testimonial.rating);
    const hasHalfStar = testimonial.rating % 1 !== 0;
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FontAwesomeIcon key={`star-${i}`} icon="star" />
      );
    }
    
    // Half star if needed
    if (hasHalfStar) {
      stars.push(
        <FontAwesomeIcon key="half-star" icon="star-half-alt" />
      );
    }
    
    // Empty stars to fill up to 5
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FontAwesomeIcon key={`empty-star-${i}`} icon={["far", "star"]} />
      );
    }
    
    return stars;
  };
  
  // Generate avatar initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };
  
  // Get a random background color based on name
  const getAvatarBgClass = () => {
    const bgClasses = [
      'bg-primary-light',
      'bg-secondary-dark',
      'bg-primary',
      'bg-accent'
    ];
    
    const nameHash = testimonial.name.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    
    return bgClasses[nameHash % bgClasses.length];
  };
  
  return (
    <div className="bg-neutral-light p-8 rounded-lg shadow-sm">
      <div className="flex text-primary mb-4">
        {renderStars()}
      </div>
      <p className="text-neutral-dark mb-6 italic">
        "{testimonial.comment}"
      </p>
      <div className="flex items-center">
        <div className={`${getAvatarBgClass()} rounded-full w-12 h-12 flex items-center justify-center text-white font-medium`}>
          {getInitials(testimonial.name)}
        </div>
        <div className="ml-3">
          <h4 className="font-medium">{testimonial.name}</h4>
          <p className="text-sm text-neutral-dark">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
