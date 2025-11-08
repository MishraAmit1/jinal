import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import logoImage from "@assets/logo-footer.png";

export function Footer() {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/book-service", label: "Book Service" },
    { href: "/faqs", label: "FAQs" },
    { href: "/contact", label: "Contact" },
  ];

  const topServices = [
    "General Maintenance",
    "Engine Diagnostics",
    "Oil Change",
    "Brake Services",
    "AC Servicing",
  ];

  return (
    <footer className="bg-[#055b99] text-white">
      <div className="container max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src={logoImage}
              alt="Jinal Auto Garage"
              className="h-16 w-auto mb-4"
              data-testid="logo-footer"
            />
            <p className="text-white/80 text-sm">
              Your trusted partner for reliable and affordable auto care in Valsad, Gujarat.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a
                      className="text-white/80 hover:text-white text-sm transition-colors duration-200"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              {topServices.map((service) => (
                <li key={service}>
                  <span className="text-white/80 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-white" />
                <span className="text-white/80">
                  Mu.po, Aahir Faliya, in front of Eicher, Motiwada, Valsad, Gujarat
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0 text-white" />
                <a
                  href="tel:+919876543210"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                  data-testid="link-footer-phone"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0 text-white" />
                <a
                  href="mailto:info@jinalgarage.com"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                  data-testid="link-footer-email"
                >
                  info@jinalgarage.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Clock className="w-4 h-4 flex-shrink-0 mt-0.5 text-white" />
                <span className="text-white/80">
                  Mon-Sat: 9 AM - 7 PM<br />Sun: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Jinal Auto Garage. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-white/80 hover:text-white transition-all duration-200 hover:scale-110 rounded-full p-2"
              data-testid="link-social-facebook"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-white transition-all duration-200 hover:scale-110 rounded-full p-2"
              data-testid="link-social-instagram"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/919876543210"
              className="text-white/80 hover:text-white transition-all duration-200 hover:scale-110 rounded-full p-2"
              data-testid="link-social-whatsapp"
              aria-label="WhatsApp"
            >
              <SiWhatsapp className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}