import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Calendar,
  Clock,
  Car,
  Phone,
  Mail,
  User,
  Wrench,
  MapPin,
  CheckCircle2,
  Shield,
  AlertCircle,
  IndianRupee
} from 'lucide-react';
import { SEO } from "@/components/SEO"; // Add this import

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  vehicleMake: z.string().min(1, "Please select vehicle make"),
  vehicleModel: z.string().min(1, "Vehicle model is required"),
  registrationNumber: z.string().optional(),
  serviceRequired: z.string().min(1, "Please select service required"),
  preferredDate: z.string().min(1, "Please select preferred date"),
  preferredTime: z.string().min(1, "Please select preferred time"),
  notes: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function BookService() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      vehicleMake: "",
      vehicleModel: "",
      registrationNumber: "",
      serviceRequired: "",
      preferredDate: "",
      preferredTime: "",
      notes: "",
    },
  });

  const onSubmit = async (data: BookingFormValues) => {
    console.log("Booking submitted:", data);
    setIsSubmitting(true);

    // Format the message for WhatsApp
    const message = `
🚗 *NEW SERVICE BOOKING REQUEST*
━━━━━━━━━━━━━━━━━━━━

*Personal Details:*
• Name: ${data.name}
• Phone: ${data.phone}
${data.email ? `• Email: ${data.email}` : ''}

*Vehicle Details:*
• Make: ${data.vehicleMake}
• Model: ${data.vehicleModel}
${data.registrationNumber ? `• Registration: ${data.registrationNumber}` : ''}

*Service Details:*
• Service Required: ${data.serviceRequired}
• Preferred Date: ${new Date(data.preferredDate).toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })}
• Preferred Time: ${data.preferredTime}
${data.notes ? `\n*Additional Notes:*\n${data.notes}` : ''}

━━━━━━━━━━━━━━━━━━━━
_Sent from Jinal Auto Garage website_
  `.trim();

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // Replace with your actual WhatsApp business number (without +91 or spaces)
    const whatsappNumber = '918733073469'; // Use your actual number

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Simulate a small delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));

    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');

    setIsSubmitting(false);
    setIsSubmitted(true);
    form.reset();

    // Scroll to success message
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 10000);
  };

  const vehicleMakes = [
    "Eicher",
    "Tata Motors",
    "Mahindra",
    "Toyota",
    "LCV",
    "Other",
  ];

  const serviceTypes = [
    "General Service",
    "Oil Change",
    "Brake Repair",
    "Engine Diagnostics",
    "AC Servicing",
    "Tire Service",
    "Battery Replacement",
    "Transmission Service",
    "Denting & Painting",
    "Other",
  ];

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Quick Confirmation",
      description: "We'll call you within 1 hour"
    },
    {
      icon: Shield,
      title: "6 Month Warranty",
      description: "On all services & parts"
    },
    {
      icon: IndianRupee,
      title: "Transparent Pricing",
      description: "No hidden charges"
    }
  ];

  return (
    <>
      {/* SEO Component */}
      <SEO
        title="Book a Service - Online Car Service Appointment Booking | Jinal Auto Garage"
        description="Book your car service online in Vapi. Easy appointment scheduling, same-day service available. Choose your preferred date & time. Quick confirmation within 1 hour. Free estimates & transparent pricing."
        keywords="book car service Vapi, online car service booking, car appointment Vapi, schedule auto repair, car service booking online, vehicle maintenance appointment Vapi, auto service booking"
        canonical="https://jinalgarage.com/book-service"
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
                <Calendar className="w-5 h-5" />
                <span className="font-semibold text-sm tracking-wide">
                  Easy Online Booking
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6" data-testid="text-booking-title">
                Book a Service
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                Schedule your vehicle service appointment online. We'll confirm your booking
                within 1 hour and ensure your car gets the best care.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-[#055b99]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-[#055b99]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container max-w-5xl mx-auto px-4">

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
                      <h3 className="font-bold text-2xl mb-2">
                        Booking Request Submitted Successfully! 🎉
                      </h3>
                      <p className="text-green-50 text-lg leading-relaxed">
                        Thank you for choosing Jinal Auto Garage. We've received your booking request
                        and our team will call you within 1 hour to confirm your appointment details.
                      </p>
                      <div className="mt-4 pt-4 border-t border-white/20">
                        <p className="text-sm text-green-50">
                          📞 Need immediate assistance? Call us at <span className="font-bold">+91 99250 41198</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="grid lg:grid-cols-3 gap-8">

              {/* Main Form */}
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Car className="w-7 h-7 text-[#055b99]" />
                    Booking Details
                  </h2>

                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg text-gray-900 flex items-center gap-2">
                        <User className="w-5 h-5 text-[#055b99]" />
                        Personal Information
                      </h3>

                      <div className="grid md:grid-cols-2 gap-4">
                        {/* Name */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            {...form.register('name')}
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#055b99] focus:outline-none transition-colors"
                            data-testid="input-name"
                          />
                          {form.formState.errors.name && (
                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              {form.formState.errors.name.message}
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
                            placeholder="10-digit mobile number"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#055b99] focus:outline-none transition-colors"
                            data-testid="input-phone"
                          />
                          {form.formState.errors.phone && (
                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              {form.formState.errors.phone.message}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email (Optional)
                        </label>
                        <input
                          {...form.register('email')}
                          type="email"
                          placeholder="your.email@example.com"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#055b99] focus:outline-none transition-colors"
                          data-testid="input-email"
                        />
                        {form.formState.errors.email && (
                          <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {form.formState.errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Vehicle Information */}
                    <div className="space-y-4 pt-6 border-t-2 border-gray-100">
                      <h3 className="font-semibold text-lg text-gray-900 flex items-center gap-2">
                        <Car className="w-5 h-5 text-[#055b99]" />
                        Vehicle Information
                      </h3>

                      <div className="grid md:grid-cols-2 gap-4">
                        {/* Vehicle Make */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Vehicle Make *
                          </label>
                          <select
                            {...form.register('vehicleMake')}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#055b99] focus:outline-none transition-colors bg-white"
                            data-testid="select-vehicle-make"
                          >
                            <option value="">Select vehicle make</option>
                            {vehicleMakes.map((make) => (
                              <option key={make} value={make}>{make}</option>
                            ))}
                          </select>
                          {form.formState.errors.vehicleMake && (
                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              {form.formState.errors.vehicleMake.message}
                            </p>
                          )}
                        </div>

                        {/* Vehicle Model */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Vehicle Model *
                          </label>
                          <input
                            {...form.register('vehicleModel')}
                            type="text"
                            placeholder="e.g., Swift, City"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#055b99] focus:outline-none transition-colors"
                            data-testid="input-vehicle-model"
                          />
                          {form.formState.errors.vehicleModel && (
                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              {form.formState.errors.vehicleModel.message}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Registration Number */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Registration Number (Optional)
                        </label>
                        <input
                          {...form.register('registrationNumber')}
                          type="text"
                          placeholder="e.g., GJ-05-XX-1234"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#055b99] focus:outline-none transition-colors uppercase"
                          data-testid="input-registration"
                        />
                      </div>
                    </div>

                    {/* Service & Appointment */}
                    <div className="space-y-4 pt-6 border-t-2 border-gray-100">
                      <h3 className="font-semibold text-lg text-gray-900 flex items-center gap-2">
                        <Wrench className="w-5 h-5 text-[#055b99]" />
                        Service & Appointment
                      </h3>

                      {/* Service Required */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Service Required *
                        </label>
                        <select
                          {...form.register('serviceRequired')}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#055b99] focus:outline-none transition-colors bg-white"
                          data-testid="select-service-type"
                        >
                          <option value="">Select service type</option>
                          {serviceTypes.map((service) => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                        {form.formState.errors.serviceRequired && (
                          <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {form.formState.errors.serviceRequired.message}
                          </p>
                        )}
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        {/* Preferred Date */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Preferred Date *
                          </label>
                          <input
                            {...form.register('preferredDate')}
                            type="date"
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#055b99] focus:outline-none transition-colors"
                            data-testid="input-date"
                          />
                          {form.formState.errors.preferredDate && (
                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              {form.formState.errors.preferredDate.message}
                            </p>
                          )}
                        </div>

                        {/* Preferred Time */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Preferred Time *
                          </label>
                          <select
                            {...form.register('preferredTime')}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#055b99] focus:outline-none transition-colors bg-white"
                            data-testid="select-time"
                          >
                            <option value="">Select time</option>
                            {timeSlots.map((time) => (
                              <option key={time} value={time}>{time}</option>
                            ))}
                          </select>
                          {form.formState.errors.preferredTime && (
                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              {form.formState.errors.preferredTime.message}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Additional Notes */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Additional Notes (Optional)
                        </label>
                        <textarea
                          {...form.register('notes')}
                          rows={4}
                          placeholder="Any specific concerns or requirements..."
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#055b99] focus:outline-none transition-colors resize-none"
                          data-testid="textarea-notes"
                        />
                      </div>
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
                      data-testid="button-submit-booking"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-3">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-6 h-6 border-3 border-white border-t-transparent rounded-full"
                          />
                          Submitting...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-3">
                          <Calendar className="w-6 h-6" />
                          Book Appointment
                        </span>
                      )}
                    </motion.button>
                  </form>
                </div>
              </motion.div>

              {/* Sidebar Info */}
              <motion.div
                className="lg:col-span-1 space-y-6"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Contact Info Card */}
                <div className="bg-gradient-to-br from-[#055b99] to-[#0670b8] text-white rounded-2xl p-8 shadow-xl">
                  <h3 className="font-bold text-xl mb-6">Need Help?</h3>
                  <div className="space-y-4">
                    <a href="tel:+919925041198" className="flex items-center gap-3 hover:bg-white/10 p-3 rounded-lg transition-colors">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm opacity-90">Call Us</p>
                        <p className="font-bold">+91 99250 41198</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-3 p-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm opacity-90">Working Hours</p>
                        <p className="font-bold"> <span className="text-white/80">
                          Mon-Sat: 9 AM - 8 PM<br />Sun: 9 AM - 12 PM
                        </span></p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm opacity-90">Location</p>
                        <p className="font-bold">Vapi, Gujarat</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Book Online */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
                  <h3 className="font-bold text-lg mb-4">Why Book Online?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Quick & Easy - Book in 2 minutes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Choose your preferred date & time</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Get confirmation within 1 hour</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">No waiting in queues</span>
                    </li>
                  </ul>
                </div>

                {/* Trust Badges */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border-2 border-gray-200">
                  <h3 className="font-bold text-sm text-gray-500 uppercase tracking-wider mb-4">We Guarantee</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-[#055b99]" />
                      <span className="text-sm font-semibold">6 Month Warranty</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#055b99]" />
                      <span className="text-sm font-semibold">Genuine Parts Only</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <IndianRupee className="w-5 h-5 text-[#055b99]" />
                      <span className="text-sm font-semibold">Transparent Pricing</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}