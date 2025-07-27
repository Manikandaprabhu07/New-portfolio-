// Basic contact form logic
document.getElementById('contactForm').addEventListener('submit', function(event){
  event.preventDefault();
  document.getElementById('formMessage').textContent = 'Thank you for reaching out! I will get back to you soon.';
  this.reset();
});

// Slide-in animation on scroll for sections
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});
