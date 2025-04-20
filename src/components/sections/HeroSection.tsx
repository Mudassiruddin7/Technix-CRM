'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  const headlines = [
    "Streamline Your Customer Relationships",
    "Boost Sales Performance with Smart Insights",
    "Centralize Your Customer Data",
    "Automate Your Sales Process"
  ];

  const [currentHeadline, setCurrentHeadline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-indigo-600 to-blue-500 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'white\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-24 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-500 ease-in-out">
              {headlines[currentHeadline]}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100 max-w-xl mx-auto md:mx-0">
              The all-in-one CRM solution that helps businesses grow by improving customer relationships and streamlining sales processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-indigo-800 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors"
              >
                Book a Demo
              </Link>
              <Link 
                href="/auth/login" 
                className="px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors"
              >
                Free Trial Now
              </Link>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="relative bg-white rounded-lg shadow-xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-blue-500"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                      CP
                    </div>
                    <div className="ml-3">
                      <div className="font-medium text-gray-900">Technix-CRM Dashboard</div>
                      <div className="text-sm text-gray-500">Welcome back, Admin</div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-2 bg-gray-200 rounded"></div>
                  <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <div className="text-xs text-gray-500 mb-1">New Leads</div>
                    <div className="text-2xl font-bold text-indigo-600">127</div>
                    <div className="text-xs text-green-500 mt-1">↑ 24%</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-xs text-gray-500 mb-1">Conversion</div>
                    <div className="text-2xl font-bold text-blue-600">32%</div>
                    <div className="text-xs text-green-500 mt-1">↑ 7%</div>
                  </div>
                </div>
                <div className="mt-4 bg-gray-100 h-32 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-sm text-gray-500">Monthly Revenue</div>
                    <div className="mt-1 flex items-center justify-center">
                      <div className="h-16 w-4 bg-indigo-200 rounded-sm mx-1"></div>
                      <div className="h-20 w-4 bg-indigo-300 rounded-sm mx-1"></div>
                      <div className="h-24 w-4 bg-indigo-400 rounded-sm mx-1"></div>
                      <div className="h-28 w-4 bg-indigo-500 rounded-sm mx-1"></div>
                      <div className="h-32 w-4 bg-indigo-600 rounded-sm mx-1"></div>
                      <div className="h-28 w-4 bg-indigo-500 rounded-sm mx-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
