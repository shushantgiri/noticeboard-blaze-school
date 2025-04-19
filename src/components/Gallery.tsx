
import React from 'react';

const images = [
  { id: 1, src: '/gallery1.jpg', alt: 'Science lab activities' },
  { id: 2, src: '/gallery2.jpg', alt: 'Technology class' },
  { id: 3, src: '/gallery3.jpg', alt: 'Engineering project' },
  { id: 4, src: '/gallery4.jpg', alt: 'Art exhibition' },
  { id: 5, src: '/gallery5.jpg', alt: 'Mathematics competition' },
  { id: 6, src: '/gallery6.jpg', alt: 'School event' },
];

export function Gallery() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-primary mb-4">Photo Gallery</h2>
        <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
        <p className="max-w-2xl mx-auto text-gray-700">
          Glimpses of our vibrant school life and student activities.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image) => (
          <div 
            key={image.id} 
            className="overflow-hidden rounded-lg shadow-lg transform transition-transform hover:scale-105"
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-64 object-cover"
              onError={(e) => {
                e.currentTarget.src = `https://placehold.co/600x400?text=Gallery+${image.id}`;
              }}
            />
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-md transition-colors">
          View Full Gallery
        </button>
      </div>
    </div>
  );
}
