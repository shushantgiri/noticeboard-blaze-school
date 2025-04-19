
import React from 'react';

export function About() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary mb-4">About Our School</h2>
        <div className="w-20 h-1 bg-accent mx-auto"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
          <img 
            src="/school-image.jpg" 
            alt="School of STEAM Education" 
            className="w-full h-auto"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/600x400?text=School+of+STEAM";
            }}
          />
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-4">Where Innovation Meets Education</h3>
          <p className="text-gray-700 mb-6">
            At School of STEAM Education, we believe in nurturing the next generation of innovators, 
            thinkers, and creators. Founded in 2010, our institution has been at the forefront of 
            blending Science, Technology, Engineering, Arts, and Mathematics into a comprehensive 
            educational approach.
          </p>
          <p className="text-gray-700 mb-6">
            Located in the heart of Sundabari, Lamahi, Dang, our campus provides a vibrant environment 
            for learning and exploration. Our dedicated faculty brings real-world experience into the 
            classroom, ensuring that students not only learn theories but also their practical applications.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <span className="text-primary text-3xl font-bold">500+</span>
              <p className="text-gray-600 mt-2">Students</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <span className="text-primary text-3xl font-bold">30+</span>
              <p className="text-gray-600 mt-2">Expert Faculty</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
