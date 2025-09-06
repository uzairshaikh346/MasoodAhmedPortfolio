import { PortableText } from '@portabletext/react';
import type { PortableTextBlock, PortableTextMarkDefinition, TypedObject } from '@portabletext/types';
import type { PortableTextComponentProps } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { client } from '../../../sanity/lib/client';
import { notFound } from 'next/navigation';
import ClientMotionWrapper from './ClientMotionWrapper';

// Types
interface BlogPost {
  title: string;
  slug: string;
  author: string;
  publishedAt: string;
  mainImage?: {
    asset: {
      url: string;
      metadata?: {
        dimensions?: {
          width: number;
          height: number;
        };
      };
    };
    alt?: string;
  };
  content: TypedObject[];
}

// Updated interface - params must always be a Promise in Next.js 15
interface PageProps {
  params: Promise<{ slug: string }>;
}

// Sanity queries
const blogsQuery = `*[_type == "blog"] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  author,
  publishedAt,
  mainImage {
    asset -> {
      url,
      metadata {
        dimensions
      }
    },
    alt
  }
}`;

const blogQuery = `*[_type == "blog" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  author,
  publishedAt,
  mainImage {
    asset -> {
      url,
      metadata {
        dimensions
      }
    },
    alt
  },
  content
}`;

// Custom components for PortableText
const portableTextComponents = {
  types: {
    image: ({ value }: { value: { asset: { url: string }, alt?: string } }) => (
      <div className="my-8 rounded-xl overflow-hidden shadow-lg">
        <Image
          src={value.asset.url}
          alt={value.alt || 'Blog image'}
          width={800}
          height={400}
          className="w-full h-auto"
        />
      </div>
    ),
  },
  block: {
    h1: (props: PortableTextComponentProps<PortableTextBlock<PortableTextMarkDefinition, TypedObject, string, string>>) => (
      <h1 className="text-4xl font-bold mt-8 mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        {props.children}
      </h1>
    ),
    h2: (props: PortableTextComponentProps<PortableTextBlock<PortableTextMarkDefinition, TypedObject, string, string>>) => (
      <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">
        {props.children}
      </h2>
    ),
    h3: (props: PortableTextComponentProps<PortableTextBlock<PortableTextMarkDefinition, TypedObject, string, string>>) => (
      <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
        {props.children}
      </h3>
    ),
    normal: (props: PortableTextComponentProps<PortableTextBlock<PortableTextMarkDefinition, TypedObject, string, string>>) => (
      <p className="text-gray-700 leading-relaxed mb-6 text-lg">
        {props.children}
      </p>
    ),
    blockquote: (props: PortableTextComponentProps<PortableTextBlock<PortableTextMarkDefinition, TypedObject, string, string>>) => (
      <blockquote className="border-l-4 border-purple-500 pl-6 py-4 my-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-r-lg">
        <div className="text-gray-700 italic text-lg">{props.children}</div>
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong className="font-bold text-gray-900">{children}</strong>
    ),
    em: ({ children }: { children: React.ReactNode }) => (
      <em className="italic text-gray-700">{children}</em>
    ),
    link: ({ children, value }: { children: React.ReactNode; value?: { href?: string } }) => (
      <a
        href={value?.href ?? '#'}
        className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:underline font-semibold"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};

// Main Page Component (Server Component)
export default async function BlogPage({ params }: PageProps) {
  // Await the params Promise
  const { slug } = await params;
  
  let blog: BlogPost | null = null;

  try {
    blog = await client.fetch(blogQuery, { slug });
  } catch (error) {
    console.error('Error fetching blog:', error);
  }

  if (!blog) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      return 'Invalid Date';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <ClientMotionWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        {/* Hero Image */}
        {blog.mainImage?.asset?.url && (
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
            <Image
              src={blog.mainImage.asset.url}
              alt={blog.mainImage.alt || blog.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Navigation Buttons */}
            <div className="absolute top-4 left-4 sm:top-8 sm:left-8">
              <Link href="/blog">
                <ClientMotionWrapper
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 sm:px-4 text-white hover:bg-white/30 transition-all duration-300 text-sm sm:text-base"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Back to Blogs</span>
                  <span className="sm:hidden">Back</span>
                </ClientMotionWrapper>
              </Link>
            </div>

          
          </div>
        )}

        {/* Title Section */}
        <div className="relative bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
            <ClientMotionWrapper
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 sm:mb-8 leading-tight">
                {blog.title}
              </h1>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-gray-600 mb-6 sm:mb-8">
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2 text-[#006293] flex-shrink-0" />
                  <span className="font-medium">{blog.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-[#006293] flex-shrink-0" />
                  <span>{formatDate(blog.publishedAt)}</span>
                </div>
              </div>

              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-[#006293] to-[#8e44ad] rounded-full"></div>
            </ClientMotionWrapper>
          </div>
        </div>
      </ClientMotionWrapper>

      {/* Content */}
      <ClientMotionWrapper
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16"
        tag="article"
      >
        <div className="prose prose-base sm:prose-lg prose-purple max-w-none prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed">
          {blog.content && (
            <PortableText
              value={blog.content}
              components={portableTextComponents}
            />
          )}
        </div>
      </ClientMotionWrapper>

   
    </div>
  );
}

// Generate static params for all blog slugs (App Router equivalent of getStaticPaths)
export async function generateStaticParams() {
  try {
    const blogs = await client.fetch(blogsQuery);
    
    return blogs.map((blog: { slug: string }) => ({
      slug: blog.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Updated generateMetadata function to await params
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  try {
    const blog = await client.fetch(blogQuery, { slug });

    if (!blog) {
      return {
        title: 'Blog Not Found',
      };
    }

    return {
      title: blog.title,
      description: `Blog post by ${blog.author}`,
      openGraph: {
        title: blog.title,
        description: `Blog post by ${blog.author}`,
        images: blog.mainImage?.asset?.url ? [blog.mainImage.asset.url] : [],
      },
    };
  } catch (error) {
    return {
      title: 'Blog Post',
    };
  }
}