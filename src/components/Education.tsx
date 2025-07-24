import React from 'react';

interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  graduationDate: string;
  gpa?: string;
  honors?: string[];
}

interface EducationProps {
  education: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section style={{ marginBottom: '2rem' }}>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333', borderBottom: '1px solid #ddd', paddingBottom: '0.5rem' }}>
        Education
      </h3>
      {education.map((edu, index) => (
        <div key={index} style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
            <div>
              <h4 style={{ margin: '0', fontSize: '1.2rem', color: '#333' }}>{edu.degree} in {edu.field}</h4>
              <p style={{ margin: '0', fontWeight: 'bold', color: '#666' }}>{edu.institution}</p>
              {edu.gpa && <p style={{ margin: '0', color: '#666' }}>GPA: {edu.gpa}</p>}
            </div>
            <span style={{ fontSize: '0.9rem', color: '#666', fontStyle: 'italic' }}>
              {edu.graduationDate}
            </span>
          </div>
          {edu.honors && edu.honors.length > 0 && (
            <ul style={{ marginLeft: '1rem', color: '#555' }}>
              {edu.honors.map((honor, i) => (
                <li key={i} style={{ marginBottom: '0.2rem' }}>{honor}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
};

export default Education;