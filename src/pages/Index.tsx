import { useRef, useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { AddNoticeDialog } from "@/components/AddNoticeDialog";
import { EditNoticeDialog } from "@/components/EditNoticeDialog";
import { NoticeCard } from "@/components/NoticeCard";
import { useNotices } from "@/context/NoticeContext";
import { Notice } from "@/types/notice";
import { useToast } from "../components/ui/use-toast";
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
  const { notices, updateNotice, deleteNotice } = useNotices();
  const [editingNotice, setEditingNotice] = useState<Notice | null>(null);
  const { toast } = useToast();
  
  // Refs for scroll sections
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const coursesRef = useRef<HTMLDivElement>(null);
  const noticesRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll to highlight active section in navigation
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for better highlighting
      
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
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDelete = (id: string) => {
    deleteNotice(id);
    toast({
      title: "Notice Deleted",
      description: "The notice has been successfully deleted.",
    });
  };

  const handleEdit = (notice: Notice) => {
    setEditingNotice(notice);
  };

  const handleSaveEdit = (id: string, updatedFields: Partial<Notice>) => {
    updateNotice(id, updatedFields);
    toast({
      title: "Notice Updated",
      description: "The notice has been successfully updated.",
    });
  };

  const handleToggleImportant = (notice: Notice) => {
    updateNotice(notice.id, { important: !notice.important });
  };
  
  // Create refs map for navigation
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
    <div className="min-h-screen flex w-full">
      <Navigation activeSection={activeSection} sectionRefs={sectionRefs} />
      <main className="flex-1 overflow-x-hidden">
        {/* Home Section */}
        <div ref={homeRef} id="home" className="min-h-screen">
          <Hero />
        </div>
        
        {/* About Section */}
        <div ref={aboutRef} id="about" className="min-h-screen bg-secondary/20">
          <About />
        </div>
        
        {/* Courses Section */}
        <div ref={coursesRef} id="courses" className="min-h-screen">
          <Courses />
        </div>
        
        {/* Notices Section */}
        <div ref={noticesRef} id="notices" className="min-h-screen bg-secondary/20">
          <NoticesSection 
            notices={notices}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onToggleImportant={handleToggleImportant}
          />
        </div>
        
        {/* Events Section */}
        <div ref={eventsRef} id="events" className="min-h-screen">
          <Events />
        </div>
        
        {/* Gallery Section */}
        <div ref={galleryRef} id="gallery" className="min-h-screen bg-secondary/20">
          <Gallery />
        </div>
        
        {/* Contact Section */}
        <div ref={contactRef} id="contact" className="min-h-screen">
          <Contact />
        </div>
        
        {/* Add Footer */}
        <Footer />
        
        <BackToTop />
      </main>

      {editingNotice && (
        <EditNoticeDialog
          notice={editingNotice}
          open={true}
          onOpenChange={(open) => !open && setEditingNotice(null)}
          onSave={(updates) => handleSaveEdit(editingNotice.id, updates)}
        />
      )}
    </div>
  );
}
