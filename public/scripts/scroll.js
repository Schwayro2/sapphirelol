export function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll, .card, .fade-in-section');
  if (!elements.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  elements.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', initScrollAnimations);
