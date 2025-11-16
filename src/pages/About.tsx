import { motion } from 'framer-motion';
import {
  Award,
  Target,
  Users,
  Shield,
  ThumbsUp,
  Clock,
  Wrench,
  CheckCircle,
  Star,
  TrendingUp,
  Heart,
  Zap
} from 'lucide-react';
import { SEO } from "@/components/SEO"; // Add this import

// Import your images
import garageExterior from "@assets/generated_images/about.jpg";
import mechanicImage from "@assets/generated_images/person.jpg";
import mechanicWorking from "@assets/generated_images/person.jpg";
import { Link } from 'wouter';

export default function About() {
  const team = [
    {
      name: "Pravin Prajapati",
      role: "Master Mechanic & Founder",
      image: mechanicImage,
      experience: "15+ Years",
      specialization: "Complete Mechanical Services"
    },
    {
      name: "Ramesh Prajapti",
      role: "Senior Technician",
      image: mechanicWorking,
      experience: "25+ Years",
      specialization: "Mechanical Repair Specialist"
    },
    {
      name: "Manan ",
      role: "Painter",
      image: mechanicImage,
      experience: "8+ Years",
      specialization: " Vehicle & Tempo Painting Specialist"
    },
    {
      name: "Pintu ",
      role: "Mechanic ",
      image: mechanicWorking,
      experience: "12+ Years",
      specialization: "Junior Mechanic"
    },
  ];

  const brands = [
    "Eicher",
    "Tata Motors",
    "Mahindra",
    "Toyota",
    "LCV",
  ];

  const coreValues = [
    {
      icon: Shield,
      title: "Integrity First",
      description: "Honest assessments and transparent pricing. We never recommend unnecessary services."
    },
    {
      icon: Award,
      title: "Expert Quality",
      description: "Certified technicians with years of experience and continuous training."
    },
    {
      icon: ThumbsUp,
      title: "Customer Satisfaction",
      description: "Your satisfaction is our success. We go the extra mile for every customer."
    },
    {
      icon: Zap,
      title: "Modern Technology",
      description: "State-of-the-art diagnostic equipment and latest repair techniques."
    }
  ];

  const stats = [
    { number: "25+", label: "Years in Business", icon: Clock },
    { number: "95%", label: "Happy Customers", icon: Users },
    { number: "4.9", label: "Google Rating", icon: Star },
    { number: "95%", label: "Customer Return Rate", icon: TrendingUp }
  ];

  const milestones = [
    { year: "1997", title: "Founded", description: "Started with a small workshop and big dreams" },
    { year: "1997", title: "Expansion", description: "Added advanced diagnostic equipment" },
    { year: "2018", title: "Team Growth", description: "Expanded to 25+ certified technicians" },
    { year: "2024", title: "Today", description: "Vapi's most trusted auto service center" }
  ];

  return (
    <>
      {/* SEO Component */}
      <SEO
        title="About Us - Jinal Auto Garage | 25+ Years of Trusted Auto Service in Vapi"
        description="Learn about Jinal Auto Garage - Vapi's most trusted auto service center since 1997. Meet our expert team of certified mechanics, discover our mission, vision, and values. 95% satisfied customers, 4.9 rating."
        keywords="about jinal auto garage, auto garage Vapi history, certified mechanics Vapi, auto service team Vapi, trusted car garage Vapi, professional auto technicians, car repair experts Vapi"
        canonical="https://jinalgarage.com/about"
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

          {/* Animated Blobs */}
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
                <Award className="w-5 h-5" />
                <span className="font-semibold text-sm tracking-wide">
                  Trusted Since 1997
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6" data-testid="text-about-title">
                About Jinal Auto Garage
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                Your trusted automotive service partner in Vapi. Over 25+ years of excellence,
                95% satisfied customers, and a commitment to honest, quality service.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-[#055b99]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-[#055b99]" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-[#055b99] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left - Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-[#055b99] font-semibold text-sm uppercase tracking-wider">
                  Our Story
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                  A Decade of Dedicated Service
                </h2>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Founded in 1997, Jinal Auto Garage began with a simple mission: to
                    provide honest, reliable, and affordable auto care to the people of
                    Vapi and surrounding areas.
                  </p>
                  <p>
                    What started as a small workshop with just two mechanics has grown
                    into a full-service automotive center, serving over 500 satisfied
                    customers. Our growth is a testament to our commitment to quality
                    service and customer satisfaction.
                  </p>
                  <p>
                    Today, we're proud to be one of the most trusted names in automotive
                    service in Vapi, equipped with modern diagnostic tools and a team
                    of certified technicians who treat every car like their own.
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="font-semibold">Certified Mechanics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="font-semibold">Genuine Parts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="font-semibold">Modern Equipment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="font-semibold">Fair Pricing</span>
                  </div>
                </div>
              </motion.div>

              {/* Right - Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={garageExterior}
                    alt="Jinal Auto Garage Exterior"
                    className="w-full h-auto"
                    data-testid="img-garage-exterior"
                  />
                </div>

                {/* Floating Badge */}
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#055b99] rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-2xl text-[#055b99]">95%</div>
                      <div className="text-sm text-gray-600">Happy Customers</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#055b99]/5 to-[#0670b8]/5 rounded-2xl p-8 md:p-12 border-2 border-[#055b99]/20 hover:border-[#055b99]/40 transition-all"
              >
                <div className="w-16 h-16 bg-[#055b99]/10 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-[#055b99]" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To provide reliable, affordable auto care services that exceed
                  customer expectations. We believe in transparency, quality
                  workmanship, and building long-term relationships with our clients
                  based on trust and exceptional service.
                </p>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-[#055b99]/5 to-[#0670b8]/5 rounded-2xl p-8 md:p-12 border-2 border-[#055b99]/20 hover:border-[#055b99]/40 transition-all"
              >
                <div className="w-16 h-16 bg-[#055b99]/10 rounded-full flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-[#055b99]" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be Vapi's most trusted and preferred automotive service center,
                  known for our expertise, integrity, and commitment to excellence in
                  every service we provide. Setting the standard for quality auto care
                  in the region.
                </p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container max-w-7xl mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#055b99] font-semibold text-sm uppercase tracking-wider">
                Our Core Values
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                What Drives Us Every Day
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide everything we do at Jinal Auto Garage
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
                >
                  <div className="w-14 h-14 bg-[#055b99]/10 rounded-xl flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-[#055b99]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline / Milestones */}
        <section className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#055b99] font-semibold text-sm uppercase tracking-wider">
                Our Journey
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                A Decade of Growth
              </h2>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#055b99] via-[#0670b8] to-[#055b99]" />

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-white rounded-2xl p-6 shadow-lg inline-block">
                        <div className="text-3xl font-bold text-[#055b99] mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Center Circle */}
                    <div className="hidden md:block w-6 h-6 bg-[#055b99] rounded-full border-4 border-white shadow-lg z-10" />

                    <div className="flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container max-w-7xl mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#055b99] font-semibold text-sm uppercase tracking-wider">
                Our Team
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                Meet Our Expert Mechanics
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experienced professionals dedicated to keeping your vehicle running smoothly
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="text-sm font-semibold bg-[#055b99]/80 backdrop-blur-sm px-3 py-1 rounded-full inline-block">
                          {member.experience}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 text-center">
                      <h3
                        className="font-bold text-xl mb-1"
                        data-testid={`text-team-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {member.name}
                      </h3>
                      <p className="text-[#055b99] font-semibold mb-2">{member.role}</p>
                      <p className="text-sm text-gray-600">{member.specialization}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Brands We Service */}
        <section className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#055b99] font-semibold text-sm uppercase tracking-wider">
                Brands We Service
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                Expert Service for All Major Brands
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From budget-friendly to luxury vehicles, we service them all with equal expertise
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {brands.map((brand, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-[#055b99]/5 to-[#0670b8]/5 p-8 rounded-2xl text-center font-bold text-lg border-2 border-transparent hover:border-[#055b99]/30 transition-all shadow-lg"
                  data-testid={`brand-${brand.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <Wrench className="w-8 h-8 text-[#055b99] mx-auto mb-3" />
                  {brand}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23055b99' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          {/* Animated Gradient Orb */}
          <motion.div
            className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-[#055b99]/20 to-[#0670b8]/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />

          <motion.div
            className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-[#0670b8]/20 to-[#055b99]/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -50, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          />

          <div className="container max-w-7xl mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#055b99] to-[#0670b8] rounded-full flex items-center justify-center shadow-xl">
                <Users className="w-10 h-10 text-white" />
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Join Our Family of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#055b99] to-[#0670b8]">Satisfied Customers</span>
              </h2>

              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Experience the difference that honest service and expert care makes.
                Book your service appointment today and see why we're Vapi's most trusted garage!
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/book-service">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-[#055b99] to-[#0670b8] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl inline-flex items-center gap-3 hover:shadow-2xl transition-shadow"
                  >
                    <Wrench className="w-5 h-5" />
                    Book Service Now
                  </motion.button>
                </Link>

                <motion.a
                  href="tel:+919925041198"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white border-2 border-[#055b99] text-[#055b99] px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-3"
                >
                  📞 Call: +91 99250 41198
                </motion.a>
              </div>

              {/* Trust Indicators */}
              <motion.div
                className="mt-12 flex flex-wrap items-center justify-center gap-8 text-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Free Estimates</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span>4.9 Google Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#055b99]" />
                  <span>Warranty on Services</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
}