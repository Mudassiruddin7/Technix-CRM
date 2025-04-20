'use client';

import React, { useState, FormEvent } from 'react';
import { Bar, Pie, Doughnut, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from 'chart.js';

// Register all the necessary elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement, // Register PointElement for line chart
  LineElement,  // Register LineElement for line chart
  Title,
  Tooltip,
  Legend
);

interface Lead {
  name: string;
  email: string;
  score: number;
}

interface PipelineStage {
  name: string;
  count: number;
}

export default function FeaturesPage() {
  // --- Lead Generation & Management ---
  const [leads, setLeads] = useState<Lead[]>([
    { name: 'Alice Johnson', email: 'alice@example.com', score: 85 },
    { name: 'Bob Smith', email: 'bob@example.com', score: 45 },
    { name: 'Charlie Brown', email: 'charlie@example.com', score: 72 },
    { name: 'David Wilson', email: 'david@example.com', score: 25 },
    { name: 'Emily Davis', email: 'emily@example.com', score: 95 },
    { name: 'Frank Moore', email: 'frank@example.com', score: 50 },
  ]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLeadSubmit = (e: FormEvent) => {
    e.preventDefault();
    const score = Math.floor(Math.random() * 100);
    setLeads([...leads, { name, email, score }]);
    setName('');
    setEmail('');
  };

  const hotLeads = leads.filter((l) => l.score > 70);
  const warmLeads = leads.filter((l) => l.score > 30 && l.score <= 70);
  const coldLeads = leads.filter((l) => l.score <= 30);

  // --- Sales Pipeline & Chart ---
  const pipeline: PipelineStage[] = [
    { name: 'Lead', count: leads.length },
    { name: 'Negotiation', count: Math.floor(leads.length * 0.5) },
    { name: 'Closed', count: Math.floor(leads.length * 0.3) },
  ];

  const chartData = {
    labels: pipeline.map((s) => s.name),
    datasets: [
      {
        label: 'Deals',
        data: pipeline.map((s) => s.count),
        backgroundColor: [
          'rgba(99,102,241,0.7)',
          'rgba(59,130,246,0.7)',
          'rgba(37,99,235,0.7)',
        ],
      },
    ],
  };

  // Pie chart for lead segmentation
  const segmentationData = {
    labels: ['Hot Leads', 'Warm Leads', 'Cold Leads'],
    datasets: [
      {
        data: [hotLeads.length, warmLeads.length, coldLeads.length],
        backgroundColor: ['rgba(99,102,241,0.7)', 'rgba(59,130,246,0.7)', 'rgba(37,99,235,0.7)'],
        borderColor: ['rgba(99,102,241,1)', 'rgba(59,130,246,1)', 'rgba(37,99,235,1)'],
        borderWidth: 1,
      },
    ],
  };

  // --- Sales Process Visualization: Doughnut Chart ---
  const salesProcessData = {
    labels: ['Lead', 'Negotiation', 'Closed'],
    datasets: [
      {
        data: [leads.length, Math.floor(leads.length * 0.5), Math.floor(leads.length * 0.3)],
        backgroundColor: ['rgba(99,102,241,0.7)', 'rgba(59,130,246,0.7)', 'rgba(37,99,235,0.7)'],
        borderColor: ['rgba(99,102,241,1)', 'rgba(59,130,246,1)', 'rgba(37,99,235,1)'],
        borderWidth: 1,
      },
    ],
  };

  // --- Post-Sale Support: Customer Satisfaction Line Chart ---
  const customerSatisfactionData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Customer Satisfaction (%)',
        data: [90, 85, 92, 87, 95, 91],
        fill: false,
        borderColor: 'rgba(59,130,246,0.7)',
        tension: 0.1,
      },
    ],
  };

  // --- Product Features: Bar Chart ---
  const productFeaturesData = {
    labels: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    datasets: [
      {
        label: 'Usage Percentage',
        data: [80, 65, 75, 90],
        backgroundColor: 'rgba(99,102,241,0.7)',
        borderColor: 'rgba(99,102,241,1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container mx-auto px-6 py-12 bg-white rounded-lg shadow-lg text-black">
      <h1 className="text-4xl font-extrabold text-center text-indigo-700">CRM Services & Features</h1>

      {/* 1. Lead Generation & Management */}
      <section id="lead-generation" className="space-y-8 p-8 border border-gray-200 rounded-lg shadow-md bg-white">
        <h2 className="text-3xl font-semibold text-indigo-700">1. Lead Generation & Management</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Lead Capture Form */}
          <form
            onSubmit={handleLeadSubmit}
            className="space-y-4 p-6 bg-white border border-gray-200 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-medium text-indigo-600">Lead Capture & Scoring</h3>
            <div className="space-y-4">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300"
            >
              Capture Lead
            </button>
            <div>
              <h4 className="font-medium text-lg mt-6">Scored Leads</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {leads.map((l, i) => (
                  <li key={i}>
                    {l.name} ({l.email}) — Score: {l.score}
                  </li>
                ))}
              </ul>
            </div>
          </form>

          {/* Segmentation */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md space-y-2">
            <h3 className="text-2xl font-medium text-indigo-600">Segmentation</h3>
            <div className="space-y-2">
              <p>Hot Leads: <span className="font-semibold text-indigo-700">{hotLeads.length}</span></p>
              <p>Warm Leads: <span className="font-semibold text-yellow-500">{warmLeads.length}</span></p>
              <p>Cold Leads: <span className="font-semibold text-red-500">{coldLeads.length}</span></p>
            </div>
            {/* Pie Chart Visualization */}
            <div className="w-full h-72 p-4">
              <Pie data={segmentationData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sales Processes */}
      <section id="sales-process" className="space-y-6 p-8 bg-white border border-gray-200 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-indigo-700">2. Sales Processes</h2>
        <div className="md:w-1/2 p-4 bg-white rounded-lg shadow-sm">
          <Doughnut data={salesProcessData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
        </div>
        <div className="space-y-2">
          <p className="font-medium text-lg text-gray-700">
            Conversion Rate (Lead to Closed): <span className="font-semibold text-indigo-700">30%</span>
          </p>
          <p className="font-medium text-lg text-gray-700">
            Negotiation Stage Count: <span className="font-semibold text-indigo-700">{Math.floor(leads.length * 0.5)}</span>
          </p>
        </div>
      </section>

      {/* 3. Post-Sale Support */}
      <section id="post-sale-support" className="space-y-6 p-8 bg-white border border-gray-200 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-indigo-700">3. Post-Sale Support</h2>
        <div className="w-full h-72 p-4">
          <Line data={customerSatisfactionData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-indigo-600">Customer Satisfaction</h3>
          <p className="text-gray-700">Satisfaction score over the past 6 months.</p>
        </div>
      </section>

      {/* 4. Product Features */}
      <section id="product-features" className="space-y-6 p-8 bg-white border border-gray-200 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-indigo-700">4. Product Features</h2>
        <div className="w-full h-72 p-4">
          <Bar data={productFeaturesData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
        </div>
      </section>
    </div>
  );
}
