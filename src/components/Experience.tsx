import React from 'react';

interface ExperienceItem {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

interface ExperienceProps {
  experiences: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section style={{ marginBottom: '2rem' }}>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333', borderBottom: '1px solid #ddd', paddingBottom: '0.5rem' }}>
        Professional Experience
      </h3>
      {experiences.map((exp, index) => (
        <div key={index} style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
            <div>
              <h4 style={{ margin: '0', fontSize: '1.2rem', color: '#333' }}>{exp.position}</h4>
              <p style={{ margin: '0', fontWeight: 'bold', color: '#666' }}>{exp.company} - {exp.location}</p>
            </div>
            <span style={{ fontSize: '0.9rem', color: '#666', fontStyle: 'italic' }}>
              {exp.startDate} - {exp.endDate}
            </span>
          </div>
          <ul style={{ marginLeft: '1rem', color: '#555' }}>
            {exp.description.map((item, i) => (
              <li key={i} style={{ marginBottom: '0.3rem' }}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;