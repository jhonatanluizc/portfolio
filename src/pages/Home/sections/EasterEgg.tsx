
import { useEffect, useState } from 'react';

interface EasterEggProps {
  onClose: () => void;
}

const EasterEgg = ({ onClose }: EasterEggProps) => {
  const [matrixChars, setMatrixChars] = useState<string[]>([]);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Generate random matrix characters
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?'.split('');
    const randomChars = Array.from({ length: 100 }, () => 
      chars[Math.floor(Math.random() * chars.length)]
    );
    setMatrixChars(randomChars);

    // Show message after animation
    const timer = setTimeout(() => setShowMessage(true), 2000);
    
    // Auto close after 10 seconds
    const autoClose = setTimeout(onClose, 10000);

    return () => {
      clearTimeout(timer);
      clearTimeout(autoClose);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-dark-primary/95 backdrop-blur-sm flex items-center justify-center">
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="matrix-rain">
          {matrixChars.map((char, index) => (
            <span
              key={index}
              className="absolute text-neon-aqua font-fira animate-pulse"
              style={{
                left: `${(index % 20) * 5}%`,
                top: `${Math.floor(index / 20) * 10}%`,
                animationDelay: `${index * 0.1}s`,
                fontSize: '14px'
              }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="terminal-window animate-fade-in">
          <div className="terminal-header">
            <div className="terminal-dots">
              <div className="terminal-dot bg-red-500 animate-pulse"></div>
              <div className="terminal-dot bg-yellow-500 animate-pulse"></div>
              <div className="terminal-dot bg-green-500 animate-pulse"></div>
            </div>
            <div className="text-xs font-fira text-gray-400">matrix_access.exe</div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-neon-pink transition-colors duration-300"
            >
              ×
            </button>
          </div>

          <div className="p-8">
            <div className="font-fira text-neon-aqua mb-8">
              <div className="text-sm mb-4">
                <span className="animate-blink">{'>'}</span> Konami Code detected...
              </div>
              <div className="text-sm mb-4">
                <span className="animate-blink">{'>'}</span> Accessing hidden features...
              </div>
              <div className="text-sm mb-6">
                <span className="animate-blink">{'>'}</span> Welcome to the Matrix, Neo.
              </div>
            </div>

            {showMessage && (
              <div className="animate-fade-in">
                <h2 className="text-4xl font-orbitron font-bold gradient-text mb-6">
                  🎮 Easter Egg Activated!
                </h2>
                
                <div className="hud-panel mb-6">
                  <div className="font-fira text-left space-y-2">
                    <div className="text-neon-aqua">const secrets = {'{'};</div>
                    <div className="ml-4 text-neon-blue">message: "You found the Konami Code!",</div>
                    <div className="ml-4 text-neon-pink">achievement: "True Gamer Unlocked",</div>
                    <div className="ml-4 text-yellow-400">easter_eggs_found: 1,</div>
                    <div className="ml-4 text-gray-300">developer_respect: "+9000",</div>
                    <div className="ml-4 text-neon-blue">konami_code: "↑↑↓↓←→←→BA"</div>
                    <div className="text-neon-aqua">{'};'}</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6 text-sm">
                  <div className="p-4 bg-dark-primary/50 rounded border border-neon-aqua/30">
                    <div className="text-neon-aqua font-bold">🏆 Achievement</div>
                    <div className="text-gray-300">Retro Gaming Master</div>
                  </div>
                  <div className="p-4 bg-dark-primary/50 rounded border border-neon-blue/30">
                    <div className="text-neon-blue font-bold">🎯 Level Up</div>
                    <div className="text-gray-300">Curiosity +100</div>
                  </div>
                  <div className="p-4 bg-dark-primary/50 rounded border border-neon-pink/30">
                    <div className="text-neon-pink font-bold">🚀 Bonus</div>
                    <div className="text-gray-300">Developer Approved</div>
                  </div>
                </div>

                <p className="text-gray-300 font-fira mb-6">
                  Congratulations! You've unlocked a secret achievement. As a fellow gamer and developer, 
                  I appreciate attention to detail and curiosity. These are the qualities that make great developers!
                </p>

                <div className="space-y-4">
                  <button
                    onClick={onClose}
                    className="w-full py-3 px-6 bg-gradient-to-r from-neon-aqua to-neon-blue text-dark-primary font-fira font-semibold rounded-lg hover:from-neon-blue hover:to-neon-pink transition-all duration-300"
                  >
                    Return to Portfolio
                  </button>
                  
                  <div className="text-xs text-gray-500 font-fira">
                    Pro tip: There might be more hidden features... 👀
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasterEgg;
