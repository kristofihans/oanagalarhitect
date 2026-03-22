import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, CheckCircle, Navigation } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation as SwiperNavigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ArchBackground from '../components/ArchBackground';
import './Acasa.css';

const slides = [
  'arhitect/hale4.jpg',
  'arhitect/locuinte1.jpg',
  'arhitect/randari3.jpg',
  'arhitect/hale1.jpg'
];

const Acasa = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const reviews = [
    {
      name: "Paul Radu",
      date: "a month ago",
      text: "Very good communication, timely answers and quick solutions tailored to my needs, I fully recommend!",
      rating: 5
    },
    {
      name: "Diana Brînzaș",
      date: "a month ago",
      text: "O experiență excelentă! Doamna Oana a fost foarte amabilă, a rezolvat toate problemele care au apărut, a ținut cont de cerințele noastre, iar serviciile s-au ridicat la înălțimea așteptărilor. Recomand cu drag și cu siguranță voi reveni!",
      rating: 5
    },
    {
      name: "Vaida Ioan",
      date: "a month ago",
      text: "Oana Gal, un arhitect pe care te poți baza. Ne-a ajutat cu proiectul casei și cu întreaga autorizație de construire, fără stres și fără surprize. Explică bine",
      rating: 5
    }
  ];

  const handleContactClick = (e) => {
    e.preventDefault();
    window.location.href = '/contact';
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero" style={{ minHeight: '100vh', paddingBottom: '2rem' }}>
        <ArchBackground />
        <div className="container hero-container" style={{ zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '3rem', paddingTop: '6rem' }}>
          <div className="hero-text-content text-center" style={{ maxWidth: '900px' }}>
            <h1 style={{ color: 'white', textShadow: '0 4px 20px rgba(0,0,0,0.5)', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Transform proiectele tale în spații funcționale, sigure și memorabile.
            </h1>
          </div>
          <div className="hero-image-wrapper" style={{ width: '100%', maxWidth: '900px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.2)' }}>
            <img src="arhitect/heroimage.jpg" alt="Arhitectură Modernă Oana Gal" style={{ width: '100%', height: 'auto', maxHeight: '50vh', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Section 2: Despre mine */}
      <section className="section bg-white about-section" id="despre">
        <div className="container">
          <div className="grid-2 align-center">
            <div className="about-text">
              <span className="subtitle">Despre mine</span>
              <h2>Arhitect care te ascultă și îți proiectează viitorul</h2>
              <p>
                Sunt Oana Gal, arhitect, iar pentru mine arhitectura înseamnă responsabilitate față de oameni și față de spațiile în care trăiesc sau lucrează.
              </p>
              <p>
                Abordarea mea este una practică și structurată: ascult, analizez contextul, identific nevoile reale și construiesc soluții care funcționează pe termen lung, nu doar pe planșă.
              </p>
              <div className="accent-box mt-4 mb-8">
                <strong>Pun accent pe:</strong>
                <ul className="mt-4">
                  <li><Navigation size={18} className="icon-gold"/> funcționalitate reală, nu doar forme frumoase,</li>
                  <li><Navigation size={18} className="icon-gold"/> siguranță și conformitate cu legislația,</li>
                  <li><Navigation size={18} className="icon-gold"/> design echilibrat, adaptat fiecărui proiect.</li>
                </ul>
              </div>
              <button onClick={handleContactClick} className="btn btn-accent">
                Contactează-mă <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
            <div className="about-image-wrapper">
              <div className="about-image">
                <img src="arhitect/aboutme.jpg" alt="Arhitect Oana Gal" />
                <div className="image-decoration"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="section section-dark text-center">
        <div className="container" style={{ maxWidth: "800px" }}>
          <h2>Arhitectură care te susține, nu te complică</h2>
          <p className="lead-text">
            Un proiect bun nu înseamnă doar estetică.<br />
            Înseamnă un spațiu care funcționează corect, respectă normele, îți economisește timp și îți oferă siguranța că fiecare etapă este bine gândită.
          </p>
          <div className="mt-8 text-left features-list">
            <h3>Lucrez cu clienți care își doresc:</h3>
            <ul>
              <li><CheckCircle className="feature-icon" /> claritate în proces,</li>
              <li><CheckCircle className="feature-icon" /> soluții adaptate realității lor,</li>
              <li><CheckCircle className="feature-icon" /> un arhitect implicat, care explică, ghidează și propune alternative solide.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: Ce pot face pentru tine */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-8">
            <h2>Ce pot face pentru tine</h2>
            <div className="divider mx-auto"></div>
          </div>
          <div className="grid-4 mt-8 services-grid">
            <div className="service-card glass">
              <div className="service-number">01</div>
              <h3>Proiectare arhitecturală</h3>
              <p>Proiecte pentru case unifamiliale și spații comerciale, gândite în jurul modului tău de viață sau al activității tale.</p>
            </div>
            <div className="service-card glass">
              <div className="service-number">02</div>
              <h3>Urbanism & documentații</h3>
              <p>PUZ, PUD și alte documentații necesare, explicate clar și gestionate responsabil.</p>
            </div>
            <div className="service-card glass">
              <div className="service-number">03</div>
              <h3>Randări și vizualizări 3D</h3>
              <p>Imagini realiste care te ajută să înțelegi spațiul înainte de execuție și să iei decizii informate.</p>
            </div>
            <div className="service-card glass">
              <div className="service-number">04</div>
              <h3>Consultanță</h3>
              <p>Sprijin profesional în etapele-cheie ale proiectului, pentru a evita greșeli costisitoare și blocaje inutile.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Proiecte cu Slideshow */}
      <section className="section project-preview-section">
        <div className="container">
          <div className="grid-2 align-center">
            <div className="project-preview-text pr-2">
              <h2>Proiecte</h2>
              <div className="divider"></div>
              <p className="mt-4 lead-text">
                Fiecare proiect pornește de la o nevoie concretă și un context real.
              </p>
              <p>
                Scopul meu este să ofer soluții coerente, adaptate terenului, bugetului și cerințelor clientului, fără compromisuri inutile.
              </p>
              <a href="/lucrari" className="btn btn-primary mt-4">
                Vezi toate proiectele <ArrowRight size={20} className="ml-2" />
              </a>
            </div>
            <div className="slideshow-wrapper swiper-custom-wrapper">
              <Swiper
                modules={[SwiperNavigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                className="proiecte-swiper"
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="swiper-slide-bg" style={{ backgroundImage: `url(${slide})`, height: '500px', width: '100%', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Google Reviews */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-8">
            <h2>Ce spun clienții</h2>
            <div className="divider mx-auto"></div>
          </div>
          <div className="grid-3 mt-8">
            {reviews.map((review, i) => (
              <div key={i} className="review-card glass">
                <div className="stars flex mb-4">
                  {[...Array(review.rating)].map((_, idx) => (
                    <Star key={idx} fill="#fbbc04" color="#fbbc04" size={20} />
                  ))}
                </div>
                <p className="review-text">"{review.text}"</p>
                <div className="review-author mt-4">
                  <strong>{review.name}</strong>
                  <span className="review-source">Review from Google &middot; {review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Acasa;
