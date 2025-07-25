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
    title: 'Software Engineer',
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
        'Led product development of React and Node.js applications for digital lending platform serving 10,000+ customers',
        'Designed and implemented scalable cloud solutions using AWS services, reducing infrastructure costs by 30%',
        'Built user-centric features that increased customer engagement by 25% and reduced application processing time by 40%',
        'Collaborated with product managers and UX designers to deliver customer-focused features using agile methodologies'
      ]
    },
    {
      company: 'Kinela',
      position: 'Full Stack Developer',
      location: 'Sydney, Australia',
      startDate: 'Nov 2021',
      endDate: 'Jun 2022',
      description: [
        'Developed product features using React, TypeScript, and Node.js that improved user retention by 20%',
        'Built robust APIs and GraphQL endpoints supporting mobile and web products with 99.9% uptime',
        'Implemented real-time messaging features using WebSocket connections, enhancing user experience',
        'Optimized application performance through database query improvements, reducing page load times by 50%'
      ]
    },
    {
      company: 'Nine Network',
      position: 'Frontend Developer',
      location: 'Sydney, Australia',
      startDate: 'Feb 2021',
      endDate: 'Oct 2021',
      description: [
        'Built responsive web applications for Australia\'s leading media company reaching millions of users daily',
        'Developed interactive streaming platform features that increased viewer engagement by 15%',
        'Collaborated with product teams and designers to deliver pixel-perfect UIs meeting accessibility standards',
        'Optimized web performance achieving 95+ Lighthouse scores and improving user satisfaction metrics'
      ]
    }
  ]

  const educationData = [
    {
      institution: 'University of Wollongong',
      degree: 'Masters of Computer Science',
      field: 'Machine Learning and Big Data',
      graduationDate: 'Dec 2020',
      gpa: '3.7',
      honors: ['Dean\'s List (6 semesters)', 'Software Engineering Award']
    }
  ]

  const skillsData = [
    {
      category: 'Product Engineering',
      items: ['React', 'TypeScript', 'Node.js', 'Python', 'GraphQL', 'REST APIs', 'Microservices']
    },
    {
      category: 'Cloud & Infrastructure',
      items: ['AWS', 'Docker', 'Kubernetes', 'Serverless', 'CI/CD', 'GitHub Actions', 'Terraform']
    },
    {
      category: 'Data & Analytics',
      items: ['PostgreSQL', 'MongoDB', 'Redis', 'Machine Learning', 'Big Data', 'Analytics', 'A/B Testing']
    },
    {
      category: 'Product Development',
      items: ['Agile/Scrum', 'User Experience', 'Performance Optimization', 'Accessibility', 'Mobile-First Design']
    },
    {
      category: 'Collaboration Tools',
      items: ['Jira', 'Confluence', 'Figma', 'Slack', 'Git', 'Code Review', 'Documentation']
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
