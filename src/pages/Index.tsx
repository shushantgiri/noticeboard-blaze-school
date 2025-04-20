
import { useRef, useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { useNotices } from "@/context/NoticeContext";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Courses } from "@/components/Courses";
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
  const coursesRef = useRef<HTMLDivElement>(null);
  const noticesRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      const sections = [
        { id: "home", ref: homeRef },
        { id: "about", ref: aboutRef },
        { id: "courses", ref: coursesRef },
        { id: "notices", ref: noticesRef },
        { id: "events", ref: eventsRef },
        { id: "gallery", ref: galleryRef },
        { id: "contact", ref: contactRef }
      ];
      
      for (const section of sections) {
        if (!section.ref.current) continue;
        
        const offsetTop = section.ref.current.offsetTop;
        const offsetHeight = section.ref.current.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
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
    courses: coursesRef,
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
        
        <div ref={aboutRef} id="about" className="min-h-screen bg-secondary/20">
          <About />
        </div>
        
        <div ref={coursesRef} id="courses" className="min-h-screen">
          <Courses />
        </div>
        
        <div ref={noticesRef} id="notices" className="min-h-screen bg-secondary/20">
          <NoticesSection 
            notices={notices}
            onEdit={() => {}}
            onDelete={() => {}}
            onToggleImportant={() => {}}
          />
        </div>
        
        <div ref={eventsRef} id="events" className="min-h-screen">
          <Events />
        </div>
        
        <div ref={galleryRef} id="gallery" className="min-h-screen bg-secondary/20">
          <Gallery />
        </div>
        
        <div ref={contactRef} id="contact" className="min-h-screen">
          <Contact />
        </div>
        
        <Footer />
        
        <BackToTop />
      </main>
    </div>
  );
}
