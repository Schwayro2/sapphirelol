export function initScrollAnimations() {
  const animatedEls = document.querySelectorAll(
    '.animate-on-scroll, .fade-in-section, .card, .product-card, .hero-content'
  );
  if (!animatedEls.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.2 });
  animatedEls.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', initScrollAnimations);
