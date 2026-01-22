// Pricing Toggle
(function () {
    const billingToggle = document.getElementById('billingToggle');
    const priceAmount = document.getElementById('priceAmount');
    const pricePeriod = document.getElementById('pricePeriod');
    const annualBadge = document.getElementById('annualBadge');
    const monthlyLabel = document.querySelector('.monthly-label');
    const annualLabel = document.querySelector('.annual-label');

    if (!billingToggle) return;

    billingToggle.addEventListener('change', function () {
        if (this.checked) {
            // Annual pricing
            priceAmount.textContent = '$16';
            pricePeriod.textContent = '/month';
            annualBadge.classList.add('show');
            monthlyLabel.classList.remove('active');
            annualLabel.classList.add('active');
        } else {
            // Monthly pricing
            priceAmount.textContent = '$20';
            pricePeriod.textContent = '/month';
            annualBadge.classList.remove('show');
            monthlyLabel.classList.add('active');
            annualLabel.classList.remove('active');
        }
    });
})();


// "Try Demo Now" button functionality
(function () {
    const tryDemoBtn = document.querySelector('.btn-primary-gradient');
    const fileInput = document.getElementById('fileInput');

    if (tryDemoBtn && fileInput) {
        tryDemoBtn.addEventListener('click', () => {
            // Smooth scroll to preview card
            const previewCard = document.querySelector('.preview-card');
            if (previewCard) {
                previewCard.scrollIntoView({ behavior: 'smooth', block: 'center' });

                // Open file explorer after scrolling (small delay for better UX)
                setTimeout(() => {
                    fileInput.click();
                }, 800);
            } else {
                // If preview card not found, just open file explorer
                fileInput.click();
            }
        });
    }
})();


(function () {

    function animateOnView(selector, stagger = 0, initialDelay = 0) {
        const elements = document.querySelectorAll(selector);
        if (!elements.length) return;

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach((entry, idx) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('in-view');
                    }, initialDelay + idx * stagger);
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        elements.forEach(el => observer.observe(el));
    }

    function animateDiagramSection() {
        const diagramSection = document.querySelector('.diagram-section');
        if (!diagramSection) return;

        // Select elements in the order they should animate:
        const heading = diagramSection.querySelector('.features-heading.animate-pop-up-diagram');
        const subtitle = diagramSection.querySelector('.text-faded.animate-pop-up-diagram');
        const centralCircle = diagramSection.querySelector('.central-circle.animate-pop-up-diagram');
        const rightCard = diagramSection.querySelector('.diagram-card.card-right.animate-pop-up-diagram');
        const topCard = diagramSection.querySelector('.diagram-card.card-top.animate-pop-up-diagram');
        const leftCard = diagramSection.querySelector('.diagram-card.card-left.animate-pop-up-diagram');
        const bottomCard = diagramSection.querySelector('.diagram-card.card-bottom.animate-pop-up-diagram');

        let animated = false;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    animated = true;

                    // Animate heading
                    if (heading) {
                        setTimeout(() => heading.classList.add('in-view'), 0);
                    }

                    // Animate subtitle
                    if (subtitle) {
                        setTimeout(() => subtitle.classList.add('in-view'), 180);
                    }

                    // Animate center circle and right card together
                    if (centralCircle) {
                        setTimeout(() => centralCircle.classList.add('in-view'), 360);
                    }
                    if (rightCard) {
                        setTimeout(() => rightCard.classList.add('in-view'), 360);
                    }

                    // Animate top card
                    if (topCard) {
                        setTimeout(() => topCard.classList.add('in-view'), 540);
                    }

                    // Animate left card
                    if (leftCard) {
                        setTimeout(() => leftCard.classList.add('in-view'), 720);
                    }

                    // Animate bottom card
                    if (bottomCard) {
                        setTimeout(() => bottomCard.classList.add('in-view'), 900);
                    }
                }
            });
        }, {
            threshold: 0.3,  // Trigger when 30% of the section is visible
            rootMargin: '-50px 0px'
        });

        observer.observe(diagramSection);
    }

    window.addEventListener('DOMContentLoaded', animateDiagramSection);

    // Animate elements with .animate-pop-left and .animate-pop-right on page load
    window.addEventListener('DOMContentLoaded', function () {
        setTimeout(function () {
            document.querySelectorAll('.animate-pop-left, .animate-pop-right').forEach(function (el) {
                el.classList.add('in-view');
            });
        }, 100);

        animateOnView('.features-section .features-heading.animate-pop-up', 0, 0);

        // Animate feature cards with stagger
        animateOnView('.features-section .feature-card.animate-pop-up', 120, 350);
    });

    function animateMapSection() {
        const mapSection = document.querySelector('.map-section');
        if (!mapSection) return;

        // Select elements in the order they should animate
        const heading = mapSection.querySelector('.features-heading.animate-pop-up-map');
        const subtitle = mapSection.querySelector('.text-faded.animate-pop-up-map');
        const container = mapSection.querySelector('.map-container.animate-pop-up-map');
        const statBoxes = mapSection.querySelectorAll('.map-stat-box.animate-pop-up-map, .map-stat-box-2.animate-pop-up-map');
        const mapWrapper = mapSection.querySelector('.map-wrapper.animate-pop-up-map');
        const legend = mapSection.querySelector('.map-legend.animate-pop-up-map');
        const bottomText = mapSection.querySelector('.col-md-6.animate-pop-up-map');

        let animated = false;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    animated = true;

                    // Animate heading
                    if (heading) {
                        setTimeout(() => heading.classList.add('in-view'), 0);
                    }

                    // Animate subtitle
                    if (subtitle) {
                        setTimeout(() => subtitle.classList.add('in-view'), 180);
                    }

                    // Animate container background (optional, for smooth appearance)
                    if (container) {
                        setTimeout(() => container.classList.add('in-view'), 360);
                    }

                    // Animate stat boxes
                    statBoxes.forEach((box, i) => {
                        setTimeout(() => box.classList.add('in-view'), 540 + i * 120);
                    });

                    // Animate map wrapper
                    if (mapWrapper) {
                        setTimeout(() => mapWrapper.classList.add('in-view'), 780);
                    }

                    // Animate legend
                    if (legend) {
                        setTimeout(() => legend.classList.add('in-view'), 960);
                    }

                    // Animate bottom text
                    if (bottomText) {
                        setTimeout(() => bottomText.classList.add('in-view'), 1140);
                    }
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '-50px 0px'
        });

        observer.observe(mapSection);
    }

    function animatePricingSection() {
        const pricingSection = document.querySelector('.pricing-section');
        if (!pricingSection) return;

        // Select elements in the order they should animate
        const heading = pricingSection.querySelector('.features-heading.animate-pop-up-pricing');
        const toggleContainer = pricingSection.querySelector('.billing-toggle-container.animate-pop-up-pricing');
        const pricingCard = pricingSection.querySelector('.pricing-card.animate-pop-up-pricing');

        let animated = false;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    animated = true;

                    // Animate heading
                    if (heading) {
                        setTimeout(() => heading.classList.add('in-view'), 0);
                    }

                    // Animate billing toggle
                    if (toggleContainer) {
                        setTimeout(() => toggleContainer.classList.add('in-view'), 180);
                    }

                    // Animate pricing card
                    if (pricingCard) {
                        setTimeout(() => pricingCard.classList.add('in-view'), 360);
                    }
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '-50px 0px'
        });

        observer.observe(pricingSection);
    }

    function animateSecuritySection() {
        const securitySection = document.querySelector('.security-section');
        if (!securitySection) return;

        // Select elements in the order they should animate
        const heading = securitySection.querySelector('.features-heading.animate-pop-up-security');
        const cards = securitySection.querySelectorAll('.security-card.animate-pop-up-security');

        let animated = false;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    animated = true;

                    // Animate heading
                    if (heading) {
                        setTimeout(() => heading.classList.add('in-view'), 0);
                    }

                    // Animate cards with stagger
                    cards.forEach((card, i) => {
                        setTimeout(() => card.classList.add('in-view'), 180 + i * 180);
                    });
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '-50px 0px'
        });

        observer.observe(securitySection);
    }

    // CTA Section Animation on Scroll
    function animateCtaSection() {
        const ctaSection = document.querySelector('.cta-section');
        if (!ctaSection) return;

        // Select elements in the order they should animate
        const heading = ctaSection.querySelector('.cta-heading.animate-pop-up-cta');
        const description = ctaSection.querySelector('.cta-description.animate-pop-up-cta');
        const buttonsContainer = ctaSection.querySelector('.d-flex.animate-pop-up-cta');

        let animated = false;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    animated = true;

                    // Animate heading
                    if (heading) {
                        setTimeout(() => heading.classList.add('in-view'), 0);
                    }

                    // Animate description
                    if (description) {
                        setTimeout(() => description.classList.add('in-view'), 180);
                    }

                    // Animate buttons container
                    if (buttonsContainer) {
                        setTimeout(() => buttonsContainer.classList.add('in-view'), 360);
                    }
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '-50px 0px'
        });

        observer.observe(ctaSection);
    }

    // Contact Section Animation on Scroll
    function animateContactSection() {
        const contactSection = document.querySelector('.contact-section');
        if (!contactSection) return;

        // Select elements in the order they should animate
        const heading = contactSection.querySelector('.features-heading.animate-pop-up-contact');
        const leftColumn = contactSection.querySelector('.animate-pop-left-contact');
        const rightColumn = contactSection.querySelector('.animate-pop-right-contact');

        let animated = false;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    animated = true;

                    // Animate heading
                    if (heading) {
                        setTimeout(() => heading.classList.add('in-view'), 0);
                    }

                    // Animate left and right columns together
                    if (leftColumn) {
                        setTimeout(() => leftColumn.classList.add('in-view'), 180);
                    }
                    if (rightColumn) {
                        setTimeout(() => rightColumn.classList.add('in-view'), 180);
                    }
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '-50px 0px'
        });

        observer.observe(contactSection);
    }

    window.addEventListener('DOMContentLoaded', function () {
        animateMapSection();
        animatePricingSection();
        animateSecuritySection();
        animateCtaSection();
        animateContactSection();
    });


})();


