import { motion } from 'motion/react';
import { Lightbulb, Scan, TrendingUp, Shield, Users } from 'lucide-react';

export function SolutionSection() {
  return (
    <section id="solucion" className="solution-section">
      <div className="solution-section__container">
        <motion.div
          className="solution-section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="solution-section__badge">
            <Lightbulb size={20} />
            <span>SOLUCIÓN / TECNOLOGÍA</span>
          </div>
          <h2 className="solution-section__title">EmotiClass</h2>
          <p className="solution-section__lead">
            Retroceder y eliminar las redes sociales no es viable.
          </p>
          <p className="solution-section__subtitle">
            Por eso, <strong>EmotiClass propone una alternativa innovadora:</strong>
          </p>
        </motion.div>

        <motion.div
          className="solution-section__main"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="solution-highlight">
            <Scan className="solution-highlight__icon" size={56} />
            <h3 className="solution-highlight__title">
              EmotiClass analiza el espectro de la emoción "tristeza" como indicador 
              de carga cognitiva mediante reconocimiento facial colectivo.
            </h3>
          </div>

          <div className="solution-description">
            <p>
              La herramienta permite observar <strong>en tiempo real</strong> cómo las 
              emociones grupales —especialmente aquellas relacionadas con cansancio mental 
              y sobrecarga— afectan la atención, el ritmo de la clase y el bienestar 
              emocional del curso.
            </p>
          </div>

          <div className="solution-principles">
            <div className="principle-card">
              <Shield size={32} />
              <h4>No juzga</h4>
              <p>Interpreta patrones emocionales</p>
            </div>
            <div className="principle-card">
              <Users size={32} />
              <h4>No se enfoca en individuos</h4>
              <p>Analiza patrones colectivos</p>
            </div>
            <div className="principle-card">
              <TrendingUp size={32} />
              <h4>Información accionable</h4>
              <p>Para mejorar la experiencia educativa</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}