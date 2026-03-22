import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Acasă', path: '/' },
    { name: 'Servicii', path: '/servicii' },
    { name: 'Lucrări executate', path: '/lucrari' },
    { name: 'Randări', path: '/randari' },
    { name: 'Urbanism', path: '/urbanism' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled glass' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          Oana Gal<br/><span>Arhitect</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="desktop-nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className={location.pathname === link.path ? 'active' : ''}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="mobile-nav">
            <ul>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    onClick={() => setIsOpen(false)}
                    className={location.pathname === link.path ? 'active' : ''}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
