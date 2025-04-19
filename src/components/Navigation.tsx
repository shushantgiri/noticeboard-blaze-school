
import { cn } from "@/lib/utils";
import { Bell, Home, Info, Mail, MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { NavLink } from "react-router-dom";
import { Sidebar, SidebarContent } from "./ui/sidebar";

const navItems = [
  { icon: Home, label: "Home", to: "/" },
  { icon: Bell, label: "Notices", to: "/notices" },
  { icon: Info, label: "About", to: "/about" },
  { icon: Mail, label: "Contact", to: "/contact" },
];

export function Navigation() {
  return (
    <Sidebar>
      <SidebarContent className="p-4">
        <div className="mb-8">
          <h1 className="font-bold text-xl text-primary">School Notices</h1>
        </div>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                  "hover:bg-secondary",
                  isActive && "bg-primary text-primary-foreground hover:bg-primary/90"
                )
              }
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </SidebarContent>
    </Sidebar>
  );
}
