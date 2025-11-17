import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  HelpCircle,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Wrench,
  IndianRupee,
  Shield,
  Car,
  Search
} from 'lucide-react';
import { useState } from 'react';
import { SEO } from "@/components/SEO"; // Add this import

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      icon: Clock,
      question: "What are your operating hours?",
      answer: "We are open Monday through Saturday from 9:00 AM to 7:00 PM. We are closed on Sundays and public holidays. For urgent services, please call us in advance.",
      category: "General"
    },
    {
      icon: Car,
      question: "Do you provide pickup and drop services?",
      answer: "Yes, we offer complimentary pickup and drop services within a 5km radius of our garage for major services and repairs. Please mention this when booking your appointment.",
      category: "Services"
    },
    {
      icon: Clock,
      question: "How long does a general service take?",
      answer: "A standard general service typically takes 2-3 hours depending on your vehicle type and condition. We strive to complete all services as quickly as possible without compromising quality.",
      category: "Services"
    },
    {
      icon: Shield,
      question: "Do you offer warranties on repairs?",
      answer: "Yes, we provide warranties on all our repair work and spare parts. The warranty period varies depending on the type of service - typically 30-90 days for labor and manufacturer warranty on parts.",
      category: "Warranty"
    },
    {
      icon: IndianRupee,
      question: "What payment methods do you accept?",
      answer: "We accept all major payment methods including cash, UPI, debit cards, credit cards, and digital wallets like Google Pay and PhonePe. We also provide detailed invoices for all services.",
      category: "Payment"
    },
    {
      icon: Clock,
      question: "Can I wait while my vehicle is serviced?",
      answer: "Yes, we have a comfortable waiting area with seating, refreshments, and Wi-Fi for customers who wish to wait. However, for extensive repairs, we recommend using our pickup and drop service.",
      category: "General"
    },
    {
      icon: Wrench,
      question: "Do you service all car brands?",
      answer: "Yes, we service all major car brands including Maruti Suzuki, Tata, Hyundai, Honda, Mahindra, Toyota, Ford, Volkswagen, and many more. Our technicians are trained to work on various makes and models.",
      category: "Services"
    },
    {
      icon: Phone,
      question: "How do I book an appointment?",
      answer: "You can book an appointment through our website's booking form, call us directly at +91 99250 41198, or send us a message on WhatsApp. We recommend booking in advance to secure your preferred time slot.",
      category: "Booking"
    },
    {
      icon: Car,
      question: "What should I bring for service?",
      answer: "Please bring your vehicle's registration certificate (RC), previous service records if available, and mention any specific issues you've noticed. This helps us provide better and faster service.",
      category: "General"
    },
    {
      icon: IndianRupee,
      question: "Do you provide cost estimates before work?",
      answer: "Yes, we always provide a detailed cost estimate before starting any work. We believe in complete transparency and will never proceed with repairs without your approval.",
      category: "Payment"
    },
    {
      icon: Shield,
      question: "Do you use genuine spare parts?",
      answer: "We use genuine OEM (Original Equipment Manufacturer) parts whenever available. For some services, we also offer high-quality aftermarket alternatives at more affordable prices, giving you the choice.",
      category: "Services"
    },
    {
      icon: HelpCircle,
      question: "What if I'm not satisfied with the service?",
      answer: "Customer satisfaction is our top priority. If you're not completely satisfied with our service, please let us know immediately. We'll do everything possible to resolve the issue and ensure you're happy with the results.",
      category: "General"
    },
  ];

  interface FAQ {
    icon: React.FC;
    question: string;
    answer: string;
    category: string;
  }

  const toggleAccordion = (index: number | null): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Filter FAQs based on search
  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* SEO Component */}
      <SEO
        title="FAQs - Frequently Asked Questions | Jinal Auto Garage Vapi"
        description="Find answers to common questions about car services at Jinal Auto Garage. Learn about our hours (9AM-7PM), pricing, warranties, payment methods, pickup/drop services, and booking process in Vapi."
        keywords="car service faq Vapi, auto repair questions Vapi, car garage hours Vapi, service warranty Vapi, car repair pricing, payment methods auto service, pickup drop service Vapi, booking appointment Vapi, genuine parts guarantee"
        canonical="https://jinalgarage.com/faqs"
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
                <HelpCircle className="w-5 h-5" />
                <span className="font-semibold text-sm tracking-wide">
                  Got Questions? We've Got Answers
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6" data-testid="text-faq-title">
                Frequently Asked Questions
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
                Find answers to common questions about our services, pricing, warranties, and policies.
              </p>

              {/* Search Bar */}
              <motion.div
                className="max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search questions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-full bg-white/95 backdrop-blur-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-xl"
                  />
                </div>
              </motion.div>
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
                <div className="text-4xl font-bold text-[#055b99] mb-2">{faqs.length}</div>
                <p className="text-gray-600">FAQs Available</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="text-4xl font-bold text-[#055b99] mb-2">24/7</div>
                <p className="text-gray-600">Support Available</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-4xl font-bold text-[#055b99] mb-2">100%</div>
                <p className="text-gray-600">Satisfaction Rate</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-4xl font-bold text-[#055b99] mb-2">95%</div>
                <p className="text-gray-600">Happy Customers</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container max-w-4xl mx-auto px-4">

            {/* Results Count */}
            {searchQuery && (
              <motion.p
                className="text-center text-gray-600 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Found {filteredFaqs.length} {filteredFaqs.length === 1 ? 'question' : 'questions'} matching "{searchQuery}"
              </motion.p>
            )}

            {/* FAQ Items */}
            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {filteredFaqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.05 }}
                    data-testid={`faq-item-${index}`}
                  >
                    <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 hover:border-[#055b99]/30 transition-all overflow-hidden">

                      {/* Question Header */}
                      <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full px-6 md:px-8 py-6 flex items-start gap-4 text-left hover:bg-gray-50 transition-colors"
                      >
                        {/* Icon */}
                        <div className={`
                          w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all
                          ${openIndex === index ? 'bg-[#055b99] text-white' : 'bg-[#055b99]/10 text-[#055b99]'}
                        `}>
                          <faq.icon className="w-6 h-6" />
                        </div>

                        {/* Question Text */}
                        <div className="flex-1">
                          <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-1">
                            {faq.question}
                          </h3>
                          <span className="text-xs text-[#055b99] font-semibold">
                            {faq.category}
                          </span>
                        </div>

                        {/* Chevron */}
                        <motion.div
                          animate={{ rotate: openIndex === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0"
                        >
                          <ChevronDown className={`w-6 h-6 transition-colors ${openIndex === index ? 'text-[#055b99]' : 'text-gray-400'}`} />
                        </motion.div>
                      </button>

                      {/* Answer Content */}
                      <AnimatePresence>
                        {openIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 md:px-8 pb-6 pl-20 md:pl-24">
                              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* No Results */}
            {filteredFaqs.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <HelpCircle className="w-20 h-20 text-gray-300 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No questions found</h3>
                <p className="text-gray-600 mb-6">Try searching with different keywords</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-[#055b99] font-semibold hover:underline"
                >
                  Clear search
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 bg-white">
          <div className="container max-w-5xl mx-auto px-4">
            <motion.div
              className="bg-gradient-to-br from-[#055b99]/5 to-[#0670b8]/5 rounded-2xl p-8 md:p-12 border-2 border-[#055b99]/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-[#055b99]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HelpCircle className="w-10 h-10 text-[#055b99]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Can't find the answer you're looking for? Our friendly team is here to help you!
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">

                {/* Call Us */}
                <motion.a
                  href="tel:+919925041198"
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-[#055b99]/30"
                  data-testid="button-call-us"
                >
                  <div className="w-14 h-14 bg-[#055b99]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-7 h-7 text-[#055b99]" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Call Us</h3>
                  <p className="text-gray-600 text-sm mb-3">Mon-Sat, 9AM-7PM Sunday: 9AM-12PM</p>
                  <p className="text-[#055b99] font-bold">+91 99250 41198</p>
                </motion.a>

                {/* WhatsApp */}
                <motion.a
                  href="https://wa.me/919925041198"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-green-500/30"
                >
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                  <p className="text-gray-600 text-sm mb-3">Quick Response</p>
                  <p className="text-green-600 font-bold">Chat Now</p>
                </motion.a>

                {/* Email */}
                <motion.a
                  href="mailto:prajapatiisha789@gmail.com"
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-[#055b99]/30"
                  data-testid="button-contact-us"
                >
                  <div className="w-14 h-14 bg-[#055b99]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-7 h-7 text-[#055b99]" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Email Us</h3>
                  <p className="text-gray-600 text-sm mb-3">24h Response Time</p>
                  <p className="text-[#055b99] font-bold text-sm">prajapatiisha789@gmail.com</p>
                </motion.a>

              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
}