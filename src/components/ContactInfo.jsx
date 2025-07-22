import React from 'react';
import { FaPhone, FaClock, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <section className="px-6 md:px-16 py-16 font-poppins bg-white">
      <div className="flex flex-col lg:flex-row gap-16 items-start justify-between">
        
        {/* Left: Contact Form */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-500 mb-10 leading-relaxed">
            Facilisis commodo mattis neque nulla ultrices mattis sed.
            Ullamcorper tempus mattis ac tristique gravida ornare faucibus suspendisse.
          </p>

          <form className="space-y-6">
            <div>
              <label className="block font-medium mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#F8F8FF] p-4 rounded-xl outline-none text-sm"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Your Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-[#F8F8FF] p-4 rounded-xl outline-none text-sm"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Your Message</label>
              <textarea
                placeholder="Writing your message here..."
                rows="5"
                className="w-full bg-[#F8F8FF] p-4 rounded-xl outline-none text-sm resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-purple-700 to-purple-900 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="flex-1 space-y-8">
          <div className="w-full h-64 bg-purple-300 rounded-3xl"></div>

          <div className="flex items-start gap-4">
            <div className="bg-purple-800 text-white p-4 rounded-full">
              <FaPhone size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Phone Number</h4>
              <p className="text-gray-500">+123 456 789 101</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-purple-800 text-white p-4 rounded-full">
              <FaClock size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Business Hours</h4>
              <p className="text-gray-500">Monday – Friday / 8AM to 5PM</p>
            </div>
          </div>

          <div>
            <p className="font-medium mb-3">Follow Us:</p>
            <div className="flex space-x-4 text-purple-800">
              <FaFacebookF className="cursor-pointer hover:scale-110 transition" />
              <FaTwitter className="cursor-pointer hover:scale-110 transition" />
              <FaLinkedinIn className="cursor-pointer hover:scale-110 transition" />
              <FaInstagram className="cursor-pointer hover:scale-110 transition" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo
