import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing Plans',
};

const plans = [
  {
    name: 'Basic',
    price: 499,
    features: ['Lead Management', 'Email Support'],
  },
  {
    name: 'Pro',
    price: 999,
    features: ['All Basic Features', 'Priority Support', 'Analytics'],
  },
  {
    name: 'Enterprise',
    price: 1499,
    features: ['All Pro Features', 'Dedicated Manager', 'Custom Integrations'],
  },
];

const formatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
});

export default function PricingPage() {
  return (
    <section className="py-12 bg-gradient-to-br from-indigo-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-black space-y-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-900">Choose Your Plan</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 bg-white border ${plan.name === 'Pro' ? 'border-indigo-600 shadow-lg' : 'border-gray-200'} rounded-lg shadow group transform hover:scale-105 transition duration-300`}
            >
              {plan.name === 'Pro' && (
                <div className="absolute -top-3 right-3 bg-indigo-600 text-white text-xs font-semibold px-2 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>
              <p className="text-5xl font-extrabold mb-6 text-indigo-600">
                {formatter.format(plan.price)}
              </p>
              <ul className="mb-8 text-left space-y-3">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition">
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
