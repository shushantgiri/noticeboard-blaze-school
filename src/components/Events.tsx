
import React from 'react';

const events = [
  {
    id: 1,
    title: "Annual Science Fair",
    date: "May 15, 2023",
    image: "/event1.jpg",
    description: "Join us for a day of scientific discovery and innovation as students showcase their projects."
  },
  {
    id: 2,
    title: "Coding Competition",
    date: "June 10, 2023",
    image: "/event2.jpg",
    description: "Test your programming skills in our annual coding challenge with prizes for top performers."
  },
  {
    id: 3,
    title: "Art Exhibition",
    date: "July 5, 2023",
    image: "/event3.jpg",
    description: "Experience creativity at its finest as our students display their artistic masterpieces."
  }
];

export function Events() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-primary mb-4">Upcoming Events</h2>
        <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
        <p className="max-w-2xl mx-auto text-gray-700">
          Stay updated with our school activities and join us for these exciting events.
        </p>
      </div>
      
      <div className="space-y-8">
        {events.map((event) => (
          <div 
            key={event.id} 
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/600x400?text=Event+${event.id}`;
                  }}
                />
              </div>
              <div className="md:w-2/3 p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-primary">{event.title}</h3>
                  <span className="bg-accent text-white text-sm py-1 px-3 rounded-full">{event.date}</span>
                </div>
                <p className="text-gray-700 mb-6">{event.description}</p>
                <button className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-md transition-colors">
          View All Events
        </button>
      </div>
    </div>
  );
}
