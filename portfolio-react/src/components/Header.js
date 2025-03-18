import { Link } from 'react-scroll';

export default function Header({ activeSection, setActiveSection }) {
  return (
    <header className="bg-purple-900 text-white py-6 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div class="flex justify-end">
                <span class="text-sm bg-purple-700 px-2 py-1 rounded-full">Website in progress</span>
            </div>

            <h1 class="text-4xl font-bold mb-2 mt-4">Gabriel Lemos</h1>
            <p class="text-lg text-purple-200">Software Engineer</p>
            
            <div class="mt-4 space-x-4">
                <a href="mailto:gabs8b@gmail.com" class="hover:text-purple-300 transition-colors">
                    <i class="fas fa-envelope mr-1"></i>gabs8b@gmail.com
                </a>
                <a href="tel:+351913871489" class="hover:text-purple-300 transition-colors">
                    <i class="fas fa-phone mr-1"></i>+351 913 871 489
                </a>
            </div>
        <nav className="mt-6 flex space-x-6">
          {['about', 'experience', 'skills', 'education'].map((section) => (
            <Link
              key={section}
              to={section}
              spy={true}
              smooth={true}
              className={`cursor-pointer hover:text-purple-300 ${
                activeSection === section ? 'text-purple-300 border-b-2 border-purple-300' : ''
              }`}
              onSetActive={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}