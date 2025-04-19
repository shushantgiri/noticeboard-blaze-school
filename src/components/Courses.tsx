
import React from 'react';

const courses = [
  {
    id: 1,
    title: "Science",
    description: "Explore the natural world through observation and experimentation.",
    icon: "🔬"
  },
  {
    id: 2,
    title: "Technology",
    description: "Learn about digital tools and computer science fundamentals.",
    icon: "💻"
  },
  {
    id: 3,
    title: "Engineering",
    description: "Design, build, and test solutions to real-world problems.",
    icon: "⚙️"
  },
  {
    id: 4,
    title: "Arts",
    description: "Express creativity through visual arts, music, and design.",
    icon: "🎨"
  },
  {
    id: 5,
    title: "Mathematics",
    description: "Develop logical thinking and problem-solving abilities.",
    icon: "🔢"
  }
];

export function Courses() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-primary mb-4">Our STEAM Courses</h2>
        <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
        <p className="max-w-2xl mx-auto text-gray-700">
          Our comprehensive curriculum integrates all aspects of STEAM education to create well-rounded
          learners ready for the challenges of tomorrow.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div 
            key={course.id} 
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="p-6">
              <div className="text-4xl mb-4">{course.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-primary">{course.title}</h3>
              <p className="text-gray-700">{course.description}</p>
            </div>
            <div className="bg-secondary/20 px-6 py-4">
              <button className="text-primary font-medium hover:text-accent transition-colors">
                Learn more →
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-md transition-colors">
          View All Courses
        </button>
      </div>
    </div>
  );
}
