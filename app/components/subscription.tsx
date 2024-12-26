import React, { useState, useEffect } from 'react';
import { Toaster, toast } from 'sonner';
import { createClient } from '@supabase/supabase-js';
import type { SupabaseClient } from '@supabase/supabase-js';
import { CheckCircle } from 'lucide-react';

const Subscription: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [supabase, setSupabase] = useState<SupabaseClient | null>(null);

  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    
    if (!url || !anonKey) {
      toast.error('Subscription service configuration error');
      return;
    }

    try {
      new URL(url);
      const client = createClient(url, anonKey);
      setSupabase(client);
    } catch (error) {
      toast.error('Failed to initialize subscription service');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (name.trim().length < 2) {
      toast.error('Please enter a valid name');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid Email address');
      return;
    }

    if (!supabase) {
      toast.error('Subscription service unavailable');
      return;
    }
    
    setIsLoading(true);
    setIsSubmitted(true);
    
    try {
      const { data, error } = await supabase
        .from('newsletter_subscribers')
        .select('*')
        .eq('email', email);

      if (error) {
        toast.error('Subscription check failed. Please try again.');
        return;
      }

      if (data && data.length > 0) {
        toast.error('This email is already subscribed');
        return;
      }

      const { error: insertError } = await supabase
        .from('newsletter_subscribers')
        .insert({
          email,
          name,
          subscribed_at: new Date().toISOString(),
          is_active: true
        });

      if (insertError) {
        if (insertError.code === '23505') {
          toast.error('This email is already subscribed');
        } else {
          toast.error('Subscription failed. Please try again.');
        }
      } else {
        toast.success('Successfully subscribed to our newsletter!');
        setEmail('');
      }
    } catch (error) {
      toast.error('Subscription failed. Please try again.');
    } finally {
      setIsSubmitted(false);
      setIsLoading(false);
    }
  };

  return (
    <main className="bg-black w-full">
      <Toaster />
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#3dc43d] via-black to-black border border-gray-800 p-8 md:p-20">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[26rem] h-60 rounded-full bg-[#19ff4b]/20 blur-3xl" />
          {/* bg-gradient-to-b from-[#19ff4b] via-[#7fff29] to-[#030303] bg-clip-text text-center */}
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Subscribe to Our Newsletter
              </h1>
              <p className="text-gray-400 text-base sm:text-lg">
                Join our newsletter community for exclusive updates, industry insights, special offers, and valuable tips.
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#7bff53]" />
                <span className="text-gray-400">Exclusive Content Access</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#7bff53]" />
                <span className="text-gray-400">Timely Updates Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#7bff53]" />
                <span className="text-gray-400">Special Offers Alerts</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
              <input 
                type='text' 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                placeholder='Your Name'
                className="flex-1 px-4 py-3 bg-black/50 border border-gray-800 rounded-lg 
                           text-white placeholder-gray-500 focus:outline-none focus:border-[#7bff53]"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="flex-1 px-4 py-3 bg-black/50 border border-gray-800 rounded-lg 
                           text-white placeholder-gray-500 focus:outline-none focus:border-[#7bff53]"
                required
              />
              {/*                 className="w-full px-7 py-4 rounded-full bg-gradient-to-r from-[#19ff4b] to-green-600 text-white text-lg font-semibold hover:from-green-600 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
 */}
              <button
                type="submit"
                className={`
                  px-6 py-3 ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#4aaa32]'} rounded-full bg-gradient-to-r from-[#19ff4b] to-green-600 text-white text-lg font-semibold hover:from-green-600 transition-all duration-300 hover:shadow-lg`}
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Subscription;