// script.js

// Theme Toggle Button
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

// Contact Form Submission
const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevents page refresh
  alert('Thank you for contacting me!');
  contactForm.reset(); // Clears the form after submission
});
