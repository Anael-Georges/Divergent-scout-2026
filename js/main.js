/* ============================================================
   DIVERGENT 2025 — comportements
   - Compte à rebours
   - Menu mobile + dropdowns
   - Reveal au scroll
   - Active page nav
   - Smooth scroll for table-of-contents
   ============================================================ */

(() => {
  // -------- Countdown --------
  // Date du camp (modifiable). On fixe au 13 juillet 2026 à 09:00.
  const CAMP_DATE = new Date('2026-07-13T09:00:00');

  const pad = (n) => String(Math.max(0, n)).padStart(2, '0');

  function tick() {
    const now = new Date();
    let diff = CAMP_DATE - now;
    if (diff < 0) diff = 0;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    const set = (id, v) => {
      const el = document.getElementById(id);
      if (el) el.textContent = pad(v);
    };
    set('cd-d', d);
    set('cd-h', h);
    set('cd-m', m);
    set('cd-s', s);
  }
  tick();
  setInterval(tick, 1000);

  // -------- Mobile menu --------
  const burger = document.querySelector('.burger');
  const navList = document.querySelector('.nav-list');
  if (burger && navList) {
    burger.addEventListener('click', () => {
      const open = burger.classList.toggle('is-open');
      navList.classList.toggle('is-open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
  }

  // -------- Dropdowns (click for mobile, hover for desktop via CSS) --------
  document.querySelectorAll('.nav-item').forEach((item) => {
    const trigger = item.querySelector('.nav-link[aria-haspopup]');
    if (!trigger) return;
    trigger.addEventListener('click', (e) => {
      if (window.innerWidth <= 980) {
        e.preventDefault();
        const isOpen = item.classList.toggle('is-open');
        document.querySelectorAll('.nav-item.is-open').forEach((other) => {
          if (other !== item) other.classList.remove('is-open');
        });
        trigger.setAttribute('aria-expanded', isOpen);
      }
    });
  });

  // -------- Reveal on scroll --------
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));

  // -------- Mark active nav --------
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav-item').forEach((item) => {
    const link = item.querySelector('a');
    if (!link) return;
    const href = (link.getAttribute('href') || '').toLowerCase();
    if (href && (href === path || (path === '' && href === 'index.html'))) {
      item.classList.add('is-active');
    }
  });

  // -------- TOC active state on scroll (info page) --------
  const tocLinks = document.querySelectorAll('.info-toc a[href^="#"]');
  const sections = Array.from(document.querySelectorAll('.info-section[id]'));
  if (tocLinks.length && sections.length) {
    const onScroll = () => {
      const y = window.scrollY + 140;
      let active = sections[0].id;
      for (const sec of sections) {
        if (sec.offsetTop <= y) active = sec.id;
      }
      tocLinks.forEach((a) => {
        a.classList.toggle('is-active', a.getAttribute('href') === '#' + active);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // -------- Year of copyright --------
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
