"use client"
import { Calendar, Clock, ArrowRight, User} from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { client } from '../../sanity/lib/client';



// Sanity query
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
  publishedAt: string;
  excerpt: string;
  slug: string;
  category?: string;
  readTime?: string;
  author: string;
  mainImage?: {
    asset: {
      url: string;
    };
  };
};

const BlogCard = ({ title, publishedAt, excerpt, slug, category, readTime, author, mainImage }: BlogCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
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
      {/* Dynamic Image or placeholder */}
      <div className="w-full h-48 bg-gradient-to-br from-[#89d6fb] to-[#006293] flex items-center justify-center overflow-hidden">
        {mainImage?.asset?.url ? (
          <img 
            src={mainImage.asset.url} 
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-white font-medium">Blog Image</span>
        )}
      </div>
      
      <div className="p-6">
        {/* Category and metadata */}
        <div className="flex flex-wrap items-center gap-3 mb-3">
          {category && (
            <motion.span 
              className="px-3 py-1 bg-[#89d6fb] text-[#006293] text-xs font-medium rounded-full"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2, type: "spring", stiffness: 100 }}
            >
              {category}
            </motion.span>
          )}
          {readTime && (
            <div className="flex items-center text-xs text-gray-500">
              <Clock className="w-3 h-3 mr-1" />
              {readTime}
            </div>
          )}
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
            {formatDate(publishedAt)}
          </span>
        </div>

        {/* Excerpt */}
        {excerpt && (
          <p className="text-gray-600 leading-relaxed mb-6">{excerpt}</p>
        )}

        {/* Read more link */}
        <motion.a
          href={`/blog/${slug}`}
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
type SanityBlogPost = {
  title: string;
  slug: string;
  author: string;
  publishedAt: string;
  excerpt?: string;
  category?: string;
  readTime?: string;
  mainImage?: {
    asset: {
      url: string;
    };
  };
};

const BlogList = ({ posts }: { posts: SanityBlogPost[] }) => {
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
      {posts.map((post) => (
        <BlogCard
          key={post.slug}
          title={post.title}
          publishedAt={post.publishedAt}
          excerpt={post.excerpt || ''}
          slug={post.slug}
          category={post.category}
          readTime={post.readTime}
          author={post.author}
          mainImage={post.mainImage}
        />
      ))}
    </motion.div>
  );
};

// Loading Component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-16">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#006293]"></div>
  </div>
);

// Error Component
const ErrorMessage = ({ message }: { message: string }) => (
  <div className="text-center py-16">
    <p className="text-red-600 text-lg">{message}</p>
    <p className="text-gray-500 mt-2">Please try again later.</p>
  </div>
);

// Main BlogPage Component
const BlogPage = () => {
  const [blogs, setBlogs] = useState<SanityBlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [displayCount, setDisplayCount] = useState(9); // Show 9 blogs initially

  // Fetch blogs from Sanity
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const data = await client.fetch(blogQuery);
        setBlogs(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch blog posts');
        console.error('Error fetching blogs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const loadMore = () => {
    setDisplayCount(prev => prev + 6); // Load 6 more blogs
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const displayedBlogs = blogs.slice(0, displayCount);
  const hasMore = displayCount < blogs.length;

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
          
          {/* Loading State */}
          {loading && <LoadingSpinner />}
          
          {/* Error State */}
          {error && <ErrorMessage message={error} />}
          
          {/* Blog Posts */}
          {!loading && !error && blogs.length > 0 && (
            <>
              <BlogList posts={displayedBlogs} />
              
              {/* Load More Button */}
              {hasMore && (
                <motion.div 
                  className="text-center mt-16"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                >
                  <motion.button
                    onClick={loadMore}
                    className="inline-flex items-center px-8 py-3 bg-[#006293] text-white font-medium rounded-lg hover:bg-[#89d6fb] hover:text-[#006293] transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Load More Articles
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.button>
                </motion.div>
              )}
            </>
          )}
          
          {/* No blogs found */}
          {!loading && !error && blogs.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No blog posts found.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;