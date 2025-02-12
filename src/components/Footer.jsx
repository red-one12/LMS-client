import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // You can install react-icons to use these

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container max-w-7xl mx-auto py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Section 1: Logo and Description */}
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="text-3xl font-semibold">LMS</h2>
            <p className="mt-2 text-gray-400">
              We provide 1000+ of different kinds of books. Everyone can easily borrow a book for a time and return it to LMS.
            </p>
          </div>

          {/* Section 2: Contact Information */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-xl font-semibold mb-3">Contact</h3>
            <p className="text-gray-400">Email: red@one.com</p>
            <p className="text-gray-400">Phone: 01703344405</p>
          </div>

          
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl text-gray-400 hover:text-yellow-400" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl text-gray-400 hover:text-yellow-400" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl text-gray-400 hover:text-yellow-400" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl text-gray-400 hover:text-yellow-400" />
              </a>
            </div>
          </div>
        </div>

    
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} LMS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
