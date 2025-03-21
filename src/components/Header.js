import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useColor } from '../colorPicker/colorContext';

function Header() {
  const { themeColor, setThemeColor, availableColors, colors } = useColor();
  const [showColorPicker, setShowColorPicker] = useState(false);

  return (
    <header className={`${themeColor.primary} text-white py-6 transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-end">
          <span className={`text-sm ${themeColor.secondary} px-2 py-1 rounded-full`}>
            Website in progress
          </span>
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-2 mt-4">Gabriel Lemos</h1>
          <p className={`text-lg ${themeColor.text} mb-4`}>Software Engineer</p>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <a href="mailto:gabs8b@gmail.com" className={`hover:${themeColor.text} transition-colors block md:inline-block`}>
                <i className="fas fa-envelope mr-2"></i>gabs8b@gmail.com
              </a>
              <a href="tel:+351913871489" className={`hover:${themeColor.text} transition-colors block md:inline-block md:ml-4`}>
                <i className="fas fa-phone mr-2"></i>+351 913 871 489
              </a>
            </div>
            
            <nav className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4 md:mt-0">
              <Link to="#about" className={`hover:${themeColor.text} py-1 border-b-2 border-transparent hover:${themeColor.border}`}>
                About
              </Link>
              <Link to="#experience" className={`hover:${themeColor.text} py-1 border-b-2 border-transparent hover:${themeColor.border}`}>
                Experience
              </Link>
              <Link to="#proficiencies" className={`hover:${themeColor.text} py-1 border-b-2 border-transparent hover:${themeColor.border}`}>
                Proficiencies
              </Link>
              <Link to="#education" className={`hover:${themeColor.text} py-1 border-b-2 border-transparent hover:${themeColor.border}`}>
                Education
              </Link>
            </nav>
          </div>
        </div>

        <div className="fixed bottom-4 right-4 z-50">
          <button 
            onClick={() => setShowColorPicker(!showColorPicker)}
            className={`p-3 rounded-full shadow-lg ${themeColor.secondary} ${themeColor.hover} transition-colors`}
          >
            <i className="fas fa-palette"></i>
          </button>
          
          {showColorPicker && (
            <div className="absolute bottom-14 right-0 bg-white p-2 rounded-lg shadow-md flex gap-2">
              {availableColors.map((color) => (
                <button
                  key={color}
                  onClick={() => {
                    setThemeColor(color)
                    window.location.reload()
                   }}
                  className={`w-8 h-8 rounded-full ${colors[color].primary} border-2 ${
                    themeColor.primary === colors[color].primary ? 'border-white' : 'border-transparent'
                  }`}
                  title={color.charAt(0).toUpperCase() + color.slice(1)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;