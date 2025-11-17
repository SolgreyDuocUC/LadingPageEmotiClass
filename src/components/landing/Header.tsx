import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className="landing-header"
      data-scrolled={isScrolled}
    >
      <div className="landing-header__container">
        <div className="landing-header__brand">
          <Heart className="landing-header__icon" />
          <span className="landing-header__logo">EmotiClass</span>
        </div>
        <nav className="landing-header__nav">
          <a href="#introduccion" className="landing-header__link">Introducción</a>
          <a href="#problema" className="landing-header__link">El Problema</a>
          <a href="#solucion" className="landing-header__link">Solución</a>
          <a href="#contexto" className="landing-header__link">Contexto</a>
        </nav>
      </div>
    </header>
  );
}
