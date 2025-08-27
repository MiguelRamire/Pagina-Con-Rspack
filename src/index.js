import './styles.scss';
// Variables globales
let currentSlide = 0;
let slideInterval;
const slides = document.querySelectorAll('.slider-slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

// Traducciones
const translations = {
    es: {
        'nav.home': 'Inicio',
        'nav.services': 'Servicios',
        'nav.gallery': 'Galería',
        'nav.video': 'Video',
        'nav.contact': 'Contacto',
        'header.title': 'Innovación Tecnológica',
        'header.subtitle': 'Transformando ideas en soluciones digitales',
        'header.cta': 'Descubre Más',
        'slider.slide1.title': 'Desarrollo Web',
        'slider.slide1.description': 'Creamos sitios web modernos y responsives',
        'slider.slide2.title': 'Aplicaciones Móviles',
        'slider.slide2.description': 'Soluciones nativas para iOS y Android',
        'slider.slide3.title': 'Inteligencia Artificial',
        'slider.slide3.description': 'Automatización y machine learning',
        'slider.slide4.title': 'Consultoría IT',
        'slider.slide4.description': 'Asesoramiento experto en tecnología',
        'services.title': 'Nuestros Servicios',
        'services.web.title': 'Desarrollo Web',
        'services.web.description': 'Sitios web modernos, responsives y optimizados para SEO',
        'services.mobile.title': 'Apps Móviles',
        'services.mobile.description': 'Aplicaciones nativas para iOS y Android con UX excepcional',
        'services.ai.title': 'Inteligencia Artificial',
        'services.ai.description': 'Soluciones de IA y machine learning para tu negocio',
        'services.cloud.title': 'Cloud Computing',
        'services.cloud.description': 'Infraestructura en la nube escalable y segura',
        'gallery.title': 'Galería de Proyectos',
        'gallery.project1.title': 'E-commerce Platform',
        'gallery.project1.description': 'Plataforma de comercio electrónico',
        'gallery.project2.title': 'App de Delivery',
        'gallery.project2.description': 'Aplicación móvil de entrega',
        'gallery.project3.title': 'Dashboard Analytics',
        'gallery.project3.description': 'Panel de análisis de datos',
        'gallery.project4.title': 'CRM System',
        'gallery.project4.description': 'Sistema de gestión de clientes',
        'gallery.project5.title': 'AI Chatbot',
        'gallery.project5.description': 'Chatbot inteligente',
        'gallery.project6.title': 'Mobile Banking',
        'gallery.project6.description': 'Aplicación bancaria móvil',
        'video.title': 'Video de Presentación',
        'contact.title': 'Contáctanos',
        'contact.info.title': 'Información de Contacto',
        'contact.info.address': 'Dirección',
        'contact.info.address.value': 'Cq. 1 #70-01, Medellín, Colombia',
        'contact.info.phone': 'Teléfono',
        'contact.info.phone.value': '+57 316 0571065',
        'contact.info.email': 'Email',
        'contact.info.email.value': 'info@techvision.com',
        'contact.form.name': 'Tu nombre',
        'contact.form.email': 'Tu email',
        'contact.form.subject': 'Asunto',
        'contact.form.message': 'Tu mensaje',
        'contact.form.submit': 'Enviar Mensaje',
        'footer.description': 'Transformando el futuro con tecnología innovadora',
        'footer.services': 'Servicios',
        'footer.services.web': 'Desarrollo Web',
        'footer.services.mobile': 'Apps Móviles',
        'footer.services.ai': 'Inteligencia Artificial',
        'footer.services.consulting': 'Consultoría IT',
        'footer.company': 'Empresa',
        'footer.company.about': 'Sobre Nosotros',
        'footer.company.team': 'Equipo',
        'footer.company.careers': 'Carreras',
        'footer.company.blog': 'Blog',
        'footer.contact': 'Contacto',
        'footer.contact.address': 'Cq. 1 #70-01, Medellín, Colombia',
        'footer.contact.phone': '+57 316 0571065',
        'footer.contact.email': 'info@techvision.com',
        'footer.rights': 'Todos los derechos reservados.'
    },
    en: {
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.gallery': 'Gallery',
        'nav.video': 'Video',
        'nav.contact': 'Contact',
        'header.title': 'Technological Innovation',
        'header.subtitle': 'Transforming ideas into digital solutions',
        'header.cta': 'Discover More',
        'slider.slide1.title': 'Web Development',
        'slider.slide1.description': 'We create modern and responsive websites',
        'slider.slide2.title': 'Mobile Applications',
        'slider.slide2.description': 'Native solutions for iOS and Android',
        'slider.slide3.title': 'Artificial Intelligence',
        'slider.slide3.description': 'Automation and machine learning',
        'slider.slide4.title': 'IT Consulting',
        'slider.slide4.description': 'Expert technology consulting',
        'services.title': 'Our Services',
        'services.web.title': 'Web Development',
        'services.web.description': 'Modern, responsive websites optimized for SEO',
        'services.mobile.title': 'Mobile Apps',
        'services.mobile.description': 'Native applications for iOS and Android with exceptional UX',
        'services.ai.title': 'Artificial Intelligence',
        'services.ai.description': 'AI and machine learning solutions for your business',
        'services.cloud.title': 'Cloud Computing',
        'services.cloud.description': 'Scalable and secure cloud infrastructure',
        'gallery.title': 'Project Gallery',
        'gallery.project1.title': 'E-commerce Platform',
        'gallery.project1.description': 'E-commerce platform',
        'gallery.project2.title': 'Delivery App',
        'gallery.project2.description': 'Mobile delivery application',
        'gallery.project3.title': 'Analytics Dashboard',
        'gallery.project3.description': 'Data analysis panel',
        'gallery.project4.title': 'CRM System',
        'gallery.project4.description': 'Customer management system',
        'gallery.project5.title': 'AI Chatbot',
        'gallery.project5.description': 'Intelligent chatbot',
        'gallery.project6.title': 'Mobile Banking',
        'gallery.project6.description': 'Mobile banking application',
        'video.title': 'Presentation Video',
        'contact.title': 'Contact Us',
        'contact.info.title': 'Contact Information',
        'contact.info.address': 'Address',
        'contact.info.address.value': 'Cq. 1 #70-01, Medellín, Colombia',
        'contact.info.phone': 'Phone',
        'contact.info.phone.value': '+57 316 0571065',
        'contact.info.email': 'Email',
        'contact.info.email.value': 'info@techvision.com',
        'contact.form.name': 'Your name',
        'contact.form.email': 'Your email',
        'contact.form.subject': 'Subject',
        'contact.form.message': 'Your message',
        'contact.form.submit': 'Send Message',
        'footer.description': 'Transforming the future with innovative technology',
        'footer.services': 'Services',
        'footer.services.web': 'Web Development',
        'footer.services.mobile': 'Mobile Apps',
        'footer.services.ai': 'Artificial Intelligence',
        'footer.services.consulting': 'IT Consulting',
        'footer.company': 'Company',
        'footer.company.about': 'About Us',
        'footer.company.team': 'Team',
        'footer.company.careers': 'Careers',
        'footer.company.blog': 'Blog',
        'footer.contact': 'Contact',
        'footer.contact.address': 'Cq. 1 #70-01, Medellín, Colombia',
        'footer.contact.phone': '+57 316 0571065',
        'footer.contact.email': 'info@techvision.com',
        'footer.rights': 'All rights reserved.'
    },
    fr: {
        'nav.home': 'Accueil',
        'nav.services': 'Services',
        'nav.gallery': 'Galerie',
        'nav.video': 'Vidéo',
        'nav.contact': 'Contact',
        'header.title': 'Innovation Technologique',
        'header.subtitle': 'Transformer les idées en solutions numériques',
        'header.cta': 'Découvrir Plus',
        'slider.slide1.title': 'Développement Web',
        'slider.slide1.description': 'Nous créons des sites web modernes et responsives',
        'slider.slide2.title': 'Applications Mobiles',
        'slider.slide2.description': 'Solutions natives pour iOS et Android',
        'slider.slide3.title': 'Intelligence Artificielle',
        'slider.slide3.description': 'Automatisation et apprentissage automatique',
        'slider.slide4.title': 'Conseil IT',
        'slider.slide4.description': 'Conseil expert en technologie',
        'services.title': 'Nos Services',
        'services.web.title': 'Développement Web',
        'services.web.description': 'Sites web modernes et responsifs optimisés pour le SEO',
        'services.mobile.title': 'Applications Mobiles',
        'services.mobile.description': 'Applications natives pour iOS et Android avec UX exceptionnelle',
        'services.ai.title': 'Intelligence Artificielle',
        'services.ai.description': 'Solutions d\'IA et d\'apprentissage automatique pour votre entreprise',
        'services.cloud.title': 'Cloud Computing',
        'services.cloud.description': 'Infrastructure cloud évolutive et sécurisée',
        'gallery.title': 'Galerie de Projets',
        'gallery.project1.title': 'Plateforme E-commerce',
        'gallery.project1.description': 'Plateforme de commerce électronique',
        'gallery.project2.title': 'Application de Livraison',
        'gallery.project2.description': 'Application mobile de livraison',
        'gallery.project3.title': 'Tableau de Bord Analytics',
        'gallery.project3.description': 'Panneau d\'analyse de données',
        'gallery.project4.title': 'Système CRM',
        'gallery.project4.description': 'Système de gestion des clients',
        'gallery.project5.title': 'Chatbot IA',
        'gallery.project5.description': 'Chatbot intelligent',
        'gallery.project6.title': 'Banque Mobile',
        'gallery.project6.description': 'Application bancaire mobile',
        'video.title': 'Vidéo de Présentation',
        'contact.title': 'Contactez-nous',
        'contact.info.title': 'Informations de Contact',
        'contact.info.address': 'Adresse',
        'contact.info.address.value': 'Cq. 1 #70-01, Medellín, Colombia',
        'contact.info.phone': 'Téléphone',
        'contact.info.phone.value': '+57 316 0571065',
        'contact.info.email': 'Email',
        'contact.info.email.value': 'info@techvision.com',
        'contact.form.name': 'Votre nom',
        'contact.form.email': 'Votre email',
        'contact.form.subject': 'Sujet',
        'contact.form.message': 'Votre message',
        'contact.form.submit': 'Envoyer le Message',
        'footer.description': 'Transformer l\'avenir avec une technologie innovante',
        'footer.services': 'Services',
        'footer.services.web': 'Développement Web',
        'footer.services.mobile': 'Applications Mobiles',
        'footer.services.ai': 'Intelligence Artificielle',
        'footer.services.consulting': 'Conseil IT',
        'footer.company': 'Entreprise',
        'footer.company.about': 'À Propos',
        'footer.company.team': 'Équipe',
        'footer.company.careers': 'Carrières',
        'footer.company.blog': 'Blog',
        'footer.contact': 'Contact',
        'footer.contact.address': 'Cq. 1 #70-01, Medellín, Colombia',
        'footer.contact.phone': '+57 316 0571065',
        'footer.contact.email': 'info@techvision.com',
        'footer.rights': 'Tous droits réservés.'
    }
};

let currentLanguage = 'es';

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Inicialización de la aplicación
function initializeApp() {
    initializeNavigation();
    initializeSlider();
    initializeLanguageSelector();
    initializeContactForm();
    initializeFloatingButton();
    initializeSmoothScrolling();
    initializeGalleryEffects();
}

// Navegación sticky y menú móvil
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navegación sticky
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });

    // Toggle del menú móvil
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en enlaces
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Slider con auto-play
function initializeSlider() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Funcionalidad de auto-play
    startAutoPlay();

    // Navegación manual
    prevBtn.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
        resetAutoPlay();
    });

    nextBtn.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
        resetAutoPlay();
    });

    // Navegación por puntos
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            resetAutoPlay();
        });
    });

    // Navegación por teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            goToSlide(currentSlide - 1);
            resetAutoPlay();
        } else if (e.key === 'ArrowRight') {
            goToSlide(currentSlide + 1);
            resetAutoPlay();
        }
    });

    // Soporte para gestos táctiles
    let touchStartX = 0;
    let touchEndX = 0;

    const sliderContainer = document.querySelector('.slider-container');
    
    sliderContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    sliderContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Deslizar a la izquierda - siguiente diapositiva
                goToSlide(currentSlide + 1);
            } else {
                // Deslizar a la derecha - diapositiva anterior
                goToSlide(currentSlide - 1);
            }
            resetAutoPlay();
        }
    }
}

