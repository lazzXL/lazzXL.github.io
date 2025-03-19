import './App.css';

import Header from './components/Header';

/*
function App() {
  return (
    <body class="bg-gray-50">
    
    <Header></Header>
    <main class="container mx-auto px-4 py-8">
        <section id="about" class="mb-12">
            <h2 class="text-3xl font-bold mb-6 text-gray-800">About Me</h2>
            <p class="text-gray-600 mb-6 leading-relaxed">
                Tech enthusiast driven by innovative solutions;<br/>
                Pursuing a BSc in Computer Science and Engineering;<br/>
                Swimmer; <br/>
                Currently looking for an internship/job.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h3 class="font-bold mb-4">More Information</h3>
                    <div class="space-y-3 text-gray-700">
                        <p class="flex items-center">
                            <i class="fas fa-map-marker-alt mr-2 text-purple-500"></i>
                            1000-216 Lisboa
                        </p>
                        <p class="flex items-center">
                            <i class="fas fa-birthday-cake mr-2 text-purple-500"></i>
                            12/12/2003
                        </p>
                        <p class="flex items-center">
                            <i class="fas fa-flag mr-2 text-purple-500"></i>
                            Brazilian & Portuguese
                        </p>
                    </div>
                </div>
                <div>
                    <div class="mb-6">
                        <h3 class="font-bold mb-4">GitHub</h3>
                        <a href="https://github.com/lazzXL" class="inline-flex items-center hover:text-purple-600 transition-colors">
                            <i class="fab fa-github mr-2 text-purple-500"></i>
                            @lazzXL
                        </a>
                    </div>
                    <h3 class="font-bold mb-4">Social Media</h3>
                    <div class="space-y-3">
                        <a href="https://instagram.com/gabrielazzarini" class="flex items-center hover:text-purple-600 transition-colors">
                            <i class="fab fa-instagram mr-2 text-purple-500"></i>
                            Instagram
                        </a>
                        <a href="https://www.linkedin.com/in/gabriel-lazzarini-lemos-a6114127a/" class="flex items-center hover:text-purple-600 transition-colors">
                            <i class="fab fa-linkedin mr-2 text-purple-500"></i>
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section id="experience" class="mb-12">
            <h2 class="text-3xl font-bold mb-6 text-gray-800">Work Experience</h2>
            <div class="bg-white p-6 rounded-lg shadow-md">
                <h3 class="text-xl font-bold">Software Developer Intern</h3>
                <p class="text-purple-600 mb-2">Inovcorp · Lisbon, Portugal</p>
                <p class="text-sm text-gray-500 mb-2">Mid 2021 & Mid 2022 (3 months each)</p>
                <ul class="list-disc pl-5">
                    <li>Participated in intensive training programs; </li>
                    <li>Completed compulsory technical school internship; </li>
                    <li>Engineered my own final project (PAP) with the technologies learned; </li>
                    <li>Integrated MVC architecture solutions using Laravel and pure PHP. </li>
                </ul>
            </div>
        </section>

        <section id="proficiencies" class="mb-12">
            <h2 class="text-3xl font-bold mb-6 text-gray-800">Proficiencies</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="font-bold mb-2 text-purple-600">Advanced</h3>
                    <ul class="space-y-1">
                        <li>JavaScript</li>
                        <li>Kotlin</li>
                        <li>C</li>
                        <li>HTML</li>
                        <li>PostgreSQL</li>
                        <li>Node.js</li>
                        <li>REST</li>
                    </ul>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="font-bold mb-2 text-purple-600">Intermediate</h3>
                    <ul class="space-y-1">
                        <li>Java</li>
                        <li>Git</li>
                        <li>React</li>
                        <li>TypeScript</li>
                        <li>Bootstrap</li>
                        <li>MongoDB</li>
                        <li>Tailwind CSS</li>
                    </ul>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="font-bold mb-2 text-purple-600">Basic</h3>
                    <ul class="space-y-1">
                        <li>Python</li>
                        <li>C#</li>
                        <li>Docker</li>
                        <li>Linux</li>
                        <li>MySQL</li>
                    </ul>
                </div>
            </div>
        </section>

        <section id="education" class="mb-12">
            <h2 class="text-3xl font-bold mb-6 text-gray-800">Education</h2>
            <div class="space-y-4">
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-bold">Computer Science and Engineering</h3>
                    <p class="text-purple-600">ISEL · 2022 - Current</p>
                    <p class="text-sm text-gray-500">EQF level 6</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-bold">Technical High School Diploma</h3>
                    <p class="text-purple-600">Escola Bento Jesus de Caraça</p>
                    <p class="text-sm text-gray-500">Programming & IT Management · EQF level 4</p>
                </div>
        
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-bold mb-4">Language Skills</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="flex items-center space-x-3">
                            <span class="w-24 font-medium">Portuguese</span>
                            <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Native</span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <span class="w-24 font-medium">English</span>
                            <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">C2 Proficient</span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <span class="w-24 font-medium">Spanish</span>
                            <span class="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm">B2 Intermediate</span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <span class="w-24 font-medium">Italian</span>
                            <span class="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm">B1 Intermediate</span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <span class="w-24 font-medium">German</span>
                            <span class="px-3 py-1 bg-purple-300 text-purple-900 rounded-full text-sm">A1 Beginner</span>
                        </div>
                    </div>
                    <p class="text-sm text-gray-500 mt-4">
                        CEFR Levels: A1/A2 (Basic) · B1/B2 (Independent) · C1/C2 (Proficient)
                    </p>
                </div>
            </div>
        </section>
    </main>
</body>
  );
}

export default App;
*/