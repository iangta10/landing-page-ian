// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function () {
    // Mobile Navigation
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    navToggle.addEventListener('click', function () {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            header.style.background = 'var(--bg-dark)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'var(--bg-dark)';
            header.style.boxShadow = 'none';
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hero scroll indicator
    const heroScroll = document.querySelector('.hero-scroll');
    if (heroScroll) {
        heroScroll.addEventListener('click', function () {
            const servicesSection = document.querySelector('#services');
            if (servicesSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = servicesSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Testimonials Slider
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const navBtns = document.querySelectorAll('.nav-btn');
    let currentSlide = 0;

    function showSlide(index) {
        // Hide all cards
        testimonialCards.forEach(card => {
            card.classList.remove('active');
        });

        // Remove active class from all nav buttons
        navBtns.forEach(btn => {
            btn.classList.remove('active');
        });

        // Show current card and activate nav button
        if (testimonialCards[index]) {
            testimonialCards[index].classList.add('active');
        }
        if (navBtns[index]) {
            navBtns[index].classList.add('active');
        }
    }

    // Nav button click handlers
    navBtns.forEach((btn, index) => {
        btn.addEventListener('click', function () {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Auto-slide testimonials
    function nextSlide() {
        currentSlide = (currentSlide + 1) % testimonialCards.length;
        showSlide(currentSlide);
    }

    // Abas principais
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');
    tabs.forEach(btn => btn.addEventListener('click', () => {
        tabs.forEach(b => b.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
    }));

    // Sub-abas em Personal
    const subtabs = document.querySelectorAll('#personal .sub-tab-btn');
    const subcontents = document.querySelectorAll('#personal .sub-tab-content');
    subtabs.forEach(btn => btn.addEventListener('click', () => {
        subtabs.forEach(b => b.classList.remove('active'));
        subcontents.forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.subtab).classList.add('active');
    }));

    // Pricing plans toggle
    const pricingButtons = document.querySelectorAll('#pricing .sub-tab-btn');
    const pricingGrid = document.querySelector('#pricing .pricing-grid');

    const pricingPlans = {
        presencial: [
            {
                name: 'Plano Inicial',
                description: 'Treinos presenciais 2x por semana',
                price: 'R$ 497',
                period: '/mês',
                features: [
                    '2 sessões presenciais por semana',
                    'Avaliação física inicial',
                    'Planejamento de treino',
                    'Suporte via WhatsApp',
                    'Acesso ao app'
                ],
                button: { text: 'Começar Agora', class: 'btn-outline' },
                featured: false
            },
            {
                name: 'Plano Intensivo',
                description: 'Resultados rápidos com acompanhamento próximo',
                price: 'R$ 797',
                period: '/mês',
                features: [
                    '3 sessões presenciais por semana',
                    'Avaliações quinzenais',
                    'Plano nutricional básico',
                    'Suporte prioritário',
                    'App exclusivo'
                ],
                button: { text: 'Escolher Plano', class: 'btn-primary' },
                featured: true
            },
            {
                name: 'Plano Elite',
                description: 'Experiência completa personalizada',
                price: 'R$ 1.197',
                period: '/mês',
                features: [
                    'Sessões ilimitadas',
                    'Liberação miofascial semanal',
                    'Plano nutricional completo',
                    'Treino em domicílio',
                    'Acompanhamento 24/7'
                ],
                button: { text: 'Experiência VIP', class: 'btn-outline' },
                featured: false
            }
        ],
        online: [
            {
                name: 'Plano Básico',
                description: 'Ideal para quem quer começar',
                price: 'R$ 297',
                period: '/mês',
                features: [
                    'Consultoria online completa',
                    'Plano de treino personalizado',
                    'Suporte via WhatsApp',
                    'App exclusivo de treino',
                    'Relatórios mensais'
                ],
                button: { text: 'Começar Agora', class: 'btn-outline' },
                featured: false
            },
            {
                name: 'Plano Premium',
                description: 'Para resultados acelerados',
                price: 'R$ 597',
                period: '/mês',
                features: [
                    'Tudo do plano básico',
                    '4 sessões presenciais/mês',
                    'Plano nutricional detalhado',
                    'Suporte prioritário 24/7',
                    'Avaliação física mensal'
                ],
                button: { text: 'Escolher Plano', class: 'btn-primary' },
                featured: true
            },
            {
                name: 'Plano VIP',
                description: 'Experiência completa',
                price: 'R$ 897',
                period: '/mês',
                features: [
                    'Tudo do plano premium',
                    'Sessões ilimitadas presenciais',
                    'Liberação miofascial semanal',
                    'Acompanhamento nutricional',
                    'Treino em domicílio'
                ],
                button: { text: 'Experiência VIP', class: 'btn-outline' },
                featured: false
            }
        ],
        liberacao: [
            {
                name: 'Sessão Única',
                description: 'Para aliviar dores pontuais',
                price: 'R$ 120',
                period: '/sessão',
                features: [
                    'Liberação miofascial',
                    'Ventosaterapia',
                    'Duração de 50 minutos',
                    'Avaliação rápida',
                    'Orientações pós-sessão'
                ],
                button: { text: 'Agendar', class: 'btn-outline' },
                featured: false
            },
            {
                name: 'Pacote 5 Sessões',
                description: 'Tratamento contínuo para melhores resultados',
                price: 'R$ 550',
                period: '/pacote',
                features: [
                    '5 sessões personalizadas',
                    'Avaliação detalhada',
                    'Acompanhamento de evolução',
                    'Orientações de mobilidade',
                    'Suporte via WhatsApp'
                ],
                button: { text: 'Escolher Pacote', class: 'btn-primary' },
                featured: true
            },
            {
                name: 'Pacote 10 Sessões',
                description: 'Foco total em recuperação e performance',
                price: 'R$ 1.000',
                period: '/pacote',
                features: [
                    '10 sessões completas',
                    'Reavaliação a cada 5 sessões',
                    'Liberação de pontos gatilho',
                    'Plano de exercícios complementares',
                    'Suporte contínuo'
                ],
                button: { text: 'Experiência Completa', class: 'btn-outline' },
                featured: false
            }
        ]
    };

    function createPlanCard(plan) {
        return `
            <div class="pricing-card ${plan.featured ? 'featured' : ''}">
                ${plan.featured ? '<div class="pricing-badge">Mais Popular</div>' : ''}
                <div class="pricing-header">
                    <h3 class="plan-name">${plan.name}</h3>
                    <p class="plan-description">${plan.description}</p>
                </div>
                <div class="pricing-price">
                    <span class="price">${plan.price}</span>
                    <span class="period">${plan.period}</span>
                </div>
                <ul class="pricing-features">
                    ${plan.features.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('')}
                </ul>
                <a href="#contact" class="btn ${plan.button.class}">${plan.button.text}</a>
            </div>
        `;
    }

    function renderPricing(category) {
        if (!pricingPlans[category]) return;
        pricingGrid.innerHTML = pricingPlans[category].map(createPlanCard).join('');
    }

    pricingButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            pricingButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderPricing(btn.dataset.category);
        });
    });

    // Initialize pricing section
    const activePricing = document.querySelector('#pricing .sub-tab-btn.active');
    if (activePricing) {
        renderPricing(activePricing.dataset.category);
    }

    // Start auto-slide
    setInterval(nextSlide, 5000);

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', function () {
            const isActive = item.classList.contains('active');

            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });

            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Form Handling
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const service = formData.get('service');
            const message = formData.get('message');

            // Basic validation
            if (!name || !email || !phone || !service) {
                showNotification('Por favor, preencha todos os campos obrigatórios.', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Por favor, insira um e-mail válido.', 'error');
                return;
            }

            // Phone validation (basic Brazilian format)
            const phoneRegex = /^[\(\)\s\-\+\d]{10,}$/;
            if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
                showNotification('Por favor, insira um telefone válido.', 'error');
                return;
            }

            // Simulate form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            submitBtn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                showNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;

                // Redirect to WhatsApp (optional)
                const whatsappMessage = `Olá! Meu nome é ${name}. Tenho interesse no serviço: ${service}. ${message ? 'Mensagem: ' + message : ''}`;
                const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`;

                setTimeout(() => {
                    if (confirm('Deseja continuar a conversa pelo WhatsApp?')) {
                        window.open(whatsappUrl, '_blank');
                    }
                }, 2000);

            }, 2000);
        });
    }

    // Notification System
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => {
            notification.remove();
        });

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
                <span>${message}</span>
                <button class="notification-close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#007bff'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            max-width: 400px;
            animation: slideInRight 0.3s ease;
        `;

        // Add animation styles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            .notification-close {
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                margin-left: auto;
                padding: 0.25rem;
                border-radius: 3px;
                transition: background 0.2s ease;
            }
            .notification-close:hover {
                background: rgba(255, 255, 255, 0.2);
            }
        `;
        document.head.appendChild(style);

        // Add to page
        document.body.appendChild(notification);

        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.remove();
        });

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .pricing-card, .testimonial-card, .faq-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Counter animation for stats
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);

        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start) + (element.textContent.includes('+') ? '+' : '') + (element.textContent.includes('%') ? '%' : '');
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + (element.textContent.includes('+') ? '+' : '') + (element.textContent.includes('%') ? '%' : '');
            }
        }

        updateCounter();
    }

    // Animate stats when they come into view
    const statsObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const text = stat.textContent;
                    const number = parseInt(text.replace(/\D/g, ''));
                    stat.textContent = '0' + (text.includes('+') ? '+' : '') + (text.includes('%') ? '%' : '');
                    animateCounter(stat, number);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        statsObserver.observe(heroStats);
    }

    // Parallax effect for hero section
    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const heroImage = document.querySelector('.hero-image img');

        if (heroImage && scrolled < window.innerHeight) {
            heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });

    // Service card hover effects
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function () {
            if (this.classList.contains('featured')) {
                this.style.transform = 'scale(1.05)';
            } else {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });

    // Pricing card hover effects
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            if (this.classList.contains('featured')) {
                this.style.transform = 'scale(1.05) translateY(-5px)';
            } else {
                this.style.transform = 'translateY(-5px) scale(1.02)';
            }
        });

        card.addEventListener('mouseleave', function () {
            if (this.classList.contains('featured')) {
                this.style.transform = 'scale(1.05)';
            } else {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });

    // Loading animation
    window.addEventListener('load', function () {
        document.body.classList.add('loaded');

        // Animate hero elements
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        const heroStats = document.querySelector('.hero-stats');
        const heroCta = document.querySelector('.hero-cta');

        if (heroTitle) {
            heroTitle.style.opacity = '0';
            heroTitle.style.transform = 'translateY(30px)';
            setTimeout(() => {
                heroTitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                heroTitle.style.opacity = '1';
                heroTitle.style.transform = 'translateY(0)';
            }, 200);
        }

        if (heroSubtitle) {
            heroSubtitle.style.opacity = '0';
            heroSubtitle.style.transform = 'translateY(30px)';
            setTimeout(() => {
                heroSubtitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                heroSubtitle.style.opacity = '1';
                heroSubtitle.style.transform = 'translateY(0)';
            }, 400);
        }

        if (heroStats) {
            heroStats.style.opacity = '0';
            heroStats.style.transform = 'translateY(30px)';
            setTimeout(() => {
                heroStats.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                heroStats.style.opacity = '1';
                heroStats.style.transform = 'translateY(0)';
            }, 600);
        }

        if (heroCta) {
            heroCta.style.opacity = '0';
            heroCta.style.transform = 'translateY(30px)';
            setTimeout(() => {
                heroCta.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                heroCta.style.opacity = '1';
                heroCta.style.transform = 'translateY(0)';
            }, 800);
        }
    });

    // Add loading styles
    const loadingStyle = document.createElement('style');
    loadingStyle.textContent = `
        body:not(.loaded) .hero-title,
        body:not(.loaded) .hero-subtitle,
        body:not(.loaded) .hero-stats,
        body:not(.loaded) .hero-cta {
            opacity: 0;
            transform: translateY(30px);
        }
    `;
    document.head.appendChild(loadingStyle);
});

