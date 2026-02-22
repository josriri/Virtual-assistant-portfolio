// Form validation and submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                company: document.getElementById('company').value,
                service: document.getElementById('service').value,
                message: document.getElementById('message').value
            };
            
            // Validate form
            if (!formData.name || !formData.email || !formData.service || !formData.message) {
                showMessage('Please fill in all required fields', 'error');
                return;
            }
            
            // Validate email
            if (!isValidEmail(formData.email)) {
                showMessage('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate form submission
            console.log('Form Data:', formData);
            
            // Show success message
            showMessage('Thank you for reaching out! I\'ll get back to you within 24 hours.', 'success');
            
            // Reset form
            contactForm.reset();
            
            // Clear message after 5 seconds
            setTimeout(() => {
                const messageEl = document.getElementById('formMessage');
                if (messageEl) {
                    messageEl.classList.remove('success', 'error');
                    messageEl.textContent = '';
                }
            }, 5000);
        });
    }
    
    // Add smooth scroll for navigation links
    addSmoothScroll();
    
    // Add animation on scroll
    addScrollAnimation();
});

// Show form message
function showMessage(message, type) {
    const messageEl = document.getElementById('formMessage');
    if (messageEl) {
        messageEl.textContent = message;
        messageEl.className = `form-message ${type}`;
    }
}

// Validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Smooth scroll for navigation
function addSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

// Add scroll animation
function addScrollAnimation() {
    const cards = document.querySelectorAll('.highlight-card, .service-card, .cert-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
}

// Active navigation link
document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (currentLocation.includes(href) && href !== 'index.html') {
            link.classList.add('active');
        } else if (href === 'index.html' && currentLocation === '/') {
            link.classList.add('active');
        }
    });
});

// Skill bar animation
window.addEventListener('scroll', function() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight && !bar.classList.contains('animated')) {
            bar.classList.add('animated');
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        }
    });
});

// Mobile menu toggle (future enhancement)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        isValidEmail,
        showMessage
    };
}