import React from 'react';

interface HeaderProps {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website?: string;
  linkedin?: string;
  github?: string;
}

const Header: React.FC<HeaderProps> = ({
  name,
  title,
  email,
  phone,
  location,
  website,
  linkedin,
  github
}) => {
  return (
    <header style={{ textAlign: 'center', marginBottom: '2rem', borderBottom: '2px solid #333', paddingBottom: '1rem' }}>
      <h1 style={{ fontSize: '2.5rem', margin: '0', color: '#333' }}>{name}</h1>
      <h2 style={{ fontSize: '1.5rem', margin: '0.5rem 0', color: '#666', fontWeight: 'normal' }}>{title}</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
        <span>{email}</span>
        <span>{phone}</span>
        <span>{location}</span>
        {website && <a href={website} target="_blank" rel="noopener noreferrer">Website</a>}
        {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
        {github && <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>}
      </div>
    </header>
  );
};

export default Header;