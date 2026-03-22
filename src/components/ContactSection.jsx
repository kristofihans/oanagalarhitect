import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="bg-white contact-container">
          <div className="contact-grid">
          
          <div className="contact-info-panel">
            <h2>Hai să discutăm despre proiectul tău</h2>
            <p>Completează formularul sau folosește datele de contact de mai jos pentru a lua legătura cu noi.</p>
            
            <div className="contact-details mt-8">
              <div className="detail-item">
                <div className="icon-wrapper">
                  <Phone size={24} />
                </div>
                <div>
                  <h4>Telefon</h4>
                  <a href="tel:0740237067">0740. 237. 067</a>
                </div>
              </div>
              
              <div className="detail-item">
                <div className="icon-wrapper">
                  <Mail size={24} />
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:oana.gal20@gmail.com">oana.gal20@gmail.com</a>
                </div>
              </div>
              
              <div className="detail-item">
                <div className="icon-wrapper">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4>Adresă</h4>
                  <span>Str Ciheiului nr 65, Oradea</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-panel">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group grid-2 mb-4">
                <div>
                  <label htmlFor="name">Nume complet</label>
                  <input type="text" id="name" placeholder="Numele tău" required />
                </div>
                <div>
                  <label htmlFor="phone">Telefon</label>
                  <input type="tel" id="phone" placeholder="Numărul tău de telefon" required />
                </div>
              </div>
              
              <div className="form-group mb-4">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Adresa ta de email" required />
              </div>
              
              <div className="form-group mb-4">
                <label htmlFor="message">Mesaj</label>
                <textarea id="message" rows="5" placeholder="Cu ce te pot ajuta?" required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary w-100">Trimite mesajul</button>
            </form>
          </div>
          
        </div>
      </div>
      </div>

      {/* Google Maps Embed */}
      <div className="container mt-8 mb-8 pb-8">
        <div className="map-wrapper glass">
          <iframe 
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.1472502693994!2d21.942940215707767!3d47.05051187915234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474647f52a7d4721%3A0xe7bc322049e6d01!2sStrada%20Ciheiului%2065%2C%20Oradea!5e0!3m2!1sen!2sro!4v1684332902341!5m2!1sen!2sro" 
            width="100%" 
            height="100%" 
            style={{ border: 0, borderRadius: '12px' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
