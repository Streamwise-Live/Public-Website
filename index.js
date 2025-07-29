const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const el = entry.target;
    if (entry.isIntersecting) {
      // Element is in viewport - show it
      el.classList.add('visible');
    } else {
      // Element is out of viewport - hide it
      el.classList.remove('visible');
    }
  });
}, {
  threshold: 0.1,
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.features-image').forEach(section => {
    observer.observe(section);
  });
});
