document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


/*
maybe later
const skillFilters = document.querySelectorAll('[data-skill-filter]');
skillFilters.forEach(filter => {
    filter.addEventListener('click', () => {
        const level = filter.dataset.skillFilter;
        console.log(`Filtering skills by: ${level}`);
    });
});

*/