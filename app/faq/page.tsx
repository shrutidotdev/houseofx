'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is HOUSE OF X?",
    answer: "HOUSE OF X is a platform that empowers creators to build, launch, and scale their own brands in just 7 days. It unlocks unlimited potential and democratizes brand creation."
  },
  {
    question: "How can I use HOUSE OF X to start a business and make money?",
    answer: "HOUSE OF X provides an end-to-end solution to start and grow your business. We offer sourcing, design, branding, marketing, and sales support tailored to your needs. Our platform helps you maximize your earnings."
  },
  {
    question: "How do I get started on HOUSE OF X?",
    answer: "To get started, simply contact us at creator@houseofx.in or +91 7760930987. Our team will guide you through the process of building your brand on HOUSE OF X."
  },
  {
    question: "How can I contact HOUSE OF X?",
    answer: "For any questions or assistance, email creator@houseofx.in or call +91 7760930987. Our support team is here to help."
  },
  {
    question: "Who is HOUSE OF X for?",
    answer: "HOUSE OF X is for passionate creators who want to unlock their full potential. Whether you have a dedicated audience or are just starting out, we provide the expertise and tools to transform your creativity into a thriving business."
  },
  {
    question: "What categories can I launch on HOUSE OF X?",
    answer: "HOUSE OF X covers a wide range of categories, including Beauty, Fashion, Health, Home, Electronics, Baby & Kids, Sports, and many more. Whatever you want to create, we have you covered."
  }
];

function Video() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black">
      <main className="max-w-7xl mx-auto px-4 py-16">
      <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[#19ff4b] via-[#7fff29] to-[#030303]"
          >
          FAQs
      </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[1.2rem] text-white mb-6"
        >
          Here&apos;s a little more about how we operate. Got a more specific question? Feel free to
          get in touch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-white/10"
            >
              <button
                className="w-full py-6 flex justify-between items-center text-left text-white hover:text-gray-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl"
                >
                  {openIndex === index ? '−' : '+'}
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 lg:text-[1.17rem] text-white/50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}

export default Video;