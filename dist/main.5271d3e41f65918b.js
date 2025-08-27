(()=>{"use strict";var e={291:function(e,r,n){n.d(r,{Z:()=>a});var t=n(537),o=n.n(t),i=n(645),A=n.n(i)()(o());A.push([e.id,'body{font-family:"Poppins",sans-serif;background-color:#f9f9f9;border:2px solid #000}',"",{version:3,sources:["webpack://./src/styles.scss"],names:[],mappings:"AAAA,KACE,gCAAA,CACA,wBAAA,CACA,qBAAA",sourcesContent:["body {\r\n  font-family: 'Poppins', sans-serif;\r\n  background-color: #f9f9f9;\r\n  border: 2px solid black; // El borde que me pediste\r\n}"],sourceRoot:""}]);let a=A},707:function(e,r,n){n.d(r,{Z:()=>m});var t=n(537),o=n.n(t),i=n(645),A=n.n(i),a=n(667),s=n.n(a),l=new URL(n(478),n.b),c=A()(o()),d=s()(l);c.push([e.id,`/* Reset y estilos base */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    color: #333;
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Sticky Menu */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
    transition: all 0.3s ease;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
}

.nav-logo {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 700;
    color: #2563eb;
}

.nav-logo i {
    margin-right: 10px;
    font-size: 1.8rem;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;
}

.nav-link:hover {
    color: #2563eb;
}

.nav-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #2563eb;
    transition: width 0.3s ease;
}

.nav-link:hover::after {
    width: 100%;
}

/* Language Selector */
.language-selector {
    position: relative;
    margin-right: 1rem;
}

.lang-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: transparent;
    border: 2px solid #e5e7eb;
    border-radius: 25px;
    padding: 8px 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.9rem;
    font-weight: 500;
}

.lang-btn:hover {
    border-color: #2563eb;
    background: rgba(37, 99, 235, 0.1);
}

.lang-btn i {
    font-size: 1rem;
    color: #2563eb;
}

.lang-dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    background: white;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    padding: 0.5rem 0;
    min-width: 150px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.3s ease;
    z-index: 1001;
}

.lang-dropdown.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.lang-option {
    display: block;
    padding: 0.75rem 1rem;
    text-decoration: none;
    color: #333;
    transition: background 0.3s ease;
    font-size: 0.9rem;
}

.lang-option:hover {
    background: #f8fafc;
    color: #2563eb;
}

.lang-option.active {
    background: #2563eb;
    color: white;
}

.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.bar {
    width: 25px;
    height: 3px;
    background-color: #333;
    margin: 3px 0;
    transition: 0.3s;
}

/* Header */
.header {
    height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    position: relative;
    overflow: hidden;
}

.header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(${d});
    opacity: 0.3;
}

.header-content {
    position: relative;
    z-index: 2;
}

.header-content h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    animation: fadeInUp 1s ease;
}

.header-content p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
    animation: fadeInUp 1s ease 0.2s both;
}

.cta-button {
    display: inline-block;
    padding: 15px 30px;
    background: #2563eb;
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    transition: all 0.3s ease;
    animation: fadeInUp 1s ease 0.4s both;
}

.cta-button:hover {
    background: #1d4ed8;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
}

/* Rotador - Slider */
.slider-section {
    position: relative;
    height: 400px;
    overflow: hidden;
    background: #f8fafc;
}

.slider-container {
    height: 100%;
    position: relative;
}

.slider-slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.slider-slide:nth-child(2) {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.slider-slide:nth-child(3) {
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.slider-slide:nth-child(4) {
    background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
}

.slider-slide.active {
    opacity: 1;
}

.slider-content {
    text-align: center;
    color: white;
    padding: 0 20px;
}

.slider-content h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

.slider-content p {
    font-size: 1.1rem;
    opacity: 0.9;
}

.slider-dots {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
}

.dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    transition: background 0.3s ease;
}

.dot.active {
    background: white;
}

.slider-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.2);
    border: none;
    color: white;
    padding: 15px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

.slider-btn:hover {
    background: rgba(255, 255, 255, 0.3);
}

.slider-btn.prev {
    left: 20px;
}

.slider-btn.next {
    right: 20px;
}

/* Secci\xf3n de Servicios */
.services {
    padding: 80px 0;
    background: white;
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 3rem;
    color: #1f2937;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.service-card {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    border: 1px solid #e5e7eb;
}

.service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.service-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
}

.service-icon i {
    font-size: 2rem;
    color: white;
}

.service-card h3 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #1f2937;
}

.service-card p {
    color: #6b7280;
    line-height: 1.6;
}

/* Galer\xeda de Im\xe1genes */
.gallery {
    padding: 80px 0;
    background: #f8fafc;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
}

.gallery-item {
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.gallery-item:hover {
    transform: scale(1.05);
}

.gallery-item img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.gallery-item:hover img {
    transform: scale(1.1);
}

.gallery-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
    color: white;
    padding: 2rem;
    transform: translateY(100%);
    transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
    transform: translateY(0);
}

.gallery-overlay h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.gallery-overlay p {
    opacity: 0.9;
}

/* Video Section */
.video-section {
    padding: 80px 0;
    background: white;
}

.video-container {
    position: relative;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.video-container iframe {
    width: 100%;
    height: 450px;
    border: none;
}

/* Formulario de Contacto */
.contact {
    padding: 80px 0;
    background: #f8fafc;
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: start;
}

.contact-info h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 2rem;
    color: #1f2937;
}

.contact-item {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
}

.contact-item i {
    width: 50px;
    height: 50px;
    background: #2563eb;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
}

.contact-item h4 {
    font-weight: 600;
    margin-bottom: 0.25rem;
    color: #1f2937;
}

.contact-item p {
    color: #6b7280;
}

.contact-form {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 15px;
    border: 2px solid #e5e7eb;
    border-radius: 10px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    font-family: inherit;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #2563eb;
}

.submit-btn {
    width: 100%;
    padding: 15px;
    background: #2563eb;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.submit-btn:hover {
    background: #1d4ed8;
    transform: translateY(-2px);
}

/* Footer */
.footer {
    background: #1f2937;
    color: white;
    padding: 60px 0 20px;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.footer-logo {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

.footer-logo i {
    margin-right: 10px;
    color: #2563eb;
}

.footer-section h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #f9fafb;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 0.5rem;
}

.footer-section ul li a {
    color: #d1d5db;
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-section ul li a:hover {
    color: #2563eb;
}

.footer-section ul li i {
    margin-right: 10px;
    color: #2563eb;
}

.social-links {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

.social-links a {
    width: 40px;
    height: 40px;
    background: #374151;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.social-links a:hover {
    background: #2563eb;
    transform: translateY(-2px);
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid #374151;
    color: #9ca3af;
}

/* Bot\xf3n Flotante (Posicionamiento fijo) */
.floating-btn {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 60px;
    height: 60px;
    background: #2563eb;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
    transition: all 0.3s ease;
    opacity: 0;
    visibility: hidden;
    z-index: 1000;
}

.floating-btn.show {
    opacity: 1;
    visibility: visible;
}

.floating-btn:hover {
    background: #1d4ed8;
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(37, 99, 235, 0.4);
}

/* Animaciones */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Mediaqueries */
@media (max-width: 1024px) {
    .container {
        padding: 0 30px;
    }
    
    .header-content h1 {
        font-size: 3rem;
    }
    
    .slider-content h2 {
        font-size: 2.2rem;
    }
    
    .section-title {
        font-size: 2.2rem;
    }
}

@media (max-width: 768px) {
    .nav-menu {
        position: fixed;
        left: -100%;
        top: 70px;
        flex-direction: column;
        background-color: white;
        width: 100%;
        text-align: center;
        transition: 0.3s;
        box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
        padding: 2rem 0;
    }

    .nav-menu.active {
        left: 0;
    }

    .hamburger {
        display: flex;
    }

    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }

    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }

    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }

    .language-selector {
        margin-right: 0;
        margin-left: 1rem;
    }

    .lang-btn {
        padding: 6px 12px;
        font-size: 0.8rem;
    }

    .header-content h1 {
        font-size: 2.5rem;
    }

    .slider-content h2 {
        font-size: 2rem;
    }

    .section-title {
        font-size: 2rem;
    }

    .contact-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .video-container iframe {
        height: 300px;
    }

    .floating-btn {
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        font-size: 1rem;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 15px;
    }

    .nav-container {
        padding: 0 15px;
    }

    .header-content h1 {
        font-size: 2rem;
    }

    .header-content p {
        font-size: 1rem;
    }

    .slider-content h2 {
        font-size: 1.5rem;
    }

    .slider-content p {
        font-size: 1rem;
    }

    .section-title {
        font-size: 1.8rem;
    }

    .service-card {
        padding: 1.5rem;
    }

    .gallery-grid {
        grid-template-columns: 1fr;
    }

    .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .social-links {
        justify-content: center;
    }

    .lang-dropdown {
        min-width: 120px;
    }

    .lang-option {
        padding: 0.5rem 0.75rem;
        font-size: 0.8rem;
    }
}

@media (max-width: 360px) {
    .header-content h1 {
        font-size: 1.8rem;
    }

    .slider-content h2 {
        font-size: 1.3rem;
    }

    .section-title {
        font-size: 1.6rem;
    }

    .nav-logo {
        font-size: 1.3rem;
    }

    .nav-logo i {
        font-size: 1.5rem;
    }
}

/* Utilidades */
.text-center {
    text-align: center;
}

.mb-2 {
    margin-bottom: 1rem;
}

.mb-4 {
    margsin-bottom: 2rem;
}

/* Scrollbar personalizada */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: #2563eb;
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: #1d4ed8;
} `,"",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA,yBAAyB;AACzB;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,kCAAkC;IAClC,gBAAgB;IAChB,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,cAAc;IACd,eAAe;AACnB;;AAEA,gBAAgB;AAChB;IACI,eAAe;IACf,MAAM;IACN,WAAW;IACX,qCAAqC;IACrC,2BAA2B;IAC3B,aAAa;IACb,yBAAyB;IACzB,yCAAyC;AAC7C;;AAEA;IACI,iBAAiB;IACjB,cAAc;IACd,eAAe;IACf,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,SAAS;AACb;;AAEA;IACI,qBAAqB;IACrB,WAAW;IACX,gBAAgB;IAChB,2BAA2B;IAC3B,kBAAkB;AACtB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,QAAQ;IACR,WAAW;IACX,YAAY;IACZ,OAAO;IACP,yBAAyB;IACzB,2BAA2B;AAC/B;;AAEA;IACI,WAAW;AACf;;AAEA,sBAAsB;AACtB;IACI,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,WAAW;IACX,uBAAuB;IACvB,yBAAyB;IACzB,mBAAmB;IACnB,iBAAiB;IACjB,eAAe;IACf,yBAAyB;IACzB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,kCAAkC;AACtC;;AAEA;IACI,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,iBAAiB;IACjB,mBAAmB;IACnB,0CAA0C;IAC1C,iBAAiB;IACjB,gBAAgB;IAChB,UAAU;IACV,kBAAkB;IAClB,4BAA4B;IAC5B,yBAAyB;IACzB,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,mBAAmB;IACnB,wBAAwB;AAC5B;;AAEA;IACI,cAAc;IACd,qBAAqB;IACrB,qBAAqB;IACrB,WAAW;IACX,gCAAgC;IAChC,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,WAAW;IACX,sBAAsB;IACtB,aAAa;IACb,gBAAgB;AACpB;;AAEA,WAAW;AACX;IACI,aAAa;IACb,6DAA6D;IAC7D,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,mDAA2T;IAC3T,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;IACnB,2BAA2B;AAC/B;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,YAAY;IACZ,qCAAqC;AACzC;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,qBAAqB;IACrB,mBAAmB;IACnB,gBAAgB;IAChB,yBAAyB;IACzB,qCAAqC;AACzC;;AAEA;IACI,mBAAmB;IACnB,2BAA2B;IAC3B,8CAA8C;AAClD;;AAEA,qBAAqB;AACrB;IACI,kBAAkB;IAClB,aAAa;IACb,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,UAAU;IACV,6BAA6B;IAC7B,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,6DAA6D;AACjE;;AAEA;IACI,6DAA6D;AACjE;;AAEA;IACI,6DAA6D;AACjE;;AAEA;IACI,6DAA6D;AACjE;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,SAAS;IACT,2BAA2B;IAC3B,aAAa;IACb,SAAS;AACb;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,oCAAoC;IACpC,eAAe;IACf,gCAAgC;AACpC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,2BAA2B;IAC3B,oCAAoC;IACpC,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,eAAe;IACf,yBAAyB;IACzB,2BAA2B;AAC/B;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,WAAW;AACf;;AAEA,yBAAyB;AACzB;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,2DAA2D;IAC3D,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,0CAA0C;IAC1C,yBAAyB;IACzB,yBAAyB;AAC7B;;AAEA;IACI,4BAA4B;IAC5B,2CAA2C;AAC/C;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,6DAA6D;IAC7D,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,gBAAgB;AACpB;;AAEA,wBAAwB;AACxB;IACI,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,2DAA2D;IAC3D,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,0CAA0C;IAC1C,yBAAyB;AAC7B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,aAAa;IACb,iBAAiB;IACjB,+BAA+B;AACnC;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,OAAO;IACP,QAAQ;IACR,4DAA4D;IAC5D,YAAY;IACZ,aAAa;IACb,2BAA2B;IAC3B,+BAA+B;AACnC;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA;IACI,YAAY;AAChB;;AAEA,kBAAkB;AAClB;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,gBAAgB;IAChB,cAAc;IACd,mBAAmB;IACnB,gBAAgB;IAChB,0CAA0C;AAC9C;;AAEA;IACI,WAAW;IACX,aAAa;IACb,YAAY;AAChB;;AAEA,2BAA2B;AAC3B;IACI,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,sBAAsB;IACtB,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,0CAA0C;AAC9C;;AAEA;IACI,qBAAqB;AACzB;;AAEA;;IAEI,WAAW;IACX,aAAa;IACb,yBAAyB;IACzB,mBAAmB;IACnB,eAAe;IACf,kCAAkC;IAClC,oBAAoB;AACxB;;AAEA;;IAEI,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,eAAe;IACf,gBAAgB;IAChB,eAAe;IACf,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,mBAAmB;IACnB,2BAA2B;AAC/B;;AAEA,WAAW;AACX;IACI,mBAAmB;IACnB,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,2DAA2D;IAC3D,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,cAAc;IACd,qBAAqB;IACrB,2BAA2B;AAC/B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;IACnB,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,6BAA6B;IAC7B,cAAc;AAClB;;AAEA,0CAA0C;AAC1C;IACI,eAAe;IACf,YAAY;IACZ,WAAW;IACX,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB,8CAA8C;IAC9C,yBAAyB;IACzB,UAAU;IACV,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,2BAA2B;IAC3B,8CAA8C;AAClD;;AAEA,gBAAgB;AAChB;IACI;QACI,UAAU;QACV,2BAA2B;IAC/B;IACA;QACI,UAAU;QACV,wBAAwB;IAC5B;AACJ;;AAEA,iBAAiB;AACjB;IACI;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,iBAAiB;IACrB;AACJ;;AAEA;IACI;QACI,eAAe;QACf,WAAW;QACX,SAAS;QACT,sBAAsB;QACtB,uBAAuB;QACvB,WAAW;QACX,kBAAkB;QAClB,gBAAgB;QAChB,2CAA2C;QAC3C,eAAe;IACnB;;IAEA;QACI,OAAO;IACX;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,UAAU;IACd;;IAEA;QACI,wCAAwC;IAC5C;;IAEA;QACI,0CAA0C;IAC9C;;IAEA;QACI,eAAe;QACf,iBAAiB;IACrB;;IAEA;QACI,iBAAiB;QACjB,iBAAiB;IACrB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,0BAA0B;QAC1B,SAAS;IACb;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,YAAY;QACZ,WAAW;QACX,WAAW;QACX,YAAY;QACZ,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,0BAA0B;IAC9B;;IAEA;QACI,0BAA0B;QAC1B,kBAAkB;IACtB;;IAEA;QACI,uBAAuB;IAC3B;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,uBAAuB;QACvB,iBAAiB;IACrB;AACJ;;AAEA;IACI;QACI,iBAAiB;IACrB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,iBAAiB;IACrB;AACJ;;AAEA,eAAe;AACf;IACI,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;AACxB;;AAEA,4BAA4B;AAC5B;IACI,UAAU;AACd;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB",sourcesContent:['/* Reset y estilos base */\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n    scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n    font-family: \'Poppins\', sans-serif;\r\n    line-height: 1.6;\r\n    color: #333;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.container {\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n    padding: 0 20px;\r\n}\r\n\r\n/* Sticky Menu */\r\n.navbar {\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100%;\r\n    background: rgba(255, 255, 255, 0.95);\r\n    backdrop-filter: blur(10px);\r\n    z-index: 1000;\r\n    transition: all 0.3s ease;\r\n    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.nav-container {\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n    padding: 0 20px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    height: 70px;\r\n}\r\n\r\n.nav-logo {\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 1.5rem;\r\n    font-weight: 700;\r\n    color: #2563eb;\r\n}\r\n\r\n.nav-logo i {\r\n    margin-right: 10px;\r\n    font-size: 1.8rem;\r\n}\r\n\r\n.nav-menu {\r\n    display: flex;\r\n    list-style: none;\r\n    gap: 2rem;\r\n}\r\n\r\n.nav-link {\r\n    text-decoration: none;\r\n    color: #333;\r\n    font-weight: 500;\r\n    transition: color 0.3s ease;\r\n    position: relative;\r\n}\r\n\r\n.nav-link:hover {\r\n    color: #2563eb;\r\n}\r\n\r\n.nav-link::after {\r\n    content: \'\';\r\n    position: absolute;\r\n    width: 0;\r\n    height: 2px;\r\n    bottom: -5px;\r\n    left: 0;\r\n    background-color: #2563eb;\r\n    transition: width 0.3s ease;\r\n}\r\n\r\n.nav-link:hover::after {\r\n    width: 100%;\r\n}\r\n\r\n/* Language Selector */\r\n.language-selector {\r\n    position: relative;\r\n    margin-right: 1rem;\r\n}\r\n\r\n.lang-btn {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n    background: transparent;\r\n    border: 2px solid #e5e7eb;\r\n    border-radius: 25px;\r\n    padding: 8px 16px;\r\n    cursor: pointer;\r\n    transition: all 0.3s ease;\r\n    font-size: 0.9rem;\r\n    font-weight: 500;\r\n}\r\n\r\n.lang-btn:hover {\r\n    border-color: #2563eb;\r\n    background: rgba(37, 99, 235, 0.1);\r\n}\r\n\r\n.lang-btn i {\r\n    font-size: 1rem;\r\n    color: #2563eb;\r\n}\r\n\r\n.lang-dropdown {\r\n    position: absolute;\r\n    top: 100%;\r\n    right: 0;\r\n    background: white;\r\n    border-radius: 10px;\r\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\r\n    padding: 0.5rem 0;\r\n    min-width: 150px;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    transform: translateY(-10px);\r\n    transition: all 0.3s ease;\r\n    z-index: 1001;\r\n}\r\n\r\n.lang-dropdown.show {\r\n    opacity: 1;\r\n    visibility: visible;\r\n    transform: translateY(0);\r\n}\r\n\r\n.lang-option {\r\n    display: block;\r\n    padding: 0.75rem 1rem;\r\n    text-decoration: none;\r\n    color: #333;\r\n    transition: background 0.3s ease;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.lang-option:hover {\r\n    background: #f8fafc;\r\n    color: #2563eb;\r\n}\r\n\r\n.lang-option.active {\r\n    background: #2563eb;\r\n    color: white;\r\n}\r\n\r\n.hamburger {\r\n    display: none;\r\n    flex-direction: column;\r\n    cursor: pointer;\r\n}\r\n\r\n.bar {\r\n    width: 25px;\r\n    height: 3px;\r\n    background-color: #333;\r\n    margin: 3px 0;\r\n    transition: 0.3s;\r\n}\r\n\r\n/* Header */\r\n.header {\r\n    height: 100vh;\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n    color: white;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.header::before {\r\n    content: \'\';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>\');\r\n    opacity: 0.3;\r\n}\r\n\r\n.header-content {\r\n    position: relative;\r\n    z-index: 2;\r\n}\r\n\r\n.header-content h1 {\r\n    font-size: 3.5rem;\r\n    font-weight: 700;\r\n    margin-bottom: 1rem;\r\n    animation: fadeInUp 1s ease;\r\n}\r\n\r\n.header-content p {\r\n    font-size: 1.2rem;\r\n    margin-bottom: 2rem;\r\n    opacity: 0.9;\r\n    animation: fadeInUp 1s ease 0.2s both;\r\n}\r\n\r\n.cta-button {\r\n    display: inline-block;\r\n    padding: 15px 30px;\r\n    background: #2563eb;\r\n    color: white;\r\n    text-decoration: none;\r\n    border-radius: 50px;\r\n    font-weight: 600;\r\n    transition: all 0.3s ease;\r\n    animation: fadeInUp 1s ease 0.4s both;\r\n}\r\n\r\n.cta-button:hover {\r\n    background: #1d4ed8;\r\n    transform: translateY(-2px);\r\n    box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);\r\n}\r\n\r\n/* Rotador - Slider */\r\n.slider-section {\r\n    position: relative;\r\n    height: 400px;\r\n    overflow: hidden;\r\n    background: #f8fafc;\r\n}\r\n\r\n.slider-container {\r\n    height: 100%;\r\n    position: relative;\r\n}\r\n\r\n.slider-slide {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    opacity: 0;\r\n    transition: opacity 0.5s ease;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n}\r\n\r\n.slider-slide:nth-child(2) {\r\n    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);\r\n}\r\n\r\n.slider-slide:nth-child(3) {\r\n    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);\r\n}\r\n\r\n.slider-slide:nth-child(4) {\r\n    background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);\r\n}\r\n\r\n.slider-slide.active {\r\n    opacity: 1;\r\n}\r\n\r\n.slider-content {\r\n    text-align: center;\r\n    color: white;\r\n    padding: 0 20px;\r\n}\r\n\r\n.slider-content h2 {\r\n    font-size: 2.5rem;\r\n    font-weight: 700;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.slider-content p {\r\n    font-size: 1.1rem;\r\n    opacity: 0.9;\r\n}\r\n\r\n.slider-dots {\r\n    position: absolute;\r\n    bottom: 20px;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\n.dot {\r\n    width: 12px;\r\n    height: 12px;\r\n    border-radius: 50%;\r\n    background: rgba(255, 255, 255, 0.5);\r\n    cursor: pointer;\r\n    transition: background 0.3s ease;\r\n}\r\n\r\n.dot.active {\r\n    background: white;\r\n}\r\n\r\n.slider-btn {\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    background: rgba(255, 255, 255, 0.2);\r\n    border: none;\r\n    color: white;\r\n    padding: 15px;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n    transition: all 0.3s ease;\r\n    backdrop-filter: blur(10px);\r\n}\r\n\r\n.slider-btn:hover {\r\n    background: rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n.slider-btn.prev {\r\n    left: 20px;\r\n}\r\n\r\n.slider-btn.next {\r\n    right: 20px;\r\n}\r\n\r\n/* Secci\xf3n de Servicios */\r\n.services {\r\n    padding: 80px 0;\r\n    background: white;\r\n}\r\n\r\n.section-title {\r\n    text-align: center;\r\n    font-size: 2.5rem;\r\n    font-weight: 700;\r\n    margin-bottom: 3rem;\r\n    color: #1f2937;\r\n}\r\n\r\n.services-grid {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\r\n    gap: 2rem;\r\n}\r\n\r\n.service-card {\r\n    background: white;\r\n    padding: 2rem;\r\n    border-radius: 15px;\r\n    text-align: center;\r\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\r\n    transition: all 0.3s ease;\r\n    border: 1px solid #e5e7eb;\r\n}\r\n\r\n.service-card:hover {\r\n    transform: translateY(-10px);\r\n    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.service-icon {\r\n    width: 80px;\r\n    height: 80px;\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    border-radius: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 0 auto 1.5rem;\r\n}\r\n\r\n.service-icon i {\r\n    font-size: 2rem;\r\n    color: white;\r\n}\r\n\r\n.service-card h3 {\r\n    font-size: 1.3rem;\r\n    font-weight: 600;\r\n    margin-bottom: 1rem;\r\n    color: #1f2937;\r\n}\r\n\r\n.service-card p {\r\n    color: #6b7280;\r\n    line-height: 1.6;\r\n}\r\n\r\n/* Galer\xeda de Im\xe1genes */\r\n.gallery {\r\n    padding: 80px 0;\r\n    background: #f8fafc;\r\n}\r\n\r\n.gallery-grid {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n    gap: 1.5rem;\r\n}\r\n\r\n.gallery-item {\r\n    position: relative;\r\n    border-radius: 15px;\r\n    overflow: hidden;\r\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.gallery-item:hover {\r\n    transform: scale(1.05);\r\n}\r\n\r\n.gallery-item img {\r\n    width: 100%;\r\n    height: 250px;\r\n    object-fit: cover;\r\n    transition: transform 0.3s ease;\r\n}\r\n\r\n.gallery-item:hover img {\r\n    transform: scale(1.1);\r\n}\r\n\r\n.gallery-overlay {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));\r\n    color: white;\r\n    padding: 2rem;\r\n    transform: translateY(100%);\r\n    transition: transform 0.3s ease;\r\n}\r\n\r\n.gallery-item:hover .gallery-overlay {\r\n    transform: translateY(0);\r\n}\r\n\r\n.gallery-overlay h3 {\r\n    font-size: 1.2rem;\r\n    font-weight: 600;\r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\n.gallery-overlay p {\r\n    opacity: 0.9;\r\n}\r\n\r\n/* Video Section */\r\n.video-section {\r\n    padding: 80px 0;\r\n    background: white;\r\n}\r\n\r\n.video-container {\r\n    position: relative;\r\n    width: 100%;\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n    border-radius: 15px;\r\n    overflow: hidden;\r\n    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.video-container iframe {\r\n    width: 100%;\r\n    height: 450px;\r\n    border: none;\r\n}\r\n\r\n/* Formulario de Contacto */\r\n.contact {\r\n    padding: 80px 0;\r\n    background: #f8fafc;\r\n}\r\n\r\n.contact-content {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 3rem;\r\n    align-items: start;\r\n}\r\n\r\n.contact-info h3 {\r\n    font-size: 1.5rem;\r\n    font-weight: 600;\r\n    margin-bottom: 2rem;\r\n    color: #1f2937;\r\n}\r\n\r\n.contact-item {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\n.contact-item i {\r\n    width: 50px;\r\n    height: 50px;\r\n    background: #2563eb;\r\n    color: white;\r\n    border-radius: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-right: 1rem;\r\n}\r\n\r\n.contact-item h4 {\r\n    font-weight: 600;\r\n    margin-bottom: 0.25rem;\r\n    color: #1f2937;\r\n}\r\n\r\n.contact-item p {\r\n    color: #6b7280;\r\n}\r\n\r\n.contact-form {\r\n    background: white;\r\n    padding: 2rem;\r\n    border-radius: 15px;\r\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\n.form-group input,\r\n.form-group textarea {\r\n    width: 100%;\r\n    padding: 15px;\r\n    border: 2px solid #e5e7eb;\r\n    border-radius: 10px;\r\n    font-size: 1rem;\r\n    transition: border-color 0.3s ease;\r\n    font-family: inherit;\r\n}\r\n\r\n.form-group input:focus,\r\n.form-group textarea:focus {\r\n    outline: none;\r\n    border-color: #2563eb;\r\n}\r\n\r\n.submit-btn {\r\n    width: 100%;\r\n    padding: 15px;\r\n    background: #2563eb;\r\n    color: white;\r\n    border: none;\r\n    border-radius: 10px;\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    transition: all 0.3s ease;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 10px;\r\n}\r\n\r\n.submit-btn:hover {\r\n    background: #1d4ed8;\r\n    transform: translateY(-2px);\r\n}\r\n\r\n/* Footer */\r\n.footer {\r\n    background: #1f2937;\r\n    color: white;\r\n    padding: 60px 0 20px;\r\n}\r\n\r\n.footer-content {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\r\n    gap: 2rem;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.footer-logo {\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 1.5rem;\r\n    font-weight: 700;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.footer-logo i {\r\n    margin-right: 10px;\r\n    color: #2563eb;\r\n}\r\n\r\n.footer-section h3 {\r\n    font-size: 1.2rem;\r\n    font-weight: 600;\r\n    margin-bottom: 1rem;\r\n    color: #f9fafb;\r\n}\r\n\r\n.footer-section ul {\r\n    list-style: none;\r\n}\r\n\r\n.footer-section ul li {\r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\n.footer-section ul li a {\r\n    color: #d1d5db;\r\n    text-decoration: none;\r\n    transition: color 0.3s ease;\r\n}\r\n\r\n.footer-section ul li a:hover {\r\n    color: #2563eb;\r\n}\r\n\r\n.footer-section ul li i {\r\n    margin-right: 10px;\r\n    color: #2563eb;\r\n}\r\n\r\n.social-links {\r\n    display: flex;\r\n    gap: 1rem;\r\n    margin-top: 1rem;\r\n}\r\n\r\n.social-links a {\r\n    width: 40px;\r\n    height: 40px;\r\n    background: #374151;\r\n    color: white;\r\n    border-radius: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.social-links a:hover {\r\n    background: #2563eb;\r\n    transform: translateY(-2px);\r\n}\r\n\r\n.footer-bottom {\r\n    text-align: center;\r\n    padding-top: 2rem;\r\n    border-top: 1px solid #374151;\r\n    color: #9ca3af;\r\n}\r\n\r\n/* Bot\xf3n Flotante (Posicionamiento fijo) */\r\n.floating-btn {\r\n    position: fixed;\r\n    bottom: 30px;\r\n    right: 30px;\r\n    width: 60px;\r\n    height: 60px;\r\n    background: #2563eb;\r\n    color: white;\r\n    border: none;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 1.2rem;\r\n    box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);\r\n    transition: all 0.3s ease;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    z-index: 1000;\r\n}\r\n\r\n.floating-btn.show {\r\n    opacity: 1;\r\n    visibility: visible;\r\n}\r\n\r\n.floating-btn:hover {\r\n    background: #1d4ed8;\r\n    transform: translateY(-3px);\r\n    box-shadow: 0 15px 35px rgba(37, 99, 235, 0.4);\r\n}\r\n\r\n/* Animaciones */\r\n@keyframes fadeInUp {\r\n    from {\r\n        opacity: 0;\r\n        transform: translateY(30px);\r\n    }\r\n    to {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n/* Mediaqueries */\r\n@media (max-width: 1024px) {\r\n    .container {\r\n        padding: 0 30px;\r\n    }\r\n    \r\n    .header-content h1 {\r\n        font-size: 3rem;\r\n    }\r\n    \r\n    .slider-content h2 {\r\n        font-size: 2.2rem;\r\n    }\r\n    \r\n    .section-title {\r\n        font-size: 2.2rem;\r\n    }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .nav-menu {\r\n        position: fixed;\r\n        left: -100%;\r\n        top: 70px;\r\n        flex-direction: column;\r\n        background-color: white;\r\n        width: 100%;\r\n        text-align: center;\r\n        transition: 0.3s;\r\n        box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);\r\n        padding: 2rem 0;\r\n    }\r\n\r\n    .nav-menu.active {\r\n        left: 0;\r\n    }\r\n\r\n    .hamburger {\r\n        display: flex;\r\n    }\r\n\r\n    .hamburger.active .bar:nth-child(2) {\r\n        opacity: 0;\r\n    }\r\n\r\n    .hamburger.active .bar:nth-child(1) {\r\n        transform: translateY(8px) rotate(45deg);\r\n    }\r\n\r\n    .hamburger.active .bar:nth-child(3) {\r\n        transform: translateY(-8px) rotate(-45deg);\r\n    }\r\n\r\n    .language-selector {\r\n        margin-right: 0;\r\n        margin-left: 1rem;\r\n    }\r\n\r\n    .lang-btn {\r\n        padding: 6px 12px;\r\n        font-size: 0.8rem;\r\n    }\r\n\r\n    .header-content h1 {\r\n        font-size: 2.5rem;\r\n    }\r\n\r\n    .slider-content h2 {\r\n        font-size: 2rem;\r\n    }\r\n\r\n    .section-title {\r\n        font-size: 2rem;\r\n    }\r\n\r\n    .contact-content {\r\n        grid-template-columns: 1fr;\r\n        gap: 2rem;\r\n    }\r\n\r\n    .video-container iframe {\r\n        height: 300px;\r\n    }\r\n\r\n    .floating-btn {\r\n        bottom: 20px;\r\n        right: 20px;\r\n        width: 50px;\r\n        height: 50px;\r\n        font-size: 1rem;\r\n    }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n    .container {\r\n        padding: 0 15px;\r\n    }\r\n\r\n    .nav-container {\r\n        padding: 0 15px;\r\n    }\r\n\r\n    .header-content h1 {\r\n        font-size: 2rem;\r\n    }\r\n\r\n    .header-content p {\r\n        font-size: 1rem;\r\n    }\r\n\r\n    .slider-content h2 {\r\n        font-size: 1.5rem;\r\n    }\r\n\r\n    .slider-content p {\r\n        font-size: 1rem;\r\n    }\r\n\r\n    .section-title {\r\n        font-size: 1.8rem;\r\n    }\r\n\r\n    .service-card {\r\n        padding: 1.5rem;\r\n    }\r\n\r\n    .gallery-grid {\r\n        grid-template-columns: 1fr;\r\n    }\r\n\r\n    .footer-content {\r\n        grid-template-columns: 1fr;\r\n        text-align: center;\r\n    }\r\n\r\n    .social-links {\r\n        justify-content: center;\r\n    }\r\n\r\n    .lang-dropdown {\r\n        min-width: 120px;\r\n    }\r\n\r\n    .lang-option {\r\n        padding: 0.5rem 0.75rem;\r\n        font-size: 0.8rem;\r\n    }\r\n}\r\n\r\n@media (max-width: 360px) {\r\n    .header-content h1 {\r\n        font-size: 1.8rem;\r\n    }\r\n\r\n    .slider-content h2 {\r\n        font-size: 1.3rem;\r\n    }\r\n\r\n    .section-title {\r\n        font-size: 1.6rem;\r\n    }\r\n\r\n    .nav-logo {\r\n        font-size: 1.3rem;\r\n    }\r\n\r\n    .nav-logo i {\r\n        font-size: 1.5rem;\r\n    }\r\n}\r\n\r\n/* Utilidades */\r\n.text-center {\r\n    text-align: center;\r\n}\r\n\r\n.mb-2 {\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.mb-4 {\r\n    margsin-bottom: 2rem;\r\n}\r\n\r\n/* Scrollbar personalizada */\r\n::-webkit-scrollbar {\r\n    width: 8px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n    background: #f1f1f1;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background: #2563eb;\r\n    border-radius: 4px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n    background: #1d4ed8;\r\n} '],sourceRoot:""}]);let m=c},645:function(e){e.exports=function(e){var r=[];return r.toString=function(){return this.map(function(r){var n="",t=void 0!==r[5];return r[4]&&(n+="@supports (".concat(r[4],") {")),r[2]&&(n+="@media ".concat(r[2]," {")),t&&(n+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),n+=e(r),t&&(n+="}"),r[2]&&(n+="}"),r[4]&&(n+="}"),n}).join("")},r.i=function(e,n,t,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var A={};if(t)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(A[s]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);t&&A[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),n&&(c[2]&&(c[1]="@media ".concat(c[2]," {").concat(c[1],"}")),c[2]=n),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),r.push(c))}},r}},667:function(e){e.exports=function(e,r){return(r||(r={}),e&&(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),r.hash&&(e+=r.hash),/["'() \t\n]|(%20)/.test(e)||r.needQuotes))?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e}},537:function(e){e.exports=function(e){var r=e[1],n=e[3];if(!n)return r;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));return[r].concat(["/*# ".concat("sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t)," */")]).join("\n")}return[r].join("\n")}},379:function(e){var r=[];function n(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function t(e,t){for(var o={},i=[],A=0;A<e.length;A++){var a=e[A],s=t.base?a[0]+t.base:a[0],l=o[s]||0,c="".concat(s," ").concat(l);o[s]=l+1;var d=n(c),m={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==d)r[d].references++,r[d].updater(m);else{var p=function(e,r){var n=r.domAPI(r);return n.update(e),function(r){r?(r.css!==e.css||r.media!==e.media||r.sourceMap!==e.sourceMap||r.supports!==e.supports||r.layer!==e.layer)&&n.update(e=r):n.remove()}}(m,t);t.byIndex=A,r.splice(A,0,{identifier:c,updater:p,references:1})}i.push(c)}return i}e.exports=function(e,o){var i=t(e=e||[],o=o||{});return function(e){e=e||[];for(var A=0;A<i.length;A++){var a=n(i[A]);r[a].references--}for(var s=t(e,o),l=0;l<i.length;l++){var c=n(i[l]);0===r[c].references&&(r[c].updater(),r.splice(c,1))}i=s}}},569:function(e){var r={};e.exports=function(e,n){var t=function(e){if(void 0===r[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}r[e]=n}return r[e]}(e);if(!t)throw Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},216:function(e){e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:function(e,r,n){e.exports=function(e){var r=n.nc;r&&e.setAttribute("nonce",r)}},795:function(e){e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=e.insertStyleElement(e);return{update:function(n){var t,o,i;t="",n.supports&&(t+="@supports (".concat(n.supports,") {")),n.media&&(t+="@media ".concat(n.media," {")),(o=void 0!==n.layer)&&(t+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),t+=n.css,o&&(t+="}"),n.media&&(t+="}"),n.supports&&(t+="}"),(i=n.sourceMap)&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,r,e.options)},remove:function(){!function(e){if(null!==e.parentNode)e.parentNode.removeChild(e)}(r)}}}},589:function(e){e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}},478:function(e){e.exports='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url%28%23grain%29"/></svg>'}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return e[t](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.nc=void 0,n.rv=()=>"1.4.11",n.b=document.baseURI||self.location.href,n.ruid="bundler=rspack@1.4.11",(()=>{let e;var r=n(379),t=n.n(r),o=n(795),i=n.n(o),A=n(569),a=n.n(A),s=n(565),l=n.n(s),c=n(216),d=n.n(c),m=n(589),p=n.n(m),g=n(291),B={};B.styleTagTransform=p(),B.setAttributes=l(),B.insert=a().bind(null,"head"),B.domAPI=i(),B.insertStyleElement=d(),t()(g.Z,B),g.Z&&g.Z.locals&&g.Z.locals;var C=n(707),f={};f.styleTagTransform=p(),f.setAttributes=l(),f.insert=a().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=d(),t()(C.Z,f),C.Z&&C.Z.locals&&C.Z.locals;let I=0,u=document.querySelectorAll(".slider-slide"),b=document.querySelectorAll(".dot"),h=u.length,v={es:{"nav.home":"Inicio","nav.services":"Servicios","nav.gallery":"Galer\xeda","nav.video":"Video","nav.contact":"Contacto","header.title":"Innovaci\xf3n Tecnol\xf3gica","header.subtitle":"Transformando ideas en soluciones digitales","header.cta":"Descubre M\xe1s","slider.slide1.title":"Desarrollo Web","slider.slide1.description":"Creamos sitios web modernos y responsives","slider.slide2.title":"Aplicaciones M\xf3viles","slider.slide2.description":"Soluciones nativas para iOS y Android","slider.slide3.title":"Inteligencia Artificial","slider.slide3.description":"Automatizaci\xf3n y machine learning","slider.slide4.title":"Consultor\xeda IT","slider.slide4.description":"Asesoramiento experto en tecnolog\xeda","services.title":"Nuestros Servicios","services.web.title":"Desarrollo Web","services.web.description":"Sitios web modernos, responsives y optimizados para SEO","services.mobile.title":"Apps M\xf3viles","services.mobile.description":"Aplicaciones nativas para iOS y Android con UX excepcional","services.ai.title":"Inteligencia Artificial","services.ai.description":"Soluciones de IA y machine learning para tu negocio","services.cloud.title":"Cloud Computing","services.cloud.description":"Infraestructura en la nube escalable y segura","gallery.title":"Galer\xeda de Proyectos","gallery.project1.title":"E-commerce Platform","gallery.project1.description":"Plataforma de comercio electr\xf3nico","gallery.project2.title":"App de Delivery","gallery.project2.description":"Aplicaci\xf3n m\xf3vil de entrega","gallery.project3.title":"Dashboard Analytics","gallery.project3.description":"Panel de an\xe1lisis de datos","gallery.project4.title":"CRM System","gallery.project4.description":"Sistema de gesti\xf3n de clientes","gallery.project5.title":"AI Chatbot","gallery.project5.description":"Chatbot inteligente","gallery.project6.title":"Mobile Banking","gallery.project6.description":"Aplicaci\xf3n bancaria m\xf3vil","video.title":"Video de Presentaci\xf3n","contact.title":"Cont\xe1ctanos","contact.info.title":"Informaci\xf3n de Contacto","contact.info.address":"Direcci\xf3n","contact.info.address.value":"Cq. 1 #70-01, Medell\xedn, Colombia","contact.info.phone":"Tel\xe9fono","contact.info.phone.value":"+57 316 0571065","contact.info.email":"Email","contact.info.email.value":"info@techvision.com","contact.form.name":"Tu nombre","contact.form.email":"Tu email","contact.form.subject":"Asunto","contact.form.message":"Tu mensaje","contact.form.submit":"Enviar Mensaje","footer.description":"Transformando el futuro con tecnolog\xeda innovadora","footer.services":"Servicios","footer.services.web":"Desarrollo Web","footer.services.mobile":"Apps M\xf3viles","footer.services.ai":"Inteligencia Artificial","footer.services.consulting":"Consultor\xeda IT","footer.company":"Empresa","footer.company.about":"Sobre Nosotros","footer.company.team":"Equipo","footer.company.careers":"Carreras","footer.company.blog":"Blog","footer.contact":"Contacto","footer.contact.address":"Cq. 1 #70-01, Medell\xedn, Colombia","footer.contact.phone":"+57 316 0571065","footer.contact.email":"info@techvision.com","footer.rights":"Todos los derechos reservados."},en:{"nav.home":"Home","nav.services":"Services","nav.gallery":"Gallery","nav.video":"Video","nav.contact":"Contact","header.title":"Technological Innovation","header.subtitle":"Transforming ideas into digital solutions","header.cta":"Discover More","slider.slide1.title":"Web Development","slider.slide1.description":"We create modern and responsive websites","slider.slide2.title":"Mobile Applications","slider.slide2.description":"Native solutions for iOS and Android","slider.slide3.title":"Artificial Intelligence","slider.slide3.description":"Automation and machine learning","slider.slide4.title":"IT Consulting","slider.slide4.description":"Expert technology consulting","services.title":"Our Services","services.web.title":"Web Development","services.web.description":"Modern, responsive websites optimized for SEO","services.mobile.title":"Mobile Apps","services.mobile.description":"Native applications for iOS and Android with exceptional UX","services.ai.title":"Artificial Intelligence","services.ai.description":"AI and machine learning solutions for your business","services.cloud.title":"Cloud Computing","services.cloud.description":"Scalable and secure cloud infrastructure","gallery.title":"Project Gallery","gallery.project1.title":"E-commerce Platform","gallery.project1.description":"E-commerce platform","gallery.project2.title":"Delivery App","gallery.project2.description":"Mobile delivery application","gallery.project3.title":"Analytics Dashboard","gallery.project3.description":"Data analysis panel","gallery.project4.title":"CRM System","gallery.project4.description":"Customer management system","gallery.project5.title":"AI Chatbot","gallery.project5.description":"Intelligent chatbot","gallery.project6.title":"Mobile Banking","gallery.project6.description":"Mobile banking application","video.title":"Presentation Video","contact.title":"Contact Us","contact.info.title":"Contact Information","contact.info.address":"Address","contact.info.address.value":"Cq. 1 #70-01, Medell\xedn, Colombia","contact.info.phone":"Phone","contact.info.phone.value":"+57 316 0571065","contact.info.email":"Email","contact.info.email.value":"info@techvision.com","contact.form.name":"Your name","contact.form.email":"Your email","contact.form.subject":"Subject","contact.form.message":"Your message","contact.form.submit":"Send Message","footer.description":"Transforming the future with innovative technology","footer.services":"Services","footer.services.web":"Web Development","footer.services.mobile":"Mobile Apps","footer.services.ai":"Artificial Intelligence","footer.services.consulting":"IT Consulting","footer.company":"Company","footer.company.about":"About Us","footer.company.team":"Team","footer.company.careers":"Careers","footer.company.blog":"Blog","footer.contact":"Contact","footer.contact.address":"Cq. 1 #70-01, Medell\xedn, Colombia","footer.contact.phone":"+57 316 0571065","footer.contact.email":"info@techvision.com","footer.rights":"All rights reserved."},fr:{"nav.home":"Accueil","nav.services":"Services","nav.gallery":"Galerie","nav.video":"Vid\xe9o","nav.contact":"Contact","header.title":"Innovation Technologique","header.subtitle":"Transformer les id\xe9es en solutions num\xe9riques","header.cta":"D\xe9couvrir Plus","slider.slide1.title":"D\xe9veloppement Web","slider.slide1.description":"Nous cr\xe9ons des sites web modernes et responsives","slider.slide2.title":"Applications Mobiles","slider.slide2.description":"Solutions natives pour iOS et Android","slider.slide3.title":"Intelligence Artificielle","slider.slide3.description":"Automatisation et apprentissage automatique","slider.slide4.title":"Conseil IT","slider.slide4.description":"Conseil expert en technologie","services.title":"Nos Services","services.web.title":"D\xe9veloppement Web","services.web.description":"Sites web modernes et responsifs optimis\xe9s pour le SEO","services.mobile.title":"Applications Mobiles","services.mobile.description":"Applications natives pour iOS et Android avec UX exceptionnelle","services.ai.title":"Intelligence Artificielle","services.ai.description":"Solutions d'IA et d'apprentissage automatique pour votre entreprise","services.cloud.title":"Cloud Computing","services.cloud.description":"Infrastructure cloud \xe9volutive et s\xe9curis\xe9e","gallery.title":"Galerie de Projets","gallery.project1.title":"Plateforme E-commerce","gallery.project1.description":"Plateforme de commerce \xe9lectronique","gallery.project2.title":"Application de Livraison","gallery.project2.description":"Application mobile de livraison","gallery.project3.title":"Tableau de Bord Analytics","gallery.project3.description":"Panneau d'analyse de donn\xe9es","gallery.project4.title":"Syst\xe8me CRM","gallery.project4.description":"Syst\xe8me de gestion des clients","gallery.project5.title":"Chatbot IA","gallery.project5.description":"Chatbot intelligent","gallery.project6.title":"Banque Mobile","gallery.project6.description":"Application bancaire mobile","video.title":"Vid\xe9o de Pr\xe9sentation","contact.title":"Contactez-nous","contact.info.title":"Informations de Contact","contact.info.address":"Adresse","contact.info.address.value":"Cq. 1 #70-01, Medell\xedn, Colombia","contact.info.phone":"T\xe9l\xe9phone","contact.info.phone.value":"+57 316 0571065","contact.info.email":"Email","contact.info.email.value":"info@techvision.com","contact.form.name":"Votre nom","contact.form.email":"Votre email","contact.form.subject":"Sujet","contact.form.message":"Votre message","contact.form.submit":"Envoyer le Message","footer.description":"Transformer l'avenir avec une technologie innovante","footer.services":"Services","footer.services.web":"D\xe9veloppement Web","footer.services.mobile":"Applications Mobiles","footer.services.ai":"Intelligence Artificielle","footer.services.consulting":"Conseil IT","footer.company":"Entreprise","footer.company.about":"\xc0 Propos","footer.company.team":"\xc9quipe","footer.company.careers":"Carri\xe8res","footer.company.blog":"Blog","footer.contact":"Contact","footer.contact.address":"Cq. 1 #70-01, Medell\xedn, Colombia","footer.contact.phone":"+57 316 0571065","footer.contact.email":"info@techvision.com","footer.rights":"Tous droits r\xe9serv\xe9s."}};function x(e){u[I].classList.remove("active"),b[I].classList.remove("active"),u[I=e<0?h-1:e>=h?0:e].classList.add("active"),b[I].classList.add("active")}function y(){e=setInterval(()=>{x(I+1)},4e3)}function w(){clearInterval(e),y()}function k(e){document.querySelectorAll("[data-translate]").forEach(r=>{let n=r.getAttribute("data-translate"),t=v[e][n];t&&("INPUT"===r.tagName||"TEXTAREA"===r.tagName?r.placeholder=t:r.textContent=t)}),document.documentElement.lang=e,localStorage.setItem("preferred-language",e)}function E(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}function z(e,r){j(e),e.style.borderColor="#ef4444";let n=document.createElement("div");n.className="field-error",n.style.color="#ef4444",n.style.fontSize="0.875rem",n.style.marginTop="0.25rem",n.textContent=r,e.parentNode.appendChild(n)}function j(e){e.style.borderColor="#e5e7eb";let r=e.parentNode.querySelector(".field-error");r&&r.remove()}document.addEventListener("DOMContentLoaded",function(){(function(){let e=document.getElementById("navbar"),r=document.getElementById("hamburger"),n=document.getElementById("nav-menu"),t=document.querySelectorAll(".nav-link");window.addEventListener("scroll",()=>{window.scrollY>100?(e.style.background="rgba(255, 255, 255, 0.98)",e.style.boxShadow="0 2px 20px rgba(0, 0, 0, 0.15)"):(e.style.background="rgba(255, 255, 255, 0.95)",e.style.boxShadow="0 2px 20px rgba(0, 0, 0, 0.1)")}),r.addEventListener("click",()=>{r.classList.toggle("active"),n.classList.toggle("active")}),t.forEach(e=>{e.addEventListener("click",()=>{r.classList.remove("active"),n.classList.remove("active")})}),document.addEventListener("click",e=>{r.contains(e.target)||n.contains(e.target)||(r.classList.remove("active"),n.classList.remove("active"))})})(),function(){let e=document.getElementById("prevBtn"),r=document.getElementById("nextBtn");y(),e.addEventListener("click",()=>{x(I-1),w()}),r.addEventListener("click",()=>{x(I+1),w()}),b.forEach((e,r)=>{e.addEventListener("click",()=>{x(r),w()})}),document.addEventListener("keydown",e=>{"ArrowLeft"===e.key?(x(I-1),w()):"ArrowRight"===e.key&&(x(I+1),w())});let n=0,t=0,o=document.querySelector(".slider-container");o.addEventListener("touchstart",e=>{n=e.changedTouches[0].screenX}),o.addEventListener("touchend",e=>{t=e.changedTouches[0].screenX,function(){let e=n-t;Math.abs(e)>50&&(e>0?x(I+1):x(I-1),w())}()})}(),function(){let e=document.getElementById("langBtn"),r=document.getElementById("langDropdown"),n=document.querySelectorAll(".lang-option"),t=document.getElementById("currentLang");e.addEventListener("click",e=>{e.stopPropagation(),r.classList.toggle("show")}),document.addEventListener("click",()=>{r.classList.remove("show")}),n.forEach(e=>{e.addEventListener("click",o=>{o.preventDefault();let i=e.getAttribute("data-lang");n.forEach(e=>e.classList.remove("active")),e.classList.add("active"),t.textContent=i.toUpperCase(),k(i),r.classList.remove("show")})})}(),function(){let e=document.getElementById("contactForm");e.addEventListener("submit",function(r){var n;let t;r.preventDefault(),n=Object.fromEntries(new FormData(e)),t=!0,Object.keys(n).forEach(e=>{let r=document.getElementById(e);n[e].trim()?"email"!==e||E(n[e])||(z(r,"Por favor ingresa un email v\xe1lido"),t=!1):(z(r,"Este campo es requerido"),t=!1)}),t&&(function(){let e=document.createElement("div");e.className="form-success",e.style.cssText=`
        background: #10b981;
        color: white;
        padding: 1rem;
        border-radius: 10px;
        margin-top: 1rem;
        text-align: center;
        font-weight: 600;
    `,e.textContent="\xa1Mensaje enviado exitosamente! Te contactaremos pronto.",document.getElementById("contactForm").appendChild(e),setTimeout(()=>{e.remove()},5e3)}(),e.reset())}),e.querySelectorAll("input, textarea").forEach(e=>{e.addEventListener("blur",()=>{var r=e;let n=r.value.trim();n?"email"!==r.type||E(n)?j(r):z(r,"Por favor ingresa un email v\xe1lido"):z(r,"Este campo es requerido")}),e.addEventListener("input",()=>{j(e)})})}(),function(){let e=document.getElementById("floatingBtn");window.addEventListener("scroll",()=>{window.scrollY>300?e.classList.add("show"):e.classList.remove("show")}),e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})}(),document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",r=>{let n=e.getAttribute("href");if(!n||"#"===n)return;r.preventDefault();let t=document.querySelector(n);if(t){let e=t.offsetTop-70;window.scrollTo({top:e,behavior:"smooth"})}})}),function(){let e=document.querySelectorAll(".gallery-item"),r=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.style.opacity="1",e.target.style.transform="translateY(0)")})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});e.forEach((e,n)=>{e.style.opacity="0",e.style.transform="translateY(30px)",e.style.transition="opacity 0.6s ease, transform 0.6s ease",e.style.transitionDelay=`${.1*n}s`,r.observe(e)})}()}),document.addEventListener("DOMContentLoaded",()=>{!function(){let e=document.querySelectorAll(".service-card, .contact-item"),r=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.style.opacity="1",e.target.style.transform="translateY(0)")})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});e.forEach((e,n)=>{e.style.opacity="0",e.style.transform="translateY(30px)",e.style.transition="opacity 0.6s ease, transform 0.6s ease",e.style.transitionDelay=`${.1*n}s`,r.observe(e)})}(),function(){let e=document.querySelectorAll("img[data-src]"),r=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){let n=e.target;n.src=n.dataset.src,n.classList.remove("lazy"),r.unobserve(n)}})});e.forEach(e=>r.observe(e))}(),function(){let e;window.addEventListener("scroll",()=>{e&&clearTimeout(e),e=setTimeout(()=>{},16)}),["https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop","https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop"].forEach(e=>{let r=document.createElement("link");r.rel="preload",r.as="image",r.href=e,document.head.appendChild(r)})}();let e=localStorage.getItem("preferred-language");e&&v[e]&&(k(e),document.getElementById("currentLang").textContent=e.toUpperCase(),document.querySelectorAll(".lang-option").forEach(r=>{r.classList.remove("active"),r.getAttribute("data-lang")===e&&r.classList.add("active")}))}),window.addEventListener("error",e=>{console.error("Error de JavaScript:",e.error)})})()})();
//# sourceMappingURL=main.5271d3e41f65918b.js.map