import { Heart, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="landing-footer">
      <div className="landing-footer__container">
        <div className="landing-footer__main">
          <div className="landing-footer__brand">
            <Heart className="landing-footer__brand-icon" />
            <span className="landing-footer__brand-text">EmotiClass</span>
          </div>
          <p className="landing-footer__description">
            Proyecto de investigación DUOC UC - Transformando la educación mediante 
            el análisis emocional colectivo.
          </p>
        </div>

        <div className="landing-footer__contact">
          <h3 className="landing-footer__heading">Contacto</h3>
          <a href="mailto:contacto@emoticlass.cl" className="landing-footer__email">
            <Mail size={18} />
            <span>contacto@emoticlass.cl</span>
          </a>
        </div>

        <div className="landing-footer__bottom">
          <p className="landing-footer__copyright">
            © {currentYear} EmotiClass. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