(function () {
    // Only run on features page
    if (!document.querySelector('.features-hero-section')) return;

    function animateOnView(selector, stagger = 0, initialDelay = 0) {
        const elements = document.querySelectorAll(selector);
        if (!elements.length) return;

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach((entry, idx) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('in-view');
                    }, initialDelay + idx * stagger);
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2, rootMargin: '-50px 0px' });

        elements.forEach(el => observer.observe(el));
    }

    // Hero Section Animation (on page load)
    function animateHeroSection() {
        const heroElements = document.querySelectorAll('.features-hero-section .animate-pop-up-hero');

        heroElements.forEach((element, i) => {
            setTimeout(() => {
                element.classList.add('in-view');
            }, i * 180); // Stagger each element by 180ms
        });
    }

    // Capabilities Section Animation
    function animateCapabilitiesSection() {
        const capabilitiesSection = document.querySelector('.capabilities-section');
        if (!capabilitiesSection) return;

        const heading = capabilitiesSection.querySelector('.capabilities-heading');
        const description = capabilitiesSection.querySelector('.capabilities-description');
        const cards = capabilitiesSection.querySelectorAll('.capability-card');

        let animated = false;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    animated = true;

                    if (heading) {
                        heading.classList.add('animate-pop-up-capability');
                        setTimeout(() => heading.classList.add('in-view'), 0);
                    }

                    if (description) {
                        description.classList.add('animate-pop-up-capability');
                        setTimeout(() => description.classList.add('in-view'), 180);
                    }

                    cards.forEach((card, i) => {
                        card.classList.add('animate-pop-up-capability');
                        setTimeout(() => card.classList.add('in-view'), 360 + i * 120);
                    });
                }
            });
        }, { threshold: 0.2, rootMargin: '-50px 0px' });

        observer.observe(capabilitiesSection);
    }

    // Developer Section Animation
    function animateDeveloperSection() {
        const developerSection = document.querySelector('.developer-section');
        if (!developerSection) return;

        const heading = developerSection.querySelector('.developer-heading');
        const description = developerSection.querySelector('.developer-description');
        const cards = developerSection.querySelectorAll('.developer-card');

        let animated = false;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    animated = true;

                    if (heading) {
                        heading.classList.add('animate-pop-up-developer');
                        setTimeout(() => heading.classList.add('in-view'), 0);
                    }

                    if (description) {
                        description.classList.add('animate-pop-up-developer');
                        setTimeout(() => description.classList.add('in-view'), 180);
                    }

                    cards.forEach((card, i) => {
                        card.classList.add('animate-pop-up-developer');
                        setTimeout(() => card.classList.add('in-view'), 360 + i * 120);
                    });
                }
            });
        }, { threshold: 0.2, rootMargin: '-50px 0px' });

        observer.observe(developerSection);
    }

    // Integrations Section Animation
    function animateIntegrationsSection() {
        const integrationsSection = document.querySelector('.integrations-section');
        if (!integrationsSection) return;

        const heading = integrationsSection.querySelector('.integrations-heading');
        const description = integrationsSection.querySelector('.integrations-description');
        const cards = integrationsSection.querySelectorAll('.integration-card');
        const viewAllLink = integrationsSection.querySelector('.view-all-integrations');

        let animated = false;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    animated = true;

                    if (heading) {
                        heading.classList.add('animate-pop-up-integration');
                        setTimeout(() => heading.classList.add('in-view'), 0);
                    }

                    if (description) {
                        description.classList.add('animate-pop-up-integration');
                        setTimeout(() => description.classList.add('in-view'), 180);
                    }

                    cards.forEach((card, i) => {
                        card.classList.add('animate-pop-up-integration');
                        setTimeout(() => card.classList.add('in-view'), 360 + i * 80);
                    });

                    if (viewAllLink) {
                        viewAllLink.classList.add('animate-pop-up-integration');
                        setTimeout(() => viewAllLink.classList.add('in-view'), 360 + cards.length * 80 + 200);
                    }
                }
            });
        }, { threshold: 0.2, rootMargin: '-50px 0px' });

        observer.observe(integrationsSection);
    }

    // Stats Section Animation
    function animateStatsSection() {
        const statsSection = document.querySelector('.stats-section');
        if (!statsSection) return;

        const cards = statsSection.querySelectorAll('.stat-card');

        let animated = false;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    animated = true;

                    cards.forEach((card, i) => {
                        card.classList.add('animate-pop-up-stat');
                        setTimeout(() => card.classList.add('in-view'), i * 120);
                    });
                }
            });
        }, { threshold: 0.2, rootMargin: '-50px 0px' });

        observer.observe(statsSection);
    }

    // CTA Section Animation (reuse from main script)
    function animateCtaSection() {
        const ctaSection = document.querySelector('.features-page .cta-section');
        if (!ctaSection) return;

        const heading = ctaSection.querySelector('h2');
        const description = ctaSection.querySelector('.cta-description');
        const buttonsContainer = ctaSection.querySelector('.cta-buttons');

        let animated = false;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    animated = true;

                    if (heading) {
                        heading.classList.add('animate-pop-up-cta');
                        setTimeout(() => heading.classList.add('in-view'), 0);
                    }

                    if (description) {
                        description.classList.add('animate-pop-up-cta');
                        setTimeout(() => description.classList.add('in-view'), 180);
                    }

                    if (buttonsContainer) {
                        buttonsContainer.classList.add('animate-pop-up-cta');
                        setTimeout(() => buttonsContainer.classList.add('in-view'), 360);
                    }
                }
            });
        }, { threshold: 0.2, rootMargin: '-50px 0px' });

        observer.observe(ctaSection);
    }

    // Scroll Indicator Hide on Scroll
    const scrollIndicator = document.querySelector('.features-scroll-indicator');
    const heroSection = document.querySelector('.features-hero-section');

    if (scrollIndicator && heroSection && window.innerWidth > 768) {
        function handleScroll() {
            const scrollPosition = window.scrollY;

            if (scrollPosition > heroSection.offsetHeight * 0.2) {
                scrollIndicator.classList.add('hidden');
            } else {
                scrollIndicator.classList.remove('hidden');
            }
        }

        window.addEventListener('scroll', handleScroll);
        handleScroll();
    }

    // Initialize all animations on DOM load
    window.addEventListener('DOMContentLoaded', function () {
        // Animate hero section first (on page load)
        setTimeout(animateHeroSection, 100);

        // Then initialize scroll-based animations
        animateCapabilitiesSection();
        animateDeveloperSection();
        animateIntegrationsSection();
        animateStatsSection();
        animateCtaSection();
    });
})();

