import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Wrench,
  Activity,
  Droplet,
  Disc,
  Wind,
  Users,
  Award,
  Clock,
  DollarSign,
  Star,
  Calendar,
  Phone,
  ArrowRight,
} from "lucide-react";
import { SEO } from "@/components/SEO"; // Add this import
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { TypewriterText } from "@/components/TypewriterText";
import heroImage from "@assets/generated_images/homebanner.avif";
import customerImage from "@assets/generated_images/Happy_customer_with_car_0d0ccd85.png";
import femaleTestimonial from "@assets/generated_images/Female_customer_testimonial_2cf3e0e0.png";
import maleTestimonial from "@assets/generated_images/Male_customer_testimonial_6679cdb8.png";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ProcessSection } from "@/components/ProcessSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";

const features = [
  "Expert Technicians",
  "Honest Pricing",
  "Quick Service",
  "Quality Parts",
];

export default function Home() {
  const [visibleStats, setVisibleStats] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleStats(true);
        }
      },
      { threshold: 0.3 }
    );

    const statsSection = document.getElementById("stats-section");
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Priya Patel",
      image: femaleTestimonial,
      rating: 5,
      text: "Excellent service! The team is professional and honest. They fixed my car quickly and at a fair price.",
    },
    {
      name: "Rajesh Kumar",
      image: maleTestimonial,
      rating: 5,
      text: "Best auto garage in Vapi! I've been coming here for years and they never disappoint. Highly recommended!",
    },
    {
      name: "Amit Shah",
      image: customerImage,
      rating: 5,
      text: "Great experience! They explained everything clearly and the repair work was top-notch. Will definitely return.",
    },
  ];

  return (
    <>
      {/* SEO Component - Add this */}
      <SEO
        title="Jinal Auto Garage - Best Car Service & Repair Center in Vapi"
        description="Expert auto repairs and maintenance services in Vapi, Gujarat. Certified mechanics, honest service, genuine parts, and affordable prices. 25+ years of trusted service. Book today!"
        keywords="car service Vapi, auto repair Vapi, car garage Vapi, vehicle maintenance Vapi, car mechanic Vapi, jinal auto garage, engine diagnostics Vapi, brake service Vapi, ac repair Vapi, oil change Vapi"
        canonical="https://jinalgarage.com/"
        ogType="website"
      />

      <div className="flex flex-col">
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${heroImage})`,
            }}
          />

          {/* Lighter Overlay for better visibility */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-[#055b99]/35" />

          {/* Subtle Animated Blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
                x: [0, 30, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-[#055b99]/15 rounded-full blur-3xl"
              animate={{
                scale: [1.1, 1, 1.1],
                opacity: [0.15, 0.25, 0.15],
                x: [0, -30, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 container max-w-6xl mx-auto px-4 py-32 md:py-44">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-white/90 backdrop-blur-md rounded-full border border-[#055b99]/20 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#055b99] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#055b99]"></span>
                </span>
                <span className="text-[#055b99] font-bold text-sm tracking-wide">
                  Vapi's Most Trusted Auto Garage
                </span>
              </motion.div>

              {/* Main Heading with Typewriter Effect */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] tracking-tight">
                  <span className="block mb-3 text-white drop-shadow-2xl">
                    Expert Auto Care
                  </span>

                  {/* Typewriter Effect Line with Glow */}
                  <span className="block min-h-[1.2em]">
                    <TypewriterText
                      texts={features}
                      typingSpeed={100}
                      deletingSpeed={50}
                      pauseDuration={2000}
                      className="text-[#055b99] typewriter-glow"
                    />
                  </span>
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                className="text-lg sm:text-xl md:text-2xl mb-12 text-white max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Experience professional automotive care with certified mechanics,
                transparent pricing, and same-day service.
              </motion.p>

              {/* Single CTA Button - Book Service Only */}
              <motion.div
                className="flex justify-center items-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <Link href="/book-service">
                  <a>
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative overflow-hidden bg-gradient-to-r from-[#055b99] to-[#0670b8] text-white font-semibold text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 rounded-full shadow-2xl shadow-[#055b99]/40 hover:shadow-[#055b99]/80 transition-all duration-300 flex items-center gap-3 button-glow-hover"
                      data-testid="button-hero-book"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                        Book Your Service Now
                        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0670b8] to-[#055b99] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.button>
                  </a>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-white/70 rounded-full flex items-start justify-center p-2">
              <motion.div
                className="w-1.5 h-1.5 bg-white rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </section>

        {/* SERVICES SECTION */}
        <ServicesSection />

        {/* STATS SECTION */}
        <WhyChooseUs />

        {/* TESTIMONIALS SECTION */}
        <ProcessSection />
        <TestimonialsSection />

        {/* <CTASection /> */}
      </div>
    </>
  );
}