(function () {
  'use strict';

  var WHATSAPP_E164 = '93700012400';

  function t(key) {
    if (window.peshraftI18n && typeof window.peshraftI18n.get === 'function') {
      return window.peshraftI18n.get(key);
    }
    return '';
  }

  function updateWhatsAppLink() {
    var text = t('movement.whatsapp.prefill');
    var href =
      'https://wa.me/' + WHATSAPP_E164 + (text ? '?text=' + encodeURIComponent(text) : '');
    document.querySelectorAll('[data-whatsapp-chat]').forEach(function (el) {
      el.setAttribute('href', href);
    });
    var float = document.getElementById('whatsapp-float');
    if (float) {
      var label = t('movement.whatsapp.aria');
      if (label) {
        float.setAttribute('aria-label', label);
      }
    }
  }

  function scrollToHash(hash) {
    if (!hash || hash === '#') {
      return;
    }
    var id = hash.replace(/^#/, '');
    var target = document.getElementById(id);
    if (!target) {
      return;
    }
    var prefersReduced =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
  }

  function initHeroScroll() {
    var btn = document.querySelector('[data-movement-scroll-target]');
    if (!btn) {
      return;
    }
    btn.addEventListener('click', function () {
      var hash = btn.getAttribute('data-movement-scroll-target') || '#use-cases';
      scrollToHash(hash);
    });
  }

  function animateCounter(el, target, suffix, durationMs) {
    var start = 0;
    var startTime = null;
    function easeOut(t) {
      return 1 - Math.pow(1 - t, 3);
    }
    function frame(now) {
      if (!startTime) {
        startTime = now;
      }
      var p = Math.min(1, (now - startTime) / durationMs);
      var eased = easeOut(p);
      var val = Math.round(start + (target - start) * eased);
      el.textContent = String(val) + (p >= 1 ? suffix : '');
      if (p < 1) {
        requestAnimationFrame(frame);
      }
    }
    requestAnimationFrame(frame);
  }

  function initCounters() {
    var wrap = document.querySelector('.movement-counters');
    if (!wrap) {
      return;
    }
    var items = wrap.querySelectorAll('.js-movement-counter');
    if (!items.length) {
      return;
    }
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function runCounters() {
      items.forEach(function (item) {
        var target = parseInt(item.getAttribute('data-target') || '0', 10);
        var suffix = item.getAttribute('data-suffix') || '';
        var valueEl = item.querySelector('.movement-counter__value');
        if (!valueEl || !target) {
          return;
        }
        if (reduceMotion) {
          valueEl.textContent = String(target) + suffix;
          return;
        }
        valueEl.textContent = '0';
        animateCounter(valueEl, target, suffix, 2000);
      });
    }

    if (!('IntersectionObserver' in window)) {
      runCounters();
      return;
    }
    var fired = false;
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting || fired) {
            return;
          }
          fired = true;
          runCounters();
          io.disconnect();
        });
      },
      { threshold: 0.25 }
    );
    io.observe(wrap);
  }

  function initPillarStagger() {
    var grid = document.querySelector('.movement-promise__grid');
    if (!grid) {
      return;
    }
    var pillars = grid.querySelectorAll('.movement-pillar[data-movement-reveal]');
    if (!pillars.length) {
      return;
    }
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      pillars.forEach(function (p) {
        p.classList.add('is-visible');
      });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            pillars.forEach(function (pillar, i) {
              setTimeout(function () {
                pillar.classList.add('is-visible');
              }, i * 90);
            });
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(grid);
  }

  function initHeroParallax() {
    var bg = document.querySelector('.movement-hero__bg');
    if (!bg) {
      return;
    }
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || window.innerWidth < 768) {
      return;
    }
    var ticking = false;
    window.addEventListener(
      'scroll',
      function () {
        if (ticking) {
          return;
        }
        ticking = true;
        requestAnimationFrame(function () {
          var hero = document.querySelector('.movement-hero');
          if (!hero) {
            ticking = false;
            return;
          }
          var rect = hero.getBoundingClientRect();
          if (rect.bottom < 0 || rect.top > window.innerHeight) {
            ticking = false;
            return;
          }
          var y = window.scrollY * 0.18;
          bg.style.transform = 'translate3d(0, ' + y + 'px, 0)';
          ticking = false;
        });
      },
      { passive: true }
    );
  }

  function boot() {
    updateWhatsAppLink();
    initHeroScroll();
    initCounters();
    initPillarStagger();
    initHeroParallax();
  }

  document.addEventListener('peshraft:lang', updateWhatsAppLink);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
