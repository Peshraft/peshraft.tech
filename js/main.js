(function () {
  'use strict';

  var navToggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  var navLinks = document.querySelectorAll('.nav__link');
  var yearEl = document.getElementById('year');
  var form = document.getElementById('contact-form');
  var formStatus = document.getElementById('form-status');

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  function setNavOpen(open) {
    if (!navToggle || !nav) {
      return;
    }
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    nav.classList.toggle('is-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var expanded = navToggle.getAttribute('aria-expanded') === 'true';
      setNavOpen(!expanded);
    });

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        setNavOpen(false);
      });
    });
  }

  var revealEls = document.querySelectorAll('[data-reveal]');
  if (revealEls.length && 'IntersectionObserver' in window) {
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      revealEls.forEach(function (el) {
        el.classList.add('is-visible');
      });
    } else {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              io.unobserve(entry.target);
            }
          });
        },
        { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
      );
      revealEls.forEach(function (el) {
        io.observe(el);
      });
    }
  } else {
    revealEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  if (form && formStatus) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      formStatus.textContent = '';
      formStatus.classList.remove('is-error');

      var name = form.elements.namedItem('name');
      var email = form.elements.namedItem('email');
      var message = form.elements.namedItem('message');
      var service = form.elements.namedItem('service');

      if (!name || !email || !message) {
        return;
      }

      var nameVal = String(name.value || '').trim();
      var emailVal = String(email.value || '').trim();
      var messageVal = String(message.value || '').trim();
      var serviceVal = service ? String(service.value || '') : '';

      if (!nameVal || !emailVal || !messageVal) {
        formStatus.textContent = 'Please fill in name, email, and message.';
        formStatus.classList.add('is-error');
        return;
      }

      var subject = encodeURIComponent('Project inquiry — Peshraft Technologies');
      var body = encodeURIComponent(
        'Name: ' +
          nameVal +
          '\nEmail: ' +
          emailVal +
          '\nInterest: ' +
          serviceVal +
          '\n\n' +
          messageVal
      );
      window.location.href = 'mailto:hello@peshraft.tech?subject=' + subject + '&body=' + body;
      formStatus.textContent = 'Opening your email app… If nothing opens, copy hello@peshraft.tech.';
    });
  }
})();
