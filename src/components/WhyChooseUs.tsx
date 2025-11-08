import { motion } from "framer-motion";
import {
  Award,
  Clock,
  ThumbsUp,
  Users,
  Shield,
  DollarSign,
  CheckCircle,
  Wrench,
} from "lucide-react";
import { Link } from "wouter";

const features = [
  {
    icon: Award,
    title: "Certified Mechanics",
    description:
      "Our technicians are certified and trained to handle all car brands and models",
  },
  {
    icon: Clock,
    title: "Quick Service",
    description:
      "Same-day service for most repairs with time-bound delivery guarantee",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description:
      "No hidden charges. Get detailed estimates before we start working",
  },
  {
    icon: Shield,
    title: "Service Warranty",
    description:
      "6-month warranty on all services and genuine spare parts used",
  },
  {
    icon: Users,
    title: "500+ Happy Customers",
    description:
      "Trusted by Valsad's car owners for over 10 years of excellence",
  },
  {
    icon: ThumbsUp,
    title: "Quality Guaranteed",
    description:
      "We use only genuine parts and high-quality materials for all repairs",
  },
];

const stats = [
  { number: "10+", label: "Years Experience" },
  { number: "500+", label: "Happy Customers" },
  { number: "4.9", label: "Google Rating" },
  { number: "95%", label: "Customer Retention" },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#055b99] font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Valsad's Most Trusted Auto Service Center
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              With over 10 years of experience, we've built our reputation on
              trust, quality, and customer satisfaction. Your car deserves the
              best care.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-[#055b99]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-[#055b99]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#055b99] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0670b8] transition-colors shadow-lg inline-flex items-center gap-2"
              >
                <Wrench className="w-5 h-5" />
                Learn More About Us
              </motion.button>
            </Link>
          </motion.div>

          {/* Right - Stats & Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder for garage image */}
              <div className="aspect-[4/5] bg-gradient-to-br from-[#055b99]/20 to-[#0670b8]/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <Wrench className="w-24 h-24 text-[#055b99] mx-auto mb-4" />
                  <p className="text-gray-600 text-lg">
                    Add your garage image here
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Recommended: 600x750px
                  </p>
                </div>
              </div>

              {/* Floating Stats Card */}
              <motion.div
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-2xl"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className="text-3xl font-bold text-[#055b99] mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#055b99]/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#0670b8]/20 rounded-full blur-2xl" />
            </div>

            {/* Side Badge */}
            <motion.div
              className="absolute -left-8 top-1/4 bg-white rounded-2xl shadow-xl p-6 hidden lg:block"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-lg">100%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
