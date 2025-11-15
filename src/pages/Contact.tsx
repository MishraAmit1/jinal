import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  CheckCircle2,
  MessageCircle,
  Send,
  AlertCircle,
  Navigation
} from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { SEO } from "@/components/SEO"; // Add this import

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
  }

  const onSubmit = async (data: ContactFormData): Promise<void> => {
    console.log("Contact form submitted:", data);
    setIsSubmitting(true);

    // Format the message for WhatsApp
    const message = `
📧 *NEW CONTACT MESSAGE*
━━━━━━━━━━━━━━━━━━━━

*From:*
• Name: ${data.name}
• Email: ${data.email}
• Phone: ${data.phone}

*Message:*
${data.message}

━━━━━━━━━━━━━━━━━━━━
_Sent from Jinal Auto Garage website_
  `.trim();

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // Replace with your actual WhatsApp business number
    const whatsappNumber = '919925041198'; // Use your actual number

    // Check if mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // Create WhatsApp URL
    const whatsappURL = isMobile
      ? `whatsapp://send?phone=${whatsappNumber}&text=${encodedMessage}`
      : `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Simulate a small delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));

    // Open WhatsApp
    if (isMobile) {
      window.location.href = whatsappURL;
    } else {
      window.open(whatsappURL, '_blank');
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
    form.reset();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 10000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "N.H.NO.8 , Behind the Shree ganesh Auto part , Balitha , Vapi, 396191 Dis:- Valsad(Gujrat), Vapi, Gujarat",
      link: null,
      color: "bg-[#055b99]"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 99250 41198",
      link: "tel:+919925041198",
      color: "bg-green-600"
    },
    {
      icon: Mail,
      title: "Email",
      content: "prajapatiisha789@gmail.com",
      link: "mailto:prajapatiisha789@gmail.com",
      color: "bg-red-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Sat: 9:00 AM - 7:00 PM\nSunday: 9 AM - 12 PM",
      link: null,
      color: "bg-blue-600"
    }
  ];
  const socialMedia = [
    {
      icon: Facebook,
      name: "Facebook",
      link: "#",
      color: "hover:bg-blue-600",
      testId: "link-social-facebook"
    },
    {
      icon: Instagram,
      name: "Instagram",
      link: "#",
      color: "hover:bg-pink-600",
      testId: "link-social-instagram"
    },
    {
      icon: SiWhatsapp,
      name: "WhatsApp",
      link: "https://wa.me/919925041198",
      color: "hover:bg-green-600",
      testId: "link-social-whatsapp"
    }
  ];

  return (
    <>
      {/* SEO Component */}
      <SEO
        title="Contact Us - Get in Touch with Jinal Auto Garage | Vapi, Gujarat"
        description="Contact Jinal Auto Garage in Vapi for car service inquiries, appointments, and quotes. Call +91 99250 41198, WhatsApp, or visit us at Motiwada, Vapi. Mon-Sat: 9AM-7PM. Sunday: 9 AM - 12 PM"
        keywords="contact jinal auto garage, car service Vapi contact, auto garage Vapi phone, car repair Vapi address, jinal garage location, auto service Vapi enquiry, car mechanic Vapi contact, motiwada garage"
        canonical="https://jinalgarage.com/contact"
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
                <MessageCircle className="w-5 h-5" />
                <span className="font-semibold text-sm tracking-wide">
                  We're Here to Help
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6" data-testid="text-contact-title">
                Contact Us
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                Get in touch with us for any queries, service bookings, or feedback.
                Our team is ready to assist you with all your automotive needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-gray-100"
                >
                  <div className={`w-14 h-14 ${info.color} rounded-full flex items-center justify-center mb-4`}>
                    <info.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-[#055b99] hover:underline font-medium"
                      data-testid={`link-contact-${info.title.toLowerCase()}`}
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container max-w-6xl mx-auto px-4">

            {/* Success Message */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  className="mb-8 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl p-8 shadow-2xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-2xl mb-2">Message Sent to WhatsApp! 🎉</h3>
                      <p className="text-green-50 text-lg leading-relaxed">
                        Your message has been sent to our WhatsApp. We'll respond within 24 hours.
                        Please check your WhatsApp for the message.
                      </p>
                      <div className="mt-4 pt-4 border-t border-white/20">
                        <p className="text-sm text-green-50">
                          💡 <span className="font-semibold">Tip:</span> Save our WhatsApp number <span className="font-bold">+91 99250 41198</span> for future reference.
                        </p>
                        <p className="text-sm text-green-50 mt-2">
                          📞 Need immediate assistance? Call us directly at <span className="font-bold">+91 99250 41198</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="grid lg:grid-cols-2 gap-12">

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Send className="w-7 h-7 text-[#055b99]" />
                    Send Us a Message
                  </h2>

                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        {...form.register('name')}
                        type="text"
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#055b99] focus:outline-none transition-colors"
                        data-testid="input-contact-name"
                      />
                      {form.formState.errors.name && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {form.formState.errors.name.message}
                        </p>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {/* Email */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          {...form.register('email')}
                          type="email"
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#055b99] focus:outline-none transition-colors"
                          data-testid="input-contact-email"
                        />
                        {form.formState.errors.email && (
                          <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {form.formState.errors.email.message}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          {...form.register('phone')}
                          type="tel"
                          placeholder="10-digit number"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#055b99] focus:outline-none transition-colors"
                          data-testid="input-contact-phone"
                        />
                        {form.formState.errors.phone && (
                          <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {form.formState.errors.phone.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        {...form.register('message')}
                        rows={6}
                        placeholder="How can we help you?"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#055b99] focus:outline-none transition-colors resize-none"
                        data-testid="textarea-contact-message"
                      />
                      {form.formState.errors.message && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {form.formState.errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className={`
                        w-full py-4 rounded-xl font-bold text-lg shadow-lg transition-all
                        ${isSubmitting
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-[#055b99] to-[#0670b8] hover:shadow-xl text-white'
                        }
                      `}
                      data-testid="button-send-message"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-3">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-6 h-6 border-3 border-white border-t-transparent rounded-full"
                          />
                          Opening WhatsApp...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-3">
                          <SiWhatsapp className="w-5 h-5" />
                          Send via WhatsApp
                        </span>
                      )}
                    </motion.button>
                  </form>
                </div>
              </motion.div>

              {/* Right Side - Additional Info */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Why Contact Us */}
                <div className="bg-gradient-to-br from-[#055b99] to-[#0670b8] text-white rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold mb-6">Why Contact Us?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                      <span>Get expert advice on vehicle maintenance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                      <span>Schedule appointments at your convenience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                      <span>Request quotes for specific services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                      <span>Share feedback and suggestions</span>
                    </li>
                  </ul>
                </div>

                {/* Quick Contact */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100">
                  <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
                  <div className="space-y-4">
                    <motion.a
                      href="tel:+919925041198"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors"
                    >
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Call Us Now</p>
                        <p className="font-bold text-lg text-green-700">+91 99250 41198</p>
                      </div>
                    </motion.a>

                    <motion.a
                      href="https://wa.me/919925041198"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors"
                    >
                      <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center">
                        <SiWhatsapp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">WhatsApp Chat</p>
                        <p className="font-bold text-lg text-[#25D366]">Message Us</p>
                      </div>
                    </motion.a>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100">
                  <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
                  <div className="flex gap-4">
                    {socialMedia.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-14 h-14 bg-gray-100 ${social.color} rounded-full flex items-center justify-center transition-all hover:text-white`}
                        data-testid={social.testId}
                        aria-label={social.name}
                      >
                        <social.icon className="w-6 h-6" />
                      </motion.a>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Stay updated with our latest services, offers, and automotive tips!
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-0 relative">
          <div className="w-full h-[500px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.8!2d72.9!3d20.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDM2JzAwLjAiTiA3MsKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              data-testid="map-contact"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />

            {/* Map Overlay */}
            <motion.div
              className="absolute top-6 left-6 bg-white rounded-xl shadow-xl p-6 max-w-sm"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#055b99] rounded-full flex items-center justify-center flex-shrink-0">
                  <Navigation className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Visit Our Garage</h4>
                  <p className="text-sm text-gray-600">
                    N.H.NO.8 , Behind the Shree ganesh Auto part , Balitha , Vapi, 396191 Dis:- Valsad(Gujrat), Vapi, Gujarat
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-[#055b99] font-semibold text-sm hover:underline"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
}