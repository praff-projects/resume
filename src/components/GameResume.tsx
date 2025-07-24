import React from 'react';

interface ExperienceItem {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  graduationDate: string;
  gpa: string;
  honors: string[];
}

interface SkillCategory {
  category: string;
  items: string[];
}

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

interface GameResumeProps {
  headerData: ContactData;
  experienceData: ExperienceItem[];
  educationData: EducationItem[];
  skillsData: SkillCategory[];
  onBack: () => void;
}

const GameResume: React.FC<GameResumeProps> = ({ 
  headerData, 
  experienceData, 
  educationData, 
  skillsData, 
  onBack 
}) => {
  return (
    <div
      style={{
        background: 'linear-gradient(45deg, #1a1a2e, #16213e)',
        minHeight: '100vh',
        padding: '2rem',
        fontFamily: '"VT323", monospace',
        color: '#00ff41',
        position: 'relative'
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

      <div style={{ maxWidth: '900px', margin: '0 auto', zIndex: 2, position: 'relative' }}>
        {/* Game Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 
            style={{ 
              fontSize: 'clamp(1rem, 4vw, 1.5rem)',
              margin: '0 0 1rem 0',
              textShadow: '0 0 20px #00ff41',
              animation: 'glow 2s ease-in-out infinite alternate',
              fontFamily: '"Press Start 2P", monospace'
            }}
          >
            === FULL RESUME ===
          </h1>
          <p 
            style={{ 
              fontSize: 'clamp(0.5rem, 2vw, 0.7rem)',
              color: '#ffff00',
              margin: '0 0 2rem 0'
            }}
          >
            Complete Professional Profile
          </p>
        </div>

        {/* Resume Content in Game Style */}
        <div 
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            border: '2px solid #00ff41',
            borderRadius: '8px',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 0 30px rgba(0, 255, 65, 0.3)'
          }}
        >
          {/* Header Section */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ 
              textAlign: 'center', 
              borderBottom: '2px solid #00ff41', 
              paddingBottom: '1rem',
              marginBottom: '1rem'
            }}>
              <h1 style={{ 
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', 
                margin: '0', 
                color: '#00ff41',
                fontFamily: '"Press Start 2P", monospace',
                textShadow: '0 0 10px #00ff41'
              }}>
                {headerData.name.toUpperCase()}
              </h1>
              <h2 style={{ 
                fontSize: 'clamp(0.8rem, 3vw, 1.5rem)', 
                margin: '0.5rem 0', 
                color: '#ffff00', 
                fontWeight: 'normal',
                fontFamily: '"VT323", monospace'
              }}>
                {headerData.title}
              </h2>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                flexWrap: 'wrap', 
                gap: '1rem', 
                marginTop: '1rem',
                fontSize: '0.8rem'
              }}>
                <span style={{ color: '#888' }}>{headerData.email}</span>
                <span style={{ color: '#888' }}>|</span>
                <span style={{ color: '#888' }}>{headerData.phone}</span>
                <span style={{ color: '#888' }}>|</span>
                <span style={{ color: '#888' }}>{headerData.location}</span>
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                flexWrap: 'wrap', 
                gap: '2rem', 
                marginTop: '1rem',
                fontSize: '0.7rem'
              }}>
                {headerData.website && (
                  <a 
                    href={headerData.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#ff8800', textDecoration: 'none' }}
                  >
                    🌐 Website
                  </a>
                )}
                {headerData.linkedin && (
                  <a 
                    href={headerData.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#8844ff', textDecoration: 'none' }}
                  >
                    💼 LinkedIn
                  </a>
                )}
                {headerData.github && (
                  <a 
                    href={headerData.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#00ff88', textDecoration: 'none' }}
                  >
                    ⚙️ GitHub
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ 
              fontSize: 'clamp(0.8rem, 3vw, 1.2rem)',
              marginBottom: '1rem', 
              color: '#ffff00', 
              borderBottom: '1px solid #ffff00', 
              paddingBottom: '0.5rem',
              fontFamily: '"Press Start 2P", monospace'
            }}>
              &gt;&gt; PROFESSIONAL EXPERIENCE
            </h3>
            {experienceData.map((exp, index) => (
              <div key={index} style={{ 
                marginBottom: '1.5rem',
                border: '1px solid #888',
                borderRadius: '4px',
                padding: '1rem',
                backgroundColor: 'rgba(0, 255, 65, 0.05)'
              }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start', 
                  marginBottom: '0.5rem',
                  flexWrap: 'wrap'
                }}>
                  <div>
                    <h4 style={{ 
                      margin: '0', 
                      fontSize: 'clamp(0.7rem, 2.5vw, 1rem)', 
                      color: '#00ff41',
                      fontFamily: '"Press Start 2P", monospace'
                    }}>
                      {exp.position}
                    </h4>
                    <p style={{ 
                      margin: '0.3rem 0 0 0', 
                      fontWeight: 'bold', 
                      color: '#ffff00',
                      fontSize: '0.8rem'
                    }}>
                      {exp.company} - {exp.location}
                    </p>
                  </div>
                  <span style={{ 
                    fontSize: '0.7rem', 
                    color: '#888', 
                    fontStyle: 'italic',
                    whiteSpace: 'nowrap'
                  }}>
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <ul style={{ marginLeft: '1rem', color: '#ccc', fontSize: '0.8rem' }}>
                  {exp.description.map((item, i) => (
                    <li key={i} style={{ marginBottom: '0.3rem' }}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ 
              fontSize: 'clamp(0.8rem, 3vw, 1.2rem)',
              marginBottom: '1rem', 
              color: '#ff8800', 
              borderBottom: '1px solid #ff8800', 
              paddingBottom: '0.5rem',
              fontFamily: '"Press Start 2P", monospace'
            }}>
              &gt;&gt; TECHNICAL SKILLS
            </h3>
            {skillsData.map((skillCategory, index) => (
              <div key={index} style={{ marginBottom: '1rem' }}>
                <h4 style={{ 
                  margin: '0 0 0.5rem 0', 
                  fontSize: 'clamp(0.6rem, 2vw, 0.9rem)', 
                  color: '#ff8800',
                  fontFamily: '"Press Start 2P", monospace'
                }}>
                  {skillCategory.category.toUpperCase()}:
                </h4>
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '0.5rem',
                  marginLeft: '1rem'
                }}>
                  {skillCategory.items.map((skill, i) => (
                    <span
                      key={i}
                      style={{
                        backgroundColor: 'rgba(255, 136, 0, 0.2)',
                        border: '1px solid #ff8800',
                        borderRadius: '3px',
                        padding: '0.3rem 0.6rem',
                        fontSize: '0.7rem',
                        color: '#ff8800'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education Section */}
          <div>
            <h3 style={{ 
              fontSize: 'clamp(0.8rem, 3vw, 1.2rem)',
              marginBottom: '1rem', 
              color: '#8844ff', 
              borderBottom: '1px solid #8844ff', 
              paddingBottom: '0.5rem',
              fontFamily: '"Press Start 2P", monospace'
            }}>
              &gt;&gt; EDUCATION
            </h3>
            {educationData.map((edu, index) => (
              <div key={index} style={{ 
                marginBottom: '1.5rem',
                border: '1px solid #8844ff',
                borderRadius: '4px',
                padding: '1rem',
                backgroundColor: 'rgba(136, 68, 255, 0.05)'
              }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start', 
                  marginBottom: '0.5rem',
                  flexWrap: 'wrap'
                }}>
                  <div>
                    <h4 style={{ 
                      margin: '0', 
                      fontSize: 'clamp(0.7rem, 2.5vw, 1rem)', 
                      color: '#8844ff',
                      fontFamily: '"Press Start 2P", monospace'
                    }}>
                      {edu.degree} in {edu.field}
                    </h4>
                    <p style={{ 
                      margin: '0.3rem 0 0 0', 
                      fontWeight: 'bold', 
                      color: '#ccc',
                      fontSize: '0.8rem'
                    }}>
                      {edu.institution}
                    </p>
                  </div>
                  <span style={{ 
                    fontSize: '0.7rem', 
                    color: '#888', 
                    fontStyle: 'italic',
                    whiteSpace: 'nowrap'
                  }}>
                    {edu.graduationDate}
                  </span>
                </div>
                <div style={{ fontSize: '0.7rem', color: '#ccc' }}>
                  GPA: {edu.gpa} | {edu.honors.join(', ')}
                </div>
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
      `}</style>
    </div>
  );
};

export default GameResume;