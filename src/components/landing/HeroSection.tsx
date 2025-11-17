import { motion } from 'motion/react';

export function HeroSection() {
  return (
    <section className="hero-banner">
      <div className="hero-banner__container">
        <motion.div
          className="hero-banner__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="hero-banner__badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            🎓 Proyecto de Investigación DUOC UC
          </motion.div>
          
          <motion.h1 
            className="hero-banner__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            EmotiClass
          </motion.h1>
          
          <motion.p 
            className="hero-banner__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            La emoción colectiva como clave para transformar el aprendizaje en la era digital
          </motion.p>

          <motion.div
            className="hero-banner__divider"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
