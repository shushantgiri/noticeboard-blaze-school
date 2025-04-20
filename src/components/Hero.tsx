
import React from 'react';

export function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-[url('/hero-image.jpg')] bg-cover bg-center bg-no-repeat opacity-30 bg-fixed transform scale-110 transition-transform duration-1000"></div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/10"></div>
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-6">
        <div className="translate-y-0 transform transition-all duration-1000 ease-out">
          <div className="flex flex-col items-center space-y-6">
            <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm tracking-widest uppercase">Innovative Education</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-4 tracking-tight">
              School of STEAM Education
            </h1>
            <p className="text-xl md:text-2xl text-center max-w-2xl font-light mb-4">
              Innovate • Create • Educate
            </p>
            <div className="flex gap-4 mt-6">
              <button
                className="bg-accent hover:bg-accent/90 text-white font-bold py-3 px-8 rounded-md transition-all hover:shadow-lg hover:-translate-y-1"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </button>
              <button
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-md transition-all hover:shadow-lg hover:-translate-y-1"
                onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Our Courses
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <button 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
