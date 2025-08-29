import { Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Research', href: '/research' },
    { name: 'Publications', href: '/publications' },
    { name: 'Blog', href: '/blog' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <footer className="bg-[#006293] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left side - Logo/Site Name */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-4">Masood Ahmed</h3>
              <p className="text-sm text-gray-200 leading-relaxed max-w-sm mx-auto md:mx-0">
                Researcher, Academic, and Professional dedicated to advancing knowledge and innovation.
              </p>
            </div>

            {/* Middle - Quick Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2 max-w-xs mx-auto">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-gray-200 hover:text-[#89d6fb] transition-colors duration-200 ease-in-out py-1"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Right side - Social Media */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex justify-center md:justify-end space-x-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-[#89d6fb] hover:text-[#006293] transition-all duration-200 ease-in-out"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-[#89d6fb] hover:text-[#006293] transition-all duration-200 ease-in-out"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
              <div className="mt-4 text-sm text-gray-200">
                <p>Connect with me on social media</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="border-t border-white/20 py-6">
          <div className="text-center text-sm text-gray-200">
            <p>&copy; 2025 Masood Ahmed. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;