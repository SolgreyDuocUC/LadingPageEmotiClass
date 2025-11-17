import { motion } from 'motion/react';
import { Target, Heart, Eye, TrendingUp } from 'lucide-react';

const impacts = [
  {
    icon: Heart,
    title: 'Bienestar emocional',
    description: 'Promueve el bienestar emocional de estudiantes y docentes'
  },
  {
    icon: Eye,
    title: 'Atención sostenida',
    description: 'Mejora la capacidad de atención y concentración en el aula'
  },
  {
    icon: TrendingUp,
    title: 'Aprendizaje optimizado',
    description: 'Optimiza el aprendizaje al ofrecer lectura emocional en tiempo real'
  }
];

export function ImpactSection() {
  return (
    <section className="impact-section">
      <div className="impact-section__container">
        <motion.div
          className="impact-section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="impact-section__badge">
            <Target size={20} />
            <span>IMPACTO</span>
          </div>
          <h2 className="impact-section__title">
            Transformando el aula del futuro
          </h2>
        </motion.div>

        <div className="impact-section__grid">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              className="impact-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="impact-card__icon-wrapper">
                <impact.icon className="impact-card__icon" size={36} />
              </div>
              <h3 className="impact-card__title">{impact.title}</h3>
              <p className="impact-card__description">{impact.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
