import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read the latest articles and insights from Technix-CRM',
};

const posts = [
  { id: 1, title: 'Boosting Customer Engagement', date: '2025-04-15', excerpt: 'Discover strategies to improve customer interactions and loyalty.' },
  { id: 2, title: 'Lead Generation Best Practices', date: '2025-04-14', excerpt: 'Learn how to capture and score high-quality leads efficiently.' },
  { id: 3, title: 'Sales Automation Tools', date: '2025-04-13', excerpt: 'Explore automation tools that streamline your sales processes.' },
  { id: 4, title: 'Effective Pipeline Management', date: '2025-04-12', excerpt: 'Visualize and optimize your sales pipeline for better results.' },
  { id: 5, title: 'Email Marketing Strategies', date: '2025-04-11', excerpt: 'Craft email campaigns that convert leads into customers.' },
  { id: 6, title: 'Data-Driven Decision Making', date: '2025-04-10', excerpt: 'Use analytics to make informed business decisions.' },
  { id: 7, title: 'Leveraging Social Media Integration', date: '2025-04-09', excerpt: 'Integrate social platforms for unified customer outreach.' },
  { id: 8, title: 'Improving Customer Retention', date: '2025-04-08', excerpt: 'Techniques to keep your customers engaged and satisfied.' },
  { id: 9, title: 'Building Personalized Campaigns', date: '2025-04-07', excerpt: 'Use customer data to create targeted marketing campaigns.' },
  { id: 10, title: 'Future of CRM Technology', date: '2025-04-06', excerpt: 'Insights into emerging trends and future innovations.' },
];

export default function BlogPage() {
  return (
    <div className="bg-white min-h-screen text-black">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Latest Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <article 
              key={post.id} 
              className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300 hover:border-indigo-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <h2 className="text-2xl font-semibold mb-3 text-gray-800 hover:text-indigo-600 transition-colors">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-4">{post.date}</p>
              <p className="text-gray-700 mb-6">{post.excerpt}</p>
              <Link href={`/blog/${post.id}`} className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors">
                Read More
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
