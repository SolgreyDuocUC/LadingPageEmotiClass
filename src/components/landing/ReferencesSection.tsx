import { motion } from 'motion/react';
import { BookMarked } from 'lucide-react';

const references = [
  {
    authors: 'Eisenberg, D., Golberstein, E., & Gollust, S. E.',
    year: '2005',
    title: 'The economic burden of depression among college students.',
    journal: 'Journal of Mental Health Policy and Economics, 8(3), 141–146.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/16278502/'
  },
  {
    authors: 'Henderson, M., Raskind, J., & Williams, K.',
    year: '2021',
    title: 'University students\' perceptions of asking questions in class.',
    journal: 'Journal of College Student Development, 62(6), 813–828.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8439613/'
  },
  {
    authors: 'Marambio Guzmán, K.',
    year: '2024',
    title: 'Impacto de las redes sociales en la autoimagen de jóvenes chilenos.',
    journal: 'Universidad de Concepción.'
  },
  {
    authors: 'Montagud, N.',
    year: '2025',
    title: 'La teoría de la carga cognitiva de John Sweller.',
    journal: 'Psicología y Mente.',
    url: 'https://psicologiaymente.com/psicologia/teoria-carga-cognitiva-john-sweller'
  },
  {
    authors: 'OECD',
    year: '2025a',
    title: 'Panorama de la educación 2025: Chile.',
    journal: 'OECD Publications.',
    url: 'https://www.oecd.org/es/publications/2025/09/education-at-a-glance-2025-country-notes_9749f4ff/chile_49daa412.html'
  },
  {
    authors: 'Organisation for Economic Co-operation and Development',
    year: '2025b',
    title: 'Education at a Glance 2025.',
    journal: 'OECD Publishing.',
    url: 'https://www.oecd.org/en/publications/education-at-a-glance-2025_1c0d9c79-en'
  },
  {
    authors: 'Ruch, W., Proyer, R., & Platt, T.',
    year: '2022',
    title: 'Gelotophobia and university participation patterns.',
    journal: 'Psychology Science Quarterly.',
    url: 'https://dialnet.unirioja.es/servlet/articulo?codigo=8844221'
  },
  {
    authors: 'TuTerapia',
    year: '2024',
    title: '¿Qué es la tristeza y cómo gestionarla?',
    url: 'https://www.tuterapiachile.cl/blog/que-es-la-tristeza-y-como-gestionarla/'
  }
];

export function ReferencesSection() {
  return (
    <section className="references-section">
      <div className="references-section__container">
        <motion.div
          className="references-section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="references-section__badge">
            <BookMarked size={20} />
            <span>REFERENCIAS</span>
          </div>
          <h2 className="references-section__title">
            Referencias bibliográficas
          </h2>
        </motion.div>

        <motion.div
          className="references-section__list"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {references.map((ref, index) => (
            <div key={index} className="reference-item">
              <p className="reference-item__text">
                {ref.authors} ({ref.year}). <em>{ref.title}</em> {ref.journal}
                {ref.url && (
                  <>
                    {' '}
                    <a 
                      href={ref.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="reference-item__link"
                    >
                      [Enlace]
                    </a>
                  </>
                )}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
