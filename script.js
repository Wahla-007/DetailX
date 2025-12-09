window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
});

// Smooth scroll to sections
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu if open
        mobileMenu.classList.remove('active');
    }
}

// Active section highlighting
const sections = ['home', 'about', 'services', 'gallery', 'contact'];
const navLinks = document.querySelectorAll('.nav-link, .mobile-link');

function updateActiveSection() {
    let currentSection = 'home';
    
    sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                currentSection = section;
            }
        }
    });
    
    navLinks.forEach(link => {
        const section = link.getAttribute('data-section');
        if (section === currentSection) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', updateActiveSection);

// Handle navigation clicks
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('data-section');
        scrollToSection(sectionId);
    });
});

// Form submission - Google Sheets integration
const contactForm = document.getElementById('contactForm');
const formToggle = document.getElementById('formToggle');
const contactFormContainer = document.querySelector('.contact-form-container.full-width');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: contactForm.querySelector('input[name="name"]').value,
            email: contactForm.querySelector('input[name="email"]').value,
            phone: contactForm.querySelector('input[name="phone"]').value,
            service: contactForm.querySelector('select[name="service"]').value,
            customService: contactForm.querySelector('textarea[name="customService"]').value || '',
            address: contactForm.querySelector('textarea[name="address"]').value,
            notes: contactForm.querySelector('textarea[name="notes"]').value || ''
        };
        
        // Send to Google Sheets via Apps Script
        const scriptURL = 'https://script.google.com/macros/s/AKfycby2aMBjqBf782BTMwWXUncN3d0EEvIiDJmAh31P_8YoBsqJolUWjhdZ3zPABald8Sg/exec';
        
        fetch(scriptURL, {
            method: 'POST',
            body: new FormData(contactForm),
            mode: 'no-cors'
        })
        .then(response => {
            console.log('Form submitted successfully');
            alert('Thank you for your booking request! We will contact you shortly.');
            contactForm.reset();
            contactFormContainer.classList.remove('expanded');
            formToggle.classList.remove('active');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Booking request saved! We will contact you shortly at +92 325 2337074');
            contactForm.reset();
        });
    });
}

// Form toggle and expand functionality
if (formToggle && contactFormContainer && contactForm) {
    // Add expand functionality on input
    const formInputs = contactForm.querySelectorAll('input, textarea, select');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            contactFormContainer.classList.add('expanded');
            formToggle.classList.add('active');
        });
    });
    
    // Toggle functionality
    formToggle.addEventListener('click', function(e) {
        e.preventDefault();
        contactFormContainer.classList.toggle('expanded');
        formToggle.classList.toggle('active');
    });
}

// Intersection Observer for animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all service cards
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Observe feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Observe testimonial cards
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('active');
    }
});

// Gallery Loading
document.addEventListener('DOMContentLoaded', function() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (galleryGrid) {
        // Gallery images from the gallery folder
        const galleryImages = [
            'gallery/Bentley After Wash.jpg',
            'gallery/Bentley Foamed Up.jpg',
            'gallery/Bentley Front.jpg',
            'gallery/Bnetley 1.jpg',
            'gallery/During wash Bentley DHA.png',
            'gallery/full details.webp',
            'gallery/Hn=onda covoc 2.jpeg',
            'gallery/honda city.jpg',
            'gallery/honda civic.jpeg',
            'gallery/honda covic 3.jpeg',
            'gallery/land cruiser.jpeg',
            'gallery/Polishing Civiv 21 model.jpeg',
            'gallery/Suzuki Swift.jpeg',
            'gallery/Toyota camry.jpg',
            'gallery/Toyota coroll engine bay 2004.jpg'
        ];
        
        galleryImages.forEach((imagePath, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `
                <img src="${imagePath}" alt="Gallery Image ${index + 1}" loading="lazy">
                <div class="gallery-overlay">
                    <span class="gallery-overlay-text">View</span>
                </div>
            `;
            galleryGrid.appendChild(galleryItem);
        });
    }
    
    // Custom Service Field Toggle
    const serviceSelect = document.querySelector('select[required]');
    const customServiceGroup = document.getElementById('customServiceGroup');
    
    if (serviceSelect && customServiceGroup) {
        serviceSelect.addEventListener('change', function() {
            if (this.value === 'Custom Service') {
                customServiceGroup.style.display = 'flex';
            } else {
                customServiceGroup.style.display = 'none';
            }
        });
    }
});