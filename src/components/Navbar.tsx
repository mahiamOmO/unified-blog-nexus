
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { navigationMenuTriggerStyle, NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="w-full bg-background border-b border-border sticky top-0 z-20">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="font-playfair text-xl font-bold text-transparent bg-gradient-to-r from-pink-500 via-yellow-400 via-blue-600 via-purple-500 to-teal-400 bg-clip-text tracking-tight">
          Mahia Momo Writes
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            {links.map(({ to, label }) => (
              <NavigationMenuItem key={to}>
                <NavigationMenuLink
                  asChild
                  className={
                    navigationMenuTriggerStyle() +
                    (location.pathname === to
                      ? " text-primary underline underline-offset-4"
                      : "")
                  }
                >
                  <Link to={to}>{label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Navbar;
