import React, { useState, useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css';


function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll for navbar and active link
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      // Highlight active section
      const sections = document.querySelectorAll('section');
      let current = 'home';
      const navbar = document.querySelector('.navbar');
      const navHeight = navbar ? navbar.offsetHeight : 0;
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.pageYOffset + navHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuActive(false);
    const target = document.querySelector(href);
    const navbar = document.querySelector('.navbar');
    const navHeight = navbar ? navbar.offsetHeight : 0;
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  return (
    <header>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="logo">
          <img className='logo-picture' src="https://res.cloudinary.com/dat6vptxu/image/upload/v1749734603/gold-tech_x8wxda.png" alt="Gold-Tech Logo" />
          <a href="/">GoldTech</a>
        </div>
        <ul className={` nav-menu${menuActive ? ' active' : ''}`}>
          {[
            { section: 'home', icon: 'fa-home' },
            { section: 'about', icon: 'fa-user' },
            { section: 'services', icon: 'fa-cogs' },
            { section: 'portfolio', icon: 'fa-briefcase' },
            { section: 'contact', icon: 'fa-envelope' }
          ].map(({ section, icon }) => (
            <li className="nav-item" key={section}>
              <a
                href={`#${section}`}
                className={`nav-link${activeSection === section ? ' active' : ''}`}
                onClick={e => handleNavClick(e, `#${section}`)}
              >
                <i className={`fa ${icon}`} style={{ marginRight: '8px' }}></i>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <div
          className={`hamburger${menuActive ? ' active' : ''}`}
          onClick={() => setMenuActive(!menuActive)}
          tabIndex={0}
          role="button"
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;