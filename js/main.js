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
    var submitBtn = form.querySelector('button[type="submit"]');
    var defaultBtnLabel = submitBtn ? submitBtn.textContent : 'Send message';

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

      var bodyText =
        'Interest: ' +
        serviceVal +
        '\n\n' +
        messageVal;

      var fd = new FormData();
      fd.append('name', nameVal);
      fd.append('email', emailVal);
      fd.append('message', bodyText);
      fd.append('_subject', 'Project inquiry — Peshraft Technologies');
      fd.append('_replyto', emailVal);
      fd.append('_template', 'table');
      fd.append('_captcha', 'false');

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.setAttribute('aria-busy', 'true');
        submitBtn.textContent = 'Sending…';
      }

      fetch('https://formsubmit.co/ajax/contact@peshraft.tech', {
        method: 'POST',
        body: fd,
        headers: {
          Accept: 'application/json'
        }
      })
        .then(function (response) {
          return response.json().then(function (data) {
            var ok = data.success === true || data.success === 'true';
            if (!response.ok || !ok) {
              throw new Error((data && data.message) || 'Request failed');
            }
            return data;
          });
        })
        .then(function () {
          formStatus.classList.remove('is-error');
          formStatus.textContent =
            'Thank you — your message was sent. We will get back to you soon.';
          form.reset();
          formStatus.focus();
        })
        .catch(function () {
          formStatus.classList.add('is-error');
          formStatus.textContent =
            'Could not send right now. Please try again or email contact@peshraft.tech directly.';
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.setAttribute('aria-busy', 'false');
            submitBtn.textContent = defaultBtnLabel;
          }
        });
    });
  }
})();
