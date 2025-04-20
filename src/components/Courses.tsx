
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const courses = [
  {
    id: 1,
    title: "Science",
    description: "Explore the natural world through observation and experimentation.",
    icon: "🔬",
    price: "$299",
    duration: "16 weeks",
    level: "Beginner",
    rating: 4.8
  },
  {
    id: 2,
    title: "Technology",
    description: "Learn about digital tools and computer science fundamentals.",
    icon: "💻",
    price: "$349",
    duration: "12 weeks",
    level: "Intermediate",
    rating: 4.9
  },
  {
    id: 3,
    title: "Engineering",
    description: "Design, build, and test solutions to real-world problems.",
    icon: "⚙️",
    price: "$399",
    duration: "14 weeks",
    level: "Advanced",
    rating: 4.7
  },
  {
    id: 4,
    title: "Arts",
    description: "Express creativity through visual arts, music, and design.",
    icon: "🎨",
    price: "$249",
    duration: "10 weeks",
    level: "All Levels",
    rating: 4.6
  },
  {
    id: 5,
    title: "Mathematics",
    description: "Develop logical thinking and problem-solving abilities.",
    icon: "🔢",
    price: "$279",
    duration: "12 weeks",
    level: "Intermediate",
    rating: 4.5
  },
  {
    id: 6,
    title: "Robotics",
    description: "Build and program robots to solve complex challenges.",
    icon: "🤖",
    price: "$449",
    duration: "16 weeks",
    level: "Advanced",
    rating: 4.9
  }
];

export function Courses() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-3">Our Curriculum</span>
        <h2 className="text-4xl font-bold text-primary mb-4">Explore Our STEAM Courses</h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
        <p className="max-w-2xl mx-auto text-gray-700">
          Our comprehensive curriculum integrates all aspects of STEAM education to create well-rounded
          learners ready for the challenges of tomorrow.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <Card
            key={course.id}
            className="group overflow-hidden hover:shadow-xl transition-all duration-300 border border-secondary/50 hover:border-primary/20"
          >
            <div className="relative h-48 bg-secondary/20 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                {course.icon}
              </div>
              <div className="absolute top-3 right-3 bg-accent/90 text-white text-xs font-bold px-2 py-1 rounded-md">
                {course.price}
              </div>
            </div>
            <CardHeader>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium bg-secondary/40 rounded-full px-2 py-0.5">{course.level}</span>
                <div className="flex items-center text-xs">
                  <span className="text-amber-500 mr-1">★</span>
                  <span>{course.rating} / 5.0</span>
                </div>
              </div>
              <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">
                {course.title}
              </CardTitle>
              <CardDescription>
                <div className="text-xs text-muted-foreground">Duration: {course.duration}</div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 line-clamp-2">{course.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <button className="text-primary font-medium hover:text-accent transition-colors text-sm">
                Learn more
              </button>
              <button className="bg-primary hover:bg-primary/90 text-white text-sm font-medium py-1.5 px-4 rounded-md transition-all hover:shadow-md">
                Enroll Now
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <button className="bg-primary/10 hover:bg-primary/20 text-primary font-bold py-4 px-10 rounded-md transition-colors flex mx-auto items-center space-x-2">
          <span>View All Courses</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
