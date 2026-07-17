// Aries Bloom Inc. — shared interactions

document.addEventListener('DOMContentLoaded', () => {
  /* Emblem loader — brief bloom-in on first paint */
  const loader = document.querySelector('.emblem-loader');
  if (loader) {
    window.setTimeout(() => loader.classList.add('is-hidden'), 650);
  }

  /* Mobile nav toggle */
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? 'Close' : 'Menu';
    });
    links.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => {
        links.classList.remove('is-open');
        toggle.textContent = 'Menu';
      })
    );
  }

  /* Scroll reveal */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  /* Contact / careers form — front-end only stub.
     Replace the fetch() target with your form backend
     (Netlify Forms, Formspree, etc.) — see README for setup. */
  const form = document.querySelector('[data-form]');
  if (form) {
    form.addEventListener('submit', (e) => {
      const status = form.querySelector('.form-status');
      // If Netlify Forms attribute is present, let the native submit proceed.
      if (form.hasAttribute('data-netlify')) return;
      e.preventDefault();
      if (status) status.textContent = 'Thank you — we will be in touch shortly.';
      form.reset();
    });
  }

  /* Sticky header shrink shadow on scroll */
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.style.boxShadow = window.scrollY > 8 ? '0 1px 0 rgba(26,22,19,0.08)' : 'none';
    }, { passive: true });
  }
});
