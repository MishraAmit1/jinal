import { motion } from 'framer-motion';
import {
  Wrench,
  Activity,
  Droplet,
  Disc,
  Wind,
  Battery,
  Gauge,
  Settings,
  Sparkles,
  CircleDot,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Shield,
  DollarSign,
  Phone,
  Calendar
} from "lucide-react";
import { useState } from 'react';
import { Link } from 'wouter';
import { SEO } from "@/components/SEO"; // Add this import

const services = [
  {
    icon: Wrench,
    title: "General Maintenance & Repair",
    description: "Comprehensive vehicle servicing including regular inspections, preventive maintenance, and general repairs.",
    features: ["Oil Change", "Filter Replacement", "Fluid Top-ups", "Belt Inspection", "Complete Vehicle Checkup"],
    price: "Starting ₹999",
    duration: "2-3 hours",
    warranty: "6 months",
    popular: false
  },
  {
    icon: Activity,
    title: "Engine Diagnostics & Repair",
    description: "State-of-the-art computerized diagnostics to identify engine issues quickly and accurately.",
    features: ["Computer Diagnostics", "Error Code Reading", "Performance Testing", "Engine Repair", "Tune-ups"],
    price: "Starting ₹499",
    duration: "1-2 hours",
    warranty: "6 months",
    popular: true
  },
  {
    icon: Droplet,
    title: "Oil Change & Lubrication",
    description: "Quick and professional oil change services using premium quality engine oils and filters.",
    features: ["Premium Engine Oil", "Oil Filter", "Air Filter", "Complete Lubrication", "Free Wash"],
    price: "Starting ₹799",
    duration: "30-45 mins",
    warranty: "3 months",
    popular: false
  },
  {
    icon: Disc,
    title: "Brake Services",
    description: "Complete brake system inspection, pad replacement, and rotor resurfacing for your safety.",
    features: ["Brake Pad Replacement", "Rotor Resurfacing", "Brake Fluid Change", "System Inspection", "Safety Check"],
    price: "Starting ₹1,299",
    duration: "2-3 hours",
    warranty: "6 months",
    popular: true
  },
  {
    icon: CircleDot,
    title: "Tire Services",
    description: "Tire rotation, wheel balancing, alignment, and puncture repair services.",
    features: ["Wheel Alignment", "Wheel Balancing", "Tire Rotation", "Puncture Repair", "New Tire Installation"],
    price: "Starting ₹299",
    duration: "1-2 hours",
    warranty: "3 months",
    popular: false
  },
  {
    icon: Wind,
    title: "AC Servicing",
    description: "Air conditioning repair and maintenance including gas refilling and complete AC diagnostics.",
    features: ["Gas Refilling", "Compressor Repair", "Cooling Test", "Leak Detection", "Filter Cleaning"],
    price: "Starting ₹1,499",
    duration: "2-4 hours",
    warranty: "6 months",
    popular: true
  },
  {
    icon: Battery,
    title: "Battery & Electrical",
    description: "Battery testing and replacement, alternator repair, and complete electrical system diagnostics.",
    features: ["Battery Testing", "Battery Replacement", "Alternator Repair", "Wiring Check", "Electrical Diagnostics"],
    price: "Starting ₹799",
    duration: "1-2 hours",
    warranty: "6 months",
    popular: false
  },
  {
    icon: Gauge,
    title: "Suspension & Steering",
    description: "Shock absorber replacement, suspension repair, and wheel alignment for a smooth ride.",
    features: ["Shock Absorber", "Suspension Repair", "Wheel Alignment", "Steering Check", "Ride Quality Test"],
    price: "Starting ₹1,999",
    duration: "3-4 hours",
    warranty: "6 months",
    popular: false
  },
  {
    icon: Settings,
    title: "Transmission Services",
    description: "Clutch repair and replacement, gearbox servicing, and transmission diagnostics.",
    features: ["Clutch Repair", "Gearbox Service", "Transmission Fluid", "System Diagnostics", "Performance Check"],
    price: "Starting ₹2,499",
    duration: "4-6 hours",
    warranty: "6 months",
    popular: false
  },
  {
    icon: Sparkles,
    title: "Denting & Painting",
    description: "Professional body work including dent removal, scratch repair, and complete repainting.",
    features: ["Dent Removal", "Scratch Repair", "Complete Painting", "Body Restoration", "Polish & Wax"],
    price: "Custom Quote",
    duration: "2-3 days",
    warranty: "1 year",
    popular: false
  },
];

