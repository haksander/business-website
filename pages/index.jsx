import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesGrid from '../components/ServicesGrid';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <> 
      <Head>
        <title>Professional Business Solutions</title>
        <meta name="description" content="Discover premium business services and products" />
        <meta name="keywords" content="business, services, solutions, professional" />
      </Head>
      <Navbar />
      <HeroSection />
      <ServicesGrid />
      <Testimonials />
      <CTASection />
      <Footer />
    </>
  );
}