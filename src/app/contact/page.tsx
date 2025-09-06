"use client"
import { Mail, Phone, MapPin, Linkedin, Twitter, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

// ContactHero Component
const ContactHero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
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

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#006293] to-[#89d6fb]">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          variants={fadeInUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Get in Touch
        </motion.h1>
        <motion.p 
          className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          I welcome opportunities for collaboration, research partnerships, policy consultations, and academic discussions. Whether you&apos;re a fellow researcher, policymaker, student, or development practitioner, let&apos;s connect and explore how we can work together.
        </motion.p>
      </motion.div>
    </section>
  );
};

// ContactInfo Component
const ContactInfo = () => {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

const contactDetails = [
  {
    icon: <MapPin className="w-6 h-6" />,
    label: "Office Address",
    value: "SZABIST, Karachi\nClifton, Karachi, Sindh 75600\nPakistan",
    type: "address"
  },
  {
    icon: <Mail className="w-6 h-6" />,
    label: "Email",
    value: "masood.ahmed@szabist.edu.pk",
    type: "email",
    link: "mailto:masood.ahmed@szabist.edu.pk"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    label: "Phone",
    value: "+92 21 111 111 111",
    type: "phone",
    link: "tel:+922111111111"
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    label: "LinkedIn",
    value: "Masood Ahmed",
    type: "social",
    link: "https://www.linkedin.com/in/masood-ahmed-2526732a6/"
  }
];


  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      link: "https://linkedin.com/in/masoodahmed",
      color: "hover:text-blue-600"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      name: "Twitter",
      link: "https://twitter.com/masoodahmed",
      color: "hover:text-blue-400"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      name: "ResearchGate",
      link: "https://researchgate.net/profile/masood-ahmed",
      color: "hover:text-green-600"
    }
  ];

  return (
    <motion.div 
      className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 h-fit"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h3 
        className="text-2xl font-bold text-[#006293] mb-8"
        variants={fadeInLeft}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Contact Information
      </motion.h3>
      
      <motion.div 
        className="space-y-6 mb-8"
        variants={staggerContainer}
      >
        {contactDetails.map((detail, index) => (
          <motion.div 
            key={index}
            className="flex items-start space-x-4"
            variants={fadeInLeft}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div 
              className="flex-shrink-0 w-12 h-12 bg-[#89d6fb] text-[#006293] rounded-lg flex items-center justify-center"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {detail.icon}
            </motion.div>
            <div>
              <h4 className="font-semibold text-[#006293] mb-1">{detail.label}</h4>
              {detail.link ? (
                <motion.a
                  href={detail.link}
                  className="text-gray-700 hover:text-[#006293] transition-colors duration-200"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  {detail.value}
                </motion.a>
              ) : (
                <p className="text-gray-700 whitespace-pre-line">{detail.value}</p>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

 
    </motion.div>
  );
};



// Main ContactPage Component
const ContactPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <ContactHero />

      {/* Main Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center">
            {/* Contact Information Only */}
            <ContactInfo />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;