function goToSlide(index) {
    // Remover clase activa de la diapositiva y punto actual
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');

    // Navegación circular
    if (index < 0) {
        currentSlide = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    // Agregar clase activa a la nueva diapositiva y punto
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function startAutoPlay() {
    slideInterval = setInterval(() => {
        goToSlide(currentSlide + 1);
    }, 4000);
}

function resetAutoPlay() {
    clearInterval(slideInterval);
    startAutoPlay();
}

// Selector de idioma
function initializeLanguageSelector() {
    const langBtn = document.getElementById('langBtn');
    const langDropdown = document.getElementById('langDropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    const currentLangSpan = document.getElementById('currentLang');

    // Toggle del dropdown
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('show');
    });

    // Cerrar dropdown al hacer clic fuera
    document.addEventListener('click', () => {
        langDropdown.classList.remove('show');
    });

    // Selección de idioma
    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedLang = option.getAttribute('data-lang');
            
            // Actualizar estado activo
            langOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            
            // Actualizar idioma mostrado
            currentLangSpan.textContent = selectedLang.toUpperCase();
            
            // Cambiar idioma
            changeLanguage(selectedLang);
            
            // Cerrar dropdown
            langDropdown.classList.remove('show');
        });
    });
}

function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Actualizar todos los elementos traducibles
    const translatableElements = document.querySelectorAll('[data-translate]');
    
    translatableElements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = translations[lang][key];
        
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Actualizar idioma del documento
    document.documentElement.lang = lang;
    
    // Guardar preferencia de idioma
    localStorage.setItem('preferred-language', lang);
}

