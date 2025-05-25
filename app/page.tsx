'use client';
import { useState } from 'react';
import BackgroundGallery from '@/app/_components/BackgroundGallery';
import { BACKGROUND_OPTIONS as backgroundsData } from '@/data/background';

export default function Home() {
  const [activeBackground, setActiveBackground] = useState(0);

  const handleBackgroundChange = (index) => {
    setActiveBackground(index);
  };

  const Background = backgroundsData[activeBackground].component;

  return (
    <main className="min-h-screen w-full relative pt-[225px]">
      {/* Active Background */}
    {Background}
      
      {/* Content */}
      <div className="relative z-10 p-6 container mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Background Gallery</h1>
        <p className="text-lg text-center mb-10 max-w-xl mx-auto">
          Click on any background to apply it to the page. 
          Use the "Copy Code" button to copy the implementation.
        </p>
        
        <BackgroundGallery 
          activeIndex={activeBackground}
          onBackgroundChange={handleBackgroundChange}
        />
      </div>
    </main>
  );
}