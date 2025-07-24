import { useState } from 'react';
import GameMenu from './components/GameMenu';
import GameLevels from './components/GameLevels';
import GameSkills from './components/GameSkills';
import GameOptions from './components/GameOptions';
import GameResume from './components/GameResume';
import './App.css'

function App() {
  const [currentSection, setCurrentSection] = useState('menu');

  // Professional resume data
  const headerData = {
    name: 'Professional Developer',
    title: 'Full Stack Developer',
    email: 'contact@example.com',
    phone: '+61 (XXX) XXX-XXX',
    location: 'Sydney, Australia',
    website: 'https://praff-projects.github.io/resume/',
    linkedin: 'https://linkedin.com/in/developer',
    github: 'https://github.com/praff-projects'
  }

  const experienceData = [
    {
      company: 'Commonwealth Bank (Unloan)',
      position: 'Senior Full Stack Developer',
      location: 'Sydney, Australia',
      startDate: 'Sep 2022',
      endDate: 'Present',
      description: [
        'Led development of React and Node.js applications for digital lending platform',
        'Implemented cloud-based solutions using AWS services and serverless architecture',
        'Built responsive web applications serving thousands of customers daily',
        'Collaborated with cross-functional teams including product, design, and DevOps'
      ]
    },
    {
      company: 'Kinela',
      position: 'Full Stack Developer',
      location: 'Sydney, Australia',
      startDate: 'Nov 2021',
      endDate: 'Jun 2022',
      description: [
        'Developed full-stack applications using modern React, TypeScript, and Node.js',
        'Built RESTful APIs and GraphQL endpoints for mobile and web applications',
        'Implemented real-time features using WebSocket connections',
        'Optimized database queries and application performance'
      ]
    },
    {
      company: 'Nine Network',
      position: 'Frontend Developer',
      location: 'Sydney, Australia',
      startDate: 'Feb 2021',
      endDate: 'Oct 2021',
      description: [
        'Built responsive web applications for Australia\'s leading media company',
        'Developed interactive features for streaming platforms and news websites',
        'Collaborated with designers and backend teams to deliver pixel-perfect UIs',
        'Optimized applications for performance and accessibility standards'
      ]
    }
  ]

  const educationData = [
    {
      institution: 'University of Technology',
      degree: 'Bachelor of Computer Science',
      field: 'Software Engineering',
      graduationDate: 'Dec 2020',
      gpa: '3.7',
      honors: ['Dean\'s List (6 semesters)', 'Software Engineering Award']
    }
  ]

  const skillsData = [
    {
      category: 'Programming Languages',
      items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'Go']
    },
    {
      category: 'Frontend Technologies',
      items: ['React', 'Vue.js', 'Angular', 'HTML5', 'CSS3', 'Sass', 'Tailwind CSS']
    },
    {
      category: 'Backend & Database',
      items: ['Node.js', 'Express', '.NET Core', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL']
    },
    {
      category: 'Cloud & DevOps',
      items: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'Terraform']
    },
    {
      category: 'Tools & Platforms',
      items: ['Git', 'Jira', 'Confluence', 'Figma', 'Postman', 'VS Code', 'IntelliJ']
    }
  ]

  const handleMenuSelect = (section: string) => {
    setCurrentSection(section);
  };

  const handleBackToMenu = () => {
    setCurrentSection('menu');
  };

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'start':
        return (
          <GameResume
            headerData={headerData}
            experienceData={experienceData}
            educationData={educationData}
            skillsData={skillsData}
            onBack={handleBackToMenu}
          />
        );
      case 'levels':
        return (
          <GameLevels
            experiences={experienceData}
            onBack={handleBackToMenu}
          />
        );
      case 'scores':
        return (
          <GameSkills
            skills={skillsData}
            onBack={handleBackToMenu}
          />
        );
      case 'options':
        return (
          <GameOptions
            contactData={headerData}
            onBack={handleBackToMenu}
          />
        );
      default:
        return (
          <GameMenu
            onMenuSelect={handleMenuSelect}
          />
        );
    }
  };

  return (
    <div className="game-app">
      {renderCurrentSection()}
    </div>
  );
}

export default App
