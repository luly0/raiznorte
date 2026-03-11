// Mobile Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', function() {
  navMenu.classList.toggle('active');
});
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('active'));
});

// Smooth fade-in on scroll (animation)
const fadeEls = document.querySelectorAll('.fadein');
function onScroll() {
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60)
      el.classList.add('visible');
  });
}
window.addEventListener('scroll', onScroll);
window.addEventListener('DOMContentLoaded', onScroll);
