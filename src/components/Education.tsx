
const Education = () => {
  const education = [
    {
      id: 1,
      institution: 'FATEC - Faculdade de Tecnologia',
      degree: 'Technology in Systems Analysis and Development',
      period: '2018 - 2020',
      location: 'São Paulo, SP',
      status: 'Completed',
      description: 'Comprehensive program covering software development, database management, systems analysis, and project management.',
      highlights: [
        'Software Engineering Principles',
        'Database Design and Management',
        'Web Development Technologies',
        'Project Management Methodologies',
        'Systems Analysis and Design'
      ],
      gpa: '8.5/10',
      thesis: 'Development of a Web-based Inventory Management System'
    },
    {
      id: 2,
      institution: 'ETEC - Escola Técnica Estadual',
      degree: 'Technical Course in Informatics',
      period: '2016 - 2017',
      location: 'São Paulo, SP',
      status: 'Completed',
      description: 'Technical foundation in computer science, programming fundamentals, and hardware/software concepts.',
      highlights: [
        'Programming Fundamentals (C, Java)',
        'Computer Networks and Security',
        'Hardware and Software Concepts',
        'Database Fundamentals',
        'Technical Documentation'
      ],
      gpa: '9.2/10',
      thesis: 'Local Network Setup and Configuration'
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2023',
      status: 'Active',
      color: 'neon-aqua'
    },
    {
      name: 'Node.js Professional Certification',
      issuer: 'Node.js Foundation',
      year: '2022',
      status: 'Active',
      color: 'neon-blue'
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      year: '2022',
      status: 'Active',
      color: 'neon-pink'
    },
    {
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      year: '2021',
      status: 'Active',
      color: 'green-400'
    }
  ];

  const onlineCourses = [
    'Advanced JavaScript Concepts - Udemy',
    'Microservices with Docker and Kubernetes - Coursera',
    'GraphQL with Node.js - Pluralsight',
    'AWS Cloud Practitioner - A Cloud Guru',
    'Clean Code Principles - Clean Code Academy'
  ];

  const getStatusColor = (status: string) => {
    return status === 'Completed' ? 'neon-aqua' : 'neon-blue';
  };

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-4">
            Education & Learning
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-aqua to-neon-pink mx-auto mb-6"></div>
          <p className="text-gray-300 font-fira max-w-2xl mx-auto">
            Continuous learning journey through formal education, certifications, and self-directed study
          </p>
        </div>

        {/* Formal Education */}
        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <div key={edu.id} className="terminal-window animate-fade-in">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <div className={`terminal-dot bg-${getStatusColor(edu.status)}`}></div>
                  <div className="terminal-dot bg-gray-500"></div>
                  <div className="terminal-dot bg-gray-500"></div>
                </div>
                <div className="text-xs font-fira text-gray-400">{edu.institution.toLowerCase().replace(/\s+/g, '_')}.edu</div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded text-xs font-fira bg-${getStatusColor(edu.status)}/20 text-${getStatusColor(edu.status)}`}>
                    {edu.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <h3 className="text-xl font-orbitron font-bold text-neon-aqua mb-2">
                      {edu.degree}
                    </h3>
                    <div className="text-lg text-white font-fira mb-1">{edu.institution}</div>
                    <div className="flex items-center space-x-4 text-sm text-gray-400 font-fira mb-4">
                      <span>{edu.period}</span>
                      <span>•</span>
                      <span>{edu.location}</span>
                    </div>

                    <p className="text-gray-300 font-fira text-sm mb-6 leading-relaxed">
                      {edu.description}
                    </p>

                    <div>
                      <h4 className="text-neon-blue font-fira font-semibold mb-3">Key Subjects:</h4>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start text-gray-300 font-fira text-sm">
                            <span className="w-2 h-2 bg-neon-pink rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="hud-panel">
                      <h4 className="text-neon-pink font-fira font-semibold mb-3">Academic Details</h4>
                      <div className="space-y-2 text-sm font-fira">
                        <div className="flex justify-between">
                          <span className="text-gray-400">GPA:</span>
                          <span className="text-neon-aqua">{edu.gpa}</span>
                        </div>
                        <div className="pt-2 border-t border-gray-600">
                          <span className="text-gray-400 text-xs">Final Project:</span>
                          <p className="text-gray-300 text-xs mt-1">{edu.thesis}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-orbitron font-bold text-neon-blue mb-8 text-center">
            Professional Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={cert.name} className="hud-panel animate-fade-in group hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className={`w-16 h-16 bg-${cert.color}/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse`}>
                    <div className={`w-8 h-8 bg-${cert.color} rounded-full`}></div>
                  </div>
                  <h4 className="font-fira font-semibold text-white text-sm mb-2">{cert.name}</h4>
                  <p className="text-gray-400 text-xs mb-2">{cert.issuer}</p>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500">{cert.year}</span>
                    <span className={`px-2 py-1 rounded bg-${cert.color}/20 text-${cert.color}`}>
                      {cert.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Online Learning */}
        <div className="hud-panel animate-fade-in">
          <div className="terminal-header mb-6">
            <div className="terminal-dots">
              <div className="terminal-dot bg-neon-aqua"></div>
              <div className="terminal-dot bg-neon-blue"></div>
              <div className="terminal-dot bg-neon-pink"></div>
            </div>
            <div className="text-xs font-fira text-gray-400">continuous_learning.log</div>
            <div className="w-16"></div>
          </div>

          <h3 className="text-2xl font-orbitron font-bold text-neon-pink mb-6">Continuous Learning</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-neon-aqua font-fira font-semibold mb-4">Recent Online Courses</h4>
              <ul className="space-y-3">
                {onlineCourses.map((course, index) => (
                  <li key={course} className="flex items-start text-gray-300 font-fira text-sm">
                    <span className="w-2 h-2 bg-neon-blue rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse"></span>
                    {course}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-neon-blue font-fira font-semibold mb-4">Learning Philosophy</h4>
              <div className="space-y-3 text-gray-300 font-fira text-sm">
                <p>
                  <span className="text-neon-aqua">Continuous Growth:</span> Technology evolves rapidly, 
                  and I believe in staying current with industry trends and best practices.
                </p>
                <p>
                  <span className="text-neon-pink">Practical Application:</span> Every course and certification 
                  is immediately applied to real-world projects for deeper understanding.
                </p>
                <p>
                  <span className="text-neon-blue">Knowledge Sharing:</span> I regularly share learnings 
                  with the community through blog posts and mentoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
