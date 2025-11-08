import { motion } from 'framer-motion';
import {
    Wrench,
    Car,
    Battery,
    Droplet,
    Wind,
    Settings,
    Shield,
    Gauge,
    ArrowRight
} from 'lucide-react';
import { Link } from 'wouter';

const services = [
    {
        icon: Wrench,
        title: "General Maintenance",
        description: "Complete car maintenance including filters, fluids, and routine checkups",
        features: ["Oil Change", "Filter Replacement", "Fluid Top-ups", "Belt Inspection"],
        price: "Starting ₹999",
        popular: false
    },
    {
        icon: Settings,
        title: "Engine Diagnostics",
        description: "Advanced computer diagnostics to identify and fix engine issues",
        features: ["Error Code Reading", "Performance Testing", "Emission Check", "ECU Scanning"],
        price: "Starting ₹499",
        popular: true
    },
    {
        icon: Car,
        title: "AC Service & Repair",
        description: "Complete AC system service, gas refilling, and cooling optimization",
        features: ["Gas Refilling", "Compressor Check", "Cooling Test", "Leak Detection"],
        price: "Starting ₹1,499",
        popular: false
    },
    {
        icon: Battery,
        title: "Battery & Electrical",
        description: "Battery testing, replacement, and complete electrical system repair",
        features: ["Battery Testing", "Alternator Check", "Wiring Repair", "Light Fixing"],
        price: "Starting ₹799",
        popular: false
    },
    {
        icon: Wind,
        title: "Suspension & Steering",
        description: "Ensure smooth ride with suspension and steering system maintenance",
        features: ["Shock Absorber", "Wheel Alignment", "Balancing", "Steering Repair"],
        price: "Starting ₹1,999",
        popular: false
    },
    {
        icon: Shield,
        title: "Brake System Service",
        description: "Complete brake system inspection, pad replacement, and safety checks",
        features: ["Pad Replacement", "Disc Skimming", "Fluid Change", "Safety Inspection"],
        price: "Starting ₹1,299",
        popular: true
    }
];

export function ServicesSection() {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-[#055b99] font-semibold text-sm uppercase tracking-wider">
                        Our Services
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                        Complete Auto Care Solutions
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        From routine maintenance to complex repairs, we provide comprehensive automotive services
                        with transparent pricing and expert technicians.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative"
                        >
                            <div className={`
                h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300
                border-2 ${service.popular ? 'border-[#055b99]' : 'border-gray-100'}
                hover:-translate-y-2
              `}>
                                {/* Popular Badge */}
                                {service.popular && (
                                    <span className="absolute -top-3 right-6 bg-gradient-to-r from-[#055b99] to-[#0670b8] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                                        MOST POPULAR
                                    </span>
                                )}

                                {/* Icon */}
                                <div className="w-14 h-14 bg-[#055b99]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#055b99]/20 transition-colors">
                                    <service.icon className="w-7 h-7 text-[#055b99]" />
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

                                {/* Features */}
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-gray-600">
                                            <Gauge className="w-4 h-4 text-[#055b99] mr-2 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* Price & CTA */}
                                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                                    <span className="text-2xl font-bold text-[#055b99]">{service.price}</span>
                                    <button className="flex items-center gap-2 text-[#055b99] font-semibold hover:gap-3 transition-all">
                                        Book Now
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Services Button */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <Link href="/services">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-3 bg-[#055b99] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0670b8] transition-colors shadow-lg hover:shadow-xl"
                        >
                            View All Services
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}