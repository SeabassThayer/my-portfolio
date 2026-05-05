/**
 * INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
 * Animates cards (countries, skills, about items) when they come into view.
 * Each card fades in and slides up from bottom as user scrolls.
 */

// Wait for DOM to fully load before attaching event listeners
document.addEventListener('DOMContentLoaded', function () {
  // Select all cards that should animate on scroll
  const cards = document.querySelectorAll('.country-card, .skill-item, .about-country');
  
  // Create Intersection Observer to detect when elements enter viewport
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      // When element comes into view, animate it
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 }); // Trigger when 10% of element is visible

  // Set initial styles and observe each card
  cards.forEach(function (card) {
    card.style.opacity = '0'; // Start invisible
    card.style.transform = 'translateY(16px)'; // Start positioned 16px down
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease'; // Smooth animation
    observer.observe(card); // Start watching this card
  });
});
