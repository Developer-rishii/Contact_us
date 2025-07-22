import React from 'react';
import '../index.css';

const Header = () => {
  return (
    <div className="min-h-screen custom-gradient text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:24px_24px] opacity-10 z-0"></div>

      <nav className="relative z-10 flex items-center justify-between px-6 py-4">
        <div className="text-lg font-bold">A-Crypto</div>

        <ul className="hidden md:flex space-x-8 font-light text-sm">
          <li className="hover:font-semibold"><a href="#">Home</a></li>
          <li className="hover:font-semibold"><a href="#">About Us</a></li>
          <li className="relative">
            <a href="#" className="font-semibold">
              Contact Us
              <div className="absolute bottom-[-6px] left-0 w-10 h-[2.2px] bg-white rounded-full"></div>
            </a>
          </li>
        </ul>

        <div className="space-x-2">
          <button className="border border-white px-4 py-1 rounded-full text-sm hover:bg-white hover:text-purple-700 transition">Sign in</button>
          <button className="bg-white text-purple-700 px-4 py-1 rounded-full text-sm font-semibold hover:bg-purple-100 transition">Register</button>
        </div>
      </nav>

      <header className="relative z-10 flex flex-col items-center justify-center text-center mt-60 px-4">
        <h1 className="text-4xl md:text-7xl font-semibold mb-4">Contact Us</h1>
        <p className="text-base max-w-3xl">
          Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci diam. Nibh est vitae suspendisse parturient sed lorem eu.
        </p>
      </header>
    </div>
  );
};

export default Header