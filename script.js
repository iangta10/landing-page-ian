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

    function updateHeaderHeight() {
        document.documentElement.style.setProperty('--header-height', header.offsetHeight + 'px');
    }

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);

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
    let baseCardHeight;
    let currentPricingIndex = 0;

    const pricingPlans = {
        presencial: [
            {
                id: 'mensal',
                name: 'Presencial Mensal',
                description: 'Treinos 100% personalizados, sem fidelização mínima.',
                price: 50,
                period: '/aula',
                weeks: 4,
                features: [
                    'Avaliação física presencial no início e ao final do mês',
                    'Acompanhamento contínuo',
                    'Possibilidade de treinar em dupla'
                ],
                button: { text: 'Assinar', class: 'btn-primary' },
                featured: false,
                duo: true
            },
            {
                id: 'trimestral',
                name: 'Presencial Trimestral',
                description: 'Compromisso de 3 meses com desconto progressivo.',
                price: 45,
                period: '/aula',
                weeks: 12,
                features: [
                    'Avaliação física presencial no início e ao final do ciclo',
                    'Programa ajustado por progresso',
                    'Possibilidade de treinar em dupla'
                ],
                button: { text: 'Assinar', class: 'btn-primary' },
                featured: true,
                duo: true
            },
            {
                id: 'semestral',
                name: 'Presencial Semestral',
                description: 'Melhor custo-benefício para quem quer consistência.',
                price: 35,
                period: '/aula',
                weeks: 24,
                features: [
                    'Avaliação física presencial no início e ao final do ciclo',
                    'Planejamento de longo prazo',
                    'Possibilidade de treinar em dupla'
                ],
                button: { text: 'Assinar', class: 'btn-primary' },
                featured: false,
                duo: true
            }
        ],
        online: [
            {
                name: 'Online Mensal',
                description: 'Consultoria remota com flexibilidade.',
                price: 'R$ 80',
                period: '/mês',
                features: [
                    'Possibilidade de avaliação física presencial no início e ao final do mês (conforme disponibilidade)',
                    'Aplicativo de treino',
                    'Correção de vídeos',
                    'Suporte via WhatsApp'
                ],
                button: { text: 'Assinar', class: 'btn-outline' },
                featured: false
            },
            {
                name: 'Online Trimestral',
                description: 'Compromisso de 3 meses com desconto.',
                price: 'R$ 70',
                period: '/mês (R$ 210 total)',
                features: [
                    'Possibilidade de avaliação física presencial no início e ao final do mês (conforme disponibilidade)',
                    'Aplicativo de treino',
                    'Ajustes baseados em progresso',
                    'Suporte contínuo via whatsapp'
                ],
                button: { text: 'Assinar', class: 'btn-primary' },
                featured: true
            },
            {
                name: 'Online Semestral',
                description: 'Plano de longo prazo otimizado.',
                price: 'R$ 60',
                period: '/mês (R$ 360 total)',
                features: [
                    'Possibilidade de avaliação física presencial no início e ao final do mês (conforme disponibilidade)',
                    'Aplicativo de treino',
                    'Revisão estratégica',
                    'Suporte contínuo via whatsapp'
                ],
                button: { text: 'Assinar', class: 'btn-outline' },
                featured: false
            }
        ],
        liberacao: [
            {
                name: 'Liberação Avulsa',
                description: 'Alívio de tensões pontuais e melhora de mobilidade.',
                price: 'R$ 80',
                period: '/sessão',
                features: [
                    'Alívio rápido de tensão localizada.',
                    'Recupere mobilidade em uma sessão.',
                    'Sensação de corpo mais solto e funcional.',
                    'Teste o efeito da liberação — sem compromisso.'
                ],
                button: { text: 'Agendar sessão', class: 'btn-outline' },
                featured: false
            },
            {
                name: 'Pacote 4 Sessões',
                description: 'Pacote para garantir tratamento contínuo de seus desconfortos.',
                price: 'R$ 280',
                period: '/pacote',
                features: [
                    'Consistência que gera adaptação real.',
                    'Sequência planejada para resultados duradouros.',
                    'Corpo mais móvel e menos propenso a dores.',
                    'Evolua da dor ao desempenho com regularidade.'
                ],
                button: { text: 'Comprar pacote', class: 'btn-primary' },
                featured: true
            },
            {
                name: 'Liberação Mensal',
                description: 'Manutenção regular para mobilidade e performance.',
                price: 'R$ 150',
                period: '/mês (2 sessões)',
                features: [
                    'Movimento preservado: liberação contínua todo mês.',
                    'Prevenção de recaídas e acúmulo de tensão.',
                    'Manutenção inteligente para performance e bem-estar.',
                    'Priorize seu corpo antes que a dor volte.'
                ],
                button: { text: 'Assinar mensal', class: 'btn-outline' },
                featured: false
            }
        ]
    };

    function formatPrice(value) {
        return 'R$ ' + Number(value).toFixed(2).replace('.', ',');
    }

    function createPlanCard(plan, category) {
        const isNumeric = typeof plan.price === 'number';
        const priceDisplay = isNumeric ? formatPrice(plan.price) : plan.price;
        const dataAttrs = category === 'presencial' ? ` data-price="${plan.price}" data-weeks="${plan.weeks}"` : '';
        const whatsappMessage = category === 'liberacao'
            ? encodeURIComponent(`Olá! Gostaria de agendar ${plan.name}.`)
            : encodeURIComponent(`Olá! Gostaria de ${plan.button.text.toLowerCase()} o plano ${plan.name}.`);
        return `
            <div class="pricing-card ${plan.featured ? 'featured' : ''}"${dataAttrs}>
                ${plan.featured ? '<div class="pricing-badge">Mais Popular</div>' : ''}
                <div class="pricing-header">
                    <h3 class="plan-name">${plan.name}</h3>
                    <p class="plan-description">${plan.description}</p>
                </div>
                <div class="pricing-price">
                    <span class="price"${isNumeric ? ` data-individual="${plan.price}" data-duo="${(plan.price * 0.85).toFixed(2)}"` : ''}>${priceDisplay}</span>
                    <span class="period">${plan.period}</span>
                </div>
                ${category === 'presencial' ? `
                <div class="calc-wrapper">
                    <div class="calc-line">
                        X/sem: <input type="number" class="calc-times" min="1" max="7">&nbsp; Plano:
                        <select class="calc-plan">
                            <option value="individual">Individual</option>
                            <option value="duo">Duo</option>
                        </select>
                    </div>
                    <div class="calc-line">
                        
                        Total: <span class="calc-total"></span>
                    </div>
                </div>` : ''}
                <ul class="pricing-features">
                    ${plan.features.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('')}
                </ul>
                <a href="https://wa.me/55019997088455?text=${whatsappMessage}" target="_blank" class="btn ${plan.button.class}">${plan.button.text}</a>
            </div>
        `;
    }

    function initPresencialCalculator() {
        document.querySelectorAll('#pricing .pricing-card').forEach(card => {
            const timesInput = card.querySelector('.calc-times');
            const planSelect = card.querySelector('.calc-plan');
            const totalEl = card.querySelector('.calc-total');
            const priceEl = card.querySelector('.price');
            const periodEl = card.querySelector('.period');
            const price = parseFloat(card.dataset.price);
            const weeks = parseInt(card.dataset.weeks, 10);
            if (!timesInput || !planSelect || !totalEl || !price || !weeks || !priceEl || !periodEl) return;

            function updateCalc() {
                const times = parseInt(timesInput.value, 10);
                if (!times) {
                    totalEl.textContent = '';
                    return;
                }
                let total = price * times * weeks;
                if (planSelect.value === 'duo') {
                    total = total * 2 * 0.85;
                }
                totalEl.textContent = formatPrice(total);
            }

            function updatePrice() {
                if (planSelect.value === 'duo') {
                    priceEl.textContent = formatPrice(priceEl.dataset.duo);
                    periodEl.textContent = '/aula /aluno';
                } else {
                    priceEl.textContent = formatPrice(priceEl.dataset.individual);
                    periodEl.textContent = '/aula';
                }
            }

            timesInput.addEventListener('input', updateCalc);
            planSelect.addEventListener('change', () => {
                updatePrice();
                updateCalc();
            });

            updatePrice();
        });
    }

    function initPricingCarousel() {
        const prevBtn = document.querySelector('#pricing .pricing-prev');
        const nextBtn = document.querySelector('#pricing .pricing-next');
        const cards = pricingGrid.querySelectorAll('.pricing-card');
        if (!prevBtn || !nextBtn || cards.length === 0 || window.innerWidth > 768) return;
        currentPricingIndex = 0;
        pricingGrid.style.transform = 'translateX(0)';
        prevBtn.onclick = () => {
            if (currentPricingIndex > 0) {
                currentPricingIndex--;
                pricingGrid.style.transform = `translateX(-${currentPricingIndex * 100}%)`;
            }
        };
        nextBtn.onclick = () => {
            if (currentPricingIndex < cards.length - 1) {
                currentPricingIndex++;
                pricingGrid.style.transform = `translateX(-${currentPricingIndex * 100}%)`;
            }
        };
    }

    function renderPricing(category) {
        if (!pricingPlans[category]) return;
        pricingGrid.innerHTML = pricingPlans[category].map(plan => createPlanCard(plan, category)).join('');
        if (!baseCardHeight) {
            baseCardHeight = Math.max(...Array.from(pricingGrid.querySelectorAll('.pricing-card')).map(c => c.offsetHeight));
            document.documentElement.style.setProperty('--pricing-card-height', baseCardHeight + 'px');
        }
        if (category === 'presencial') {
            initPresencialCalculator();
        }
        initPricingCarousel();
    }

    pricingButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            pricingButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderPricing(btn.dataset.category);
        });
    });

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

            // Prepare email
            const mailSubject = 'Contato via site';
            const mailBody = `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\nServiço: ${service}\nMensagem: ${message || ''}`;
            const mailtoLink = `mailto:iansr.estudos@gmail.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

            // Feedback to user
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            submitBtn.disabled = true;

            setTimeout(() => {
                window.location.href = mailtoLink;
                showNotification('Mensagem pronta no seu e-mail.', 'success');
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 500);
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

