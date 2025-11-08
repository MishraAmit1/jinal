import { motion } from 'framer-motion';
import { Phone, Clock, MapPin, Calendar, ArrowRight, Mail, MessageCircle } from 'lucide-react';

export function CTASection() {
    return (
        <section className="py-20">

            <div className="container max-w-7xl mx-auto px-4 relative z-10">
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    <div className="bg-gradient-to-r from-[#055b99] to-[#0670b8] rounded-2xl p-8 md:p-12 shadow-2xl">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Get Started?
                        </h3>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Book your appointment now and experience hassle-free car service
                            with same-day delivery
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-[#055b99] px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-3"
                            >
                                <Phone className="w-5 h-5" />
                                Call: +91 98765 43210
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#055b99] transition-all inline-flex items-center gap-3"
                            >
                                <Calendar className="w-5 h-5" />
                                Book Online Now
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}