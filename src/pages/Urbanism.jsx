import React from 'react';
import { Map, MapPin } from 'lucide-react';
import ArchBackground from '../components/ArchBackground';
import './Servicii.css'; // Reusing some base layout classes

const Urbanism = () => {
  return (
    <div className="urbanism-page">
      <section className="section text-center page-hero">
        <ArchBackground />
        <div className="container page-hero-container">
          <h1 className="mb-4 page-hero-title">Urbanism & documentații</h1>
          <p className="lead-text page-hero-text">
            Planificare urbană responsabilă. PUZ, PUD și alte documentații necesare, explicate clar și gestionate cu atenție la detalii.
          </p>
        </div>
      </section>

      {/* PUD Section */}
      <section className="section bg-white pt-0 pb-0 mt-8">
        <div className="container">
          <div className="grid-2 align-center content-row mb-8">
            <div className="service-text pr-2">
              <div className="flex align-center mb-4">
                <MapPin size={32} className="icon-gold mr-2" />
                <h2 style={{ marginBottom: 0 }}>Întocmire PUD</h2>
              </div>
              <span className="subtitle mb-4">Plan Urbanistic de Detaliu</span>
              <p>
                Scopul elaborării Planului Urbanistic de Detaliu (PUD) este ca atât autoritățile locale, cât și beneficiarul, să se asigure că viitoarea construcție va respecta toate reglementările referitoare la terenul aferent (iar prin construcție se înțelege orice fel de clădire, care poate deservi unei varietăți de scopuri) dar și facilitățile conexe clădirii, cum sunt parcările, drumurile de acces, spațiile de joacă sau rețelele tehnice.
              </p>
              
              <div className="accent-box mt-4">
                PUD-ul clarifică și detaliază condițiile de construire la nivel de parcelă, asigurând o integrare armonioasă în contextul urban.
              </div>
            </div>
            
            <div className="service-image hover-zoom">
              <img src="/arhitect/serviciiurbanism1.jpg" alt="PUD Plan Urbanistic de Detaliu" className="rounded-image" />
              <div className="bg-pattern"></div>
            </div>
          </div>
        </div>
      </section>

      {/* PUZ Section */}
      <section className="section bg-light mt-8">
        <div className="container">
          <div className="grid-2 align-center content-row reverse-mobile">
            <div className="service-image hover-zoom">
              <img src="/arhitect/serviciiurbanism2.jpg" alt="PUZ Plan Urbanistic Zonal" className="rounded-image" />
              <div className="bg-pattern pattern-left"></div>
            </div>
            
            <div className="service-text pl-2">
              <div className="flex align-center mb-4">
                <Map size={32} className="icon-gold mr-2" />
                <h2 style={{ marginBottom: 0 }}>Întocmire PUZ</h2>
              </div>
              <span className="subtitle mb-4">Plan Urbanistic Zonal</span>
              <p>
                Potrivit Legii nr. 350/2001 privind amenajarea teritoriului și urbanismului cu completările și modificările ulterioare, Planul Urbanistic Zonal, numit în cele ce urmează și PUZ, reprezintă un „instrument de planificare urbană de reglementare specifică, prin care se coordonează dezvoltarea urbanistică a unor zone din localitate, caracterizate printr-un grad ridicat de complexitate sau printr-o dinamică urbană accentuată”.
              </p>
              
              <p className="mt-4">
                Importanța pe care PUZ o are în dezvoltarea unei zone este susținută și justificată, pe de o parte, de elementele pe care le include – obiective, reglementări (permisiunile și restricțiile) specifice care trebuie să se aplice legat de modul de ocupare și utilizare al terenurilor și de conformare a construcțiilor din zona care se studiază.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Urbanism;
