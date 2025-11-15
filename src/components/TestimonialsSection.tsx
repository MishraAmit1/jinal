import { motion } from 'framer-motion';
import { Star, Quote, ThumbsUp } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Rajesh Patel",
        car: "Honda City 2020",
        rating: 5,
        text: "Best garage in Vapi! They fixed my car's AC problem that others couldn't diagnose. Very professional service and transparent pricing.",
        service: "AC Repair"
    },
    {
        id: 2,
        name: "Priya Shah",
        car: "Maruti Swift 2019",
        rating: 5,
        text: "Regular customer for 3 years now. Always satisfied with their service. They explain everything clearly and never overcharge.",
        service: "General Service"
    },
    {
        id: 3,
        name: "Amit Desai",
        car: "Toyota Innova 2021",
        rating: 5,
        text: "Quick service and genuine parts used. My car runs like new after every service. The mechanics are very skilled and experienced.",
        service: "Engine Diagnostics"
    },
    {
        id: 4,
        name: "Sneha Mehta",
        car: "Hyundai i20 2018",
        rating: 5,
        text: "Excellent customer service! They completed my brake service on time and explained everything in detail. Fair pricing and quality work.",
        service: "Brake Service"
    },
    {
        id: 5,
        name: "Kiran Joshi",
        car: "Tata Nexon 2022",
        rating: 5,
        text: "Found them through Google and so happy I did! Battery replacement was done quickly and they also did a free check-up. Very honest garage.",
        service: "Battery Replacement"
    },
    {
        id: 6,
        name: "Vikram Singh",
        car: "Mahindra XUV500 2020",
        rating: 5,
        text: "Outstanding service! They repaired my suspension system perfectly. The ride quality has improved dramatically. Professional team!",
        service: "Suspension Repair"
    }
];

// Duplicate testimonials for seamless infinite scroll
const duplicatedTestimonials = [...testimonials, ...testimonials];

export function TestimonialsSection() {
    return (
        <section className="py-20 bg-gradient-to-br from-[#055b99]/5 via-white to-[#0670b8]/5 relative overflow-hidden">

            {/* Background Decoration */}
            <motion.div
                className="absolute top-10 left-10 w-64 h-64 bg-[#055b99]/10 rounded-full blur-3xl"
                animate={{
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="container max-w-7xl mx-auto px-4 relative z-10">

                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-[#055b99] font-semibold text-sm uppercase tracking-wider">
                        Testimonials
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                        What Our Customers Say
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Don't just take our word for it. Here's what our satisfied customers have to say about our service and expertise.
                    </p>
                </motion.div>

                {/* Infinite Scrolling Testimonials Container */}
                <div className="relative">

                    {/* Left Shadow Gradient */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#055b99]/5 via-white/50 to-transparent z-10 pointer-events-none" />

                    {/* Right Shadow Gradient */}
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#055b99]/5 via-white/50 to-transparent z-10 pointer-events-none" />

                    {/* Scrolling Container */}
                    <div className="overflow-hidden">
                        <motion.div
                            className="flex gap-6"
                            animate={{
                                x: [0, -100 * testimonials.length],
                            }}
                            transition={{
                                x: {
                                    duration: 40,
                                    repeat: Infinity,
                                    ease: "linear",
                                },
                            }}
                        >
                            {duplicatedTestimonials.map((testimonial, index) => (
                                <div
                                    key={`${testimonial.id}-${index}`}
                                    className="flex-shrink-0 w-[400px]"
                                >
                                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border-2 border-gray-100 hover:border-[#055b99] group">

                                        {/* Quote Icon */}
                                        <Quote className="w-10 h-10 text-[#055b99]/10 group-hover:text-[#055b99]/20 transition-colors mb-4" />

                                        {/* Service Badge */}
                                        <div className="mb-4">
                                            <span className="inline-block bg-[#055b99]/10 text-[#055b99] text-xs font-semibold px-3 py-1 rounded-full">
                                                {testimonial.service}
                                            </span>
                                        </div>

                                        {/* Rating Stars */}
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>

                                        {/* Review Text */}
                                        <p className="text-gray-700 mb-6 italic leading-relaxed">
                                            "{testimonial.text}"
                                        </p>

                                        {/* Customer Info */}
                                        <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                                            {/* Avatar Circle */}
                                            <div className="w-14 h-14 bg-gradient-to-br from-[#055b99] to-[#0670b8] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                                                <span className="text-white font-bold text-xl">
                                                    {testimonial.name.charAt(0)}
                                                </span>
                                            </div>

                                            {/* Customer Details */}
                                            <div className="flex-1">
                                                <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
                                                <p className="text-sm text-gray-500">{testimonial.car}</p>
                                            </div>

                                            {/* Verified Badge */}
                                            <div className="text-green-600">
                                                <ThumbsUp className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* CTA Button */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <motion.a
                        href="https://share.google/MhPz5D24y7sV9iyWo"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-[#055b99] to-[#0670b8] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-3"
                    >
                        Read More Reviews on Google
                        <Star className="w-5 h-5" />
                    </motion.a>
                </motion.div>

            </div>
        </section>
    );
}