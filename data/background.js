// data/backgrounds.js

 const backgroundsData = [
    {
      name: "Tech Radial",
      component: () => (
        <div className="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
          {/* Tech-themed radial gradients */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_30%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_30%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.1),transparent_30%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.15),transparent_30%)]" />
          </div>
          
          {/* Circuit Lines */}
          <div className="absolute inset-0 overflow-hidden opacity-10 dark:opacity-20">
            <svg width="100%" height="100%" className="absolute">
              <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path
                  d="M0 50h40c5.5 0 10 4.5 10 10s4.5 10 10 10h40M50 0v40c0 5.5 4.5 10 10 10s10 4.5 10 10v40"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                  className="text-gray-400 dark:text-gray-600"
                />
              </pattern>
              <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
            </svg>
          </div>
          
          {/* Binary numbers */}
          <div className="absolute inset-0 opacity-5 dark:opacity-10">
            <div className="absolute left-[10%] top-[15%] text-xs font-mono text-gray-900 dark:text-gray-200">0</div>
            <div className="absolute left-[20%] top-[25%] text-xs font-mono text-gray-900 dark:text-gray-200">1</div>
            <div className="absolute left-[30%] top-[45%] text-xs font-mono text-gray-900 dark:text-gray-200">0</div>
            <div className="absolute left-[40%] top-[65%] text-xs font-mono text-gray-900 dark:text-gray-200">1</div>
            <div className="absolute left-[50%] top-[85%] text-xs font-mono text-gray-900 dark:text-gray-200">0</div>
            <div className="absolute left-[60%] top-[35%] text-xs font-mono text-gray-900 dark:text-gray-200">1</div>
            <div className="absolute left-[70%] top-[55%] text-xs font-mono text-gray-900 dark:text-gray-200">0</div>
            <div className="absolute left-[80%] top-[75%] text-xs font-mono text-gray-900 dark:text-gray-200">1</div>
            <div className="absolute left-[90%] top-[5%] text-xs font-mono text-gray-900 dark:text-gray-200">0</div>
          </div>
        </div>
      ),
      code: `<div className="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
    {/* Tech-themed radial gradients */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_30%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_30%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.1),transparent_30%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.15),transparent_30%)]" />
    </div>
    
    {/* Circuit Lines */}
    <div className="absolute inset-0 overflow-hidden opacity-10 dark:opacity-20">
      <svg width="100%" height="100%" className="absolute">
        <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path
            d="M0 50h40c5.5 0 10 4.5 10 10s4.5 10 10 10h40M50 0v40c0 5.5 4.5 10 10 10s10 4.5 10 10v40"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-gray-400 dark:text-gray-600"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
      </svg>
    </div>
    
    {/* Binary numbers */}
    <div className="absolute inset-0 opacity-5 dark:opacity-10">
      <div className="absolute left-[10%] top-[15%] text-xs font-mono text-gray-900 dark:text-gray-200">0</div>
      <div className="absolute left-[20%] top-[25%] text-xs font-mono text-gray-900 dark:text-gray-200">1</div>
      <div className="absolute left-[30%] top-[45%] text-xs font-mono text-gray-900 dark:text-gray-200">0</div>
      <div className="absolute left-[40%] top-[65%] text-xs font-mono text-gray-900 dark:text-gray-200">1</div>
      <div className="absolute left-[50%] top-[85%] text-xs font-mono text-gray-900 dark:text-gray-200">0</div>
      <div className="absolute left-[60%] top-[35%] text-xs font-mono text-gray-900 dark:text-gray-200">1</div>
      <div className="absolute left-[70%] top-[55%] text-xs font-mono text-gray-900 dark:text-gray-200">0</div>
      <div className="absolute left-[80%] top-[75%] text-xs font-mono text-gray-900 dark:text-gray-200">1</div>
      <div className="absolute left-[90%] top-[5%] text-xs font-mono text-gray-900 dark:text-gray-200">0</div>
    </div>
  </div>`
    },
    {
      name: "Gradient Mesh",
      component: () => (
        <div className="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950"></div>
          <div className="absolute inset-0 opacity-30 dark:opacity-40">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <defs>
                <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(100, 100, 200, 0.3)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>
          </div>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-pink-200/10 to-transparent dark:via-pink-800/10"></div>
        </div>
      ),
      code: `<div className="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950"></div>
    <div className="absolute inset-0 opacity-30 dark:opacity-40">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(100, 100, 200, 0.3)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
    </div>
    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-pink-200/10 to-transparent dark:via-pink-800/10"></div>
  </div>`
    },
    {
      name: "Dots Pattern",
      component: () => (
        <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900 overflow-hidden">
          <div className="absolute inset-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <defs>
                <pattern id="dots-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1.5" fill="#CBD5E1" className="dark:fill-gray-700" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots-pattern)" />
            </svg>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-100/20 to-transparent dark:from-blue-950/30"></div>
        </div>
      ),
      code: `<div className="absolute inset-0 bg-gray-50 dark:bg-gray-900 overflow-hidden">
    <div className="absolute inset-0">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <pattern id="dots-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1.5" fill="#CBD5E1" className="dark:fill-gray-700" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots-pattern)" />
      </svg>
    </div>
    <div className="absolute inset-0 bg-gradient-to-b from-blue-100/20 to-transparent dark:from-blue-950/30"></div>
  </div>`
    },
    {
      name: "Wave Pattern",
      component: () => (
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950 dark:to-blue-950 overflow-hidden">
          <div className="absolute inset-0 opacity-20 dark:opacity-30">
            <svg viewBox="0 0 100 100" width="100%" height="100%" preserveAspectRatio="none">
              <path d="M0,50 Q25,30 50,50 T100,50 V100 H0 Z" fill="rgba(56, 189, 248, 0.5)" />
              <path d="M0,60 Q25,40 50,60 T100,60 V100 H0 Z" fill="rgba(56, 189, 248, 0.3)" />
              <path d="M0,70 Q25,50 50,70 T100,70 V100 H0 Z" fill="rgba(56, 189, 248, 0.1)" />
            </svg>
          </div>
        </div>
      ),
      code: `<div className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950 dark:to-blue-950 overflow-hidden">
    <div className="absolute inset-0 opacity-20 dark:opacity-30">
      <svg viewBox="0 0 100 100" width="100%" height="100%" preserveAspectRatio="none">
        <path d="M0,50 Q25,30 50,50 T100,50 V100 H0 Z" fill="rgba(56, 189, 248, 0.5)" />
        <path d="M0,60 Q25,40 50,60 T100,60 V100 H0 Z" fill="rgba(56, 189, 248, 0.3)" />
        <path d="M0,70 Q25,50 50,70 T100,70 V100 H0 Z" fill="rgba(56, 189, 248, 0.1)" />
      </svg>
    </div>
  </div>`
    },
    {
      name: "Geometric",
      component: () => (
        <div className="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"></div>
          <div className="absolute inset-0">
            <svg width="100%" height="100%">
              <pattern id="triangles" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M0 0 L30 52 L60 0 Z" fill="none" stroke="rgba(100,100,100,0.1)" strokeWidth="1" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#triangles)" />
            </svg>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-200/20 to-transparent dark:from-green-900/10"></div>
        </div>
      ),
      code: `<div className="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"></div>
    <div className="absolute inset-0">
      <svg width="100%" height="100%">
        <pattern id="triangles" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M0 0 L30 52 L60 0 Z" fill="none" stroke="rgba(100,100,100,0.1)" strokeWidth="1" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#triangles)" />
      </svg>
    </div>
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-200/20 to-transparent dark:from-green-900/10"></div>
  </div>`
    },
    {
      name: "Bubble Pattern",
      component: () => (
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 overflow-hidden">
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-indigo-300/20 dark:bg-indigo-500/20"
                style={{
                  width: `${(5 + ((i * 13) % 10))}%`,
                  height: `${(5 + ((i * 17) % 10))}%`,
                  left: `${((i * 23) % 90)}%`,
                  top: `${((i * 29) % 90)}%`,
                  animationDuration: `${(10 + ((i * 31) % 10))}s`,
                  animationDelay: `${((i * 37) % 5)}s`,
                }}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-200/20 to-transparent dark:from-indigo-700/20"></div>
        </div>
      ),
      code: `<div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 overflow-hidden">
    <div className="absolute inset-0">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-indigo-300/20 dark:bg-indigo-500/20"
          style={{
            width: \`\${(5 + ((i * 13) % 10))}%\`,
            height: \`\${(5 + ((i * 17) % 10))}%\`,
            left: \`\${((i * 23) % 90)}%\`,
            top: \`\${((i * 29) % 90)}%\`,
            animationDuration: \`\${(10 + ((i * 31) % 10))}s\`,
            animationDelay: \`\${((i * 37) % 5)}s\`,
          }}
        />
      ))}
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-indigo-200/20 to-transparent dark:from-indigo-700/20"></div>
  </div>`
    },
    {
      name: "Diagonal Lines",
      component: () => (
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-900 overflow-hidden">
          <div className="absolute inset-0">
            <svg width="100%" height="100%">
              <pattern id="diagonalLines" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="10" stroke="rgba(100,100,100,0.1)" strokeWidth="1" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#diagonalLines)" />
            </svg>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-amber-200/10 to-orange-200/10 dark:from-amber-900/10 dark:to-orange-900/10"></div>
        </div>
      ),
      code: `<div className="absolute inset-0 bg-gray-100 dark:bg-gray-900 overflow-hidden">
    <div className="absolute inset-0">
      <svg width="100%" height="100%">
        <pattern id="diagonalLines" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="10" stroke="rgba(100,100,100,0.1)" strokeWidth="1" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#diagonalLines)" />
      </svg>
    </div>
    <div className="absolute inset-0 bg-gradient-to-br from-amber-200/10 to-orange-200/10 dark:from-amber-900/10 dark:to-orange-900/10"></div>
  </div>`
    },
    {
      name: "Confetti",
      component: () => (
        <div className="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  width: `${(2 + ((i * 13) % 10))}px`,
                  height: `${(2 + ((i * 17) % 10))}px`,
                  borderRadius: ((i * 41) % 2) === 0 ? '50%' : '0%',
                  backgroundColor: `hsl(${((i * 47) % 360)}, 70%, 60%)`,
                  left: `${((i * 53) % 100)}%`,
                  top: `${((i * 59) % 100)}%`,
                  opacity: (0.2 + ((i * 67) % 5) / 10),
                }}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/40 dark:to-gray-950/40"></div>
        </div>
      ),
      code: `<div className="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
    <div className="absolute inset-0">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            width: \`\${(2 + ((i * 13) % 10))}px\`,
            height: \`\${(2 + ((i * 17) % 10))}px\`,
            borderRadius: ((i * 41) % 2) === 0 ? '50%' : '0%',
            backgroundColor: \`hsl(\${((i * 47) % 360)}, 70%, 60%)\`,
            left: \`\${((i * 53) % 100)}%\`,
            top: \`\${((i * 59) % 100)}%\`,
            opacity: (0.2 + ((i * 67) % 5) / 10),
          }}
        />
      ))}
    </div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/40 dark:to-gray-950/40"></div>
  </div>`
    },
    {
      name: "Gradient Noise",
      component: () => (
        <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900 overflow-hidden">
          <div className="absolute inset-0 opacity-40 dark:opacity-60">
            <svg width="100%" height="100%">
              <filter id="noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                <feColorMatrix type="saturate" values="0" />
              </filter>
              <rect width="100%" height="100%" filter="url(#noise)" />
            </svg>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-rose-300/20 via-transparent to-amber-300/20 dark:from-rose-900/20 dark:to-amber-900/20"></div>
        </div>
      ),
      code: `<div className="absolute inset-0 bg-gray-50 dark:bg-gray-900 overflow-hidden">
    <div className="absolute inset-0 opacity-40 dark:opacity-60">
      <svg width="100%" height="100%">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
    <div className="absolute inset-0 bg-gradient-to-br from-rose-300/20 via-transparent to-amber-300/20 dark:from-rose-900/20 dark:to-amber-900/20"></div>
  </div>`
    }, {
      name: "Circuit Board",
      component: () => (
        <div className="absolute inset-0 bg-gray-950 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%">
              <pattern
                id="circuit-pattern"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <rect width="40" height="40" fill="transparent" />
                <path 
                  d="M0 20H40M20 0V40" 
                  stroke="currentColor" 
                  strokeWidth="0.5" 
                  className="text-blue-400"
                />
                <circle cx="20" cy="20" r="1" fill="currentColor" className="text-emerald-400" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
            </svg>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-emerald-900/20"></div>
        </div>
      ),
      code: `<div className="absolute inset-0 bg-gray-950 overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      <svg width="100%" height="100%">
        <pattern
          id="circuit-pattern"
          x="0"
          y="0"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <rect width="40" height="40" fill="transparent" />
          <path 
            d="M0 20H40M20 0V40" 
            stroke="currentColor" 
            strokeWidth="0.5" 
            className="text-blue-400"
          />
          <circle cx="20" cy="20" r="1" fill="currentColor" className="text-emerald-400" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
      </svg>
    </div>
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-emerald-900/20"></div>
  </div>`
    },
    {
      name: "Dot Matrix",
      component: () => (
        <div className="absolute inset-0 bg-gray-900 overflow-hidden">
          <div className="absolute inset-0 opacity-30 dark:opacity-40">
            <svg width="100%" height="100%">
              <pattern
                id="dot-pattern"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="10" cy="10" r="0.5" fill="currentColor" className="text-purple-400" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#dot-pattern)" />
            </svg>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-indigo-900/30"></div>
        </div>
      ),
      code: `<div className="absolute inset-0 bg-gray-900 overflow-hidden">
    <div className="absolute inset-0 opacity-30 dark:opacity-40">
      <svg width="100%" height="100%">
        <pattern
          id="dot-pattern"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="10" cy="10" r="0.5" fill="currentColor" className="text-purple-400" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#dot-pattern)" />
      </svg>
    </div>
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-indigo-900/30"></div>
  </div>`
    },
    {
      name: "Hexagonal Grid",
      component: () => (
        <div className="absolute inset-0 bg-gray-950 overflow-hidden">
          <div className="absolute inset-0 opacity-15">
            <svg width="100%" height="100%">
              <pattern
                id="hex-pattern"
                x="0"
                y="0"
                width="86"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <path 
                  d="M0 50L43 25L86 50L86 75L43 100L0 75Z" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="0.8" 
                  className="text-cyan-400"
                />
                <path 
                  d="M43 0L86 25L86 50L43 75L0 50L0 25Z" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="0.8" 
                  className="text-cyan-400"
                />
              </pattern>
              <rect width="100%" height="100%" fill="url(#hex-pattern)" />
            </svg>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-gray-900"></div>
        </div>
      ),
      code: `<div className="absolute inset-0 bg-gray-950 overflow-hidden">
    <div className="absolute inset-0 opacity-15">
      <svg width="100%" height="100%">
        <pattern
          id="hex-pattern"
          x="0"
          y="0"
          width="86"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          <path 
            d="M0 50L43 25L86 50L86 75L43 100L0 75Z" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.8" 
            className="text-cyan-400"
          />
          <path 
            d="M43 0L86 25L86 50L43 75L0 50L0 25Z" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.8" 
            className="text-cyan-400"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#hex-pattern)" />
      </svg>
    </div>
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-gray-900"></div>
  </div>`
    },
    {
      name: "Waves",
      component: () => (
        <div className="absolute inset-0 bg-gray-900 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%">
              <pattern
                id="wave-pattern"
                x="0"
                y="0"
                width="120"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <path 
                  d="M0 40 Q30 20 60 40 T120 40" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1" 
                  className="text-violet-400"
                />
                <path 
                  d="M0 60 Q30 40 60 60 T120 60" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1" 
                  className="text-violet-400"
                  strokeDasharray="2,2"
                />
              </pattern>
              <rect width="100%" height="100%" fill="url(#wave-pattern)" />
            </svg>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-transparent to-gray-900"></div>
        </div>
      ),
      code: `<div className="absolute inset-0 bg-gray-900 overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      <svg width="100%" height="100%">
        <pattern
          id="wave-pattern"
          x="0"
          y="0"
          width="120"
          height="80"
          patternUnits="userSpaceOnUse"
        >
          <path 
            d="M0 40 Q30 20 60 40 T120 40" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1" 
            className="text-violet-400"
          />
          <path 
            d="M0 60 Q30 40 60 60 T120 60" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1" 
            className="text-violet-400"
            strokeDasharray="2,2"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#wave-pattern)" />
      </svg>
    </div>
    <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-transparent to-gray-900"></div>
  </div>`
    },
    {
      name: "Diagonal Stripes",
      component: () => (
        <div className="absolute inset-0 bg-gray-950 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%">
              <pattern
                id="stripe-pattern"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
              >
                <rect width="20" height="40" fill="currentColor" className="text-indigo-400" opacity="0.3" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#stripe-pattern)" />
            </svg>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-gray-900"></div>
        </div>
      ),
      code: `<div className="absolute inset-0 bg-gray-950 overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <svg width="100%" height="100%">
        <pattern
          id="stripe-pattern"
          x="0"
          y="0"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <rect width="20" height="40" fill="currentColor" className="text-indigo-400" opacity="0.3" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#stripe-pattern)" />
      </svg>
    </div>
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-gray-900"></div>
  </div>`
    }]
    export default backgroundsData;
   
 