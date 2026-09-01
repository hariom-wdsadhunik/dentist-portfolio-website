/* ====================================================
   APEX DENTAL CARE - INTERACTIVE SCRIPT
   ==================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = hamburgerBtn.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu on link click
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburgerBtn.querySelector('i').classList.replace('fa-xmark', 'fa-bars');
            });
        });
    }

    // 2. Header Scroll Shadow
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Before & After Image Sliders
    const sliders = document.querySelectorAll('.slider-container');
    sliders.forEach(slider => {
        const range = slider.querySelector('.slider-range');
        const beforeWrapper = slider.querySelector('.img-before-wrapper');
        const handle = slider.querySelector('.slider-handle');

        if (range && beforeWrapper && handle) {
            range.addEventListener('input', (e) => {
                const value = e.target.value;
                beforeWrapper.style.width = `${value}%`;
                handle.style.left = `${value}%`;
            });
        }
    });

    // 4. FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        questionBtn.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all
            faqItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq-answer').style.maxHeight = null;
            });

            // Open clicked if wasn't active
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

    // 5. Booking Modal Logic
    const bookingModal = document.getElementById('booking-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const bookingBtns = document.querySelectorAll('.open-booking-modal');
    const serviceSelect = document.getElementById('modal-service-select');

    bookingBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const service = btn.getAttribute('data-service');
            if (service && serviceSelect) {
                serviceSelect.value = service;
            }
            bookingModal.classList.add('active');
        });
    });

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', () => {
            bookingModal.classList.remove('active');
        });
    }

    if (bookingModal) {
        bookingModal.addEventListener('click', (e) => {
            if (e.target === bookingModal) {
                bookingModal.classList.remove('active');
            }
        });
    }

    // 6. Form Submission Feedbacks
    const quickForm = document.getElementById('contact-quick-form');
    if (quickForm) {
        quickForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('🎉 Thank you! Your booking request has been received. Our dental office will contact you shortly.');
            quickForm.reset();
        });
    }

    const modalForm = document.getElementById('modal-booking-form');
    if (modalForm) {
        modalForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('🎉 Booking Confirmed! We look forward to seeing your smile. A confirmation has been sent.');
            modalForm.reset();
            bookingModal.classList.remove('active');
        });
    }


    // ====================================================
    // 7. CUSTOM MOUSE CURSOR & 3D INTERACTIVE TILT EFFECT
    // ====================================================
    const cursorDot = document.getElementById('cursor-dot');
    const cursorOutline = document.getElementById('cursor-outline');

    if (cursorDot && cursorOutline && window.matchMedia('(pointer: fine)').matches) {
        let mouseX = 0, mouseY = 0;
        let outlineX = 0, outlineY = 0;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Instantly position dot
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;
        });

        // Smooth outline follower loop
        function animateCursor() {
            outlineX += (mouseX - outlineX) * 0.15;
            outlineY += (mouseY - outlineY) * 0.15;

            cursorOutline.style.left = `${outlineX}px`;
            cursorOutline.style.top = `${outlineY}px`;

            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Add magnetic hover state for buttons, links, cards
        const hoverables = document.querySelectorAll('a, button, .service-card, .review-card, .faq-question, input, select, textarea');
        hoverables.forEach(elem => {
            elem.addEventListener('mouseenter', () => document.body.classList.add('hovering-interactive'));
            elem.addEventListener('mouseleave', () => document.body.classList.remove('hovering-interactive'));
        });
    }

    // 3D Tilt & Mouse Spotlight Glow on Cards
    const tiltCards = document.querySelectorAll('.service-card, .review-card, .transformation-card, .hero-card-floating');

    tiltCards.forEach(card => {
        // Create spotlight glow layer if missing
        if (!card.querySelector('.card-spotlight-glow')) {
            const glow = document.createElement('div');
            glow.className = 'card-spotlight-glow';
            card.appendChild(glow);
        }

        const glowLayer = card.querySelector('.card-spotlight-glow');

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -8; // Max 8 deg
            const rotateY = ((x - centerX) / centerX) * 8;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;

            if (glowLayer) {
                glowLayer.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(2, 132, 199, 0.15), transparent 70%)`;
            }
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        });
    });

});
