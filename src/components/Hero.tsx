
import React from 'react';

export function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-r from-primary/90 to-primary">
      <div className="absolute inset-0 bg-[url('/hero-image.jpg')] bg-cover bg-center bg-no-repeat opacity-20 bg-fixed"></div>
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6 tracking-tight">
          School of STEAM Education
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-3xl font-light">
          Innovate • Create • Educate
        </p>
        <div className="mt-12">
          <button
            className="bg-accent hover:bg-accent/90 text-white font-bold py-3 px-8 rounded-md transition-colors"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
