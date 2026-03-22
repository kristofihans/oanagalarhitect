import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ArchBackground from '../components/ArchBackground';
import './Servicii.css';

const Servicii = () => {
  return (
    <div className="servicii-page">
      <section className="section text-center page-hero">
        <ArchBackground />
        <div className="container page-hero-container">
          <h1 className="mb-4 page-hero-title">
            Arhitectură gândită corect, <br />
            <span style={{ color: 'var(--accent)' }}>de la idee la documentație finală</span>
          </h1>
          <p className="lead-text page-hero-text">
            Fiecare serviciu este construit pentru a oferi claritate, siguranță și soluții adaptate realității tale, nu doar planșe frumoase. 
            Lucrez structurat, explic fiecare etapă și te ajut să iei decizii informate, fără stres inutil.
          </p>
        </div>
      </section>

      {/* Consultanță arhitecturală */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid-2 align-center content-row">
            <div className="service-text pr-2">
              <h2>Consultanță arhitecturală</h2>
              <span className="subtitle mb-4">Claritate înainte de orice decizie importantă</span>
              <p>
                Serviciile de consultanță sunt concepute pentru a te ajuta să înțelegi ce se poate construi legal, ce tip de proiect se potrivește terenului tău și care sunt pașii corecți de urmat, conform legislației din România.
              </p>
              
              <div className="service-features mt-4">
                <strong>Ce include consultanța:</strong>
                <ul>
                  <li><CheckCircle size={18} className="icon-gold"/> Analiza documentelor existente și a reglementărilor urbanistice aplicabile terenului</li>
                  <li><CheckCircle size={18} className="icon-gold"/> Discuții inițiale pentru stabilirea tipului de construcție permis și oportun</li>
                  <li><CheckCircle size={18} className="icon-gold"/> Discuții preliminare pentru definirea temei de proiectare</li>
                  <li><CheckCircle size={18} className="icon-gold"/> Stabilirea detaliilor proiectului: suprafețe, plan general, necesar de documentații</li>
                  <li><CheckCircle size={18} className="icon-gold"/> Clarificarea actelor necesare pentru demararea proiectului, agreate contractual cu beneficiarul</li>
                </ul>

                <strong className="mt-4 d-block">Consultanță pe teren (vizite la fața locului, măsurători, etc.)</strong>
                <strong className="mt-4 d-block">Suport administrativ și direcționare</strong>
                <strong className="mt-4 d-block" style={{ color: 'var(--accent)' }}>Consultanță design interior (opțional)</strong>
              </div>

              <Link to="/contact" className="btn btn-primary mt-8">
                Programează o discuție <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
            
            <div className="service-image hover-zoom">
              <img src="arhitect/serviciu1.jpg" alt="Consultanță arhitecturală" className="rounded-image" />
              <div className="bg-pattern"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Proiectare arhitecturală & documentații tehnice */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid-2 align-center content-row reverse-mobile">
            <div className="service-image hover-zoom">
              <img src="arhitect/serviciu2.jpg" alt="Proiectare arhitecturală" className="rounded-image" />
              <div className="bg-pattern pattern-left"></div>
            </div>
            
            <div className="service-text pl-2">
              <h2>Proiectare arhitecturală & documentații tehnice</h2>
              <span className="subtitle mb-4">De la concept la autorizație, fără drumuri inutile</span>
              <p>
                Asigur întocmirea completă a documentației tehnice necesare pentru obținerea autorizațiilor, gestionând procesul într-un mod coerent și eficient.
              </p>
              
              <div className="service-features mt-4">
                <strong>Ce include serviciul de proiectare:</strong>
                <p className="mt-2 mb-2">Proiect tehnic pentru:</p>
                <ul>
                  <li><CheckCircle size={18} className="icon-gold"/> autorizare de construire, desființare, recompartimentare, reabilitare</li>
                  <li><CheckCircle size={18} className="icon-gold"/> schimbare de destinație, împrejmuire și alte intervenții reglementate legal</li>
                  <li><CheckCircle size={18} className="icon-gold"/> Întocmirea documentației necesare pentru obținerea Autorizației de Construire</li>
                </ul>

                <strong className="mt-4 d-block">Coordonare interdisciplinară</strong>
                <p className="mt-2">
                  Colaborez și coordonez celelalte specialități implicate în proiect: structură de rezistență, instalații sanitare și termice, instalații electrice.
                </p>
                <div className="accent-box mt-4">
                  Avantajul pentru beneficiar este că întregul proces este gestionat prin Biroul Individual de Arhitectură Oana Gal, fără a fi necesare deplasări separate către alte specialități.
                </div>
              </div>

              <Link to="/contact" className="btn btn-primary mt-8">
                Solicită o ofertă <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Asistență Tehnică de Șantier */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid-2 align-center content-row">
            <div className="service-text pr-2">
              <h2>Asistență Tehnică de Șantier</h2>
              <span className="subtitle mb-4">Suport pe parcursul execuției</span>
              <p>
                Asistența tehnică de șantier asigură aplicarea corectă a proiectului în condițiile reale din teren.
              </p>
              
              <div className="service-features mt-4">
                <strong>Ce presupune:</strong>
                <ul>
                  <li><CheckCircle size={18} className="icon-gold"/> emiterea de soluții tehnice, clarificări și precizări necesare pe parcursul execuției</li>
                  <li><CheckCircle size={18} className="icon-gold"/> corelarea proiectului cu situațiile apărute în șantier</li>
                  <li><CheckCircle size={18} className="icon-gold"/> coordonare prin vizite săptămânale sau stabilite împreună cu beneficiarul</li>
                  <li><CheckCircle size={18} className="icon-gold"/> verificarea și alegerea finisajelor interioare</li>
                  <li><CheckCircle size={18} className="icon-gold"/> urmărirea punerii în operă conform Autorizației de Construire</li>
                </ul>
              </div>
              <p className="mt-4 italic-text color-gray">
                Acest serviciu este opțional și se realizează exclusiv pentru proiectele întocmite de Biroul Individual de Arhitectură Oana Gal.
              </p>
            </div>
            
            <div className="service-image hover-zoom">
              <img src="arhitect/serviciu3.jpg" alt="Asistență Tehnică de Șantier" className="rounded-image" />
              <div className="bg-pattern"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicii;
