'use client';

import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';
import { Toaster, toast } from 'sonner';
import { motion } from 'framer-motion';


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({...prev, [name]: value}));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      const result = await supabase
        .from('Contact Form')
        .insert({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        });
  
      if (result.error) {
        console.error('Supabase error:', result.error);
        toast.error('Failed to send message');
        return;
      }
  
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen">
      <Toaster />
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
            GET A QUOTE
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Explore our milestones and achievements through an interactive timeline
          </motion.p>
      </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Contact Information
                </h2>
                <p className="text-gray-400">
                  Ready to start your journey? Reach out to us through any of these channels.
                </p>
              </div>
              
              <div className="space-y-6">
                
                <Card className="p-6 bg-black/50 border border-green-500/20 backdrop-blur-sm hover:border-green-500/40 transition-colors">
                  <div className="flex gap-1 text-center">
                  
                    <div>
                      <h3 className="text-lg font-semibold text-white ">
                        Location
                      </h3>
                      <p className="text-gray-400">
                         707, 7 th floor
                        <br />
                        New Link Rd, Sahakar Nagar, Azad Nagar, Andheri West, Mumbai
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-black/50 border border-green-500/20 backdrop-blur-sm hover:border-green-500/40 transition-colors">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-green-500 mr-4" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Email
                      </h3>
                      <p className="text-gray-400">contact@houseofx.in</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-black/50 border border-green-500/20 backdrop-blur-sm hover:border-green-500/40 transition-colors">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-green-500 mr-4" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Phone
                      </h3>
                      <p className="text-gray-400">+91 77609 30987</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:pl-12">
              <h2 className="text-3xl font-bold text-white mb-8">Send Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6 mt-[5.8rem]">
                <div className="space-y-4">
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="bg-black/50 border-green-500/20 text-white h-12 focus:border-green-500/40 focus:ring-green-500/20"
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="bg-black/50 border-green-500/20 text-white h-12 focus:border-green-500/40 focus:ring-green-500/20"
                    required
                  />
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="bg-black/50 border-green-500/20 text-white h-12 focus:border-green-500/40 focus:ring-green-500/20"
                    required
                  />
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="bg-black/50 border-green-500/20 text-white min-h-[200px] focus:border-green-500/40 focus:ring-green-500/20"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full px-7 py-6 rounded-full bg-gradient-to-r from-[#19ff4b] to-green-600 text-white text-lg font-semibold hover:from-green-600 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <Send className="h-5 w-5" />
                  {isLoading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] relative overflow-hidden">
      <div className="space-y-8">
      <Card className="w-full h-[400px] bg-black/50 border border-green-500/20 backdrop-blur-sm overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.121636652672!2d72.83058767868641!3d19.189888902097003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6c37df6fa09%3A0xace2823d4cc4fcc0!2sNew%20Link%20Rd%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1735063881933!5m2!1sen!2sin" 
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Card>
      <div className="flex items-center justify-center gap-2 text-green-500">
        <MapPin className="h-5 w-5" />
        <span className="text-sm">Mumbai, Maharashtra, India</span>
      </div>
    </div>
      </section>
    </main>
  );
}