const whyChooseFeatures = [
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "6-month warranty on all services"
  },
  {
    icon: Clock,
    title: "Same-Day Service",
    description: "Most repairs completed on the same day"
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden charges, clear estimates"
  },
  {
    icon: CheckCircle,
    title: "Genuine Parts",
    description: "Only authentic spare parts used"
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <>
      {/* SEO Component */}
      <SEO
        title="Car Services in Valsad - Auto Repair & Maintenance | Jinal Auto Garage"
        description="Complete car services in Valsad: Oil Change ₹799, Engine Diagnostics ₹499, Brake Service ₹1,299, AC Repair ₹1,499. Same-day service, 6-month warranty. Expert mechanics, genuine parts, transparent pricing."
        keywords="car services valsad, auto repair valsad, oil change valsad, engine diagnostics valsad, brake repair valsad, ac servicing valsad, car maintenance valsad, vehicle service valsad, tire service valsad, battery replacement valsad, transmission repair valsad, denting painting valsad"
        canonical="https://jinalgarage.com/services"
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
                <Wrench className="w-5 h-5" />
                <span className="font-semibold text-sm tracking-wide">
                  Professional Auto Care Services
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6" data-testid="text-services-title">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
                Comprehensive automotive services to keep your vehicle running at its best.
                From routine maintenance to major repairs, we've got you covered.
              </p>

              <Link to="/book-service">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#055b99] px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/20 transition-all inline-flex items-center gap-3"
                  data-testid="button-book-service-cta"
                >
                  <Calendar className="w-6 h-6" />
                  Book a Service Now
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              {whyChooseFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-[#055b99]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-[#055b99]" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container max-w-7xl mx-auto px-4">

            {/* Section Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#055b99] font-semibold text-sm uppercase tracking-wider">
                All Services
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                Complete Auto Care Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expert service for all your automotive needs with transparent pricing and quality guarantee
              </p>
            </motion.div>

            {/* Services Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onHoverStart={() => setSelectedService(index)}
                  onHoverEnd={() => setSelectedService(null)}
                  className="group relative"
                >
                  <div className={`
                    h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300
                    border-2 ${service.popular ? 'border-[#055b99]' : 'border-gray-100'}
                    ${selectedService === index ? 'scale-105 border-[#055b99]' : ''}
                  `}>

                    {/* Popular Badge */}
                    {service.popular && (
                      <span className="absolute -top-3 right-6 bg-gradient-to-r from-[#055b99] to-[#0670b8] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                        MOST POPULAR
                      </span>
                    )}

                    {/* Icon */}
                    <div className="w-16 h-16 bg-[#055b99]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#055b99]/20 transition-colors">
                      <service.icon className="w-8 h-8 text-[#055b99]" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Service Info */}
                    <div className="space-y-2 mb-6 p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          Duration:
                        </span>
                        <span className="font-semibold">{service.duration}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 flex items-center gap-2">
                          <Shield className="w-4 h-4" />
                          Warranty:
                        </span>
                        <span className="font-semibold">{service.warranty}</span>
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Price</div>
                        <span className="text-2xl font-bold text-[#055b99]">{service.price}</span>
                      </div>
                      <Link to="/book-service">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 bg-[#055b99] text-white px-4 sm:px-6 py-3 rounded-full font-semibold hover:bg-[#0670b8] transition-colors shadow-lg whitespace-nowrap"
                        >
                          <span className="whitespace-nowrap">Book Now</span>
                          <ArrowRight className="w-4 h-4 flex-shrink-0" />
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Service Section */}
        <section className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <motion.div
              className="bg-gradient-to-br from-[#055b99]/5 to-[#0670b8]/5 rounded-2xl p-12 border-2 border-[#055b99]/20 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-[#055b99]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="w-10 h-10 text-[#055b99]" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need a Custom Service?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Don't see what you're looking for? We offer many other specialized
                services. Contact us to discuss your specific automotive needs and get a custom quote.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <motion.a
                  href="tel:+919876543210"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-[#055b99] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
                  data-testid="button-call-quote"
                >
                  <Phone className="w-5 h-5" />
                  Call for a Quote
                </motion.a>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 bg-transparent border-2 border-[#055b99] text-[#055b99] px-8 py-4 rounded-full font-bold hover:bg-[#055b99] hover:text-white transition-all"
                    data-testid="button-contact-us"
                  >
                    Contact Us
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="text-5xl font-bold text-[#055b99] mb-2">500+</div>
                <p className="text-gray-600 font-semibold">Services Completed</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex gap-1 justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-5xl font-bold text-[#055b99] mb-2">4.9</div>
                <p className="text-gray-600 font-semibold">Customer Rating</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="text-5xl font-bold text-[#055b99] mb-2">95%</div>
                <p className="text-gray-600 font-semibold">Customer Satisfaction</p>
              </motion.div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}