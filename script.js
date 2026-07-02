// ===== Loader =====
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const body = document.body;
  setTimeout(() => {
    if (loader) loader.classList.add('hidden');
    body.classList.remove('loading');
  }, 900);
});

// ===== Navbar scroll state =====
const navbar = document.querySelector('.navbar');
function handleScroll() {
  if (!navbar) return;
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', handleScroll);
handleScroll();

// ===== Mobile nav toggle =====
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.classList.toggle('active');
  });
}

// ===== Contact form (Formspree) =====
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const successMsg = document.getElementById('form-success');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    try {
      const formData = new FormData(contactForm);
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        contactForm.reset();
        if (successMsg) successMsg.classList.add('visible');
      } else {
        alert('Something went wrong. Please try WhatsApp instead.');
      }
    } catch (err) {
      alert('Something went wrong. Please try WhatsApp instead.');
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
}