// Formulario de contacto
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener datos del formulario
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Validar formulario
        if (validateForm(data)) {
            // Simular envío del formulario
            showFormSuccess();
            contactForm.reset();
        }
    });

    // Validación en tiempo real
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateField(input);
        });
        
        input.addEventListener('input', () => {
            clearFieldError(input);
        });
    });
}

function validateForm(data) {
    let isValid = true;
    
    // Verificar campos requeridos
    Object.keys(data).forEach(key => {
        const field = document.getElementById(key);
        if (!data[key].trim()) {
            showFieldError(field, 'Este campo es requerido');
            isValid = false;
        } else if (key === 'email' && !isValidEmail(data[key])) {
            showFieldError(field, 'Por favor ingresa un email válido');
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    
    if (!value) {
        showFieldError(field, 'Este campo es requerido');
        return false;
    }
    
    if (field.type === 'email' && !isValidEmail(value)) {
        showFieldError(field, 'Por favor ingresa un email válido');
        return false;
    }
    
    clearFieldError(field);
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFieldError(field, message) {
    clearFieldError(field);
    
    field.style.borderColor = '#ef4444';
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.style.color = '#ef4444';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    errorDiv.textContent = message;
    
    field.parentNode.appendChild(errorDiv);
}

function clearFieldError(field) {
    field.style.borderColor = '#e5e7eb';
    
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
}

function showFormSuccess() {

    const successMessage = document.createElement('div');
    successMessage.className = 'form-success';
    successMessage.style.cssText = `
        background: #10b981;
        color: white;
        padding: 1rem;
        border-radius: 10px;
        margin-top: 1rem;
        text-align: center;
        font-weight: 600;
    `;
    successMessage.textContent = '¡Mensaje enviado exitosamente! Te contactaremos pronto.';
    
    const form = document.getElementById('contactForm');
    form.appendChild(successMessage);
    
    setTimeout(() => {
        successMessage.remove();
    }, 5000);
}

// Botón flotante
function initializeFloatingButton() {
    const floatingBtn = document.getElementById('floatingBtn');
    
    // Mostrar/ocultar botón según el scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            floatingBtn.classList.add('show');
        } else {
            floatingBtn.classList.remove('show');
        }
    });
    
    // Funcionalidad de scroll hacia arriba
    floatingBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Scroll suave para enlaces internos
function initializeSmoothScrolling() {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');

            // Evitar error si es solo "#"
            if (!targetId || targetId === "#") {
                return;
            }

            e.preventDefault();

            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 70; // Ajuste para navbar fijo
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Efectos de galería
function initializeGalleryEffects() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Intersection Observer para animaciones
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Aplicar estilos iniciales y observar
    galleryItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        item.style.transitionDelay = `${index * 0.1}s`;
        
        observer.observe(item);
    });
}

