import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import RolesSection from '@/components/landing/RolesSection';
import DownloadsSection from '@/components/landing/DownloadsSection';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <RolesSection />
        <DownloadsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
