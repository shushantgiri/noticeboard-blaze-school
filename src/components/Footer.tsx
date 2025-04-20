
import { FacebookIcon, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">School of STEAM</h3>
            <div className="space-y-4">
              <p className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-accent" />
                Sundabari, Lamahi, Dang
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-accent" />
                +977-1234567890
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-accent" />
                info@steamschool.edu.np
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="hover:text-accent transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent transition-colors">About Us</a>
              </li>
              <li>
                <a href="#notices" className="hover:text-accent transition-colors">Notices</a>
              </li>
              <li>
                <a href="#events" className="hover:text-accent transition-colors">Events</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-accent transition-colors">Gallery</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 p-3 rounded-full transition-colors"
              >
                <FacebookIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} School of STEAM Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
