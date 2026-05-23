// ── Menu toggle (single icon only) ──────────────
const menuIcon = document.querySelector('#menu-icon');
const navbar   = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Close menu when a nav link is clicked
navbar.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  });
});

// ── Dark / Light mode ────────────────────────────
const darkmodeIcon = document.querySelector('#darkmode-icon');

darkmodeIcon.onclick = () => {
  darkmodeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('light-mode');
};

// ── Contact form ─────────────────────────────────
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const fullName    = document.getElementById('fullName').value.trim();
  const senderEmail = document.getElementById('senderEmail').value.trim();
  const phoneNumber = document.getElementById('phoneNumber').value.trim();
  const subject     = document.getElementById('subject').value.trim();
  const message     = document.getElementById('message').value.trim();

  if (!fullName || !senderEmail || !subject || !message) {
    alert('Please fill in all required fields.');
    return;
  }

  const body = `Name: ${fullName}%0AEmail: ${senderEmail}%0APhone: ${phoneNumber}%0A%0AMessage:%0A${message}`;
  const mailtoLink = `mailto:jerichomanabat25@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

  window.location.href = mailtoLink;

  setTimeout(() => contactForm.reset(), 1000);
});

// ── Active nav highlight on scroll ──────────────
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 120;
  sections.forEach(section => {
    if (scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
      navLinks.forEach(a => a.classList.remove('active-link'));
      const active = document.querySelector(`.navbar a[href="#${section.id}"]`);
      if (active) active.classList.add('active-link');
    }
  });
});
