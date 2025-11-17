import { motion } from 'motion/react';
import { AlertTriangle, Smartphone, Brain, Users, TrendingDown } from 'lucide-react';

const evidences = [
  {
    icon: Smartphone,
    stat: '3.6 horas',
    description: 'Los estudiantes pasan en promedio 3,6 horas diarias en pantallas recreativas, y solo el 5% cumple las recomendaciones de uso saludable. Esto se asocia con peor desempeño cognitivo.',
    source: '(Walsh et al., 2018)'
  },
  {
    icon: TrendingDown,
    stat: 'Mayor ansiedad',
    description: 'El uso intensivo de redes sociales se relaciona con niveles mayores de depresión, ansiedad y fatiga emocional, afectando directamente la motivación académica.',
    source: '(Keles et al., 2020)'
  },
  {
    icon: Brain,
    stat: 'Alteraciones cerebrales',
    description: 'Investigaciones neurobiológicas han demostrado que la exposición excesiva a pantallas se vincula con alteraciones en la sustancia blanca cerebral y menores puntajes en pruebas de lenguaje y atención.',
    source: '(Hutton et al., 2020)'
  },
  {
    icon: Users,
    stat: 'Baja participación',
    description: 'En el aula, el miedo a participar se intensifica: la ansiedad social predice significativamente la baja participación activa en discusiones.',
    source: '(Demir et al., 2023)'
  }
];

export function ProblemSection() {
  return (
    <section id="problema" className="problem-section">
      <div className="problem-section__container">
        <motion.div
          className="problem-section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="problem-section__badge">
            <AlertTriangle size={20} />
            <span>PROBLEMA / DESAFÍO</span>
          </div>
          <h2 className="problem-section__title">
            El impacto de la era digital en el aprendizaje
          </h2>
          <p className="problem-section__lead">
            El uso intensivo de redes sociales, pantallas y estímulos digitales de dopamina 
            rápida ha disminuido la capacidad de concentración y ha sobrecargado cognitivamente 
            a estudiantes y docentes. Las evidencias lo confirman:
          </p>
        </motion.div>

        <div className="problem-section__grid">
          {evidences.map((evidence, index) => (
            <motion.div
              key={index}
              className="evidence-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="evidence-card__icon-wrapper">
                <evidence.icon className="evidence-card__icon" size={32} />
              </div>
              <div className="evidence-card__stat">{evidence.stat}</div>
              <p className="evidence-card__description">{evidence.description}</p>
              <p className="evidence-card__source">{evidence.source}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="problem-section__conclusion"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="problem-section__conclusion-title">La consecuencia:</h3>
          <div className="problem-section__consequences">
            <span className="consequence-tag">Aulas silenciosas</span>
            <span className="consequence-tag">Estudiantes desconectados</span>
            <span className="consequence-tag">Profesores sin herramientas</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
