import { motion } from 'motion/react';
import { BookOpen, GraduationCap, Brain, Users, Heart } from 'lucide-react';

const contextData = [
  {
    icon: GraduationCap,
    title: 'Educación y empleabilidad',
    content: 'La educación terciaria mejora significativamente las oportunidades laborales. En Chile, la tasa de inactividad entre jóvenes con educación superior es de solo 9%, frente al 31% de quienes no completaron la secundaria.',
    highlight: 'Mejorar el aprendizaje no solo es educativo: transforma la vida futura de los estudiantes.',
    source: '(OECD, 2025a)'
  },
  {
    icon: Brain,
    title: 'Teoría de la carga cognitiva',
    content: 'La memoria de trabajo humana es limitada. Cuando se sobrecarga (por exceso de estímulos, cansancio emocional o distracciones digitales), el aprendizaje se vuelve ineficiente.',
    highlight: 'Esto explica por qué estudiantes sobreestimulados digitalmente o desconectados emocionalmente presentan menor comprensión, más confusión y menos participación.',
    source: '(Sweller, 1988)'
  },
  {
    icon: Heart,
    title: 'La tristeza como emoción humana',
    content: 'La tristeza, una de las emociones básicas identificadas por Ekman, afecta la motivación, la energía mental y el rendimiento.',
    highlight: 'Estudios muestran que emociones negativas sostenidas están asociadas a peor rendimiento académico, mayor fatiga cognitiva y menor participación.',
    source: '(Eisenberg et al., 2005)'
  },
  {
    icon: Users,
    title: 'Redes sociales y generaciones Z y Alfa',
    content: 'Los millennials crearon y consumieron contenido. La generación Z principalmente consume, lo que ha generado una autoimagen menos realista, mayor comparación social y dificultades de atención sostenida.',
    highlight: 'Aquí es donde EmotiClass se vuelve esencial: permite detectar esa sobrecarga emocional colectiva.',
    source: '(Marambio, 2024)'
  }
];

export function ContextSection() {
  return (
    <section id="contexto" className="context-section">
      <div className="context-section__container">
        <motion.div
          className="context-section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="context-section__badge">
            <BookOpen size={20} />
            <span>CONTEXTO ACADÉMICO</span>
          </div>
          <h2 className="context-section__title">
            Información relevante
          </h2>
          <p className="context-section__subtitle">
            Fundamentos científicos y académicos que sustentan EmotiClass
          </p>
        </motion.div>

        <div className="context-section__grid">
          {contextData.map((item, index) => (
            <motion.div
              key={index}
              className="context-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="context-card__header">
                <div className="context-card__icon-wrapper">
                  <item.icon className="context-card__icon" size={28} />
                </div>
                <h3 className="context-card__title">{item.title}</h3>
              </div>
              <p className="context-card__content">{item.content}</p>
              <div className="context-card__highlight">
                <p>{item.highlight}</p>
              </div>
              <p className="context-card__source">{item.source}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}