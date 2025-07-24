import React from 'react';

interface SkillsProps {
  skills: {
    category: string;
    items: string[];
  }[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section style={{ marginBottom: '2rem' }}>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333', borderBottom: '1px solid #ddd', paddingBottom: '0.5rem' }}>
        Skills
      </h3>
      {skills.map((skillCategory, index) => (
        <div key={index} style={{ marginBottom: '1rem' }}>
          <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', color: '#333' }}>{skillCategory.category}</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {skillCategory.items.map((skill, i) => (
              <span
                key={i}
                style={{
                  backgroundColor: '#f0f0f0',
                  padding: '0.3rem 0.6rem',
                  borderRadius: '4px',
                  fontSize: '0.9rem',
                  color: '#555'
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;