// ========================================
// DemoStyle - Main JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', function() {

    // ========================================
    // 1. MENU MOBILE
    // ========================================
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Fechar menu ao clicar fora
        document.addEventListener('click', function(event) {
            const isClickInsideMenu = navMenu.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);

            if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // ========================================
    // 2. HEADER SCROLL EFFECT
    // ========================================
    const header = document.querySelector('.header');

    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // ========================================
    // 3. WHATSAPP BUTTON
    // ========================================
    const whatsappBtn = document.getElementById('whatsappBtn');

    if (whatsappBtn) {
        // Fallback para quando config.js não existe (produção)
        const whatsappNumber = typeof CONFIG !== 'undefined' ? CONFIG.whatsapp.number : '5554996397623';
        const defaultMessage = typeof CONFIG !== 'undefined'
            ? encodeURIComponent(CONFIG.whatsapp.defaultMessage)
            : encodeURIComponent('Olá! Gostaria de saber mais sobre os produtos da DemoStyle.');
        whatsappBtn.href = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;
    }

    // ========================================
    // 4. BOTÕES "COMPRAR AGORA" (Página Produtos)
    // ========================================
    const buyButtons = document.querySelectorAll('.buy-now');

    if (buyButtons.length > 0) {
        buyButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();

                const productName = this.getAttribute('data-product');
                // Fallback para quando config.js não existe (produção)
                const whatsappNumber = typeof CONFIG !== 'undefined' ? CONFIG.whatsapp.number : '5554996397623';
                const message = encodeURIComponent(`Olá! Tenho interesse no produto: ${productName}. Gostaria de mais informações.`);

                window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
            });
        });
    }

    // ========================================
    // 5. PREENCHER FOOTER COM DADOS DO CONFIG
    // ========================================
    // Fallbacks para quando config.js não existe (produção)
    const contactInfo = typeof CONFIG !== 'undefined' ? CONFIG.contact : {
        phone: '(54) 99630-7623',
        email: 'contato@demostyle.com',
        address: 'Rua da Elegância, 100 - Centro'
    };

    const socialInfo = typeof CONFIG !== 'undefined' ? CONFIG.social : {
        instagram: 'https://instagram.com/demostyle',
        facebook: 'https://facebook.com/demostyle',
        linkedin: 'https://linkedin.com/company/demostyle'
    };

    // Contato
    const footerPhone = document.getElementById('footerPhone');
    const footerEmail = document.getElementById('footerEmail');
    const footerAddress = document.getElementById('footerAddress');
    const footerLocation = document.getElementById('footerLocation');

    if (footerPhone) footerPhone.textContent = contactInfo.phone;
    if (footerEmail) footerEmail.textContent = contactInfo.email;
    if (footerAddress) footerAddress.textContent = contactInfo.address;
    if (footerLocation) footerLocation.textContent = contactInfo.address;

    // Redes Sociais
    const socialInstagram = document.getElementById('socialInstagram');
    const socialFacebook = document.getElementById('socialFacebook');
    const socialLinkedin = document.getElementById('socialLinkedin');

    if (socialInstagram) socialInstagram.href = socialInfo.instagram;
    if (socialFacebook) socialFacebook.href = socialInfo.facebook;
    if (socialLinkedin) socialLinkedin.href = socialInfo.linkedin;

    // ========================================
    // 6. SMOOTH SCROLL PARA LINKS INTERNOS
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // 7. ANIMAÇÃO AO SCROLL (Fade In)
    // ========================================
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

    // Selecionar elementos para animar
    const animateElements = document.querySelectorAll('.product-card, .blog-card, .highlight-card, .mvv-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

});
