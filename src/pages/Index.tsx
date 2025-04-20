
import { useRef, useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { useNotices } from "@/context/NoticeContext";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { NoticesSection } from "@/components/NoticesSection";
import { Events } from "@/components/Events";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export default function Index() {
  const { notices } = useNotices();
  
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const noticesRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  
  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);
      
      const offset = 200;
      const sections = [
        { id: "home", ref: homeRef },
        { id: "about", ref: aboutRef },
        { id: "notices", ref: noticesRef },
        { id: "events", ref: eventsRef },
        { id: "gallery", ref: galleryRef }
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
    gallery: galleryRef
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
        
        <div ref={galleryRef} id="gallery" className="relative py-20 bg-gradient-to-b from-secondary/10 to-background">
          <Gallery />
        </div>
        
        <Footer />
        <BackToTop />
      </main>
    </div>
  );
}
