
import React, { useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  { id: 1, src: '/gallery1.jpg', alt: 'Science lab activities', category: 'Science' },
  { id: 2, src: '/gallery2.jpg', alt: 'Technology class', category: 'Technology' },
  { id: 3, src: '/gallery3.jpg', alt: 'Engineering project', category: 'Engineering' },
  { id: 4, src: '/gallery4.jpg', alt: 'Art exhibition', category: 'Arts' },
  { id: 5, src: '/gallery5.jpg', alt: 'Mathematics competition', category: 'Mathematics' },
  { id: 6, src: '/gallery6.jpg', alt: 'School event', category: 'Events' },
  { id: 7, src: '/gallery7.jpg', alt: 'Science fair', category: 'Science' },
  { id: 8, src: '/gallery8.jpg', alt: 'Robotics competition', category: 'Technology' },
];

const categories = ['All', 'Science', 'Technology', 'Engineering', 'Arts', 'Mathematics', 'Events'];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-3">Our Gallery</span>
        <h2 className="text-4xl font-bold text-primary mb-4">Campus Life in Pictures</h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
        <p className="max-w-2xl mx-auto text-gray-700 mb-10">
          Glimpses of our vibrant school life and student activities.
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                ${activeCategory === category 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-secondary/30 text-gray-700 hover:bg-secondary/50'}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredImages.map((image) => (
          <div 
            key={image.id} 
            className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-[1.02] cursor-pointer bg-white"
            onClick={() => setSelectedImage(image.id)}
          >
            <div className="relative overflow-hidden h-64">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.src = `https://placehold.co/600x400?text=Gallery+${image.id}`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-xs font-medium bg-accent/90 inline-block px-2 py-0.5 rounded mb-2">{image.category}</div>
                <h3 className="font-medium">{image.alt}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredImages.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <div className="text-5xl mb-4">📷</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No images in this category</h3>
          <p className="text-gray-500">Try selecting a different category</p>
        </div>
      )}
      
      <div className="mt-12 text-center">
        <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-md transition-all hover:shadow-lg">
          View Full Gallery
        </button>
      </div>
      
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
            
            <Carousel className="w-full">
              <CarouselContent>
                {images.map((image) => (
                  <CarouselItem key={image.id}>
                    <div className="p-1">
                      <div className="flex flex-col items-center justify-center p-6">
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          className="w-full h-[60vh] object-contain"
                          onError={(e) => {
                            e.currentTarget.src = `https://placehold.co/800x600?text=Gallery+${image.id}`;
                          }}
                        />
                        <div className="mt-4 text-center">
                          <h3 className="text-lg font-medium">{image.alt}</h3>
                          <p className="text-sm text-gray-500">{image.category}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
}
