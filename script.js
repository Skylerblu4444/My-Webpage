// Smooth Scrolling
document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        const menuToggle = document.getElementById('menu-toggle');
        if (menuToggle.checked) {
            menuToggle.checked = false;
        }
    });
});

// Form Submission Feedback
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const subject = document.getElementById('subject').value;
    alert(`Thanks for your message about "${subject}"! I’ll get back to you soon.`);
    this.reset();
});

// Animate Elements on Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Dynamic Hero Text Effect (Optional)
const heroP = document.querySelector('.hero-overlay p');
const phrases = ['Aspiring Software Engineer!!'];
let phraseIndex = 0;

function typeEffect() {
    heroP.textContent = phrases[phraseIndex];
    phraseIndex = (phraseIndex + 1) % phrases.length;
}

setInterval(typeEffect, 3000);