import React from "react";

export default function CelluNovaWebsite() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gradient-to-r from-green-300 via-lime-400 to-purple-300">
        <h1 className="text-5xl font-bold text-white drop-shadow-md">CelluNova</h1>
        <p className="mt-4 text-xl text-white">Innovating Tomorrow’s Biotech Today</p>
        <button className="mt-6 px-6 py-3 bg-white text-lime-600 font-semibold rounded-2xl shadow-md hover:bg-gray-100 transition">Start Your Idea</button>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-lime-600 mb-4">About Us</h2>
        <p className="text-lg leading-relaxed">
          CelluNova is a biotech initiative designed to empower innovators with resources to bring their
          life science ideas into reality. Whether you’re just starting or scaling up, we help you at every step
          of your journey.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-lime-600 mb-10">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Idea Validation",
            "Technical Consultancy",
            "Prototype Support",
            "Research Collaboration",
            "Funding & Pitch Coaching",
            "Startup Mentorship"
          ].map(service => (
            <div key={service} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-lime-700">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-lime-600 mb-4">Get In Touch</h2>
        <p className="text-lg mb-6">Interested in collaborating or joining us? Reach out today.</p>
        <a href="mailto:contact@cellunova.org" className="text-lime-700 underline hover:text-lime-900">
          contact@cellunova.org
        </a>
      </section>

      <footer className="bg-lime-600 text-white py-6 text-center">
        <p>&copy; 2025 CelluNova. All rights reserved.</p>
      </footer>
    </main>
  );
}
