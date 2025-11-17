import { Header } from './components/landing/Header';
import { HeroSection } from './components/landing/HeroSection';
import { IntroductionSection } from './components/landing/IntroductionSection';
import { ProblemSection } from './components/landing/ProblemSection';
import { SolutionSection } from './components/landing/SolutionSection';
import { DifferentialValueSection } from './components/landing/DifferentialValueSection';
import { ImpactSection } from './components/landing/ImpactSection';
import { ContextSection } from './components/landing/ContextSection';
import { VisionSection } from './components/landing/VisionSection';
import { ReferencesSection } from './components/landing/ReferencesSection';
import { Footer } from './components/landing/Footer';

export default function App() {
  return (
    <div className="landing-page">
      <Header />
      <main>
        <HeroSection />
        <IntroductionSection />
        <ProblemSection />
        <SolutionSection />
        <DifferentialValueSection />
        <ImpactSection />
        <ContextSection />
        <VisionSection />
        <ReferencesSection />
      </main>
      <Footer />
    </div>
  );
}
