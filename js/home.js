/* ============================================================
   HOME PAGE — JavaScript
   Entrance animations for hero elements
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- STAGGERED HERO ENTRANCE ---- */
  const heroItems = [
    document.querySelector('.hero-eyebrow'),
    document.querySelector('.hero-heading'),
    document.querySelector('.hero-sub'),
    document.querySelector('.hero-cta-row'),
  ].filter(Boolean);

  heroItems.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity .7s ${i * 0.12}s cubic-bezier(.25,.46,.45,.94), transform .7s ${i * 0.12}s cubic-bezier(.25,.46,.45,.94)`;
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 60);
  });

  /* ---- FLOATING IMAGES ENTRANCE ---- */
  const heroImages = document.querySelector('.hero-images');
  if (heroImages) {
    heroImages.style.opacity = '0';
    heroImages.style.transform = 'translateY(32px)';
    heroImages.style.transition = 'opacity .9s .3s cubic-bezier(.25,.46,.45,.94), transform .9s .3s cubic-bezier(.25,.46,.45,.94)';
    setTimeout(() => {
      heroImages.style.opacity = '1';
      heroImages.style.transform = 'translateY(0)';
    }, 60);
  }

});