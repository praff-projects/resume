import React, { useState } from 'react';

interface GameMenuProps {
  onMenuSelect: (section: string) => void;
}

const GameMenu: React.FC<GameMenuProps> = ({ onMenuSelect }) => {
  const [selectedOption, setSelectedOption] = useState(0);

  const menuOptions = [
    { id: 'start', label: '>>> START GAME <<<', description: 'View Full Resume' },
    { id: 'levels', label: '>>> SELECT LEVEL <<<', description: 'Choose Work Experience' },
    { id: 'scores', label: '>>> HIGH SCORES <<<', description: 'Skills & Achievements' },
    { id: 'options', label: '>>> OPTIONS <<<', description: 'Contact Information' }
  ];

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      setSelectedOption(prev => prev > 0 ? prev - 1 : menuOptions.length - 1);
    } else if (e.key === 'ArrowDown') {
      setSelectedOption(prev => prev < menuOptions.length - 1 ? prev + 1 : 0);
    } else if (e.key === 'Enter') {
      onMenuSelect(menuOptions[selectedOption].id);
    }
  };

  return (
    <div 
      className="game-menu"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      style={{
        background: 'linear-gradient(45deg, #1a1a2e, #16213e)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '"Press Start 2P", monospace',
        color: '#00ff41',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Scanlines Effect */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 65, 0.05) 2px, rgba(0, 255, 65, 0.05) 4px)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      {/* Game Title */}
      <div style={{ textAlign: 'center', marginBottom: '4rem', zIndex: 2 }}>
        <h1 
          style={{ 
            fontSize: 'clamp(1rem, 4vw, 2rem)',
            margin: '0 0 1rem 0',
            textShadow: '0 0 20px #00ff41, 0 0 40px #00ff41',
            animation: 'glow 2s ease-in-out infinite alternate'
          }}
        >
          RESUME.EXE
        </h1>
        <p 
          style={{ 
            fontSize: 'clamp(0.5rem, 2vw, 0.8rem)',
            margin: 0,
            color: '#ffff00',
            fontFamily: '"VT323", monospace'
          }}
        >
          Interactive Professional Experience v2.0
        </p>
      </div>

      {/* Menu Options */}
      <div style={{ zIndex: 2 }}>
        {menuOptions.map((option, index) => (
          <div
            key={option.id}
            onClick={() => onMenuSelect(option.id)}
            onMouseEnter={() => setSelectedOption(index)}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '1rem 2rem',
              margin: '0.5rem 0',
              cursor: 'pointer',
              backgroundColor: selectedOption === index ? 'rgba(0, 255, 65, 0.2)' : 'transparent',
              border: selectedOption === index ? '2px solid #00ff41' : '2px solid transparent',
              borderRadius: '4px',
              transition: 'all 0.3s ease',
              minWidth: '300px',
              fontSize: 'clamp(0.6rem, 2vw, 0.8rem)',
              transform: selectedOption === index ? 'scale(1.05)' : 'scale(1)',
              boxShadow: selectedOption === index ? '0 0 20px rgba(0, 255, 65, 0.5)' : 'none'
            }}
          >
            <span style={{ color: selectedOption === index ? '#ffff00' : '#00ff41' }}>
              {selectedOption === index ? '> ' : '  '}
            </span>
            <div>
              <div>{option.label}</div>
              <div 
                style={{ 
                  fontSize: '0.6rem', 
                  color: '#888', 
                  fontFamily: '"VT323", monospace',
                  marginTop: '0.3rem'
                }}
              >
                {option.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Instructions */}
      <div 
        style={{ 
          position: 'absolute',
          bottom: '2rem',
          fontSize: '0.6rem',
          color: '#666',
          textAlign: 'center',
          zIndex: 2,
          fontFamily: '"VT323", monospace'
        }}
      >
        Use ↑↓ keys to navigate • Press ENTER to select • Click to choose
      </div>

      <style>{`
        @keyframes glow {
          from { 
            text-shadow: 0 0 20px #00ff41, 0 0 40px #00ff41;
          }
          to { 
            text-shadow: 0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41;
          }
        }
        
        @media (max-width: 768px) {
          .game-menu {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default GameMenu;