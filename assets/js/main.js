/* ============================================================
   PALMASNET — LP SÃO FRANCISCO DO SUL
   assets/js/main.js
   ============================================================ */

(function () {
  'use strict';

  /* ── Config ────────────────────────────────────────────── */
  const WA_NUMBER = '554734442071';
  const WA_MESSAGE = encodeURIComponent(
    'Olá! Vim pela página de São Francisco do Sul e quero contratar a internet da Palmasnet. Pode me ajudar?'
  );
  const WA_BASE = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

  /* ── WhatsApp links ─────────────────────────────────────── */
  // Inject correct WA link in every [data-wa] element
  document.querySelectorAll('[data-wa]').forEach(function (el) {
    const plan = el.getAttribute('data-wa');
    let msg = 'Olá! Vim pela página de São Francisco do Sul e quero contratar a internet da Palmasnet.';

    if (plan === '500') msg = 'Olá! Vim pela LP de SFS e quero saber mais sobre o plano de 500 Mega por R$ 109,90.';
    if (plan === '800') msg = 'Olá! Vim pela LP de SFS e tenho interesse no plano de 800 Mega por R$ 119,90.';
    if (plan === 'cam') msg = 'Olá! Vim pela LP de SFS e quero saber mais sobre o plano de 800 Mega com câmera por R$ 139,90.';
    if (plan === 'combo') msg = 'Olá! Vim pela LP de SFS e quero saber mais sobre o Combo São Chico (800 Mega + 50 GB 5G) por R$ 169,90.';
    if (plan === 'geral') msg = 'Olá! Vim pela página de São Francisco do Sul e quero contratar a internet da Palmasnet.';

    const href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

    if (el.tagName === 'A') {
      el.href = href;
      el.target = '_blank';
      el.rel = 'noopener noreferrer';
    } else {
      el.addEventListener('click', function () {
        window.open(href, '_blank', 'noopener,noreferrer');
      });
    }
  });

  /* ── Sticky header ──────────────────────────────────────── */
  var header = document.getElementById('header');
  function onScroll() {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Scroll reveal ──────────────────────────────────────── */
  var revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(function (el) { observer.observe(el); });
    /* Fallback — força visibilidade após 800ms */
    setTimeout(function () {
      revealEls.forEach(function (el) { el.classList.add('visible'); });
    }, 800);
  } else {
    // Fallback: show everything
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ── Smooth scroll for anchor links ─────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var offset = 80; // header height
        var top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  /* ── Stagger reveal for grid children ────────────────────── */
  document.querySelectorAll('.plans-grid, .benefits-grid, .testimonials-grid').forEach(function (grid) {
    var children = grid.querySelectorAll('.reveal');
    children.forEach(function (child, i) {
      child.style.transitionDelay = (i * 0.1) + 's';
    });
  });

})();
