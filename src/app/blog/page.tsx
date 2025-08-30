"use client"
import { Calendar, Clock, ArrowRight, User} from 'lucide-react';
import { motion } from 'framer-motion';

// BlogHero Component
const BlogHero = () => {
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
          Our Blog
        </motion.h1>
        <motion.p 
          className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Insights, analysis, and perspectives on development economics, policy innovation, and sustainable finance. Stay updated with the latest research findings and industry trends.
        </motion.p>
      </motion.div>
    </section>
  );
};

// BlogCard Component
type BlogCardProps = {
  title: string;
  date: string;
  excerpt: string;
  link: string;
  category: string;
  readTime: string;
  author: string;
  image: string | null;
};

const BlogCard = ({ title, date, excerpt, link, category, readTime, author}: BlogCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.article 
      className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300"
      variants={cardVariants}
      whileHover={{ 
        scale: 1.03,
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      {/* Image placeholder */}
      <div className="w-full h-48 bg-gradient-to-br from-[#89d6fb] to-[#006293] flex items-center justify-center">
        <span className="text-white font-medium">Blog Image</span>
      </div>
      
      <div className="p-6">
        {/* Category and metadata */}
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <motion.span 
            className="px-3 py-1 bg-[#89d6fb] text-[#006293] text-xs font-medium rounded-full"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2, type: "spring", stiffness: 100 }}
          >
            {category}
          </motion.span>
          <div className="flex items-center text-xs text-gray-500">
            <Clock className="w-3 h-3 mr-1" />
            {readTime}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-[#006293] mb-3 leading-tight hover:text-[#89d6fb] transition-colors duration-200">
          {title}
        </h3>

        {/* Meta info */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <span className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            {author}
          </span>
          <span className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {date}
          </span>
        </div>

        {/* Excerpt */}
        <p className="text-gray-600 leading-relaxed mb-6">{excerpt}</p>

        {/* Read more link */}
        <motion.a
          href={link}
          className="inline-flex items-center text-[#006293] hover:text-[#89d6fb] font-medium transition-colors duration-200"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          Read More
          <ArrowRight className="ml-2 w-4 h-4" />
        </motion.a>
      </div>
    </motion.article>
  );
};

// BlogList Component
type BlogPost = {
  title: string;
  date: string;
  excerpt: string;
  link: string;
  category: string;
  readTime: string;
  author: string;
  image: string | null;
};

const BlogList = ({ posts }: { posts: BlogPost[] }) => {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      {posts.map((post, index) => (
        <BlogCard
          key={index}
          title={post.title}
          date={post.date}
          excerpt={post.excerpt}
          link={post.link}
          category={post.category}
          readTime={post.readTime}
          author={post.author}
          image={post.image}
        />
      ))}
    </motion.div>
  );
};

// Main BlogPage Component
const BlogPage = () => {
  const blogPosts = [
    {
      title: "The Future of Development Economics in a Post-Pandemic World",
      date: "March 15, 2025",
      excerpt: "Exploring how COVID-19 has reshaped development priorities and what it means for policy makers going forward. An in-depth analysis of emerging trends and adaptive strategies.",
      category: "Development Economics",
      readTime: "8 min read",
      author: "Masood Ahmed",
      link: "/blog/future-development-economics",
      image: null
    },
    {
      title: "Bridging the Digital Divide: Lessons from Pakistan's Fintech Revolution",
      date: "February 28, 2025",
      excerpt: "An in-depth look at how Pakistan's digital payment ecosystem has evolved and its implications for financial inclusion across South Asian markets.",
      category: "Financial Technology",
      readTime: "12 min read",
      author: "Masood Ahmed",
      link: "/blog/digital-divide-pakistan",
      image: null
    },
    {
      title: "Sustainable Development Goals: Mid-Point Assessment",
      date: "February 12, 2025",
      excerpt: "Evaluating progress on the SDGs and identifying key challenges and opportunities for the remaining decade. A comprehensive review of global initiatives.",
      category: "Policy Analysis",
      readTime: "15 min read",
      author: "Masood Ahmed",
      link: "/blog/sdg-midpoint-assessment",
      image: null
    },
    {
      title: "Microfinance and Women's Empowerment: New Evidence from Rural Asia",
      date: "January 25, 2025",
      excerpt: "Recent research findings on how microfinance programs are creating pathways for women's economic empowerment in rural communities across Asia.",
      category: "Gender Economics",
      readTime: "10 min read",
      author: "Masood Ahmed",
      link: "/blog/microfinance-women-empowerment",
      image: null
    },
    {
      title: "Climate Finance Mechanisms for Smallholder Farmers",
      date: "January 10, 2025",
      excerpt: "Analyzing innovative financing solutions that help smallholder farmers adapt to climate change while maintaining agricultural productivity and income stability.",
      category: "Environmental Economics",
      readTime: "11 min read",
      author: "Masood Ahmed",
      link: "/blog/climate-finance-farmers",
      image: null
    },
    {
      title: "Digital Identity Systems and Financial Inclusion in Emerging Markets",
      date: "December 28, 2024",
      excerpt: "How digital identity frameworks are becoming the backbone of financial inclusion initiatives, with case studies from successful implementations across developing nations.",
      category: "Digital Innovation",
      readTime: "9 min read",
      author: "Masood Ahmed",
      link: "/blog/digital-identity-financial-inclusion",
      image: null
    },
    {
      title: "The Economics of Refugee Integration: Policy Lessons from Jordan",
      date: "December 15, 2024",
      excerpt: "Examining Jordan's approach to refugee economic integration and the policy frameworks that have enabled successful outcomes for both refugees and host communities.",
      category: "Migration Economics",
      readTime: "13 min read",
      author: "Masood Ahmed",
      link: "/blog/refugee-integration-jordan",
      image: null
    },
    {
      title: "Blockchain Applications in Development Finance: Promise and Reality",
      date: "December 2, 2024",
      excerpt: "A critical assessment of blockchain technology's potential in development finance, separating hype from practical applications that can drive real impact.",
      category: "Financial Technology",
      readTime: "14 min read",
      author: "Masood Ahmed",
      link: "/blog/blockchain-development-finance",
      image: null
    },
    {
      title: "Measuring Impact: New Methodologies in Development Economics",
      date: "November 18, 2024",
      excerpt: "Exploring innovative research methodologies and impact measurement frameworks that are reshaping how we evaluate development interventions and their effectiveness.",
      category: "Research Methods",
      readTime: "16 min read",
      author: "Masood Ahmed",
      link: "/blog/measuring-impact-methodologies",
      image: null
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <BlogHero />

    

      {/* Blog Grid */}
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
            Latest Articles
          </motion.h2>
          
          <BlogList posts={blogPosts.slice(1)} />

          {/* Load More */}
          <motion.div 
            className="text-center mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <motion.button
              className="inline-flex items-center px-8 py-3 bg-[#006293] text-white font-medium rounded-lg hover:bg-[#89d6fb] hover:text-[#006293] transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More Articles
              <ArrowRight className="ml-2 w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </section>

     
    </div>
  );
};

export default BlogPage;