// Animaciones adicionales
function addScrollAnimations() {
    const animatedElements = document.querySelectorAll('.service-card, .contact-item');
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        element.style.transitionDelay = `${index * 0.1}s`;
        
        animationObserver.observe(element);
    });
}

// Carga diferida de imágenes
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Optimizaciones de rendimiento
function optimizePerformance() {
    // Debounce de eventos de scroll
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(() => {
            // Manejar operaciones basadas en scroll
        }, 16); // ~60fps
    });
    
    // Precarga de recursos críticos
    const criticalImages = [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Inicializar características adicionales
document.addEventListener('DOMContentLoaded', () => {
    addScrollAnimations();
    initializeLazyLoading();
    optimizePerformance();
    
    // Cargar preferencia de idioma guardada
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage && translations[savedLanguage]) {
        changeLanguage(savedLanguage);
        document.getElementById('currentLang').textContent = savedLanguage.toUpperCase();
        
        // Actualizar estado activo en dropdown
        const langOptions = document.querySelectorAll('.lang-option');
        langOptions.forEach(option => {
            option.classList.remove('active');
            if (option.getAttribute('data-lang') === savedLanguage) {
                option.classList.add('active');
            }
        });
    }
});

// Manejo de errores
window.addEventListener('error', (e) => {
    console.error('Error de JavaScript:', e.error);
});

// Registro de Service Worker 
/*if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registrado: ', registration);
            })
            .catch(registrationError => {
                console.log('Registro de SW falló: ', registrationError);
            });
    });
} */