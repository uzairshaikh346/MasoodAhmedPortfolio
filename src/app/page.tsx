"use client"
import { ArrowRight, BookOpen, Award, Users, Globe, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const HomePage = () => {
  const highlights = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Publications",
      description: "50+ peer-reviewed articles in top economic journals",
      stat: "50+"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Leadership Roles",
      description: "Senior positions in international development organizations",
      stat: "15+"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Policy Advisor",
      description: "Consulting for governments and NGOs across 20+ countries",
      stat: "20+"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Awards",
      description: "Recognition for outstanding contributions to economic research",
      stat: "8+"
    }
  ];

  const featuredResearch = [
    {
      title: "Impact of Microfinance on Rural Development",
      description: "Comprehensive analysis of microfinance institutions' role in poverty alleviation across South Asian economies.",
      category: "Development Economics"
    },
    {
      title: "Digital Financial Inclusion in Emerging Markets",
      description: "Examining how digital payment systems are transforming financial access in developing countries.",
      category: "Financial Policy"
    },
    {
      title: "Climate Change and Agricultural Productivity",
      description: "Assessment of climate resilience strategies and their economic impact on smallholder farmers.",
      category: "Environmental Economics"
    }
  ];

  const blogPosts = [
    {
      title: "The Future of Development Economics in a Post-Pandemic World",
      date: "March 15, 2025",
      excerpt: "Exploring how COVID-19 has reshaped development priorities and what it means for policy makers going forward."
    },
    {
      title: "Bridging the Digital Divide: Lessons from Pakistan's Fintech Revolution",
      date: "February 28, 2025",
      excerpt: "An in-depth look at how Pakistan's digital payment ecosystem has evolved and its implications for financial inclusion."
    },
    {
      title: "Sustainable Development Goals: Mid-Point Assessment",
      date: "February 12, 2025",
      excerpt: "Evaluating progress on the SDGs and identifying key challenges and opportunities for the remaining decade."
    }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  };



  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="text-center lg:text-left"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#006293] mb-4"
                variants={fadeInLeft}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Masood Ahmed
              </motion.h1>
              <motion.h2 
                className="text-xl md:text-2xl text-gray-600 mb-6"
                variants={fadeInLeft}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                Development Economist & Policy Researcher
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-700 mb-8 max-w-2xl"
                variants={fadeInLeft}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                Bridging theory and practice to create sustainable economic solutions for developing nations through evidence-based research and policy innovation.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                variants={fadeInLeft}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                <a
                  href="/about"
                  className="inline-flex items-center px-8 py-3 bg-[#006293] text-white font-medium rounded-lg hover:bg-[#89d6fb] hover:text-[#006293] transition-all duration-200"
                >
                  About Me
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <a
                  href="/research"
                  className="inline-flex items-center px-8 py-3 border-2 border-[#006293] text-[#006293] font-medium rounded-lg hover:bg-[#89d6fb] hover:border-[#89d6fb] transition-all duration-200"
                >
                  View Research
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </motion.div>
            </motion.div>
            <motion.div 
              className="flex justify-center lg:justify-end"
              initial="hidden"
              animate="visible"
              variants={scaleIn}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              <div className="w-80 h-80 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500 font-medium">Profile Photo</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl font-bold text-[#006293] mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700 leading-relaxed mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            With over 15 years of experience in development economics and policy research, I have dedicated my career to understanding and addressing the complex challenges facing developing economies. My work spans across microfinance, digital financial inclusion, agricultural economics, and sustainable development, with a particular focus on South Asian markets and emerging economies.
          </motion.p>
          <motion.a
            href="/about"
            className="inline-flex items-center px-6 py-3 bg-[#006293] text-white font-medium rounded-lg hover:bg-[#89d6fb] hover:text-[#006293] transition-all duration-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read More
            <ArrowRight className="ml-2 w-4 h-4" />
          </motion.a>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-[#006293] text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Key Highlights
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {highlights.map((highlight, index) => (
              <motion.div 
                key={index} 
                className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 bg-[#89d6fb] text-[#006293] rounded-full mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {highlight.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-[#006293] mb-2">{highlight.title}</h3>
                <motion.p 
                  className="text-3xl font-bold text-[#89d6fb] mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3, type: "spring", stiffness: 100 }}
                >
                  {highlight.stat}
                </motion.p>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Research */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl font-bold text-[#006293] mb-4"
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Featured Research
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              Explore my latest research projects and findings
            </motion.p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {featuredResearch.map((project, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <motion.div 
                  className="mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                >
                  <span className="inline-block px-3 py-1 bg-[#89d6fb] text-[#006293] text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </motion.div>
                <h3 className="text-xl font-semibold text-[#006293] mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <motion.a
                  href="/research"
                  className="inline-flex items-center text-[#006293] hover:text-[#89d6fb] font-medium transition-colors duration-200"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Read More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl font-bold text-[#006293] mb-4"
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Latest Blog Posts
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              Insights and perspectives on current economic developments
            </motion.p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {blogPosts.map((post, index) => (
              <motion.article 
                key={index} 
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <motion.div 
                  className="flex items-center text-sm text-gray-500 mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                </motion.div>
                <h3 className="text-xl font-semibold text-[#006293] mb-3 leading-tight">{post.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                <motion.a
                  href="/blog"
                  className="inline-flex items-center text-[#006293] hover:text-[#89d6fb] font-medium transition-colors duration-200"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Read More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </motion.a>
              </motion.article>
            ))}
          </motion.div>
          <motion.div 
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <motion.a
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-[#006293] text-white font-medium rounded-lg hover:bg-[#89d6fb] hover:text-[#006293] transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Blogs
              <ArrowRight className="ml-2 w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;