"use client"
import { Play, Eye, MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

// GalleryHero Component
const GalleryHero = () => {
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
          Our Gallery
        </motion.h1>
        <motion.p 
          className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Visual stories from my research journeys, field work, conferences, and collaborations across the globe. Each image captures moments of discovery, partnership, and impact in the world of development economics.
        </motion.p>
      </motion.div>
    </section>
  );
};

// GalleryItem Component
const GalleryItem = ({
  image,
  height = "h-64"
}: {
  image: GalleryImage;
  index?: number;
  height?: string;
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className={`relative ${height} bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden group cursor-pointer shadow-sm`}
      variants={cardVariants}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      {/* Image Placeholder with gradient */}
      <motion.div 
        className={`w-full ${height} bg-gradient-to-br ${image.gradient} flex items-center justify-center relative`}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <span className="text-white font-medium opacity-60">{image.placeholder}</span>
        
        {/* Overlay */}
        <motion.div 
          className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
        
        {/* Hover Content */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="flex items-center px-4 py-2 bg-white text-[#006293] font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Eye className="mr-2 w-4 h-4" />
            View
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Image Info */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white"
        initial={{ y: "100%" }}
        whileHover={{ y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <h4 className="font-semibold mb-1">{image.title}</h4>
        <div className="flex items-center text-sm opacity-90">
          <MapPin className="w-3 h-3 mr-1" />
          {image.location}
          <span className="mx-2">•</span>
          <Calendar className="w-3 h-3 mr-1" />
          {image.date}
        </div>
      </motion.div>
    </motion.div>
  );
};

// GalleryGrid Component
type GalleryImage = {
  title: string;
  location: string;
  date: string;
  placeholder: string;
  gradient: string;
  height?: string;
};

const GalleryGrid = ({ images }: { images: GalleryImage[] }) => {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      {images.map((image: GalleryImage, index: number) => (
        <GalleryItem 
          key={index} 
          image={image} 
          index={index}
          height={image.height || "h-64"}
        />
      ))}
    </motion.div>
  );
};

// Main GalleryPage Component
const GalleryPage = () => {
  const galleryImages = [
    {
      title: "Field Research in Rural Pakistan",
      location: "Punjab, Pakistan",
      date: "March 2024",
      placeholder: "Field Work",
      gradient: "from-emerald-400 to-teal-600",
      height: "h-80"
    },
    {
      title: "World Bank Conference",
      location: "Washington, DC",
      date: "February 2024",
      placeholder: "Conference",
      gradient: "from-blue-400 to-indigo-600",
      height: "h-64"
    },
    {
      title: "Microfinance Institution Visit",
      location: "Dhaka, Bangladesh",
      date: "January 2024",
      placeholder: "Institution",
      gradient: "from-purple-400 to-pink-600",
      height: "h-72"
    },
    {
      title: "Climate Summit Presentation",
      location: "Dubai, UAE",
      date: "December 2023",
      placeholder: "Presentation",
      gradient: "from-orange-400 to-red-600",
      height: "h-64"
    },
    {
      title: "Research Team Meeting",
      location: "Karachi, Pakistan",
      date: "November 2023",
      placeholder: "Team Work",
      gradient: "from-cyan-400 to-blue-600",
      height: "h-96"
    },
    {
      title: "UN Development Programme Workshop",
      location: "New York, USA",
      date: "October 2023",
      placeholder: "Workshop",
      gradient: "from-yellow-400 to-orange-600",
      height: "h-64"
    },
    {
      title: "Digital Finance Summit",
      location: "Singapore",
      date: "September 2023",
      placeholder: "Summit",
      gradient: "from-green-400 to-emerald-600",
      height: "h-72"
    },
    {
      title: "Agricultural Research Site",
      location: "Sindh, Pakistan",
      date: "August 2023",
      placeholder: "Agriculture",
      gradient: "from-lime-400 to-green-600",
      height: "h-80"
    },
    {
      title: "Policy Roundtable Discussion",
      location: "Islamabad, Pakistan",
      date: "July 2023",
      placeholder: "Policy Meeting",
      gradient: "from-violet-400 to-purple-600",
      height: "h-64"
    },
    {
      title: "International Development Forum",
      location: "London, UK",
      date: "June 2023",
      placeholder: "Forum",
      gradient: "from-rose-400 to-pink-600",
      height: "h-88"
    },
    {
      title: "Fintech Innovation Lab",
      location: "Lahore, Pakistan",
      date: "May 2023",
      placeholder: "Innovation",
      gradient: "from-teal-400 to-cyan-600",
      height: "h-64"
    },
    {
      title: "Rural Development Project",
      location: "Balochistan, Pakistan",
      date: "April 2023",
      placeholder: "Development",
      gradient: "from-amber-400 to-yellow-600",
      height: "h-72"
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };



  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <GalleryHero />

  

      {/* Gallery Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-[#006293] text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Photo Collection
          </motion.h2>
          
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      {/* Featured Video Section */}
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
            Featured Video
          </motion.h2>
          
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div 
                className="relative h-64 bg-gradient-to-br from-[#006293] to-[#89d6fb] rounded-xl flex items-center justify-center group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Play className="w-8 h-8 text-white ml-1" />
                </motion.div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-medium">Research Methodology Overview</p>
                  <p className="text-sm opacity-80">12:45 duration</p>
                </div>
              </motion.div>
              
              <div>
                <h3 className="text-2xl font-bold text-[#006293] mb-4">
                  Behind the Research: Field Work in South Asia
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Take a closer look at my research methodology and field work approach. This video showcases the process of data collection, community engagement, and collaborative research techniques used in rural development studies across Pakistan and Bangladesh.
                </p>
                <motion.button
                  className="inline-flex items-center px-6 py-3 bg-[#006293] text-white font-medium rounded-lg hover:bg-[#89d6fb] hover:text-[#006293] transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="mr-2 w-4 h-4" />
                  Watch Video
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;