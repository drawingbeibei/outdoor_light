import React from 'react';
import NavigationBar from '../components/NavigationBar.tsx';
import HeroSection from '../components/HeroSection.tsx';
import ProductCategories from '../components/ProductCategories.tsx';
import AboutUs from '../components/AboutUs.tsx';
import FloatingButton from '../components/FloatingButton.tsx';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationBar />
      <main>
        <HeroSection />
        <ProductCategories />
        <AboutUs />
      </main>
      <FloatingButton />
    </div>
  );
}