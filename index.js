// Simple scroll animation
const eduCards = document.querySelectorAll('.edu-card');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight - 100;

  eduCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});