// components/BackgroundGallery.js
export default function BackgroundGallery({ backgrounds, activeIndex, onBackgroundChange, onShowCode }) {
    const SaasDashboardGridBackground = () => {
        return (
          <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950" />
            <div className="absolute inset-0">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(226, 232, 240, 0.1) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(226, 232, 240, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: "80px 80px",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(226, 232, 240, 0.2) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(226, 232, 240, 0.2) 1px, transparent 1px)
                  `,
                  backgroundSize: "20px 20px",
                }}
              />
            </div>
            <div className="absolute bottom-0 right-0 h-1/2 w-1/2 bg-gradient-to-tl from-blue-100/20 to-transparent dark:from-blue-900/10 dark:to-transparent" />
          </div>
        );
      };
      
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {backgrounds.map((bg, index) => {
          const Background = bg.component;
        
          
          return (
            <div 
              key={index}
              className={`h-48 rounded-lg  cursor-pointer relative border-2 ${
                index === activeIndex ? 'border-blue-500 ring-4 ring-blue-300' : 'border-transparent'
              }`}
              onClick={() => onBackgroundChange(index)}
            >
              <div className="absolute inset-0">
              <Background/>
              </div>
              <div className="absolute inset-0 bg-transparent bg-opacity-0 hover:bg-opacity-20 transition-all flex items-center justify-center">
                <div className="opacity-0 hover:opacity-100 transition-opacity">
                  <button
                    className="bg-white text-black px-3 py-1 rounded shadow-lg text-sm hover:bg-gray-100"
                    onClick={(e) => onShowCode(bg.code, e)}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                {bg.name}
              </div>
            </div>
          );
        })}
      </div>
    );
  }