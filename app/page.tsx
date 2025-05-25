'use client';
import { useState } from 'react';
import{ BackgroundGallery }from '@/app/_components/BackgroundGallery';
import { BACKGROUND_OPTIONS as backgroundsData } from '@/data/background';

export default function Home() {
  const [activeBackground, setActiveBackground] = useState(0);

  const handleBackgroundChange = (index) => {
    setActiveBackground(index);
  };

  const Background = backgroundsData[activeBackground].component;
  const isDarkTheme = backgroundsData[activeBackground].theme === 'dark';
  return (
    <>
    <div className="fixed left-0 top-0 -z-10 h-full w-full">
      {Background}
    </div>
    <main className="h-screen w-full relative pt-[225px]">
      {/* Content */}
      <div className="relative z-10 p-6 container mx-auto">
        <h1 className={`text-5xl font-extrabold tracking-tight mb-8 text-center ${isDarkTheme ? 'text-white' : 'text-black'} font-sans`}>
          Background Gallery
        </h1>
        <p className={`text-xl leading-relaxed text-center mb-12 max-w-2xl mx-auto ${isDarkTheme ? 'text-white/90' : 'text-black/90'} font-light`}>
          Click on any background to apply it to the page. 
          Use the "Copy Code" button to copy the implementation.
        </p>
      </div>
      <div className="overflow-hidden px-4 pb-20 pt-52 md:px-10">
        <BackgroundGallery 
          activeIndex={activeBackground}
          onBackgroundChange={handleBackgroundChange}
        />
      </div>
    </main>
    </>
  );
}