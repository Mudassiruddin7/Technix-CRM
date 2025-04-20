'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    content: "Technix-CRM has completely transformed how we manage our customer relationships. The intuitive interface and powerful analytics have helped us increase our conversion rates by 35% in just three months.",
    author: "Sarah Johnson",
    position: "Sales Director",
    company: "TechVision Inc."
  },
  {
    id: 2,
    content: "We've tried several CRM solutions over the years, but none have matched the flexibility and ease of use that Technix-CRM offers. The customer support team is also incredibly responsive and helpful.",
    author: "Michael Chen",
    position: "CEO",
    company: "Innovate Solutions"
  },
  {
    id: 3,
    content: "The automation features in Technix-CRM have saved our team countless hours of manual work. We're now able to focus more on building relationships with our customers rather than managing spreadsheets.",
    author: "Emily Rodriguez",
    position: "Marketing Manager",
    company: "Global Retail Group"
  },
  {
    id: 4,
    content: "As a small business, we needed a CRM that could grow with us without breaking the bank. Technix-CRM has been the perfect solution, offering enterprise-level features at a price point that makes sense for us.",
    author: "David Thompson",
    position: "Founder",
    company: "Artisan Crafts Co."
  },
  {
    id: 5,
    content: "The integration capabilities of Technix-CRM with our existing tools has streamlined our entire workflow. Our sales and support teams now have a unified view of customer interactions, which has dramatically improved our service quality.",
    author: "Priya Patel",
    position: "Customer Success Lead",
    company: "CloudServe Technologies"
  }
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it. See how Technix-CRM is helping businesses succeed.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
                    <div className="flex flex-col h-full">
                      <div className="mb-6">
                        <svg className="h-8 w-8 text-indigo-400" fill="currentColor" viewBox="0 0 32 32">
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                      </div>
                      <p className="text-gray-600 text-lg mb-6 flex-grow">
                        {testimonial.content}
                      </p>
                      <div className="flex items-center">
                        <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xl">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-gray-900">{testimonial.author}</p>
                          <p className="text-gray-500 text-sm">{testimonial.position}, {testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  currentTestimonial === index ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
