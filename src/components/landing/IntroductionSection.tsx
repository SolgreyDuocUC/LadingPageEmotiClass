import { motion } from 'motion/react';
import { MessageCircleQuestion, TrendingDown } from 'lucide-react';

export function IntroductionSection() {
  return (
    <section id="introduccion" className="intro-section">
      <div className="intro-section__container">
        <motion.div
          className="intro-section__content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="intro-section__icon-wrapper">
            <MessageCircleQuestion size={48} />
          </div>

          <h2 className="intro-section__question">
            <b>¿Te ha pasado que tienes una duda en clase, 
            pero te da miedo levantar la mano?</b>
          </h2>

          <p className="intro-section__answer">
            <strong>Buenas noticias:</strong> no eres la única persona.
          </p>

          <div className="intro-section__highlight">
            <div className="intro-section__stat-large">
              <span className="intro-section__stat-number">77.7%</span>
              <p className="intro-section__stat-text">
            Según el Journal of College Student Development <b>el 77,7% </b>
            de los estudiantes universitarios reconoce sentirse incómodo 
            al hacer preguntas en clase por miedo a ser juzgado o evaluado 
            negativamente. 
              </p>
            </div>
            <p className="intro-section__citation">
              (Henderson et al., 2021)
            </p>
          </div>

          <div className="intro-section__explanation">
            <p>
              Este fenómeno afecta directamente la <strong>participación</strong>, 
              la <strong>comprensión</strong> y la <strong>experiencia de aprendizaje</strong> en el aula.
            </p>
            <p>
              Si a eso le sumamos el miedo a la burla lo que en psicología se conoce 
              como <em>gelotofobia</em> el resultado es que miles de estudiantes optan 
              por callar, incluso cuando no entienden (Ruch et al., 2022).
            </p>
          </div>

          <div className="intro-section__opportunity">
            <TrendingDown className="intro-section__opportunity-icon" />
            <p className="intro-section__opportunity-text">
              Pero existe una <strong>oportunidad poderosa</strong> para revertir este problema.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
