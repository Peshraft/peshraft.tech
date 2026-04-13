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

      var web3Key = String(form.getAttribute('data-web3forms-access-key') || '').trim();

      function submitViaMailto(fallbackAfterApiFailure) {
        var mailSubject = 'Project inquiry — Peshraft Technologies';
        var mailBody =
          'Name: ' +
          nameVal +
          '\nEmail: ' +
          emailVal +
          '\nInterest: ' +
          serviceVal +
          '\n\n' +
          messageVal;
        var maxMailBody = 1800;
        if (mailBody.length > maxMailBody) {
          mailBody = mailBody.slice(0, maxMailBody - 24) + '\n\n…(message truncated)';
        }
        var href =
          'mailto:contact@peshraft.tech?subject=' +
          encodeURIComponent(mailSubject) +
          '&body=' +
          encodeURIComponent(mailBody);
        window.location.href = href;
        formStatus.classList.remove('is-error');
        if (fallbackAfterApiFailure) {
          formStatus.textContent =
            'The online form could not send your message (for example if the monthly limit was reached). ' +
            'Your email app should open with the same details — send that email to reach us. ' +
            'If nothing opens, write to contact@peshraft.tech.';
        } else {
          formStatus.textContent =
            'Your email app should open with this message pre-filled. Send the email to reach us. ' +
            'If nothing opens, email contact@peshraft.tech directly.';
        }
        form.reset();
        formStatus.focus();
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.setAttribute('aria-busy', 'true');
        submitBtn.textContent = 'Sending…';
      }

      function finishSubmitUi() {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.setAttribute('aria-busy', 'false');
          submitBtn.textContent = defaultBtnLabel;
        }
      }

      if (web3Key.length >= 32) {
        fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            access_key: web3Key,
            subject: 'Project inquiry — Peshraft Technologies',
            name: nameVal,
            email: emailVal,
            message: bodyText
          })
        })
          .then(function (response) {
            return response.text().then(function (text) {
              var data = {};
              if (text) {
                try {
                  data = JSON.parse(text);
                } catch (parseErr) {
                  throw new Error('Invalid response');
                }
              }
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
            submitViaMailto(true);
          })
          .finally(finishSubmitUi);
      } else {
        try {
          submitViaMailto(false);
        } finally {
          finishSubmitUi();
        }
      }
    });
  }
})();
