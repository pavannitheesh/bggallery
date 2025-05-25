import { BACKGROUND_OPTIONS as backgrounds } from '@/data/background';

type BackgroundGalleryProps = {
  activeIndex: number;
  onBackgroundChange: (index: number) => void;
};

export function BackgroundGallery({ activeIndex, onBackgroundChange }: BackgroundGalleryProps) {
  const handleCopyCode = async (bg: typeof backgrounds[0], e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const componentString = bg.component.type.toString();
      await navigator.clipboard.writeText(componentString);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {backgrounds.map((bg, index) => (
          <div 
            key={index}
            className={`h-48 rounded-lg cursor-pointer relative border-2 overflow-hidden ${
              index === activeIndex ? 'border-blue-500 ring-4 ring-blue-300' : 'border-transparent'
            }`}
            onClick={() => onBackgroundChange(index)}
          >
            <div className="absolute inset-0">
              {bg.component}
            </div>
            <div className="absolute inset-0 bg-transparent bg-opacity-0 hover:bg-opacity-20 transition-all flex items-center justify-center">
              <div className="opacity-0 hover:opacity-100 transition-opacity">
                <button
                  className="bg-white text-black px-3 py-1 rounded shadow-lg text-sm hover:bg-gray-100 flex items-center gap-2"
                  onClick={(e) => handleCopyCode(bg, e)}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy Code
                </button>
              </div>
            </div>
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
              {bg.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}