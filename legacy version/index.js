const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
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