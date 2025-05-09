import { cn } from "@/lib/utils";
import { Home, Info, Bell, Calendar, Image, Mail, Menu, X } from "lucide-react";
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
  { icon: Bell, label: "News", id: "notices" },
  { icon: Calendar, label: "Events", id: "events" },
  { icon: Image, label: "Gallery", id: "gallery" },
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
          "fixed top-4 left-4 z-[200] transition-transform duration-300 bg-background/80 backdrop-blur-sm",
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

      <Sidebar 
        className={cn(
          "fixed left-0 top-0 z-[199] transition-transform duration-300 h-screen bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-r border-r-secondary/30 shadow-lg",
          !isNavVisible && "-translate-x-full"
        )}
      >
        <SidebarContent className="p-6">
          <div className="mb-10">
            <h1 className="font-bold text-2xl text-primary mb-1">School of STEAM</h1>
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
                  "flex w-full items-center gap-3 px-4 py-3 rounded-md transition-all",
                  "hover:bg-secondary/60 hover:translate-x-1",
                  activeSection === item.id 
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md" 
                    : "hover:text-primary"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </SidebarContent>
      </Sidebar>
    </>
  );
}
