// Add floating particles to descriptive card
document.addEventListener('DOMContentLoaded', function() {
    const descriptive = document.querySelector('.descriptive');
    if (descriptive) {
      for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.width = `${Math.random() * 8 + 4}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
        descriptive.appendChild(particle);
      }
    }
  });