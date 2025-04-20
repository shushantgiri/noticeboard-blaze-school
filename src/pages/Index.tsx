import { useRef, useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { useNotices } from "@/context/NoticeContext";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { NoticesSection } from "@/components/NoticesSection";
import { Events } from "@/components/Events";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { BackToTop } from "@/components/BackToTop";
import { Footer } from "@/components/Footer";

export default function Index() {
  const { notices } = useNotices();
  
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const noticesRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);
      
      // Update active section for nav highlighting
      const offset = 200;
      const sections = [
        { id: "home", ref: homeRef },
        { id: "about", ref: aboutRef },
        { id: "notices", ref: noticesRef },
        { id: "events", ref: eventsRef },
        { id: "gallery", ref: galleryRef },
        { id: "contact", ref: contactRef }
      ];
      
      for (const section of sections) {
        if (!section.ref.current) continue;
        
        const offsetTop = section.ref.current.offsetTop;
        const offsetHeight = section.ref.current.offsetHeight;
        
        if (scrollPosition + offset >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    notices: noticesRef,
    events: eventsRef,
    gallery: galleryRef,
    contact: contactRef
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Navigation activeSection={activeSection} sectionRefs={sectionRefs} />
      
      <main className="relative z-10 w-full">
        <div ref={homeRef} id="home" className="min-h-screen">
          <Hero />
        </div>
        
        <div ref={aboutRef} id="about" className="relative min-h-screen bg-gradient-to-b from-secondary/5 to-background">
          <div className="absolute inset-0 bg-[url('/pattern-bg.png')] bg-repeat opacity-5"></div>
          <About />
        </div>
        
        <div ref={noticesRef} id="notices" className="relative min-h-screen">
          <div className="container mx-auto px-6 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* News Section - Left Side */}
              <div className="lg:col-span-7">
                <NoticesSection 
                  notices={notices}
                  onEdit={() => {}}
                  onDelete={() => {}}
                  onToggleImportant={() => {}}
                />
              </div>
              
              {/* Events Section - Right Side */}
              <div className="lg:col-span-5">
                <Events />
              </div>
            </div>
          </div>
        </div>
        
        <div ref={galleryRef} id="gallery" className="relative min-h-screen bg-gradient-to-b from-secondary/10 to-background">
          <Gallery />
        </div>
        
        <div ref={contactRef} id="contact" className="relative min-h-screen bg-gradient-to-tr from-primary/5 to-background">
          <Contact />
        </div>
        
        <div className="fixed bottom-4 left-4 z-40">
          <div className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:shadow-xl transition-all">
            <a href="https://m.me/your-page" target="_blank" rel="noopener noreferrer" className="block">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M14 22c5.523 0 10-4.477 10-10S19.523 2 14 2 4 6.477 4 12s4.477 10 10 10z"></path>
                  <path d="m7 15 5-3-1 7 6-4-1-4 4 1"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
        
        <Footer />
        <BackToTop />
      </main>
    </div>
  );
}
