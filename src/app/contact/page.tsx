import React from 'react';
import type { Metadata } from 'next';
import ContactSection from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Reach out to us for demos, support, or general inquiries.',
};

export default function ContactPage() {
  return (
    <main className="bg-gray-50">
      <ContactSection />
    </main>
  );
}
