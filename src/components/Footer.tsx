import { FacebookIcon, Mail, MapPin, MessageSquare, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';

export function Footer() {
  const { toast } = useToast();
  
  const handleLiveHelp = () => {
    window.open('https://m.me/schoolofsteam', '_blank');
    toast({
      title: "Live Help",
      description: "Connecting you to our support team on Messenger...",
    });
  };
  
  return (
    <>
      <Button
        onClick={handleLiveHelp}
        className="fixed left-6 bottom-6 z-50 bg-[#0084FF] hover:bg-[#0084FF]/90 text-white flex items-center gap-2 shadow-lg"
      >
        <MessageSquare className="h-5 w-5" />
        Live Help
      </Button>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
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
                  <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Need Help?</h3>
              <p className="mb-6">Get instant support from our teachers through Facebook Messenger.</p>
              <Button
                onClick={handleLiveHelp}
                className="bg-[#0084FF] hover:bg-[#0084FF]/90 text-white flex items-center gap-2"
              >
                <MessageSquare className="h-5 w-5" />
                Live Help
              </Button>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} School of STEAM Education. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
