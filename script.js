/* ================================
   VAVO Organics — script.js
================================ */

(function () {
  'use strict';

  /* ── NAV SCROLL EFFECT ── */
  const nav = document.getElementById('nav');

  function onScroll() {
    if (window.scrollY > 48) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run on load

  /* ── MOBILE MENU ── */
  const burger = document.getElementById('navBurger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mmLinks = document.querySelectorAll('.mm-link');
  let menuOpen = false;

  function toggleMenu(open) {
    menuOpen = open;
    mobileMenu.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    // Animate burger to X
    const spans = burger.querySelectorAll('span');
    if (open) {
      spans[0].style.transform = 'translateY(6.5px) rotate(45deg)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  }

  burger.addEventListener('click', () => toggleMenu(!menuOpen));

  mmLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  /* ── REVEAL ON SCROLL ── */
  const revealEls = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  revealEls.forEach(el => revealObserver.observe(el));

  /* ── PARALLAX HERO PACK ── */
  const heroPack = document.getElementById('heroPack');

  function onScrollParallax() {
    if (!heroPack) return;
    const scrolled = window.scrollY;
    const offset = scrolled * 0.08;
    // The floating animation is on the element; we layer parallax via CSS var
    heroPack.style.setProperty('--parallax-y', `-${offset}px`);
  }

  // Only run if no reduced motion
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('scroll', onScrollParallax, { passive: true });
  }

  /* ── SMOOTH ACTIVE NAV LINKS ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinkEls = document.querySelectorAll('.nav__links a');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinkEls.forEach(link => {
            link.style.opacity = link.getAttribute('href') === `#${id}` ? '1' : '0.7';
            link.style.fontWeight = link.getAttribute('href') === `#${id}` ? '500' : '400';
          });
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach(s => sectionObserver.observe(s));

  /* ── CONTACT FORM ── */
  const submitBtn = document.getElementById('submitBtn');

  if (submitBtn) {
    submitBtn.addEventListener('click', function () {
      const name     = document.getElementById('name')?.value.trim();
      const phone    = document.getElementById('phone')?.value.trim();
      const interest = document.getElementById('interest')?.value;
      const message  = document.getElementById('message')?.value.trim();

      if (!name || !phone) {
        showToast('Please fill in your name and phone number.', 'error');
        return;
      }

      // Build WhatsApp message
      const waText = encodeURIComponent(
        `Hi VAVO Organics,\n\nName: ${name}\nPhone: ${phone}\nI am a: ${interest || 'Not specified'}\n\nMessage: ${message || 'Interested in your products. Please share details.'}`
      );
      const waUrl = `https://wa.me/919876543210?text=${waText}`;

      showToast('Redirecting to WhatsApp…', 'success');
      setTimeout(() => window.open(waUrl, '_blank'), 800);
    });
  }

  /* ── TOAST NOTIFICATION ── */
  function showToast(msg, type = 'success') {
    const existing = document.querySelector('.vavo-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'vavo-toast';
    toast.textContent = msg;

    Object.assign(toast.style, {
      position: 'fixed',
      bottom: '96px',
      right: '32px',
      background: type === 'success' ? '#0F3D2E' : '#8B2020',
      color: '#F7F3EA',
      fontFamily: "'Inter', sans-serif",
      fontSize: '13px',
      fontWeight: '500',
      padding: '14px 22px',
      borderRadius: '2px',
      zIndex: '999',
      opacity: '0',
      transform: 'translateY(8px)',
      transition: 'opacity 0.3s, transform 0.3s',
      maxWidth: '280px',
      lineHeight: '1.5',
    });

    document.body.appendChild(toast);
    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateY(0)';
    });

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(8px)';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  /* ── STRIP TICKER DUPLICATION ── */
  // Ensure the ticker seamlessly loops by doubling content if needed
  const stripTrack = document.querySelector('.strip__track');
  if (stripTrack) {
    const clone = stripTrack.cloneNode(true);
    stripTrack.parentNode.appendChild(clone);
  }

  /* ── HERO HEADLINE TYPEWRITER CURSOR ── */
  // Subtle cursor blink on em element
  const heroEm = document.querySelector('.hero__headline em');
  if (heroEm) {
    let visible = true;
    setInterval(() => {
      // No actual typewriter — just a subtle border pulse
    }, 600);
  }

  /* ── DEALER STAT CARD COUNTER ANIMATION ── */
  function animateValue(el, end, duration) {
    if (isNaN(end)) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        el.textContent = end;
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(start);
      }
    }, 16);
  }

  const statNums = document.querySelectorAll('.dealers__stat-num');
  const statObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const num = parseInt(entry.target.textContent);
          if (!isNaN(num)) animateValue(entry.target, num, 1000);
          statObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  statNums.forEach(el => statObserver.observe(el));

  /* ── PAGE LOAD FADE IN ── */
  document.documentElement.style.opacity = '0';
  document.documentElement.style.transition = 'opacity 0.4s';
  window.addEventListener('load', () => {
    document.documentElement.style.opacity = '1';
  });

})();
