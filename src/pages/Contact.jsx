import React from 'react';
import ContactSection from '../components/ContactSection';
import ArchBackground from '../components/ArchBackground';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="section text-center page-hero">
        <ArchBackground />
        <div className="container page-hero-container">
          <h1 className="mb-4 page-hero-title">Contactează-ne</h1>
          <p className="lead-text page-hero-text">
            Suntem aici pentru a transforma ideile tale în realitate. Contactează-ne pentru orice întrebare sau pentru a programa o consultanță.
          </p>
        </div>
      </section>
      
      <ContactSection />
    </div>
  );
};

export default Contact;
