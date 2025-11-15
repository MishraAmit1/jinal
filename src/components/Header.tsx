import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import logoImage from "@assets/image_1762334682696.png";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/book-service", label: "Book Service" },
    { href: "/faqs", label: "FAQs" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white border-b shadow-md">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/">
            <a className="flex-shrink-0 block hover:scale-105 transition-transform">
              <img
                src={logoImage}
                alt="Jinal Auto Garage"
                className="h-12 md:h-16 w-auto"
                data-testid="logo-header"
              />
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  data-testid={`link-nav-${link.label
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${isActive(link.href)
                    ? "bg-[#055b99] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </nav>

          {/* Phone Help Section */}
          <div className="flex items-center gap-3">
            <a
              href="tel:8551004444"
              className="hidden sm:flex items-center gap-3 group"
            >
              <div className="w-11 h-11 rounded-full bg-[#055b99] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#3d4d7a]">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div className="hidden md:block">
                <p className="text-xs text-gray-600">Need help?</p>
                <p className="text-sm font-bold text-gray-900">99250 41198</p>
              </div>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t bg-white">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-testid={`link-mobile-${link.label
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className={`block px-4 py-3 rounded-md text-base font-medium transition-all ${isActive(link.href)
                      ? "bg-[#055b99] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                      }`}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
              <a href="tel:8551004444" className="sm:hidden mt-4">
                <div className="flex items-center gap-3 px-4 py-2 bg-gray-50 rounded-lg">
                  <div className="w-11 h-11 rounded-full bg-[#055b99] flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Need help?</p>
                    <p className="text-sm font-bold text-gray-900">99250 41198</p>
                  </div>
                </div>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}