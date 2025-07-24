import React, { useState } from 'react';

interface SkillCategory {
  category: string;
  items: string[];
}

interface GameSkillsProps {
  skills: SkillCategory[];
  onBack: () => void;
}

const GameSkills: React.FC<GameSkillsProps> = ({ skills, onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const powerUpColors = ['#00ff41', '#ffff00', '#ff4444', '#ff8800', '#8844ff'];
  const powerUpIcons = ['⚡', '🔥', '💎', '⭐', '🚀'];

  return (
    <div
      style={{
        background: 'linear-gradient(45deg, #1a1a2e, #16213e)',
        minHeight: '100vh',
        padding: '2rem',
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

      <div style={{ maxWidth: '1200px', margin: '0 auto', zIndex: 2, position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 
            style={{ 
              fontSize: 'clamp(1rem, 4vw, 1.5rem)',
              margin: '0 0 1rem 0',
              textShadow: '0 0 20px #00ff41',
              animation: 'glow 2s ease-in-out infinite alternate'
            }}
          >
            === HIGH SCORES ===
          </h1>
          <p 
            style={{ 
              fontSize: 'clamp(0.5rem, 2vw, 0.7rem)',
              color: '#ffff00',
              fontFamily: '"VT323", monospace'
            }}
          >
            Power-ups & Achievements Unlocked
          </p>
          <div 
            style={{ 
              fontSize: '0.6rem',
              color: '#888',
              marginTop: '1rem',
              fontFamily: '"VT323", monospace'
            }}
          >
            Total Achievements: {skills.reduce((acc, category) => acc + category.items.length, 0)}
          </div>
        </div>

        {/* Power-up Categories */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}
        >
          {skills.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              style={{
                border: `3px solid ${powerUpColors[categoryIndex % powerUpColors.length]}`,
                borderRadius: '8px',
                padding: '1.5rem',
                backgroundColor: selectedCategory === categoryIndex ? 'rgba(0, 255, 65, 0.1)' : 'rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
            >
              {/* Category Header */}
              <div
                onClick={() => setSelectedCategory(selectedCategory === categoryIndex ? null : categoryIndex)}
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}
              >
                <div
                  style={{
                    fontSize: '2rem',
                    marginRight: '1rem',
                    filter: `drop-shadow(0 0 10px ${powerUpColors[categoryIndex % powerUpColors.length]})`
                  }}
                >
                  {powerUpIcons[categoryIndex % powerUpIcons.length]}
                </div>
                <div>
                  <h3 
                    style={{ 
                      fontSize: 'clamp(0.6rem, 2vw, 0.8rem)',
                      margin: '0',
                      color: powerUpColors[categoryIndex % powerUpColors.length]
                    }}
                  >
                    {category.category.toUpperCase()}
                  </h3>
                  <p 
                    style={{ 
                      fontSize: '0.5rem',
                      margin: '0.3rem 0 0 0',
                      color: '#888',
                      fontFamily: '"VT323", monospace'
                    }}
                  >
                    {category.items.length} skills unlocked
                  </p>
                </div>
              </div>

              {/* Power-up Grid */}
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                  gap: '0.8rem'
                }}
              >
                {category.items.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    style={{
                      backgroundColor: `${powerUpColors[categoryIndex % powerUpColors.length]}20`,
                      border: `1px solid ${powerUpColors[categoryIndex % powerUpColors.length]}50`,
                      borderRadius: '4px',
                      padding: '0.8rem 0.5rem',
                      textAlign: 'center',
                      fontSize: '0.5rem',
                      color: powerUpColors[categoryIndex % powerUpColors.length],
                      position: 'relative',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      fontFamily: '"VT323", monospace'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = `${powerUpColors[categoryIndex % powerUpColors.length]}40`;
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = `0 0 15px ${powerUpColors[categoryIndex % powerUpColors.length]}50`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = `${powerUpColors[categoryIndex % powerUpColors.length]}20`;
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {/* Skill Level Indicator */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '0.2rem',
                        right: '0.2rem',
                        width: '6px',
                        height: '6px',
                        backgroundColor: powerUpColors[categoryIndex % powerUpColors.length],
                        borderRadius: '50%',
                        animation: 'blink 1.5s ease-in-out infinite'
                      }}
                    />
                    
                    <div style={{ fontWeight: 'bold', fontSize: '0.6rem' }}>
                      {skill}
                    </div>
                    
                    {/* Experience Bar */}
                    <div
                      style={{
                        marginTop: '0.5rem',
                        height: '3px',
                        backgroundColor: `${powerUpColors[categoryIndex % powerUpColors.length]}30`,
                        borderRadius: '2px',
                        overflow: 'hidden'
                      }}
                    >
                      <div
                        style={{
                          height: '100%',
                          backgroundColor: powerUpColors[categoryIndex % powerUpColors.length],
                          width: `${Math.random() * 40 + 60}%`,
                          borderRadius: '2px',
                          animation: 'progress 2s ease-in-out'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div 
          style={{
            textAlign: 'center',
            marginBottom: '2rem',
            padding: '1rem',
            border: '2px solid #ffff00',
            borderRadius: '8px',
            backgroundColor: 'rgba(255, 255, 0, 0.1)'
          }}
        >
          <h3 
            style={{ 
              fontSize: '0.8rem',
              margin: '0 0 1rem 0',
              color: '#ffff00'
            }}
          >
            PLAYER STATS
          </h3>
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '1rem',
              fontSize: '0.6rem',
              fontFamily: '"VT323", monospace'
            }}
          >
            {skills.map((category, index) => (
              <div key={index} style={{ color: powerUpColors[index % powerUpColors.length] }}>
                {category.category}: {category.items.length}
              </div>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={onBack}
            style={{
              backgroundColor: 'transparent',
              border: '2px solid #ff4444',
              color: '#ff4444',
              padding: '1rem 2rem',
              fontSize: '0.7rem',
              fontFamily: '"Press Start 2P", monospace',
              cursor: 'pointer',
              borderRadius: '4px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 68, 68, 0.2)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 68, 68, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            &lt;&lt; BACK TO MAIN MENU
          </button>
        </div>
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
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0.3; }
        }
        
        @keyframes progress {
          from { width: 0%; }
          to { width: var(--final-width, 80%); }
        }
      `}</style>
    </div>
  );
};

export default GameSkills;