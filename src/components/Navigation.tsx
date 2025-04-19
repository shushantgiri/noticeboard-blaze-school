
import { cn } from "@/lib/utils";
import { Home, Info, BookOpen, Bell, Calendar, Image, Mail, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Sidebar, SidebarContent } from "./ui/sidebar";
import { RefObject, useEffect, useState } from "react";

interface NavigationProps {
  activeSection: string;
  sectionRefs: {
    [key: string]: RefObject<HTMLDivElement>;
  };
}

const navItems = [
  { icon: Home, label: "Home", id: "home" },
  { icon: Info, label: "About", id: "about" },
  { icon: BookOpen, label: "Courses", id: "courses" },
  { icon: Bell, label: "Notices", id: "notices" },
  { icon: Calendar, label: "Events", id: "events" },
  { icon: Image, label: "Gallery", id: "gallery" },
  { icon: Mail, label: "Contact", id: "contact" },
];

export function Navigation({ activeSection, sectionRefs }: NavigationProps) {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsNavVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const ref = sectionRefs[id];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "fixed top-4 left-4 z-[100] transition-transform duration-300",
          isNavVisible ? "translate-x-64 rotate-90" : "translate-x-0 rotate-0"
        )}
        onClick={() => setIsNavVisible(!isNavVisible)}
      >
        {isNavVisible ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </Button>

      <Sidebar className={cn(
        "fixed left-0 top-0 z-[99] transition-transform duration-300 h-screen bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        !isNavVisible && "-translate-x-full"
      )}>
        <SidebarContent className="p-4">
          <div className="mb-8">
            <h1 className="font-bold text-xl text-primary">School of STEAM</h1>
            <p className="text-xs text-muted-foreground">Sundabari, Lamahi, Dang</p>
          </div>
          <nav className={cn(
            "space-y-2 transition-opacity duration-300",
            !isNavVisible && "opacity-0"
          )}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "flex w-full items-center gap-3 px-3 py-2 rounded-md transition-colors",
                  "hover:bg-secondary",
                  activeSection === item.id && "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </SidebarContent>
      </Sidebar>
    </>
  );
}
