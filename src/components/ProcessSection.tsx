import { motion } from "framer-motion";
import { Phone, Calendar, Wrench, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Book Appointment",
    description:
      "Call us or book online. We'll schedule at your convenience and confirm your slot immediately.",
  },
  {
    icon: Calendar,
    number: "02",
    title: "Drop Your Vehicle",
    description:
      "Bring your car at scheduled time. Our team will inspect and provide detailed estimate.",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Service & Repair",
    description:
      "Our expert mechanics work on your vehicle with genuine parts and advanced tools.",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Quality Check & Delivery",
    description:
      "Thorough quality inspection and test drive before delivering your serviced vehicle.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23055b99' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative Blobs */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-[#055b99]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-[#0670b8]/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
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
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Simple 4-Step Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting your car serviced has never been easier. Follow our simple
            process and get back on the road quickly and safely.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line - Desktop Only */}
          <div className="hidden lg:block absolute top-20 left-[12.5%] right-[12.5%] h-1">
            <div className="h-full bg-gradient-to-r from-transparent via-[#055b99]/30 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative"
              >
                <div className="text-center group">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <motion.span
                      className="bg-gradient-to-r from-[#055b99] to-[#0670b8] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      STEP {step.number}
                    </motion.span>
                  </div>

                  {/* Icon Circle */}
                  <motion.div
                    className="w-28 h-28 mx-auto bg-white rounded-full shadow-xl flex items-center justify-center mb-6 relative z-10 group-hover:shadow-2xl transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {/* Inner circle with gradient */}
                    <div className="w-24 h-24 bg-gradient-to-br from-[#055b99]/10 via-[#055b99]/20 to-[#0670b8]/10 rounded-full flex items-center justify-center group-hover:from-[#055b99]/20 group-hover:to-[#0670b8]/20 transition-all">
                      <step.icon className="w-12 h-12 text-[#055b99]" />
                    </div>

                    {/* Rotating ring animation */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-dashed border-[#055b99]/30"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow for desktop - except last item */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="hidden lg:block absolute top-20 -right-8 text-[#055b99]/30"
                      animate={{ x: [0, 10, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}

      </div>
    </section>
  );
}
