import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import {
  MdOutlineAccountCircle,
  MdOutlineWallet,
  MdBolt,
  MdErrorOutline,
  MdOutlineDashboardCustomize,
} from 'react-icons/md';
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi';

const faqCategories = [
  { icon: <HiOutlineQuestionMarkCircle />, label: 'General' },
  { icon: <MdOutlineAccountCircle />, label: 'Account' },
  { icon: <MdOutlineWallet />, label: 'Wallet and Asset' },
  { icon: <MdBolt />, label: 'Trading' },
  { icon: <MdErrorOutline />, label: 'Disputes' },
  { icon: <MdOutlineDashboardCustomize />, label: 'Advertising' },
];

const faqList = [
  {
    question: 'What is A–Crypto?',
    answer:
      'A–Crypto is a leading crypto trading platform offering a wide range of services including P2P trading, token swaps, and more. Our platform is designed to provide a secure, user-friendly, and efficient trading experience for both beginners and experienced traders.',
  },
  {
    question: 'How does A–Crypto ensure the security of my funds?',
    answer: 'Your funds are protected by multi-layer security including encryption and cold storage.',
  },
  {
    question: 'What cryptocurrencies can I trade on A–Crypto?',
    answer: 'You can trade Bitcoin, Ethereum, USDT, and many other altcoins.',
  },
  {
    question: 'Is A–Crypto available worldwide?',
    answer: 'Yes, A–Crypto operates in most countries with compliance to local regulations.',
  },
  {
    question: 'What are the fees for using A–Crypto?',
    answer: 'Our trading fees are competitive and transparently listed on our pricing page.',
  },
  {
    question: 'How can I get started with A–Crypto?',
    answer: 'Just sign up, verify your identity, and start trading securely.',
  },
  {
    question: 'Does A–Crypto offer customer support?',
    answer: 'Yes, we offer 24/7 support via chat and email.',
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('General');

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 md:px-20 font-poppins bg-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">FAQs</h2>

      {/* Top section with sidebar and FAQs */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4">
          <div className="bg-white border border-gray-200 rounded-2xl p-4 space-y-2 shadow-sm">
            {faqCategories.map(({ icon, label }) => (
              <button
                key={label}
                onClick={() => setActiveCategory(label)}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium transition ${
                  activeCategory === label
                    ? 'bg-purple-100 text-purple-800'
                    : 'hover:bg-gray-100 text-gray-600'
                }`}
              >
                <span className="text-lg">{icon}</span>
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-6">
          {/* Search */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search"
              className="w-full py-3 pl-4 pr-10 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <FiSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>

          {/* FAQ List */}
          <div className="divide-y divide-gray-200">
            {faqList.map((faq, index) => (
              <div key={index} className="py-4">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex justify-between items-center w-full text-left font-semibold text-gray-800 text-sm"
                >
                  {faq.question}
                  <span>{openIndex === index ? '▴' : '▾'}</span>
                </button>
                {openIndex === index && (
                  <div className="mt-2 text-gray-600 text-sm leading-relaxed">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-4 cursor-pointer hover:text-purple-700">
            Load more …
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
