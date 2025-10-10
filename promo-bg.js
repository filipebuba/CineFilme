// Popula dinamicamente o background da seção promocional com imagens
(function () {
  function collectImageSources() {
    // Preservar ordem e preferir backdrops
    const ordered = [];
    const add = (src) => { if (src) ordered.push(src); };
    // Imagens da hero (tipicamente backdrops)
    document.querySelectorAll('#hero-slider .hero-image').forEach(img => {
      add(img.getAttribute('src') || img.src);
    });
    // Imagens dos carrosséis: preferir data-backdrop, depois data-poster, depois src
    document.querySelectorAll('.carousel .movie-image').forEach(img => {
      const bd = (img.dataset && img.dataset.backdrop) || '';
      const pt = (img.dataset && img.dataset.poster) || '';
      if (bd) add(bd);
      else if (pt) add(pt);
      else add(img.getAttribute('src') || img.src);
    });
    // Remover duplicados mantendo ordem
    const seen = new Set();
    const unique = [];
    ordered.forEach(src => { if (!seen.has(src)) { seen.add(src); unique.push(src); } });
    return unique;
  }

  function ensurePromoStrip() {
    const banner = document.querySelector('.promo-section .promo-banner');
    if (!banner) return null;
    let bg = banner.querySelector('.promo-bg');
    if (!bg) {
      bg = document.createElement('div');
      bg.className = 'promo-bg';
      const strip = document.createElement('div');
      strip.className = 'promo-bg-strip';
      bg.appendChild(strip);
      banner.insertBefore(bg, banner.firstChild);
    }
    const strip = bg.querySelector('.promo-bg-strip');
    return strip || null;
  }

  function populate() {
    const strip = ensurePromoStrip();
    if (!strip) return;
    strip.innerHTML = '';

    const imgs = collectImageSources();
    const maxCount = 12;
    const chosen = imgs.slice(0, maxCount);

    const appendImg = (src) => {
      const img = document.createElement('img');
      img.className = 'promo-bg-image';
      img.src = src;
      img.alt = '';
      img.loading = 'lazy';
      strip.appendChild(img);
    };

    chosen.forEach(appendImg);
    // Duplicar sequência para loop contínuo
    chosen.forEach(appendImg);
  }

  function setupObservers() {
    const targets = [
      document.getElementById('hero-slider'),
      ...Array.from(document.querySelectorAll('.carousel'))
    ].filter(Boolean);

    targets.forEach(target => {
      const mo = new MutationObserver(() => { populate(); });
      mo.observe(target, { childList: true, subtree: true });
    });
  }

  function init() {
    populate();
    setupObservers();
    window.addEventListener('load', populate);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();