// ...existing code...

// Use Case Page Animations
(function () {
    // Only run on use-case page
    if (!document.querySelector('.use-case-page')) return;

    // Hero Section Animation (on page load)
    function animateHeroSection() {
        const heroElements = document.querySelectorAll('.features-hero-section .animate-pop-up-hero');

        heroElements.forEach((element, i) => {
            setTimeout(() => {
                element.classList.add('in-view');
            }, i * 180); // Stagger each element by 180ms
        });
    }

    // Industry Applications Section Animation
    function animateIndustrySection() {
        const industrySection = document.querySelector('.industry-applications-section');
        if (!industrySection) return;

        const heading = industrySection.querySelector('.industry-heading');
        const description = industrySection.querySelector('.industry-description');
        const cards = industrySection.querySelectorAll('.animate-pop-up-industry');

        let animated = false;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    animated = true;

                    // Animate heading
                    if (heading) {
                        setTimeout(() => heading.classList.add('in-view'), 0);
                    }

                    // Animate description
                    if (description) {
                        setTimeout(() => description.classList.add('in-view'), 180);
                    }

                    // Animate cards with stagger effect
                    cards.forEach((card, i) => {
                        // Skip heading and description as they're already animated
                        if (card === heading || card === description) return;
                        setTimeout(() => card.classList.add('in-view'), 360 + i * 200);
                    });
                }
            });
        }, { threshold: 0.1, rootMargin: '-50px 0px' });

        observer.observe(industrySection);
    }

    // CTA Section Animation
    function animateCtaSection() {
        const ctaSection = document.querySelector('.use-case-cta-section');
        if (!ctaSection) return;

        const badge = ctaSection.querySelector('.use-case-cta-badge');
        const heading = ctaSection.querySelector('.use-case-cta-heading');
        const description = ctaSection.querySelector('.use-case-cta-description');
        const buttons = ctaSection.querySelector('.d-flex.animate-pop-up-cta');

        let animated = false;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    animated = true;

                    if (badge) {
                        setTimeout(() => badge.classList.add('in-view'), 0);
                    }

                    if (heading) {
                        setTimeout(() => heading.classList.add('in-view'), 180);
                    }

                    if (description) {
                        setTimeout(() => description.classList.add('in-view'), 360);
                    }

                    if (buttons) {
                        setTimeout(() => buttons.classList.add('in-view'), 540);
                    }
                }
            });
        }, { threshold: 0.2, rootMargin: '-50px 0px' });

        observer.observe(ctaSection);
    }

    // Initialize all animations on DOM load
    window.addEventListener('DOMContentLoaded', function () {
        // Animate hero section first (on page load)
        setTimeout(animateHeroSection, 100);

        // Then initialize scroll-based animations
        animateIndustrySection();
        animateCtaSection();
    });
})();



