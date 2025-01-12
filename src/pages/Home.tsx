import { GamingHero } from '@/components/GamingHero';
import { PricingSection } from '@/components/PricingSection';
import { GamesList } from '@/components/GamesList';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Home = () => {
  return (
    <main className="min-h-screen bg-gamer-dark">
      <GamingHero />
      <PricingSection />
      <GamesList />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Home;