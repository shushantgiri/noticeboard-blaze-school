
import { cn } from "@/lib/utils";
import { Bell, Home, Info, BookOpen, Calendar, Image, Mail, MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Sidebar, SidebarContent } from "./ui/sidebar";
import { RefObject } from "react";

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
  const scrollToSection = (id: string) => {
    const ref = sectionRefs[id];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Sidebar>
      <SidebarContent className="p-4">
        <div className="mb-8">
          <h1 className="font-bold text-xl text-primary">School of STEAM</h1>
          <p className="text-xs text-muted-foreground">Sundabari, Lamahi, Dang</p>
        </div>
        <nav className="space-y-2">
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
  );
}
