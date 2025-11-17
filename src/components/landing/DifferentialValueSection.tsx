import { motion } from 'motion/react';
import { Sparkles, Users, Clock } from 'lucide-react';

export function DifferentialValueSection() {
  return (
    <section className="differential-section">
      <div className="differential-section__container">
        <motion.div
          className="differential-section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="differential-section__badge">
            <Sparkles size={20} />
            <span>VALOR DIFERENCIAL</span>
          </div>
          <h2 className="differential-section__title">
            Lo que hace único a EmotiClass
          </h2>
        </motion.div>

        <div className="differential-section__cards">
          <motion.div
            className="differential-card differential-card--primary"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="differential-card__number">1</div>
            <div className="differential-card__content">
              <Users className="differential-card__icon" size={40} />
              <h3 className="differential-card__title">
                No detecta caras: detecta grupos
              </h3>
              <p className="differential-card__description">
                EmotiClass trabaja sobre <strong>patrones emocionales colectivos</strong>, 
                preservando la privacidad y enfocándose en las dinámicas del aula.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="differential-card differential-card--secondary"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="differential-card__number">2</div>
            <div className="differential-card__content">
              <Clock className="differential-card__icon" size={40} />
              <h3 className="differential-card__title">
                Entrega información en tiempo real
              </h3>
              <p className="differential-card__description">
                Los docentes pueden ajustar <strong>explicaciones, ritmo, actividades 
                o pausas cognitivas</strong> según el estado emocional grupal.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
