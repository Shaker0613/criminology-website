// script.js

// Website loaded message
console.log("Criminology Website Loaded ✅");

// Optional: Smooth scroll for navbar links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Optional: Add hover effect messages for cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        console.log(`Hovering over card: "${card.querySelector('h3') ? card.querySelector('h3').innerText : card.innerText}"`);
    });
});