'use client';

import { PackageOpen, Palette, Box, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function LearnMore() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        <div className="pt-24 relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[#19ff4b] via-[#7fff29] to-[#030303]"
          >
            Partner With Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Join our network of innovative suppliers and service providers
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {[
              {
                icon: Box,
                title: "Product Supplier",
                description: "Join us in offering high-quality products that meet diverse consumer needs."
              },
              {
                icon: PackageOpen,
                title: "Packaging Supplier",
                description: "Help us transform the unboxing experience with sustainable solutions."
              },
              {
                icon: Palette,
                title: "Creative Service Provider",
                description: "Create captivating marketing strategies and stunning visuals."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#45eb53] to-[#6bc522] rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform" />
                <Card className="relative bg-black/50 p-8 rounded-lg h-full transform -rotate-1 group-hover:-rotate-2 transition-transform border border-green-500/20 backdrop-blur-sm">
                  <item.icon className="w-12 h-12 text-[#4df764] mb-4" />
                  <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className=" relative bg-black/40">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#19ff4b] to-[#7fff29]">
              Why Partner With Us?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover the advantages of joining our network and growing your business with us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Access to Global Markets",
              "Competitive Pricing",
              "Technical Support",
              "Marketing Assistance",
              "Quality Assurance",
              "Sustainable Practices"
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-3 bg-black/50 p-4 rounded-lg border border-green-500/20"
              >
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-white">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Card className="p-12 bg-black/50 border border-green-500/20 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Get Started?</h2>
            <p className="text-gray-400 mb-8">
              Take the first step towards a successful partnership. Contact us today to discuss opportunities.
            </p>
            <Button
              className="px-8 py-6 rounded-full bg-gradient-to-r from-[#19ff4b] to-green-600 text-white text-lg font-semibold hover:from-green-600 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Card>
        </div>
      </section>
    </main>
  );
}