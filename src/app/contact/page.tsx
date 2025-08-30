"use client"
import { Mail, Phone, MapPin, Linkedin, Twitter, Send, MessageCircle, Globe, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

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
        <motion.div 
          className="flex items-center justify-center gap-8 text-white/80"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <div className="flex items-center">
            <MessageCircle className="w-5 h-5 mr-2" />
            <span>Research Collaborations</span>
          </div>
          <div className="flex items-center">
            <Globe className="w-5 h-5 mr-2" />
            <span>Policy Consultations</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            <span>Speaking Engagements</span>
          </div>
        </motion.div>
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
      value: "Institute of Business Administration\nKarachi, Sindh 75270\nPakistan",
      type: "address"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "masood.ahmed@example.edu",
      type: "email",
      link: "mailto:masood.ahmed@example.edu"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+92 21 3810 4700",
      type: "phone",
      link: "tel:+922138104700"
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

      {/* Social Media */}
      <motion.div 
        variants={fadeInLeft}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      >
        <h4 className="font-semibold text-[#006293] mb-4">Connect with Me</h4>
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              className={`w-12 h-12 bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center transition-all duration-200 ${social.color}`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Office Hours */}
      <motion.div 
        className="mt-8 p-4 bg-gray-50 rounded-lg"
        variants={fadeInLeft}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      >
        <h4 className="font-semibold text-[#006293] mb-2">Office Hours</h4>
        <div className="text-sm text-gray-600 space-y-1">
          <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
          <p>Saturday: 10:00 AM - 2:00 PM</p>
          <p>Sunday: By appointment only</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ContactForm Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  interface FormErrors {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  }
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const newErrors: FormErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise<void>(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <motion.div 
      className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h3 
        className="text-2xl font-bold text-[#006293] mb-8"
        variants={fadeInRight}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Send Me a Message
      </motion.h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
        >
          {/* Name Field */}
          <motion.div variants={fadeInRight}>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006293] focus:border-transparent transition-all duration-200 ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <motion.p 
                className="text-red-500 text-sm mt-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {errors.name}
              </motion.p>
            )}
          </motion.div>

          {/* Email Field */}
          <motion.div variants={fadeInRight}>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006293] focus:border-transparent transition-all duration-200 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your email address"
            />
            {errors.email && (
              <motion.p 
                className="text-red-500 text-sm mt-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {errors.email}
              </motion.p>
            )}
          </motion.div>
        </motion.div>

        {/* Subject Field */}
        <motion.div variants={fadeInRight}>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006293] focus:border-transparent transition-all duration-200 ${
              errors.subject ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="What would you like to discuss?"
          />
          {errors.subject && (
            <motion.p 
              className="text-red-500 text-sm mt-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {errors.subject}
            </motion.p>
          )}
        </motion.div>

        {/* Message Field */}
        <motion.div variants={fadeInRight}>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006293] focus:border-transparent transition-all duration-200 resize-none ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Please share details about your inquiry, research interests, or collaboration ideas..."
          />
          {errors.message && (
            <motion.p 
              className="text-red-500 text-sm mt-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {errors.message}
            </motion.p>
          )}
        </motion.div>

        {/* Submit Button */}
        <motion.div 
          className="pt-4"
          variants={fadeInRight}
        >
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`w-full inline-flex items-center justify-center px-8 py-4 font-medium rounded-lg transition-all duration-200 ${
              isSubmitting
                ? 'bg-gray-400 text-white cursor-not-allowed'
                : 'bg-[#006293] text-white hover:bg-[#89d6fb] hover:text-[#006293]'
            }`}
            whileHover={!isSubmitting ? { scale: 1.02 } : {}}
            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
          >
            {isSubmitting ? (
              <>
                <motion.div
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                Sending Message...
              </>
            ) : (
              <>
                <Send className="mr-2 w-5 h-5" />
                Send Message
              </>
            )}
          </motion.button>
        </motion.div>
      </form>
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <ContactInfo />

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-[#006293] text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Find Me Here
          </motion.h2>
          
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div 
                className="h-64 bg-gradient-to-br from-[#89d6fb] to-[#006293] rounded-xl flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-white font-medium">Interactive Map</span>
              </motion.div>
              
              <div>
                <h3 className="text-2xl font-bold text-[#006293] mb-4">
                  Visit My Office
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Located at the Institute of Business Administration in Karachi, my office is open for meetings, consultations, and academic discussions. Please schedule an appointment in advance to ensure availability.
                </p>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-[#006293]" />
                    <span>5 minutes from Shahrah-e-Faisal</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-[#006293]" />
                    <span>Appointments available Monday-Friday</span>
                  </div>
                </div>
                <motion.button
                  className="inline-flex items-center px-6 py-3 bg-[#006293] text-white font-medium rounded-lg hover:bg-[#89d6fb] hover:text-[#006293] transition-all duration-200 mt-6"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Directions
                  <MapPin className="ml-2 w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-[#006293] text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Frequently Asked Questions
          </motion.h2>
          
          <motion.div 
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {[
              {
                question: "How can I collaborate on research projects?",
                answer: "I welcome research collaborations from fellow academics, policy researchers, and development practitioners. Please reach out with details about your research interests and proposed collaboration scope."
              },
              {
                question: "Do you accept speaking engagements?",
                answer: "Yes, I regularly speak at conferences, universities, and policy forums. Please provide event details, dates, and topics when reaching out for speaking opportunities."
              },
              {
                question: "Can students schedule consultations?",
                answer: "Absolutely! I offer office hours for students interested in development economics, research methodology, or career guidance. Please email to schedule an appointment."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -2 }}
              >
                <h4 className="text-lg font-semibold text-[#006293] mb-3">{faq.question}</h4>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;