import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              Oana Gal<br/><span>Arhitect</span>
            </Link>
            <p className="mt-4">
              Arhitectură gândită corect, cu respect față de spațiu și viitorul tău. Soluții coerente adaptate realității.
            </p>
          </div>
          
          <div className="footer-links">
            <h3>Navigare</h3>
            <ul>
              <li><Link to="/">Acasă</Link></li>
              <li><Link to="/servicii">Servicii</Link></li>
              <li><Link to="/lucrari">Lucrări executate</Link></li>
              <li><Link to="/randari">Randări</Link></li>
              <li><Link to="/urbanism">Urbanism</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Contact</h3>
            <ul>
              <li>
                <Phone size={18} />
                <a href="tel:0740237067">0740. 237. 067</a>
              </li>
              <li>
                <Mail size={18} />
                <a href="mailto:oana.gal20@gmail.com">oana.gal20@gmail.com</a>
              </li>
              <li>
                <MapPin size={18} />
                <span>Str Ciheiului nr 65, Oradea</span>
              </li>
            </ul>
            <div className="social-links mt-4">
              <a href="https://www.facebook.com/BIAOanaGal" target="_blank" rel="noreferrer" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/arhitect_oana_gal" target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Birou Individual de Arhitectură Oana Gal. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
