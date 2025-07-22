import React from 'react';
import {
  FaFacebookF,
  FaYoutube,
  FaTelegramPlane,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#965CB6] to-[#630C92] text-white px-6 py-12 md:px-20">
      <div className="flex flex-col md:flex-row md:justify-between gap-12">
        {/* Left section */}
        <div>
          <h2 className="text-2xl font-bold mb-2">A–Crypto</h2>
          <p className="text-sm text-white/80 mb-6">Trade Crypto easily anytime, anywhere.</p>
          <div className="flex space-x-4">
            {[FaTelegramPlane, FaFacebookF, FaYoutube, FaTwitter].map((Icon, i) => (
              <div
                key={i}
                className="bg-white/20 p-2 rounded-full hover:bg-white/30 cursor-pointer"
              >
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>

        {/* Link Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="#">About us</a></li>
              <li><a href="#">Terms of use</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Disclaimer</a></li>
            </ul>
          </div>

          {/* Businesses */}
          <div>
            <h3 className="font-semibold mb-3">Businesses</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="#">Prime</a></li>
              <li><a href="#">Custody</a></li>
              <li><a href="#">Asset Hub</a></li>
              <li><a href="#">Commerce</a></li>
            </ul>
          </div>

          {/* Exchange */}
          <div>
            <h3 className="font-semibold mb-3">Exchange</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="#">Exchange Home</a></li>
              <li><a href="#">Margin Trading</a></li>
              <li><a href="#">Derivatives Trading</a></li>
              <li><a href="#">Trading Arena</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/30 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-white/70 text-sm">Copyright 2021, Cryptous</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
            <div
              key={i}
              className="bg-white/20 p-2 rounded-full hover:bg-white/30 cursor-pointer"
            >
              <Icon size={18} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
