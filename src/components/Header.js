import { Link } from 'react-router-dom';

function Header() {
    return (
    <header className="bg-purple-900 text-white py-6 header-animation">
        <div className="container mx-auto px-4">
            <div className="flex justify-end">
                <span className="text-sm bg-purple-700 px-2 py-1 rounded-full">Website in progress</span>
            </div>

            <h1 className="text-4xl font-bold mb-2 mt-4">Gabriel Lemos</h1>
            <p className="text-lg text-purple-200">Software Engineer</p>
            
            <div className="mt-4 space-x-4">
                <a href="mailto:gabs8b@gmail.com" className="hover:text-purple-300 transition-colors">
                    <i className="fas fa-envelope mr-1"></i>gabs8b@gmail.com
                </a>
                <a href="tel:+351913871489" className="hover:text-purple-300 transition-colors">
                    <i className="fas fa-phone mr-1"></i>+351 913 871 489
                </a>
            </div>
            <nav className="mt-6 flex space-x-6">
                <Link to="#about" className="nav-link hover:text-purple-300">About</Link>
                <Link to="#experience" className="nav-link hover:text-purple-300">Experience</Link>
                <Link to="#proficiencies" className="nav-link hover:text-purple-300">Proficiencies</Link>
                <Link to="#education" className="nav-link hover:text-purple-300">Education</Link>
            </nav>
        </div>
    </header>
    )
}

export default Header;