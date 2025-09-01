"use client"
import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap, Briefcase, Mail, Linkedin, Twitter, CheckCircle, Award } from 'lucide-react';
import Image from 'next/image';

const AboutPage = () => {
  // Animation variants for scroll effects
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skills = [
    "Development Finance",
    "Global Policy Leadership",
    "International Aid & Governance",
    "Poverty Reduction Strategies",
    "Debt Relief & Restructuring",
    "Policy Research & Analysis",
    "Multilateral Negotiations",
    "Stakeholder Engagement",
    "Public Speaking & Thought Leadership"
  ];

  const experience = [
    {
      title: "President",
      company: "Center for Global Development",
      duration: "2017 – Present",
      location: "Washington, DC",
      description: "Leading research and policy initiatives on international development and global finance."
    },
    {
      title: "Director, Middle East & Central Asia Department",
      company: "International Monetary Fund",
      duration: "2008 – 2016",
      location: "Washington, DC",
      description: "Oversaw economic policy and financial programs across Middle East and Central Asia."
    },
    {
      title: "Vice President, Poverty Reduction & Economic Management",
      company: "World Bank",
      duration: "2003 – 2006",
      location: "Washington, DC",
      description: "Managed global programs focused on poverty alleviation and development finance."
    },
    {
      title: "Director General, Policy & International Division",
      company: "UK DFID",
      duration: "2000 – 2002",
      location: "London, UK",
      description: "Directed policy and strategic planning for international development projects."
    }
  ];

  const education = [
    {
      degree: "B.A. & M.A. in Economics",
      institution: "University of Cambridge",
      year: "1980s",
      details: "Focus on development economics and international finance."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <div className="text-center lg:text-left">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#006293] mb-4"
                variants={fadeInLeft}
              >
                About Me
              </motion.h1>
              <motion.h2 
                className="text-2xl md:text-3xl text-gray-600 mb-6 font-medium"
                variants={fadeInLeft}
                transition={{ delay: 0.2 }}
              >
                Masood Ahmed
              </motion.h2>
              <motion.p 
                className="text-xl text-[#006293] mb-4 font-medium"
                variants={fadeInLeft}
                transition={{ delay: 0.3 }}
              >
                Development Economist & Policy Researcher
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-gray-600"
                variants={fadeInLeft}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-[#89d6fb]" />
                  <span>Karachi, Pakistan</span>
                </div>
              </motion.div>
            </div>
            <motion.div 
              className="flex justify-center lg:justify-end"
              variants={fadeInRight}
            >
              <div className="relative w-64 h-64 bg-gray-200 rounded-full flex items-center justify-center border-4 border-[#89d6fb] overflow-hidden">
                <Image
                  src="/masood_ahmed2.PNG"
                  alt="Profile Photo"
                  fill
                  className="object-cover"
                  priority
                />
                
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-[#006293] mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Professional Biography
          </motion.h2>
          <motion.div 
            className="prose prose-lg max-w-none"
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            <motion.p 
              className="text-gray-700 leading-relaxed mb-6 text-lg"
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              I serve as an Assistant Professor and MBA Program Manager at SZABIST, Karachi, and also work as a Corporate Sustainability Trainer and Consultant. For me, education and sustainability are not separate pursuits—they are intertwined efforts to build a more conscious, resilient, and ethical world.
            </motion.p>
            <motion.p 
              className="text-gray-700 leading-relaxed mb-6 text-lg"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              My mission is to contribute meaningfully to the personal growth and professional development of my students and clients alike—not only as a teacher, but as a mentor, counselor, and reflective practitioner. I see each interaction as an opportunity to awaken potential, cultivate purpose, and encourage critical thinking.
            </motion.p>
            <motion.p 
              className="text-gray-700 leading-relaxed mb-6 text-lg"
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              At the heart of my approach are the values of empathy and deep listening, which I believe are foundational to both leadership and learning. These guide my work in the classroom, in program management, and in my corporate training sessions—where I help organizations align with sustainability goals, build purpose-driven cultures, and engage with the UN Sustainable Development Goals (SDGs) in practical, actionable ways.
            </motion.p>
            <motion.p 
              className="text-gray-700 leading-relaxed mb-6 text-lg"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              I take pride in building bridges between academia and industry, regularly inviting corporate leaders to engage with students and faculty for meaningful dialogue. I believe education flourishes when it steps beyond the walls of the institution and engages with the challenges and opportunities of the real world.
            </motion.p>
            <motion.p 
              className="text-gray-700 leading-relaxed mb-6 text-lg"
              variants={fadeInUp}
              transition={{ delay: 0.5 }}
            >
              In research, I focus on sustainable development and corporate responsibility, and I&apos;m currently exploring how Generative AI can be thoughtfully integrated into sustainability practices and education.
            </motion.p>
            <motion.p 
              className="text-gray-700 leading-relaxed mb-6 text-lg"
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
            >
              My intellectual journey has been deeply shaped by the works of Kierkegaard, Nietzsche, and Michel Foucault, whose philosophical insights continue to challenge and refine my thinking. In the field of management, I hold Peter F. Drucker in the highest regard for his clarity, foresight, and ethical grounding.
            </motion.p>
            <motion.p 
              className="text-gray-700 leading-relaxed mb-6 text-lg"
              variants={fadeInUp}
              transition={{ delay: 0.7 }}
            >
              Outside work, I find joy in traveling and photography, capturing fleeting beauty and reflecting on the world through both images and words.
            </motion.p>
            <motion.blockquote 
              className="text-gray-700 leading-relaxed italic text-lg border-l-4 border-[#89d6fb] pl-6 bg-gray-50 p-6 rounded-r-lg"
              variants={fadeInUp}
              transition={{ delay: 0.8 }}
            >
              &quot;To be nobody but yourself in a world which is doing its best day and night to make you like everybody else means to fight the hardest battle which any human being can fight and never stop fighting.&quot;
              <footer className="text-[#006293] font-medium mt-2">— e.e. cummings</footer>
            </motion.blockquote>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-[#006293] mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#89d6fb] mr-3 flex-shrink-0" />
                  <span className="text-[#006293] font-medium">{skill}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-[#006293] mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Professional Experience
          </motion.h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div 
                key={index} 
                className="relative pl-8 pb-8 border-l-2 border-[#89d6fb] last:border-l-0"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="absolute -left-3 top-0 w-6 h-6 bg-[#006293] rounded-full border-4 border-white shadow-sm"
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                ></motion.div>
                <motion.div 
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-[#006293] mb-1">{job.title}</h3>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">{job.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    <Briefcase className="w-4 h-4 mr-2 text-[#89d6fb]" />
                    <span className="font-medium text-gray-800">{job.company}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <MapPin className="w-4 h-4 mr-1 text-[#89d6fb]" />
                    <span className="text-gray-600">{job.location}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{job.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-[#006293] mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Education
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            {education.map((edu, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <GraduationCap className="w-6 h-6 text-[#89d6fb] mr-3" />
                  <span className="text-sm font-semibold text-[#006293] bg-[#89d6fb] bg-opacity-20 px-2 py-1 rounded">
                    {edu.year}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[#006293] mb-2">{edu.degree}</h3>
                <p className="text-gray-800 font-medium mb-2">{edu.institution}</p>
                <p className="text-gray-600 text-sm">{edu.details}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

  
    </div>
  );
};

export default AboutPage;