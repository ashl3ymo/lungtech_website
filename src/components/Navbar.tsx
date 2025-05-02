
import { useState } from "react";
import { Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center">
              <Stethoscope className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-gray-900">CoughVision</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">
              About
            </a>
            <a href="#research" className="text-gray-700 hover:text-primary transition-colors">
              Research
            </a>
            <a href="#partners" className="text-gray-700 hover:text-primary transition-colors">
              Partners
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">
              Contact
            </a>
            <Button className="bg-primary hover:bg-primary/90">Get Involved</Button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#research"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Research
            </a>
            <a
              href="#partners"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Partners
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="px-3 py-2">
              <Button className="w-full bg-primary hover:bg-primary/90">Get Involved</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
