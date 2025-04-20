import React from 'react';
import DemoForm from '@/components/forms/DemoForm';

export default function ContactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Get Started with Technix-CRM
          </h2>
          <p className="text-xl text-gray-600">
            See how our CRM can transform your business. Request a personalized demo today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Why Request a Demo?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-lg text-gray-700"><strong>Personalized Experience</strong> - See how Technix-CRM can be tailored to your specific business needs.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-lg text-gray-700"><strong>Expert Guidance</strong> - Our product specialists will walk you through all features and answer your questions.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-lg text-gray-700"><strong>ROI Assessment</strong> - Understand the potential return on investment for your organization.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-lg text-gray-700"><strong>No Pressure</strong> - Our demos are informative, not pushy sales pitches.</p>
                </div>
              </li>
            </ul>
            <div className="mt-8 p-6 bg-indigo-50 rounded-lg">
              <h4 className="text-lg font-semibold mb-2 text-indigo-900">Need immediate assistance?</h4>
              <p className="text-gray-700 mb-4">Our team is ready to help you with any questions you might have.</p>
              <div className="flex items-center space-x-4">
                <div>
                  <p className="text-sm text-gray-500">Call us</p>
                  <p className="font-medium text-indigo-700">+91 123456789</p>
                </div>
                <div className="h-10 border-l border-gray-300"></div>
                <div>
                  <p className="text-sm text-gray-500">Email us</p>
                  <p className="font-medium text-indigo-700">sales@technix-crm.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <DemoForm />
          </div>
        </div>
      </div>
    </section>
  );
}
