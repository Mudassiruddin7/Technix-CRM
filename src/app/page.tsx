import HeroSection from '@/components/sections/HeroSection';
import AboutUsSection from '@/components/sections/AboutUsSection';
import ProductOverview from '@/components/sections/ProductOverview';
import UseCases from '@/components/sections/UseCases';
import Testimonials from '@/components/sections/Testimonials';
import ContactSection from '@/components/sections/ContactSection';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <ProductOverview />
      <UseCases />
      <Testimonials />
      <ContactSection />
      
      {/* CTA Banner */}
      <section className="py-12 bg-indigo-600">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to transform your customer relationships?
          </h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Start your free 14-day trial today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/auth/login" 
              className="px-6 py-3 bg-white text-indigo-600 rounded-md font-medium hover:bg-indigo-50 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link 
              href="/features" 
              className="px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors"
            >
              View Demo Dashboard
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
