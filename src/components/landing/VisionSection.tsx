import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function VisionSection() {
  return (
    <section className="vision-section">
      <div className="vision-section__container">
        <motion.div
          className="vision-section__content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Sparkles className="vision-section__icon" size={56} />
          
          <h2 className="vision-section__title">
            Visión de futuro
          </h2>
          
          <p className="vision-section__text">
            <strong>EmotiClass</strong> imagina un futuro donde la tecnología no distrae, 
            sino que <span className="vision-section__highlight">conecta</span>; donde 
            comprender las emociones colectivas permite construir aulas más{' '}
            <span className="vision-section__highlight">humanas</span>,{' '}
            <span className="vision-section__highlight">empáticas</span> y{' '}
            <span className="vision-section__highlight">cognitivamente saludables</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
