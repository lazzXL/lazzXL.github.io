

function Header() {
    return (
    <header class="bg-purple-900 text-white py-6 header-animation">
        <div class="container mx-auto px-4">
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
            <nav class="mt-6 flex space-x-6">
                <a href="#about" class="nav-link hover:text-purple-300">About</a>
                <a href="#experience" class="nav-link hover:text-purple-300">Experience</a>
                <a href="#proficiencies" class="nav-link hover:text-purple-300">Proficiencies</a>
                <a href="#education" class="nav-link hover:text-purple-300">Education</a>
            </nav>
        </div>
    </header>)
}

export default Header