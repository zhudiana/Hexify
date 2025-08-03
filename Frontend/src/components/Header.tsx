import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  isMobileMenuOpen?: boolean;
  setIsMobileMenuOpen?: (open: boolean) => void;
  onGetStarted?: () => void;
  onlyLogo?: boolean;
}

export default function Header({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  onGetStarted,
  onlyLogo = false,
}: HeaderProps) {
  function scrollToElement(id: string) {
    const element = document.getElementById(id);
    if (element instanceof HTMLElement) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Link to={"/"}>
              <span className="font-logo text-2xl font-bold text-teal-700">
                Hexify
              </span>
            </Link>
          </div>

          {!onlyLogo && (
            <>
              <nav className="hidden md:flex items-center space-x-8">
                <a
                  href="#features"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToElement("features");
                  }}
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToElement("how-it-works");
                  }}
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                >
                  How it Works
                </a>

                <button
                  onClick={onGetStarted}
                  className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium"
                >
                  Get Started
                </button>
              </nav>

              <button
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setIsMobileMenuOpen?.(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {!onlyLogo && isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-gray-200/20">
          <div className="px-4 py-4 space-y-4">
            <a
              href="#features"
              className="block text-gray-700 hover:text-teal-600 transition-colors font-medium"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="block text-gray-700 hover:text-teal-600 transition-colors font-medium"
            >
              How it Works
            </a>
            <a
              href="#about"
              className="block text-gray-700 hover:text-teal-600 transition-colors font-medium"
            >
              About
            </a>
            <button
              onClick={onGetStarted}
              className="w-full bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 hover:shadow-lg transition-all duration-200 font-medium"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </motion.header>
  );
}
