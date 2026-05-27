console.log("Web cargada correctamente 🚀");

const elements = document.querySelectorAll('.section, .menu-item, .review-card, .gallery-grid img');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

elements.forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});