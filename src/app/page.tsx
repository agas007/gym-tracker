import Navbar from '@/app/components/landing/Navbar';
import Hero from '@/app/components/landing/Hero';
import Features from '@/app/components/landing/Features';
import Pricing from '@/app/components/landing/Pricing';
import Footer from '@/app/components/landing/Footer';

export default function Home() {
  return (
    <div className="bg-zinc-900 min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}
