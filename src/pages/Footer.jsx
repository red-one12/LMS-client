import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // You can install react-icons to use these

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Section 1: Logo and Description */}
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="text-3xl font-semibold text-yellow-400">YourLogo</h2>
            <p className="mt-2 text-gray-400">
              A short description about your website or business. We provide top-notch services for all your needs.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul>
              <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Section 3: Contact Information */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-xl font-semibold mb-3">Contact</h3>
            <p className="text-gray-400">Email: info@example.com</p>
            <p className="text-gray-400">Phone: +1 234 567 890</p>
          </div>

          {/* Section 4: Social Media Links */}
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
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
