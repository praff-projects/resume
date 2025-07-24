import Header from './components/Header'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import './App.css'

function App() {
  // Sample data - replace with your actual information
  const headerData = {
    name: 'John Doe',
    title: 'Full Stack Developer',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    website: 'https://johndoe.dev',
    linkedin: 'https://linkedin.com/in/johndoe',
    github: 'https://github.com/johndoe'
  }

  const experienceData = [
    {
      company: 'Tech Company Inc.',
      position: 'Senior Full Stack Developer',
      location: 'San Francisco, CA',
      startDate: 'Jan 2022',
      endDate: 'Present',
      description: [
        'Led development of React and Node.js applications serving 100,000+ users',
        'Implemented CI/CD pipelines reducing deployment time by 50%',
        'Mentored junior developers and conducted code reviews',
        'Collaborated with cross-functional teams to deliver features on time'
      ]
    },
    {
      company: 'Startup Solutions',
      position: 'Full Stack Developer',
      location: 'Remote',
      startDate: 'Jun 2020',
      endDate: 'Dec 2021',
      description: [
        'Built responsive web applications using React, TypeScript, and Firebase',
        'Developed RESTful APIs with Node.js and Express',
        'Optimized database queries resulting in 30% performance improvement',
        'Participated in agile development process and sprint planning'
      ]
    }
  ]

  const educationData = [
    {
      institution: 'University of California, Berkeley',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      graduationDate: 'May 2020',
      gpa: '3.8',
      honors: ['Magna Cum Laude', 'Dean\'s List (4 semesters)']
    }
  ]

  const skillsData = [
    {
      category: 'Programming Languages',
      items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++']
    },
    {
      category: 'Frontend',
      items: ['React', 'Vue.js', 'HTML5', 'CSS3', 'Sass', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'Django', 'PostgreSQL', 'MongoDB', 'Redis']
    },
    {
      category: 'Tools & Technologies',
      items: ['Git', 'Docker', 'AWS', 'Firebase', 'GitHub Actions', 'Jest', 'Webpack']
    }
  ]

  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '2rem', 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      lineHeight: '1.6',
      color: '#333'
    }}>
      <Header {...headerData} />
      <Experience experiences={experienceData} />
      <Skills skills={skillsData} />
      <Education education={educationData} />
    </div>
  )
}

export default App
