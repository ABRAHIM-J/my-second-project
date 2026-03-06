import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-10 py-12">
      <div className="grid md:grid-cols-5 gap-8">

       
        <div>
          <h2 className="text-lg font-bold mb-3">CS — Ticket System</h2>
          <p className="text-sm text-gray-300">
           “Our mission is to deliver innovative solutions, ensure customer satisfaction, expand markets, maintain sustainability, and contribute positively to society.”
If you want, I can make 3–4 more variations of 20-word objectives so you can choose the best one. Do you want me to do that?
          </p>
        </div>

        
        <div>
          <h2 className="text-lg font-bold mb-3">Company</h2>
          <ul className="space-y-2 text-gray-300">
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Sales</li>
          </ul>
        </div>

        
        <div>
          <h2 className="text-lg font-bold mb-3">Services</h2>
          <ul className="space-y-2 text-gray-300">
            <li>Products & Services</li>
            <li>Customer Stories</li>
            <li>Download Apps</li>
          </ul>
        </div>

       
        <div>
          <h2 className="text-lg font-bold mb-3">Information</h2>
          <ul className="space-y-2 text-gray-300">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>

       
        <div>
  <h2 className="text-lg font-bold mb-3">Social Links</h2>
  <div className="flex gap-4 text-gray-300">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <FaFacebookF size={20} />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <FaInstagram size={20} />
    </a>
    <a href="mailto:example@example.com">
      <MdEmail size={20} />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <FaTwitter size={20} />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <FaLinkedin size={20} />
    </a>
  </div>
</div>

      </div>

      
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400">
        © 2025 CS Ticket System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;