import React from 'react';
import { Eye } from 'lucide-react';
import ArchBackground from '../components/ArchBackground';
import './Randari.css';

const randariImages = Array.from({ length: 6 }, (_, i) => `arhitect/randari${i + 1}.jpg`);

const Randari = () => {
  return (
    <div className="randari-page">
      <section className="section text-center page-hero">
        <ArchBackground />
        <div className="container page-hero-container">
          <h1 className="mb-4 page-hero-title">Randări și Vizualizări 3D</h1>
          <p className="lead-text page-hero-text">
            Imagini realiste care te ajută să înțelegi spațiul înainte de execuție și să iei decizii informate. 
            O previzualizare fidelă a proiectului final.
          </p>
        </div>
      </section>

      <section className="section bg-white pt-0">
        <div className="container">
          <div className="randari-grid mt-8">
            {randariImages.map((src, index) => (
              <div key={`randare-${index}`} className="randare-item glass-hover">
                <img src={src} alt={`Randare arhitecturală ${index + 1}`} loading="lazy" />
                <div className="item-overlay">
                  <Eye size={40} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Randari;
