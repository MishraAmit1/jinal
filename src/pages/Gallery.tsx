import { motion, AnimatePresence } from 'framer-motion';
import { X, Image as ImageIcon, Camera, Award } from 'lucide-react';
import { useState } from 'react';
import { SEO } from "@/components/SEO"; // Add this import

// Import your images
import garageExterior from "@assets/generated_images/20251022_112416.jpg";
import mechanicWorking from "@assets/generated_images/20251022_112422.jpg";
import tireService from "@assets/generated_images/20251022_113432.jpg";
import diagnostics from "@assets/generated_images/IMG-20250901-WA0027.jpg";
import beforeAfter from "@assets/generated_images/IMG-20250901-WA0029.jpg";
import happyCustomer from "@assets/generated_images/IMG-20250901-WA0030.jpg";
import heroWorkshop from "@assets/generated_images/IMG-20250901-WA0032.jpg";
import heroWorksho1 from "@assets/generated_images/IMG-20251031-WA0029.jpg";
import heroWorksho2 from "@assets/generated_images/IMG-20251031-WA0031.jpg";
// import heroWorksho3 from "@assets/generated_images/IMG-20251031-WA0032.jpg";
import heroWorksho4 from "@assets/generated_images/IMG-20251111-WA0016.jpg";
import { Link } from 'wouter';

export default function Gallery() {
  interface GalleryImage {
    src: string;
    alt: string;
    category: string;
  }
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const images = [
    { src: garageExterior, alt: "Garage Exterior", category: "Workshop" },
    { src: heroWorkshop, alt: "Workshop Interior", category: "Workshop" },
    { src: mechanicWorking, alt: "Mechanic at Work", category: "Service" },
    { src: tireService, alt: "Tire Service", category: "Service" },
    { src: diagnostics, alt: "Engine Diagnostics", category: "Equipment" },
    { src: beforeAfter, alt: "Before After Repair", category: "Repairs" },
    { src: happyCustomer, alt: "Happy Customer", category: "Customers" },
    { src: heroWorksho1, alt: "Engine Repair", category: "Service" },
    { src: heroWorksho2, alt: "Wheel Balancing", category: "Equipment" },
    // { src: heroWorksho3, alt: "Diagnostic Tools", category: "Equipment" },
    { src: heroWorksho4, alt: "Service Bay", category: "Workshop" },
    { src: heroWorkshop, alt: "Workshop Tools", category: "Workshop" },
  ];

  const categories = ['All', 'Workshop', 'Service', 'Equipment', 'Repairs', 'Customers'];

  const filteredImages = activeCategory === 'All'
    ? images
    : images.filter(img => img.category === activeCategory);

  return (
    <>
      {/* SEO Component */}
      <SEO
        title="Gallery - Photos of Our Workshop & Services | Jinal Auto Garage Vapi"
        description="View photos of our modern workshop, skilled mechanics, quality equipment, and satisfied customers at Jinal Auto Garage Vapi. See our work showcase including before/after repairs, service work, and facilities."
        keywords="auto garage photos Vapi, car workshop images, mechanic at work Vapi, garage facility Vapi, car repair workshop photos, auto service center gallery, before after car repair, diagnostic equipment photos, customer testimonials Vapi"
        canonical="https://jinalgarage.com/gallery"
        ogType="website"
      />

      <div className="flex flex-col">

        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#055b99] via-[#0670b8] to-[#055b99] text-white overflow-hidden">

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          {/* Animated Blob */}
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          <div className="container max-w-7xl mx-auto px-4 relative z-10">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Camera className="w-5 h-5" />
                <span className="font-semibold text-sm tracking-wide">
                  Our Work Showcase
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6" data-testid="text-gallery-title">
                Gallery
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                Take a look at our modern workshop, skilled technicians, and the quality
                work we deliver every day to our valued customers.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-[#055b99] mb-2">{images.length}+</div>
                <p className="text-gray-600">Photos</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="text-4xl font-bold text-[#055b99] mb-2">{categories.length - 1}</div>
                <p className="text-gray-600">Categories</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-4xl font-bold text-[#055b99] mb-2">95%</div>
                <p className="text-gray-600">Happy Clients</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-4xl font-bold text-[#055b99] mb-2">25+</div>
                <p className="text-gray-600">Years Experience</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 bg-gradient-to-b from-gray-50 to-white sticky top-0 z-30 backdrop-blur-sm bg-white/90">
          <div className="container max-w-7xl mx-auto px-4">
            <motion.div
              className="flex flex-wrap gap-3 justify-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`
                    px-6 py-3 rounded-full font-semibold transition-all shadow-md
                    ${activeCategory === category
                      ? 'bg-gradient-to-r from-[#055b99] to-[#0670b8] text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                    }
                  `}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-4">

            {/* Active Category Title */}
            <motion.div
              className="text-center mb-12"
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {activeCategory === 'All' ? 'All Photos' : `${activeCategory} Photos`}
              </h2>
              <p className="text-gray-600">
                {filteredImages.length} {filteredImages.length === 1 ? 'photo' : 'photos'} in this category
              </p>
            </motion.div>

            {/* Images Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              layout
            >
              <AnimatePresence mode="popLayout">
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={`${image.category}-${index}`}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -8 }}
                    className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                    onClick={() => setSelectedImage(image)}
                    data-testid={`img-gallery-${index}`}
                  >
                    {/* Image */}
                    <div className="aspect-square overflow-hidden bg-gray-100">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                        <ImageIcon className="w-12 h-12 mb-3 opacity-80" />
                        <p className="font-bold text-lg text-center mb-1">{image.alt}</p>
                        <span className="text-sm bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                          {image.category}
                        </span>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-[#055b99]/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
                        {image.category}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* No Results */}
            {filteredImages.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <ImageIcon className="w-20 h-20 text-gray-300 mx-auto mb-4" />
                <p className="text-xl text-gray-500">No photos found in this category</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-[#055b99]/5 to-[#0670b8]/5">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-[#055b99]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-[#055b99]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Experience Quality Service
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join hundreds of satisfied customers who trust us with their vehicles
              </p>
              <Link to="/book-service">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#055b99] to-[#0670b8] text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all"
                >
                  Book Your Service Today
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all border border-white/20"
                onClick={() => setSelectedImage(null)}
                data-testid="button-close-lightbox"
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Image Container */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="relative max-w-6xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Image */}
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl"
                />

                {/* Image Info */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl"
                >
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">{selectedImage.alt}</h3>
                    <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {selectedImage.category}
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Helper Text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-sm"
              >
                Click anywhere to close
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}