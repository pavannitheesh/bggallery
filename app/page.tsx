// app/page.js
'use client';
import { useState } from 'react';
import BackgroundGallery from '@/app/_components/BackgroundGallery';
import CodeModal from '@/app/_components/CodeModal';
import  backgroundsData from '@/data/background';

export default function Home() {
  const [activeBackground, setActiveBackground] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedCode, setSelectedCode] = useState('');

  const handleBackgroundChange = (index) => {
    setActiveBackground(index);
  };

  const handleShowCode = (code, e) => {
    e.stopPropagation();
    setSelectedCode(code);
    setShowModal(true);
  };

  const Background = backgroundsData[activeBackground].component;

  return (
    <main className="min-h-screen w-full relative">
      {/* Active Background */}
      <Background />
      
      {/* Content */}
      <div className="relative z-10 p-6 container mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Background Gallery</h1>
        <p className="text-lg text-center mb-10 max-w-xl mx-auto">
          Click on any background to apply it to the page. 
          Use the "View Code" button to see the implementation.
        </p>
        
        <BackgroundGallery 
          backgrounds={backgroundsData}
          activeIndex={activeBackground}
          onBackgroundChange={handleBackgroundChange}
          onShowCode={handleShowCode}
        />
      </div>

      {/* Code Modal */}
      {showModal && (
        <CodeModal 
          code={selectedCode} 
          onClose={() => setShowModal(false)} 
        />
      )}
    </main>
  );
}