// Contact Page Animations
(function () {
    // Only run on contact page
    if (!document.querySelector('.contact-page')) return;

    function animateContactPage() {
        const contactSection = document.querySelector('.contact-hero-section');
        if (!contactSection) return;

        const leftColumn = contactSection.querySelector('.animate-slide-in-left');
        const rightColumn = contactSection.querySelector('.animate-slide-in-right');

        let animated = false;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    animated = true;

                    // Animate both columns simultaneously with slight delay for right
                    if (leftColumn) {
                        setTimeout(() => leftColumn.classList.add('in-view'), 100);
                    }

                    if (rightColumn) {
                        setTimeout(() => rightColumn.classList.add('in-view'), 250);
                    }
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '-50px 0px'
        });

        observer.observe(contactSection);
    }

    // Initialize animation on DOM load
    window.addEventListener('DOMContentLoaded', function () {
        animateContactPage();
    });
})();


// Login Page Animations
(function () {
    // Only run on login page
    if (!document.querySelector('.login-page')) return;

    function animateLoginPage() {
        const loginSection = document.querySelector('.contact-hero-section');
        if (!loginSection) return;

        const leftColumn = loginSection.querySelector('.animate-slide-in-left');
        const rightColumn = loginSection.querySelector('.animate-slide-in-right');

        let animated = false;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    animated = true;

                    // Animate both columns simultaneously with slight delay for right
                    if (leftColumn) {
                        setTimeout(() => leftColumn.classList.add('in-view'), 100);
                    }

                    if (rightColumn) {
                        setTimeout(() => rightColumn.classList.add('in-view'), 250);
                    }
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '-50px 0px'
        });

        observer.observe(loginSection);
    }

    // Initialize animation on DOM load
    window.addEventListener('DOMContentLoaded', function () {
        animateLoginPage();
    });
})();


// Torch/Spotlight Effect for Use Case Page
(function () {
    // Only run on use-case page or login page
    const isUseCasePage = document.querySelector('body').classList.contains('use-case-page') ||
        window.location.pathname.includes('use-case');
    const isLoginPage = document.querySelector('body').classList.contains('login-page') ||
        window.location.pathname.includes('login');

    if (isUseCasePage && !document.body.classList.contains('use-case-page')) {
        document.body.classList.add('use-case-page');
    }

    if (isLoginPage && !document.body.classList.contains('login-page')) {
        document.body.classList.add('login-page');
    }

    if (!isUseCasePage && !isLoginPage) {
        return; // Exit if not on use-case or login page
    }

    // Check if device supports hover
    const hasHover = window.matchMedia('(hover: hover)').matches;

    if (!hasHover || window.innerWidth <= 768) {
        return; // Exit on mobile/touch devices
    }

    // Create torch light element
    const torchLight = document.createElement('div');
    torchLight.className = 'torch-light';
    document.body.appendChild(torchLight);

    let torchX = 0;
    let torchY = 0;
    let currentX = 0;
    let currentY = 0;

    // Update torch position on mouse move
    document.addEventListener('mousemove', (e) => {
        torchX = e.clientX;
        torchY = e.clientY;

        // Show torch light
        if (!torchLight.classList.contains('active')) {
            torchLight.classList.add('active');
            document.body.classList.add('torch-active');
        }
    });

    // Smooth animation for torch light
    function animateTorch() {
        // Easing calculation
        const dx = torchX - currentX;
        const dy = torchY - currentY;

        currentX += dx * 0.1; // Adjust 0.1 for smoothness (lower = smoother)
        currentY += dy * 0.1;

        torchLight.style.left = currentX + 'px';
        torchLight.style.top = currentY + 'px';

        requestAnimationFrame(animateTorch);
    }

    animateTorch();

    // Hide torch when mouse leaves window
    document.addEventListener('mouseleave', () => {
        torchLight.classList.remove('active');
        document.body.classList.remove('torch-active');
    });

    // Show torch when mouse enters window
    document.addEventListener('mouseenter', () => {
        torchLight.classList.add('active');
        document.body.classList.add('torch-active');
    });

    // Handle page visibility change
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            torchLight.classList.remove('active');
            document.body.classList.remove('torch-active');
        }
    });
})();



