// Pricing Toggle
(function() {
    const billingToggle = document.getElementById('billingToggle');
    const priceAmount = document.getElementById('priceAmount');
    const pricePeriod = document.getElementById('pricePeriod');
    const annualBadge = document.getElementById('annualBadge');
    const monthlyLabel = document.querySelector('.monthly-label');
    const annualLabel = document.querySelector('.annual-label');

    if (!billingToggle) return;

    billingToggle.addEventListener('change', function() {
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
(function() {
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


(function() {

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
    window.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {
            document.querySelectorAll('.animate-pop-left, .animate-pop-right').forEach(function(el) {
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

    window.addEventListener('DOMContentLoaded', function() {
        animateMapSection();
        animatePricingSection();
        animateSecuritySection();
        animateCtaSection();
        animateContactSection();
    });


})();

// Floating Particles for CTA Section
(function() {
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
(function() {
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
(function() {
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
(function() {
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
(function() {
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


