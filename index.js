// window.addEventListener('load', adjustHeroHeight);
// window.addEventListener('resize', adjustHeroHeight);

// function adjustHeroHeight() {
//     const header = document.querySelector('header');
//     const hero = document.querySelector('.hero');
//     const headerHeight = header.offsetHeight;
//     hero.style.height = `calc(88vh - ${headerHeight}px)`;
// }

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
