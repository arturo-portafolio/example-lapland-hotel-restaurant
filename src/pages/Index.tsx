import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Rooms } from '@/components/Rooms';
import { Restaurant } from '@/components/Restaurant';
import { Activities } from '@/components/Activities';
import { Location } from '@/components/Location';
import { Newsletter } from '@/components/Newsletter';
import { Chatbot } from '@/components/Chatbot';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Restaurant />
        <Activities />
        <Location />
        <Newsletter />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
