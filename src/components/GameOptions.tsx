import React, { useState } from 'react';

interface ContactData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website?: string;
  linkedin?: string;
  github?: string;
}

interface GameOptionsProps {
  contactData: ContactData;
  onBack: () => void;
}

const GameOptions: React.FC<GameOptionsProps> = ({ contactData, onBack }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const contactOptions = [
    { 
      label: 'EMAIL', 
      value: contactData.email, 
      icon: '📧', 
      color: '#00ff41',
      action: () => window.location.href = `mailto:${contactData.email}`
    },
    { 
      label: 'PHONE', 
      value: contactData.phone, 
      icon: '📞', 
      color: '#ffff00',
      action: () => window.location.href = `tel:${contactData.phone}`
    },
    { 
      label: 'LOCATION', 
      value: contactData.location, 
      icon: '📍', 
      color: '#ff4444',
      action: () => {}
    },
    { 
      label: 'WEBSITE', 
      value: contactData.website || 'Not Available', 
      icon: '🌐', 
      color: '#ff8800',
      action: () => contactData.website && window.open(contactData.website, '_blank')
    },
    { 
      label: 'LINKEDIN', 
      value: contactData.linkedin || 'Not Available', 
      icon: '💼', 
      color: '#8844ff',
      action: () => contactData.linkedin && window.open(contactData.linkedin, '_blank')
    },
    { 
      label: 'GITHUB', 
      value: contactData.github || 'Not Available', 
      icon: '⚙️', 
      color: '#00ff88',
      action: () => contactData.github && window.open(contactData.github, '_blank')
    }
  ];

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

      <div style={{ maxWidth: '800px', margin: '0 auto', zIndex: 2, position: 'relative' }}>
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
            === OPTIONS ===
          </h1>
          <p 
            style={{ 
              fontSize: 'clamp(0.5rem, 2vw, 0.7rem)',
              color: '#ffff00',
              fontFamily: '"VT323", monospace'
            }}
          >
            Contact & Connection Settings
          </p>
        </div>

        {/* Player Info Card */}
        <div 
          style={{
            border: '3px solid #00ff41',
            borderRadius: '8px',
            padding: '2rem',
            marginBottom: '2rem',
            backgroundColor: 'rgba(0, 255, 65, 0.1)',
            textAlign: 'center'
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              backgroundColor: '#00ff41',
              margin: '0 auto 1rem auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              color: '#000',
              fontWeight: 'bold',
              borderRadius: '50%',
              border: '4px solid #fff'
            }}
          >
            {contactData.name.split(' ').map(n => n.charAt(0)).join('')}
          </div>
          <h2 
            style={{ 
              fontSize: 'clamp(0.8rem, 3vw, 1rem)',
              margin: '0 0 0.5rem 0',
              color: '#00ff41'
            }}
          >
            {contactData.name.toUpperCase()}
          </h2>
          <p 
            style={{ 
              fontSize: 'clamp(0.5rem, 2vw, 0.7rem)',
              margin: '0',
              color: '#ffff00',
              fontFamily: '"VT323", monospace'
            }}
          >
            {contactData.title}
          </p>
        </div>

        {/* Contact Options Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}
        >
          {contactOptions.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedOption(index);
                option.action();
              }}
              onMouseEnter={() => setSelectedOption(index)}
              onMouseLeave={() => setSelectedOption(null)}
              style={{
                border: `2px solid ${option.color}`,
                borderRadius: '8px',
                padding: '1.5rem',
                backgroundColor: selectedOption === index ? `${option.color}20` : 'rgba(0, 0, 0, 0.3)',
                cursor: option.value !== 'Not Available' ? 'pointer' : 'default',
                transition: 'all 0.3s ease',
                transform: selectedOption === index ? 'scale(1.02)' : 'scale(1)',
                boxShadow: selectedOption === index ? `0 0 20px ${option.color}50` : 'none',
                opacity: option.value === 'Not Available' ? 0.5 : 1
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <div
                  style={{
                    fontSize: '1.5rem',
                    marginRight: '1rem',
                    filter: `drop-shadow(0 0 5px ${option.color})`
                  }}
                >
                  {option.icon}
                </div>
                <h3 
                  style={{ 
                    fontSize: 'clamp(0.6rem, 2vw, 0.8rem)',
                    margin: '0',
                    color: option.color
                  }}
                >
                  {option.label}
                </h3>
              </div>
              
              <div 
                style={{ 
                  fontSize: '0.5rem',
                  color: '#ccc',
                  fontFamily: '"VT323", monospace',
                  wordBreak: 'break-word'
                }}
              >
                {option.value}
              </div>

              {/* Status Indicator */}
              <div
                style={{
                  marginTop: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '0.4rem',
                  color: option.value !== 'Not Available' ? '#00ff41' : '#ff4444'
                }}
              >
                <div
                  style={{
                    width: '6px',
                    height: '6px',
                    backgroundColor: option.value !== 'Not Available' ? '#00ff41' : '#ff4444',
                    borderRadius: '50%',
                    marginRight: '0.5rem',
                    animation: option.value !== 'Not Available' ? 'blink 1.5s ease-in-out infinite' : 'none'
                  }}
                />
                {option.value !== 'Not Available' ? 'ACTIVE' : 'UNAVAILABLE'}
              </div>
            </div>
          ))}
        </div>

        {/* Game Settings */}
        <div 
          style={{
            border: '2px solid #888',
            borderRadius: '8px',
            padding: '1.5rem',
            marginBottom: '2rem',
            backgroundColor: 'rgba(0, 0, 0, 0.3)'
          }}
        >
          <h3 
            style={{ 
              fontSize: '0.8rem',
              margin: '0 0 1rem 0',
              color: '#888'
            }}
          >
            GAME SETTINGS
          </h3>
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              fontSize: '0.5rem',
              fontFamily: '"VT323", monospace'
            }}
          >
            <div style={{ color: '#00ff41' }}>
              Version: 2.0.1
            </div>
            <div style={{ color: '#ffff00' }}>
              Build: React + TypeScript
            </div>
            <div style={{ color: '#ff8800' }}>
              Responsive: Enabled
            </div>
            <div style={{ color: '#8844ff' }}>
              Accessibility: Maintained
            </div>
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
      `}</style>
    </div>
  );
};

export default GameOptions;