// Contact Page - Galaxy Dots Animation
(function () {
    const galaxyDotsContainer = document.getElementById('galaxyDots');

    if (!galaxyDotsContainer) return;

    // Create galaxy dots
    for (let i = 0; i < 50; i++) {
        const dot = document.createElement('div');
        dot.className = 'galaxy-dot';

        // Random position
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;

        // Random size between 2px and 5px
        const size = Math.random() * 3 + 2;

        // Random animation duration between 10s and 20s
        const duration = Math.random() * 10 + 10;

        // Random movement
        const moveX = (Math.random() - 0.5) * 200;
        const moveY = (Math.random() - 0.5) * 200;

        // Random delay
        const delay = Math.random() * 5;

        // Apply styles
        dot.style.cssText = `
                    left: ${startX}%;
                    top: ${startY}%;
                    width: ${size}px;
                    height: ${size}px;
                    animation: galaxyDotFloat${i} ${duration}s ease-in-out infinite;
                    animation-delay: ${delay}s;
                `;

        galaxyDotsContainer.appendChild(dot);

        // Create unique animation for each dot
        const style = document.createElement('style');
        style.textContent = `
                    @keyframes galaxyDotFloat${i} {
                        0%, 100% {
                            transform: translate(0, 0);
                            opacity: 0.3;
                        }
                        25% {
                            transform: translate(${moveX * 0.3}px, ${moveY * 0.3}px);
                            opacity: 0.8;
                        }
                        50% {
                            transform: translate(${moveX}px, ${moveY}px);
                            opacity: 1;
                        }
                        75% {
                            transform: translate(${moveX * 0.5}px, ${moveY * 0.7}px);
                            opacity: 0.6;
                        }
                    }
                `;
        document.head.appendChild(style);
    }
})();


// Contact Form Validation
(function () {
    const contactForm = document.getElementById('contactFormMain');

    if (!contactForm) return;

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();

        if (contactForm.checkValidity()) {
            // Form is valid - you can add your form submission logic here
            console.log('Form is valid! Submitting...');

            // Example: Get form data
            const formData = {
                name: document.getElementById('contactName').value,
                email: document.getElementById('contactEmail').value,
                message: document.getElementById('contactMessage').value
            };

            console.log('Form Data:', formData);

            // Show success message (you can customize this)
            alert('Thank you! Your message has been sent successfully.');

            // Reset form
            contactForm.reset();
            contactForm.classList.remove('was-validated');
        }

        contactForm.classList.add('was-validated');
    }, false);
})();


// Login Page - Password Toggle
(function () {
    const togglePasswordBtn = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('loginPassword');
    const toggleIcon = document.getElementById('togglePasswordIcon');

    if (!togglePasswordBtn || !passwordInput || !toggleIcon) return;

    togglePasswordBtn.addEventListener('click', function () {
        // Toggle password visibility
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        // Toggle icon
        if (type === 'password') {
            toggleIcon.classList.remove('bi-eye-slash');
            toggleIcon.classList.add('bi-eye');
        } else {
            toggleIcon.classList.remove('bi-eye');
            toggleIcon.classList.add('bi-eye-slash');
        }
    });
})();


// Login Form Validation
(function () {
    const loginForm = document.getElementById('loginForm');

    if (!loginForm) return;

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();

        if (loginForm.checkValidity()) {
            // Form is valid - you can add your login logic here
            console.log('Login form is valid! Submitting...');

            // Example: Get form data
            const formData = {
                email: document.getElementById('loginEmail').value,
                password: document.getElementById('loginPassword').value,
                rememberMe: document.getElementById('rememberMe').checked
            };

            console.log('Login Data:', formData);

            // Show success message (you can customize this)
            alert('Login successful! Redirecting to dashboard...');

        }

        loginForm.classList.add('was-validated');
    }, false);
})();

// Active Navigation Link
(function () {
    function setActiveNavLink() {
        // Get current page filename
        const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';

        // Find all nav links
        const navLinks = document.querySelectorAll('.nav-link[data-page]');

        if (navLinks.length === 0) {
            // If nav links aren't loaded yet, try again after a delay
            setTimeout(setActiveNavLink, 100);
            return;
        }

        // Remove active class from all links first
        navLinks.forEach(link => link.classList.remove('active'));

        navLinks.forEach(link => {
            const linkPage = link.getAttribute('data-page');

            // Check if this link matches the current page
            if (linkPage === currentPage ||
                (currentPage === '' && linkPage === 'index') ||
                (currentPage === 'index' && linkPage === 'index')) {
                link.classList.add('active');
            }

            // Special case for pricing (if on index page and hash is #pricing)
            if (linkPage === 'pricing' && window.location.hash === '#pricing') {
                link.classList.add('active');
            }
        });
    }

    // Update active state when hash changes (for pricing link)
    function handleHashChange() {
        const navLinks = document.querySelectorAll('.nav-link[data-page]');
        const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';

        navLinks.forEach(link => {
            const linkPage = link.getAttribute('data-page');

            // Only handle pricing link for hash changes
            if (linkPage === 'pricing') {
                if (window.location.hash === '#pricing' && currentPage === 'index') {
                    link.classList.add('active');
                } else if (window.location.hash !== '#pricing') {
                    link.classList.remove('active');
                    // Re-activate the current page link
                    setActiveNavLink();
                }
            }
        });
    }

    window.addEventListener('hashchange', handleHashChange);

    // Run on DOM load and after a small delay to ensure header is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            setTimeout(setActiveNavLink, 100);
        });
    } else {
        setTimeout(setActiveNavLink, 100);
    }

    // Also watch for the header to be loaded by observing the DOM
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.addedNodes.length) {
                const headerPlaceholder = document.getElementById('header-placeholder');
                if (headerPlaceholder && headerPlaceholder.innerHTML.trim() !== '') {
                    setActiveNavLink();
                    observer.disconnect();
                }
            }
        });
    });

    // Start observing the header placeholder
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        observer.observe(headerPlaceholder, { childList: true, subtree: true });
    }
})();

