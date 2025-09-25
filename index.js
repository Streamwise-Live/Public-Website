window.keywords = ["MODERATES", "EDITS", "FILTERS", "ENHANCES"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;
let pauseBetweenWords = 2000;

function typeEffect() {
  const currentWord = keywords[wordIndex];
  const typedSpan = document.querySelector(".typed-word");
  
  if (isDeleting) {
    typedSpan.textContent = currentWord.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % keywords.length;
      setTimeout(typeEffect, 200);
    } else {
      setTimeout(typeEffect, typingSpeed / 2);
    }
  } else {
    typedSpan.textContent = currentWord.substring(0, charIndex++);
    if (charIndex > currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, pauseBetweenWords);
    } else {
      setTimeout(typeEffect, typingSpeed);
    }
  }
}

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

  const items = document.querySelectorAll('.faq-accordion details');
  items.forEach((d) => {
    d.addEventListener('toggle', () => {
      if (d.open) items.forEach((o) => { if (o !== d) o.removeAttribute('open'); });
    });
  });

  typeEffect();
});
