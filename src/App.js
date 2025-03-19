import './App.css';
import Header from './components/Header';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const languages = [{ language: "Portuguese", level: "Native", color: "bg-purple-100" },
{ language: "English", level: "C2 Proficient", color: "bg-purple-100" },
{ language: "Spanish", level: "B2 Intermediate", color: "bg-purple-200" },
{ language: "Italian", level: "B1 Intermediate", color: "bg-purple-200" },
{ language: "German", level: "A1 Beginner", color: "bg-purple-300" } ];

const bulletPointsExperience = ["Participated in intensive training programs", 
    "Completed compulsory technical school internship",
    "Engineered my own final project (PAP) with the technologies learned",
    "Integrated MVC architecture solutions using Laravel and pure PHP"];

const proficiencies = [
    {
      level: "Advanced",
      items: ["JavaScript", "Kotlin", "C", "HTML", "PostgreSQL", "Node.js", "REST"]
    },
    {
      level: "Intermediate",
      items: ["Java", "Git", "React", "TypeScript", "Bootstrap", "MongoDB", "Tailwind CSS"]
    },
    {
      level: "Basic",
      items: ["Python", "C#", "Docker", "Linux", "MySQL"]
    }
];

const education = [
  {
    title: "Computer Science and Engineering",
    institution: "ISEL · 2022 - Current",
    details: "EQF level 6"
  },
  {
    title: "Technical High School Diploma",
    institution: "Escola Bento Jesus de Caraça",
    details: "Programming & IT Management · EQF level 4"
  }
];

function App() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <section id="about" className="mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 animate-slide-in">About Me</h2>
          <p className="text-gray-600 mb-6 leading-relaxed transition-all duration-300 hover:translate-x-2">
            Tech enthusiast driven by innovative solutions;<br/>
            Pursuing a BSc in Computer Science and Engineering;<br/>
            Swimmer; <br/>
            Currently looking for an internship/job.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3 text-gray-700">
              <h3 className="font-bold mb-4 animate-slide-in">More Information</h3>
              <p className="flex items-center transition-all duration-300 hover:translate-x-2">
                <i className="fas fa-map-marker-alt mr-2 text-purple-500"></i>
                1000-216 Lisboa
              </p>
              <p className="flex items-center transition-all duration-300 hover:translate-x-2">
                <i className="fas fa-birthday-cake mr-2 text-purple-500"></i>
                12/12/2003
              </p>
              <p className="flex items-center transition-all duration-300 hover:translate-x-2">
                <i className="fas fa-flag mr-2 text-purple-500"></i>
                Brazilian & Portuguese
              </p>
            </div>
            <div>
              <div className="mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <h3 className="font-bold mb-4">GitHub</h3>
                <a href="https://github.com/lazzXL" className="inline-flex items-center transition-all duration-300 hover:text-purple-600 hover:translate-x-2">
                  <i className="fab fa-github mr-2 text-purple-500"></i>
                  @lazzXL
                </a>
              </div>
              <h3 className="font-bold mb-4 animate-slide-in">Social Media</h3>
              <div className="space-y-3">
                <a href="https://instagram.com/gabrielazzarini" className="flex items-center transition-all duration-300 hover:text-purple-600 hover:translate-x-2">
                  <i className="fab fa-instagram mr-2 text-purple-500"></i>
                  Instagram
                </a>
                <a href="https://www.linkedin.com/in/gabriel-lazzarini-lemos-a6114127a/" className="flex items-center transition-all duration-300 hover:text-purple-600 hover:translate-x-2">
                  <i className="fab fa-linkedin mr-2 text-purple-500"></i>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 animate-slide-in">Work Experience</h2>
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02] animate-fade-in">
            <h3 className="text-xl font-bold">Software Developer Intern</h3>
            <p className="text-purple-600 mb-2">Inovcorp · Lisbon, Portugal</p>
            <p className="text-sm text-gray-500 mb-2">Mid 2021 & Mid 2022 (3 months each)</p>
            <ul className="list-disc pl-5 space-y-2">
              {bulletPointsExperience.map((item, index) => (
                <li key={index} className="transition-all duration-300 hover:translate-x-2">{item}</li>
              ))}
            </ul>
          </div>
        </section>

       
        <section id="proficiencies" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 animate-slide-in">
            Proficiencies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {proficiencies.map((proficiency, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md animate-fade-in hover:scale-[1.02] transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-bold mb-2 text-purple-600">{proficiency.level}</h3>
                <ul className="space-y-1">
                  {proficiency.items.map((skill, idx) => (
                    <li 
                      key={idx}
                      className="hover:translate-x-2 transition-transform duration-300"
                      style={{ animationDelay: `${idx * 0.1 + index * 0.1}s` }}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        
        <section id="education" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 animate-slide-in">Education</h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold">{edu.title}</h3>
                <p className="text-purple-600">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.details}</p>
              </div>
            ))}
            
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02] animate-fade-in">
              <h3 className="text-xl font-bold mb-4">Language skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {languages.map((lang, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 transition-all duration-300 hover:translate-x-2"
                  >
                    <span className="w-24 font-medium">{lang.language}</span>
                    <span className={`px-3 py-1 ${lang.color} text-purple-800 rounded-full text-sm`}>
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4">
                CEFR Levels: A1/A2 (Basic) · B1/B2 (Independent) · C1/C2 (Proficient)
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;