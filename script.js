// RUSIRU CREATIVES website interactions
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

// IMPORTANT: Replace this with your WhatsApp number in international format,
// without +, spaces or dashes. Example for Sri Lanka: 94771234567
const WHATSAPP_NUMBER = '94707380188';

document.getElementById('contactForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const name = data.get('name').trim();
  const email = data.get('email').trim();
  const service = data.get('service');
  const message = data.get('message').trim();

  if (WHATSAPP_NUMBER.includes('X')) {
    document.getElementById('formStatus').textContent =
      'කරුණාකර script.js ගොනුවේ WHATSAPP_NUMBER සඳහා ඔබගේ අංකය ඇතුළත් කරන්න.';
    return;
  }

  const text = `Hello RUSIRU CREATIVES!%0A%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AService: ${encodeURIComponent(service)}%0AMessage: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener');
});
