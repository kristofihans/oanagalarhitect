import React, { useState } from 'react';
import { LayoutGrid, Building2, Home, X } from 'lucide-react';
import ArchBackground from '../components/ArchBackground';
import Lightbox from '../components/Lightbox';
import './LucrariExecutate.css';

const haleImages = Array.from({ length: 8 }, (_, i) => `arhitect/hale${i + 1}.jpg`);
const locuinteImages = Array.from({ length: 7 }, (_, i) => `arhitect/locuinte${i + 1}.jpg`);

const LucrariExecutate = () => {
  const [activeTab, setActiveTab] = useState('locuinte'); // 'locuinte' sau 'hale'
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [currentImages, setCurrentImages] = useState([]);

  const openLightbox = (index, type) => {
    setCurrentImages(type === 'hale' ? haleImages : locuinteImages);
    setSelectedImageIndex(index);
  };
  const closeLightbox = () => setSelectedImageIndex(null);
  const nextImage = (e) => { e.stopPropagation(); setSelectedImageIndex((prev) => (prev + 1) % currentImages.length); };
  const prevImage = (e) => { e.stopPropagation(); setSelectedImageIndex((prev) => (prev === 0 ? currentImages.length - 1 : prev - 1)); };

  return (
    <div className="lucrari-page">
      <section className="section text-center page-hero">
        <ArchBackground />
        <div className="container page-hero-container">
          <h1 className="mb-4 page-hero-title">Lucrări executate</h1>
          <p className="lead-text page-hero-text">
            Explorați portofoliul nostru de proiecte, structurat pe două mari categorii. 
            Fiecare proiect reprezintă un răspuns la nevoile specifice ale beneficiarilor noștri.
          </p>
        </div>
      </section>

      <section className="section bg-white pt-0">
        <div className="container">
          {/* Tab Navigation */}
          <div className="tabs-navigation mb-8">
            <button 
              className={`tab-btn ${activeTab === 'locuinte' ? 'active' : ''}`}
              onClick={() => setActiveTab('locuinte')}
            >
              <Home size={20} className="mr-2" />
              Locuințe și Spații Sociale
            </button>
            <button 
              className={`tab-btn ${activeTab === 'hale' ? 'active' : ''}`}
              onClick={() => setActiveTab('hale')}
            >
              <Building2 size={20} className="mr-2" />
              Hale și Spații Industriale
            </button>
          </div>

          {/* Tab Content: Locuinte */}
          {activeTab === 'locuinte' && (
            <div className="tab-content animate-fade-in">
              <div className="album-description glass mb-8">
                <h3>Locuințe și Spații Sociale</h3>
                <div className="grid-2 mt-4 category-list">
                  <ul>
                    <li>Intrare în legalitate</li>
                    <li>Schimbări de destinaţie</li>
                    <li>Centre multifuncționale</li>
                    <li>Locuințe colective (Blocuri)</li>
                    <li>Centre Veterinare (Clinici, Cabinete)</li>
                    <li>Farmacii, Pet Shop, Adăposturi</li>
                  </ul>
                  <ul>
                    <li>Pensiuni Canine și Feline</li>
                    <li>Capele Mortuare</li>
                    <li>Agropensiuni</li>
                    <li>Grădinițe</li>
                    <li>Școli</li>
                  </ul>
                </div>
              </div>

              <div className="gallery-masonry">
                {locuinteImages.map((src, index) => (
                  <div key={`loc-${index}`} className="gallery-item glass-hover" onClick={() => openLightbox(index, 'locuinte')}>
                    <img src={src} alt={`Locuințe proiect ${index + 1}`} loading="lazy" />
                    <div className="item-overlay">
                      <LayoutGrid size={32} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab Content: Hale */}
          {activeTab === 'hale' && (
            <div className="tab-content animate-fade-in">
              <div className="album-description glass mb-8">
                <h3>Hale și Spații Industriale</h3>
                <div className="grid-2 mt-4 category-list">
                  <ul>
                    <li>Proiectare Case</li>
                    <li>Case de Vacanță</li>
                    <li>Cămine culturale</li>
                    <li>Cămine de bătrâni</li>
                    <li>Terenuri de sport (Teren de fotbal, tenis, baschet, handbal, bazine înot, etc)</li>
                  </ul>
                  <ul>
                    <li>Centre Recreaționale cu Bazine în Aer Liber</li>
                    <li>Clădiri de Birouri</li>
                    <li>Hale Industriale</li>
                    <li>Hale de Animale</li>
                    <li>Sere legume/fructe</li>
                  </ul>
                </div>
              </div>

              <div className="gallery-masonry">
                {haleImages.map((src, index) => (
                  <div key={`hale-${index}`} className="gallery-item glass-hover" onClick={() => openLightbox(index, 'hale')}>
                    <img src={src} alt={`Hale proiect ${index + 1}`} loading="lazy" />
                    <div className="item-overlay">
                      <LayoutGrid size={32} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <Lightbox 
          images={currentImages} 
          currentIndex={selectedImageIndex} 
          onClose={closeLightbox} 
          onNext={nextImage} 
          onPrev={prevImage} 
        />
      )}
    </div>
  );
};

export default LucrariExecutate;
