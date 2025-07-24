import React, { useState } from 'react';

interface ExperienceItem {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

interface GameLevelsProps {
  experiences: ExperienceItem[];
  onBack: () => void;
}

const GameLevels: React.FC<GameLevelsProps> = ({ experiences, onBack }) => {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [hoveredLevel, setHoveredLevel] = useState<number | null>(null);

  const levelDifficulty = ['BEGINNER', 'INTERMEDIATE', 'EXPERT'];
  const levelColors = ['#00ff41', '#ffff00', '#ff4444'];

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
              textShadow: '0 0 20px #00ff41'
            }}
          >
            === LEVEL SELECT ===
          </h1>
          <p 
            style={{ 
              fontSize: 'clamp(0.5rem, 2vw, 0.7rem)',
              color: '#ffff00',
              fontFamily: '"VT323", monospace'
            }}
          >
            Choose your professional journey
          </p>
        </div>

        {/* Level Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}
        >
          {experiences.map((exp, index) => (
            <div
              key={index}
              onClick={() => setSelectedLevel(selectedLevel === index ? null : index)}
              onMouseEnter={() => setHoveredLevel(index)}
              onMouseLeave={() => setHoveredLevel(null)}
              style={{
                border: `3px solid ${levelColors[index % levelColors.length]}`,
                borderRadius: '8px',
                padding: '1.5rem',
                backgroundColor: selectedLevel === index ? 'rgba(0, 255, 65, 0.1)' : 'rgba(0, 0, 0, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: hoveredLevel === index ? 'scale(1.05)' : 'scale(1)',
                boxShadow: hoveredLevel === index ? `0 0 30px ${levelColors[index % levelColors.length]}50` : 'none',
                position: 'relative'
              }}
            >
              {/* Level Badge */}
              <div 
                style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '1rem',
                  backgroundColor: levelColors[index % levelColors.length],
                  color: '#000',
                  padding: '0.3rem 0.8rem',
                  fontSize: '0.5rem',
                  fontWeight: 'bold',
                  borderRadius: '4px'
                }}
              >
                LEVEL {experiences.length - index} - {levelDifficulty[index % levelDifficulty.length]}
              </div>

              {/* Company Logo Placeholder */}
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: levelColors[index % levelColors.length],
                  margin: '0 auto 1rem auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  color: '#000',
                  fontWeight: 'bold',
                  borderRadius: '4px'
                }}
              >
                {exp.company.charAt(0)}
              </div>

              {/* Level Info */}
              <div style={{ textAlign: 'center' }}>
                <h3 
                  style={{ 
                    fontSize: 'clamp(0.6rem, 2vw, 0.8rem)',
                    margin: '0 0 0.5rem 0',
                    color: levelColors[index % levelColors.length]
                  }}
                >
                  {exp.company.toUpperCase()}
                </h3>
                <p 
                  style={{ 
                    fontSize: 'clamp(0.5rem, 1.5vw, 0.6rem)',
                    margin: '0 0 0.5rem 0',
                    color: '#ffff00',
                    fontFamily: '"VT323", monospace'
                  }}
                >
                  {exp.position}
                </p>
                <p 
                  style={{ 
                    fontSize: '0.5rem',
                    margin: '0',
                    color: '#888',
                    fontFamily: '"VT323", monospace'
                  }}
                >
                  {exp.startDate} - {exp.endDate}
                </p>
              </div>

              {/* Expanded Details */}
              {selectedLevel === index && (
                <div 
                  style={{ 
                    marginTop: '1rem', 
                    paddingTop: '1rem', 
                    borderTop: `1px solid ${levelColors[index % levelColors.length]}50`
                  }}
                >
                  <h4 
                    style={{ 
                      fontSize: '0.6rem',
                      margin: '0 0 0.8rem 0',
                      color: '#ffff00'
                    }}
                  >
                    ACHIEVEMENTS UNLOCKED:
                  </h4>
                  <ul style={{ margin: 0, padding: '0 0 0 1rem', fontSize: '0.5rem', color: '#ccc' }}>
                    {exp.description.map((achievement, i) => (
                      <li key={i} style={{ marginBottom: '0.5rem', fontFamily: '"VT323", monospace' }}>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
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
    </div>
  );
};

export default GameLevels;