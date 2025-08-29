import { ArrowRight, BookOpen, Award, Users, Globe, Calendar, Linkedin, Twitter } from 'lucide-react';

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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#006293] mb-4">
                Masood Ahmed
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
                Development Economist & Policy Researcher
              </h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl">
                Bridging theory and practice to create sustainable economic solutions for developing nations through evidence-based research and policy innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-80 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500 font-medium">Profile Photo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#006293] mb-8">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            With over 15 years of experience in development economics and policy research, I have dedicated my career to understanding and addressing the complex challenges facing developing economies. My work spans across microfinance, digital financial inclusion, agricultural economics, and sustainable development, with a particular focus on South Asian markets and emerging economies.
          </p>
          <a
            href="/about"
            className="inline-flex items-center px-6 py-3 bg-[#006293] text-white font-medium rounded-lg hover:bg-[#89d6fb] hover:text-[#006293] transition-all duration-200"
          >
            Read More
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#006293] text-center mb-12">Key Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#89d6fb] text-[#006293] rounded-full mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#006293] mb-2">{highlight.title}</h3>
                <p className="text-3xl font-bold text-[#89d6fb] mb-2">{highlight.stat}</p>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Research */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#006293] mb-4">Featured Research</h2>
            <p className="text-lg text-gray-600">Explore my latest research projects and findings</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResearch.map((project, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-[#89d6fb] text-[#006293] text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[#006293] mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <a
                  href="/research"
                  className="inline-flex items-center text-[#006293] hover:text-[#89d6fb] font-medium transition-colors duration-200"
                >
                  Read More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#006293] mb-4">Latest Blog Posts</h2>
            <p className="text-lg text-gray-600">Insights and perspectives on current economic developments</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                </div>
                <h3 className="text-xl font-semibold text-[#006293] mb-3 leading-tight">{post.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                <a
                  href="/blog"
                  className="inline-flex items-center text-[#006293] hover:text-[#89d6fb] font-medium transition-colors duration-200"
                >
                  Read More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-[#006293] text-white font-medium rounded-lg hover:bg-[#89d6fb] hover:text-[#006293] transition-all duration-200"
            >
              View All Blogs
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;