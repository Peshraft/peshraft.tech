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

  function scrollToTopAnchor() {
    var prefersReduced =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: prefersReduced ? 'auto' : 'smooth'
    });
    try {
      if (window.history && window.history.replaceState) {
        history.replaceState(null, '', '#top');
      }
    } catch (err) {
      /* ignore */
    }
  }

  document.querySelectorAll('a[href="#top"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }
      e.preventDefault();
      scrollToTopAnchor();
    });
  });

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

  function t(key) {
    if (window.peshraftI18n && typeof window.peshraftI18n.get === 'function') {
      return window.peshraftI18n.get(key);
    }
    return '';
  }

  function submitBtnLabel() {
    var label = t('contact.submit');
    return label || 'Send message';
  }

  function sendingBtnLabel() {
    var label = t('contact.sending');
    return label || 'Sending…';
  }

  if (form && formStatus) {
    var submitBtn = form.querySelector('button[type="submit"]');

    function updateContactKindUi() {
      var orgRow = document.getElementById('org-name-row');
      var orgInput = document.getElementById('org-name');
      var kindOrg = form.querySelector('input[name="contact_kind"][value="organization"]');
      if (!orgRow || !orgInput) {
        return;
      }
      var isOrg = kindOrg && kindOrg.checked;
      orgRow.hidden = !isOrg;
      orgInput.required = isOrg;
      if (!isOrg) {
        orgInput.value = '';
      }
    }

    form.querySelectorAll('input[name="contact_kind"]').forEach(function (radio) {
      radio.addEventListener('change', updateContactKindUi);
    });
    updateContactKindUi();

    document.addEventListener('peshraft:lang', function () {
      if (submitBtn && submitBtn.getAttribute('aria-busy') !== 'true') {
        submitBtn.textContent = submitBtnLabel();
      }
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      formStatus.textContent = '';
      formStatus.classList.remove('is-error');

      var name = form.elements.namedItem('name');
      var email = form.elements.namedItem('email');
      var phone = form.elements.namedItem('phone');
      var orgNameEl = form.elements.namedItem('org_name');
      var message = form.elements.namedItem('message');
      var service = form.elements.namedItem('service');
      var contactKindNodes = form.elements.namedItem('contact_kind');

      if (!name || !email || !phone || !message) {
        return;
      }

      var nameVal = String(name.value || '').trim();
      var emailVal = String(email.value || '').trim();
      var phoneVal = String(phone.value || '').trim();
      var messageVal = String(message.value || '').trim();
      var serviceVal = service ? String(service.value || '') : '';
      var contactKindVal =
        contactKindNodes && contactKindNodes.value
          ? String(contactKindNodes.value)
          : 'personal';
      var orgNameVal = orgNameEl ? String(orgNameEl.value || '').trim() : '';

      if (!nameVal || !emailVal || !phoneVal || !messageVal) {
        formStatus.textContent =
          t('form.errorRequired') || 'Please fill in name, email, phone, and message.';
        formStatus.classList.add('is-error');
        return;
      }

      if (contactKindVal === 'organization' && !orgNameVal) {
        formStatus.textContent =
          t('form.errorOrgName') || 'Please enter your organization name.';
        formStatus.classList.add('is-error');
        return;
      }

      var kindLabel =
        contactKindVal === 'organization'
          ? t('contact.kindOrganization') || 'Organization'
          : t('contact.kindPersonal') || 'Personal';

      var metaBlock =
        'Interest: ' +
        serviceVal +
        '\nPhone: ' +
        phoneVal +
        '\nContact type: ' +
        kindLabel +
        (contactKindVal === 'organization' && orgNameVal ? '\nOrganization: ' + orgNameVal : '') +
        '\n\n';

      var bodyText = metaBlock + messageVal;

      var web3Key = String(form.getAttribute('data-web3forms-access-key') || '').trim();

      function submitViaMailto(fallbackAfterApiFailure) {
        var mailSubject = 'Project inquiry — Peshraft Technologies';
        var mailBody =
          'Name: ' +
          nameVal +
          '\nEmail: ' +
          emailVal +
          '\nPhone: ' +
          phoneVal +
          '\nContact type: ' +
          kindLabel +
          (contactKindVal === 'organization' && orgNameVal
            ? '\nOrganization: ' + orgNameVal
            : '') +
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
            t('form.mailtoFallback') ||
            'The online form could not send your message. Your email app should open — send that email to reach us.';
        } else {
          formStatus.textContent =
            t('form.mailtoDirect') ||
            'Your email app should open with this message pre-filled. Send the email to reach us.';
        }
        form.reset();
        updateContactKindUi();
        formStatus.focus();
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.setAttribute('aria-busy', 'true');
        submitBtn.textContent = sendingBtnLabel();
      }

      function finishSubmitUi() {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.setAttribute('aria-busy', 'false');
          submitBtn.textContent = submitBtnLabel();
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
            phone: phoneVal,
            contact_kind: contactKindVal,
            org_name: contactKindVal === 'organization' ? orgNameVal : '',
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
              t('form.success') || 'Thank you — your message was sent. We will get back to you soon.';
            form.reset();
            updateContactKindUi();
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
