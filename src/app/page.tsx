"use client"
import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { client } from '../sanity/lib/client';

const HomePage = () => {
  interface Blog {
    title: string;
    slug: string;
    author: string;
    publishedAt: string;
    excerpt: string;
    category?: string;
    readTime?: string;
    mainImage?: {
      asset?: {
        url: string;
      };
    };
  }
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const blogPosts = blogs;
  const blogQuery = `*[_type == "blog"]{
  title,
  "slug": slug.current,
  author,
  publishedAt,
  excerpt,
  category,
  readTime,
  mainImage{
    asset->{
      url
    }
  }
} | order(publishedAt desc)`;
  // Fetch blogs from Sanity
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await client.fetch(blogQuery);
        setBlogs(data);
      } catch (err) {
        console.error('Error fetching blogs:', err);
      }
    };

    fetchBlogs();
  }, [blogQuery]);

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
                Bridging theory and practice to create sustainable economic solutions 
                for developing nations through evidence-based research and policy innovation.
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
              </motion.div>
            </motion.div>
            <motion.div 
              className="flex justify-center lg:justify-end"
              initial="hidden"
              animate="visible"
              variants={scaleIn}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              <Image 
                src="/masood_ahmed.PNG" 
                alt="Profile Photo" 
                width={250} 
                height={250} 
                className="w-72 h-72 bg-gray-200 rounded-full object-cover"
              />
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
            With over 15 years of experience in development economics and policy research, 
            I have dedicated my career to understanding and addressing the complex challenges 
            facing developing economies. My work spans across microfinance, digital financial inclusion, 
            agricultural economics, and sustainable development, with a particular focus on South Asian 
            markets and emerging economies.
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
            {blogPosts.map((post: Blog, index: number) => (
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
                {post.mainImage?.asset?.url && (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={post.mainImage.asset.url}
                      alt={post.title}
                      width={400}
                      height={220}
                      className="w-full h-44 object-cover"
                    />
                  </div>
                )}
                <motion.div 
                  className="flex items-center text-sm text-gray-500 mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.publishedAt}
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