// Floating Particles for CTA Section
(function () {
    const particlesContainer = document.querySelector('.floating-particles');

    if (!particlesContainer) return;

    // Create 15 floating particles
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random starting position
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;

        // Random size (4-8px)
        const size = 4 + Math.random() * 4;

        // Random animation duration (8-16s)
        const duration = 8 + Math.random() * 8;

        // Random delay
        const delay = Math.random() * 5;

        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(81, 162, 255, 0.3);
            border-radius: 2px;
            left: ${startX}%;
            top: ${startY}%;
            opacity: 0;
            animation: floatParticle${i} ${duration}s ease-in-out ${delay}s infinite;
        `;

        particlesContainer.appendChild(particle);
    }

    // Add keyframes dynamically
    const style = document.createElement('style');
    let keyframes = '';

    for (let i = 0; i < 15; i++) {
        // Random movement path for each particle
        const moveX1 = -30 + Math.random() * 60;
        const moveY1 = -40 + Math.random() * 80;
        const moveX2 = -30 + Math.random() * 60;
        const moveY2 = -40 + Math.random() * 80;
        const rotate = Math.random() * 360;

        keyframes += `
            @keyframes floatParticle${i} {
                0%, 100% {
                    transform: translate(0, 0) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: 0.4;
                }
                25% {
                    transform: translate(${moveX1}px, ${moveY1}px) rotate(${rotate / 4}deg);
                    opacity: 0.6;
                }
                50% {
                    transform: translate(${moveX2}px, ${moveY2}px) rotate(${rotate / 2}deg);
                    opacity: 0.3;
                }
                75% {
                    transform: translate(${moveX1 * 0.5}px, ${moveY1 * 0.5}px) rotate(${rotate * 0.75}deg);
                    opacity: 0.5;
                }
                90% {
                    opacity: 0.3;
                }
            }
        `;
    }

    style.textContent = keyframes;
    document.head.appendChild(style);
})();

// Parallax Background Effect
(function () {
    const parallaxBg = document.querySelector('.parallax-bg');
    const heroSection = document.getElementById('heroSection');

    if (!parallaxBg || !heroSection || window.innerWidth <= 768) {
        return; // Exit on mobile or if elements don't exist
    }

    let currentTranslateX = 0;
    let currentTranslateY = 0;

    // Mouse move parallax effect
    document.addEventListener('mousemove', (e) => {
        currentTranslateX = (e.clientX - window.innerWidth / 2) * 0.02;
        currentTranslateY = (e.clientY - window.innerHeight / 2) * 0.02;

        parallaxBg.style.transform = `translate(calc(-50% + ${currentTranslateX}px), calc(-50% + ${currentTranslateY}px))`;
    });

    // Gradual scroll shrink effect
    function handleScroll() {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        // Start shrinking when user scrolls 30% through the hero section
        const shrinkStartPoint = heroSection.offsetHeight * 0.3;
        // Complete shrinking when user scrolls past the hero section
        const shrinkEndPoint = heroBottom;

        if (scrollPosition > shrinkStartPoint) {
            // Calculate progress (0 to 1)
            const progress = Math.min((scrollPosition - shrinkStartPoint) / (shrinkEndPoint - shrinkStartPoint), 1);

            // Apply scale transformation based on progress
            const imageScale = 1 - (progress * 0.5625); // 1 - 0.5625 = 0.4375
            const orbitScale = 1 - (progress * 0.5); // 1 - 0.5 = 0.5 (600px to 300px)
            const opacityValue = 0.25 - (progress * 0.13); // 0.25 - 0.13 = 0.12

            const parallaxImage = parallaxBg.querySelector('.parallax-image');
            const starOrbit = parallaxBg.querySelector('.star-orbit');

            if (parallaxImage) {
                parallaxImage.style.transform = `scale(${imageScale})`;
                parallaxImage.style.opacity = opacityValue;
            }

            if (starOrbit) {
                starOrbit.style.width = `${600 * orbitScale}px`;
                starOrbit.style.height = `${600 * orbitScale}px`;
            }
        } else {
            // Reset to original size
            const parallaxImage = parallaxBg.querySelector('.parallax-image');
            const starOrbit = parallaxBg.querySelector('.star-orbit');

            if (parallaxImage) {
                parallaxImage.style.transform = 'scale(1)';
                parallaxImage.style.opacity = '0.06';
            }

            if (starOrbit) {
                starOrbit.style.width = '600px';
                starOrbit.style.height = '600px';
            }
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
})();


// Custom Cursor Implementation
(function () {
    // Check if device supports hover (not touch-only devices)
    const hasHover = window.matchMedia('(hover: hover)').matches;

    if (!hasHover || window.innerWidth <= 768) {
        return; // Exit on mobile/touch devices
    }

    // Create cursor elements
    const cursorDot = document.createElement('div');
    const cursorBorder = document.createElement('div');

    cursorDot.className = 'cursor-dot';
    cursorBorder.className = 'cursor-border';

    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorBorder);
    document.body.classList.add('custom-cursor');

    // Cursor position variables
    let mouseX = 0;
    let mouseY = 0;
    let borderX = 0;
    let borderY = 0;

    // Update mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Update dot position immediately
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });

    // Animate border to follow dot
    function animateBorder() {
        // Calculate distance and apply easing
        const distX = mouseX - borderX;
        const distY = mouseY - borderY;

        // Easing factor (lower = smoother, higher = faster)
        borderX += distX * 0.15;
        borderY += distY * 0.15;

        // Update border position
        cursorBorder.style.left = borderX + 'px';
        cursorBorder.style.top = borderY + 'px';

        requestAnimationFrame(animateBorder);
    }

    animateBorder();

    // Handle hover effects on clickable elements
    const clickableSelectors = 'a, button, input, textarea, select, [role="button"], .btn, .nav-link, .navbar-toggler, .hero-card, .feature-item';

    document.addEventListener('mouseover', (e) => {
        if (e.target.closest(clickableSelectors)) {
            cursorDot.classList.add('hover');
            cursorBorder.classList.add('hover');
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.closest(clickableSelectors)) {
            cursorDot.classList.remove('hover');
            cursorBorder.classList.remove('hover');
        }
    });

    // Handle mouse leaving/entering window
    document.addEventListener('mouseleave', () => {
        cursorDot.style.opacity = '0';
        cursorBorder.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
        cursorDot.style.opacity = '1';
        cursorBorder.style.opacity = '1';
    });

    // Hide default cursor immediately
    document.addEventListener('mouseenter', () => {
        document.body.style.cursor = 'none';
    }, { once: true });
})();

// Scroll Indicator Hide on Scroll
(function () {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const heroSection = document.getElementById('heroSection');

    if (!scrollIndicator || !heroSection || window.innerWidth <= 768) {
        return; // Exit on mobile or if elements don't exist
    }

    function handleScroll() {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY;

        // Hide indicator when scrolling past 20% of hero section
        if (scrollPosition > heroSection.offsetHeight * 0.2) {
            scrollIndicator.classList.add('hidden');
        } else {
            scrollIndicator.classList.remove('hidden');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
})();



// File Upload and OCR Simulation
(function () {
    const uploadZone = document.getElementById('uploadZone');
    const fileInput = document.getElementById('fileInput');
    const uploadArea = document.getElementById('uploadArea');
    const processingArea = document.getElementById('processingArea');
    const extractedArea = document.getElementById('extractedArea');
    const dataContent = document.getElementById('dataContent');
    const extractBtn = document.getElementById('extractBtn');
    const replaceBtn = document.getElementById('replaceBtn');
    const closeDoc = document.getElementById('closeDoc');
    const progressBars = document.getElementById('progressBars');

    if (!uploadZone || !fileInput) return;

    // Click to upload
    uploadZone.addEventListener('click', () => {
        fileInput.click();
    });

    // Drag and drop
    uploadZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadZone.style.borderColor = '#51A2FF';
        uploadZone.style.background = 'rgba(26, 29, 40, 0.9)';
    });

    uploadZone.addEventListener('dragleave', () => {
        uploadZone.style.borderColor = '#2B7FFF';
        uploadZone.style.background = '#1a1d28';
    });

    uploadZone.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadZone.style.borderColor = '#2B7FFF';
        uploadZone.style.background = '#1a1d28';

        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleFileUpload(files[0]);
        }
    });

    // File input change
    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            handleFileUpload(e.target.files[0]);
        }
    });

    // Handle file upload
    function handleFileUpload(file) {
        // Validate file type
        const validTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
        if (!validTypes.includes(file.type)) {
            alert('Please upload a PDF or image file (JPG, PNG)');
            return;
        }

        // Show processing area
        uploadArea.style.display = 'none';
        processingArea.style.display = 'block';
        extractedArea.style.display = 'none';

        // Hide extract button initially
        extractBtn.style.opacity = '0';
        extractBtn.style.pointerEvents = 'none';

        // Reset progress bars
        const fills = document.querySelectorAll('.progress-bar-fill');
        fills.forEach(fill => {
            fill.style.animation = 'none';
            setTimeout(() => {
                fill.style.animation = '';
            }, 10);
        });

        // Show extract button after progress bars complete (1.5s animation + 0.6s delay for last bar)
        setTimeout(() => {
            extractBtn.style.opacity = '1';
            extractBtn.style.pointerEvents = 'auto';
        }, 2100); // 1500ms (animation duration) + 600ms (delay for 3rd bar)
    }

    // Extract button click
    extractBtn.addEventListener('click', () => {
        // Hide progress bars
        progressBars.style.display = 'none';

        // Show extracted area after a short delay
        setTimeout(() => {
            processingArea.style.display = 'none';
            extractedArea.style.display = 'block';

            // Show extracted data
            showExtractedData();
        }, 500);
    });

    // Replace button click
    replaceBtn.addEventListener('click', () => {
        resetUpload();
    });

    // Close document
    if (closeDoc) {
        closeDoc.addEventListener('click', () => {
            resetUpload();
        });
    }

    // Show extracted data
    function showExtractedData() {
        dataContent.innerHTML = `
            <div class="data-row">
                <span class="data-label mont">Name</span>
                <span class="data-value mont">SARAH JOHNSON</span>
            </div>
            <div class="data-row">
                <span class="data-label mont">ID Number</span>
                <span class="data-value mont">DL-8923-4567</span>
            </div>
            <div class="data-row">
                <span class="data-label mont">DOB</span>
                <span class="data-value mont">March 15, 1992</span>
            </div>
            <div class="data-row">
                <span class="data-label mont">Status</span>
                <span class="data-value verified mont">✓ Verified</span>
            </div>
            <button class="btn btn-save">
             SAVE AS
            </button>
        `;
        dataContent.classList.add('has-data');
    }

    // Reset upload
    function resetUpload() {
        uploadArea.style.display = 'block';
        processingArea.style.display = 'none';
        extractedArea.style.display = 'none';
        progressBars.style.display = 'flex';

        // Reset extract button
        extractBtn.style.opacity = '0';
        extractBtn.style.pointerEvents = 'none';

        // Reset data content
        dataContent.innerHTML = '<p class="no-data-text text-white-50 mont">No Data yet</p>';
        dataContent.classList.remove('has-data');

        // Reset file input
        fileInput.value = '';
    }
})();



// Floating Dots Animation for Features Hero
(function () {
    const dotsContainer = document.querySelector('.floating-dots-bg');

    if (!dotsContainer) return;

    // Create 20 floating dots
    for (let i = 0; i < 20; i++) {
        const dot = document.createElement('div');
        dot.className = 'floating-dot';

        // Random positioning
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;

        // Random size between 3px and 6px
        const size = Math.random() * 3 + 3;

        // Random animation duration between 8s and 15s
        const duration = Math.random() * 7 + 8;

        // Random direction (up or down)
        const direction = Math.random() > 0.5 ? -1 : 1;
        const distance = (Math.random() * 100 + 50) * direction;

        // Random delay
        const delay = Math.random() * 5;

        // Apply styles
        dot.style.cssText = `
            position: absolute;
            left: ${startX}%;
            top: ${startY}%;
            width: ${size}px;
            height: ${size}px;
            background: rgba(81, 162, 255, 0.6);
            border-radius: 50%;
            animation: floatDot${i} ${duration}s ease-in-out infinite;
            animation-delay: ${delay}s;
            box-shadow: 0 0 ${size * 2}px rgba(81, 162, 255, 0.4);
        `;

        dotsContainer.appendChild(dot);

        // Create unique animation for each dot
        const style = document.createElement('style');
        style.textContent = `
            @keyframes floatDot${i} {
                0%, 100% {
                    transform: translateY(0) translateX(0);
                    opacity: 0.3;
                }
                50% {
                    transform: translateY(${distance}px) translateX(${Math.random() * 40 - 20}px);
                    opacity: 0.8;
                }
            }
        `;
        document.head.appendChild(style);
    }
})();


// Floating Octagons Animation
(function () {
    const octagonsContainer = document.querySelector('.floating-octagons');

    if (!octagonsContainer) return;

    // Create 4 floating octagons - adjusted positions
    const positions = [
        { top: '5%', left: '8%', size: 150 },      // Upper left
        { top: '8%', right: '12%', size: 150 },    // Upper right
        { bottom: '15%', left: '10%', size: 150 }, // Lower left
        { bottom: '12%', right: '8%', size: 150 }  // Lower right
    ];

    positions.forEach((pos, i) => {
        // Create wrapper for positioning and movement
        const wrapper = document.createElement('div');
        wrapper.className = 'octagon-wrapper';

        // Apply positioning to wrapper
        wrapper.style.cssText = `
            position: absolute;
            ${pos.top ? `top: ${pos.top};` : ''}
            ${pos.bottom ? `bottom: ${pos.bottom};` : ''}
            ${pos.left ? `left: ${pos.left};` : ''}
            ${pos.right ? `right: ${pos.right};` : ''}
            width: ${pos.size}px;
            height: ${pos.size}px;
            animation: floatMove${i} ${35 + i * 5}s ease-in-out infinite;
        `;

        // Create SVG octagon
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', pos.size);
        svg.setAttribute('height', pos.size);
        svg.setAttribute('viewBox', `0 0 ${pos.size} ${pos.size}`);
        svg.style.cssText = `
            display: block;
            animation: octagonRotate${i} ${15 + i * 2}s linear infinite;
        `;

        // Create octagon polygon
        const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        const centerX = pos.size / 2;
        const centerY = pos.size / 2;
        const radius = pos.size / 2 - 2;

        // Calculate octagon points
        let points = '';
        for (let j = 0; j < 8; j++) {
            const angle = (Math.PI / 4) * j - Math.PI / 8;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            points += `${x},${y} `;
        }

        polygon.setAttribute('points', points.trim());
        polygon.setAttribute('fill', 'none');
        polygon.setAttribute('stroke', 'rgba(43, 127, 255, 0.3)');
        polygon.setAttribute('stroke-width', '1');
        polygon.style.opacity = '0.6';

        svg.appendChild(polygon);
        wrapper.appendChild(svg);
        octagonsContainer.appendChild(wrapper);

        // Create unique float animation for each octagon (moves in all directions)
        const floatStyle = document.createElement('style');

        // Random movement values
        const moveX1 = -20 + Math.random() * 40;
        const moveY1 = -20 + Math.random() * 40;
        const moveX2 = -20 + Math.random() * 40;
        const moveY2 = -20 + Math.random() * 40;
        const moveX3 = -20 + Math.random() * 40;
        const moveY3 = -20 + Math.random() * 40;

        floatStyle.textContent = `
            @keyframes floatMove${i} {
                0%, 100% {
                    transform: translate(0, 0);
                }
                25% {
                    transform: translate(${moveX1}px, ${moveY1}px);
                }
                50% {
                    transform: translate(${moveX2}px, ${moveY2}px);
                }
                75% {
                    transform: translate(${moveX3}px, ${moveY3}px);
                }
            }
            
            @keyframes octagonRotate${i} {
                0% {
                    transform: rotate(0deg);
                    opacity: 0.3;
                }
                25% {
                    opacity: 0.5;
                }
                50% {
                    transform: rotate(180deg);
                    opacity: 0.3;
                }
                75% {
                    opacity: 0.5;
                }
                100% {
                    transform: rotate(360deg);
                    opacity: 0.3;
                }
            }
        `;

        document.head.appendChild(floatStyle);
    });
})();

// ...existing code...

// Floating Dots for Integrations Section
(function () {
    const dotsContainers = document.querySelectorAll('.integrations-section .floating-dots-bg');

    dotsContainers.forEach(dotsContainer => {
        if (!dotsContainer) return;

        // Create 25 floating dots
        for (let i = 0; i < 25; i++) {
            const dot = document.createElement('div');
            dot.className = 'floating-dot';

            // Random positioning
            const startX = Math.random() * 100;
            const startY = Math.random() * 100;

            // Random size between 3px and 6px
            const size = Math.random() * 3 + 3;

            // Random animation duration between 8s and 15s
            const duration = Math.random() * 7 + 8;

            // Random direction (up or down)
            const direction = Math.random() > 0.5 ? -1 : 1;
            const distance = (Math.random() * 100 + 50) * direction;

            // Random delay
            const delay = Math.random() * 5;

            // Apply styles
            dot.style.cssText = `
                position: absolute;
                left: ${startX}%;
                top: ${startY}%;
                width: ${size}px;
                height: ${size}px;
                background: rgba(194, 122, 255, 0.5);
                border-radius: 50%;
                animation: floatDotIntegration${i} ${duration}s ease-in-out infinite;
                animation-delay: ${delay}s;
                box-shadow: 0 0 ${size * 2}px rgba(194, 122, 255, 0.4);
            `;

            dotsContainer.appendChild(dot);

            // Create unique animation for each dot
            const style = document.createElement('style');
            style.textContent = `
                @keyframes floatDotIntegration${i} {
                    0%, 100% {
                        transform: translateY(0) translateX(0);
                        opacity: 0.3;
                    }
                    50% {
                        transform: translateY(${distance}px) translateX(${Math.random() * 40 - 20}px);
                        opacity: 0.8;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    });
})();