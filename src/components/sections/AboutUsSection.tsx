import React from 'react';
import Link from 'next/link';

export default function AboutUsSection() {
 return (
 <section id="about" className="py-20 bg-white">
 <div className="container mx-auto px-4 md:px-6">
 {/* Title */}
 <div className="text-center max-w-3xl mx-auto mb-12">
 <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">About Us</h2>
 <p className="text-xl text-gray-600">
 Technix-CRM is dedicated to empowering businesses of all sizes to build lasting customer relationships. Our platform combines cutting-edge technology with user-friendly design to help you streamline your sales, marketing, and support processes.
 </p>
 </div>

 {/* Two Columns */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
 {/* Our Platform */}
 <div>
 <h3 className="text-2xl font-bold mb-4 text-indigo-700">Our Platform</h3>
 <p className="text-gray-700 mb-6">
 Built on a modern cloud-native architecture, Technix-CRM delivers enterprise-grade performance with the flexibility small businesses need. Our platform features:
 </p>
 <ul className="space-y-3 text-gray-700">
 {[
 {
 title: 'Scalable Infrastructure',
 desc: 'Grows seamlessly with your business from 10 to 10,000+ users',
 },
 {
 title: '99.9% Uptime Guarantee',
 desc: 'Enterprise-grade reliability you can count on',
 },
 {
 title: 'AI-Powered Insights',
 desc: 'Predictive analytics that help you anticipate customer needs',
 },
 {
 title: 'Open API Architecture',
 desc: 'Seamless integration with your existing tech stack',
 },
 ].map((item, i) => (
 <li className="flex items-start" key={i}>
 <svg className="h-6 w-6 text-indigo-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
 </svg>
 <span>
 <span className="font-medium">{item.title}</span> - {item.desc}
 </span>
 </li>
 ))}
 </ul>

 {/* ➕ Added Button Here */}
 <div className="mt-6">
 <Link href="/features" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-indigo-700 transition">
 Explore Features
 </Link>
 </div>
 </div>

 {/* Our Commitment */}
 <div>
 <h3 className="text-2xl font-bold mb-4 text-indigo-700">Our Commitment</h3>
 <p className="text-gray-700 mb-6">
 Since our founding in 2019, we’ve been committed to creating technology that puts people first. Our platform is built on three core principles:
 </p>
 <div className="space-y-6">
 {[
 {
 title: 'Security & Privacy',
 desc: 'Your data is protected with enterprise-grade encryption, regular security audits, and GDPR/CCPA compliance built into our platform’s DNA.',
 },
 {
 title: 'Continuous Innovation',
 desc: 'Our agile development cycle delivers new features every month based directly on customer feedback and emerging industry trends.',
 },
 {
 title: 'Customer Success',
 desc: 'Beyond software, we provide dedicated onboarding, training, and ongoing support to ensure you get maximum value from our platform.',
 },
 ].map((item, i) => (
 <div key={i}>
 <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h4>
 <p className="text-gray-700">{item.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </div>

 {/* Bottom CTA */}
 <div className="text-center max-w-3xl mx-auto">
 <p className="text-xl text-gray-600">
 Join hundreds of satisfied customers across 30+ countries who trust Technix-CRM to manage their customer data, automate workflows, and unlock actionable insights for better decision-making.
 </p>
 </div>
 <div className="text-center mt-8">
 <Link href="/contact" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-indigo-700 transition">
 Try It Now!!
 </Link>
 </div>
 </div>
 </section>
 );
}