// Script Principal
// ================

/**
 * Scroll suave para enlaces internos
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

/**
 * Botón de contacto en Hero Section
 */
const contactBtn = document.getElementById('contactBtn');
if (contactBtn) {
    contactBtn.addEventListener('click', function() {
        const contactSection = document.getElementById('contacto');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

/**
 * Observador de intersección para animaciones
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos para animación
document.querySelectorAll('.servicio-card').forEach(card => {
    observer.observe(card);
});

/**
 * Inyectar estilos de animación
 */
const styles = document.createElement('style');
styles.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
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
    
    .servicio-card {
        opacity: 0;
    }
    
    @media (max-width: 768px) {
        .notificacion {
            right: 10px !important;
            left: 10px !important;
            max-width: none !important;
        }
    }
`;

document.head.appendChild(styles);

/**
 * Log de estado
 */
console.log('✓ Sugar Brown Pro cargado');
console.log('✓ Versión: 1.0.0');
console.log('✓ Todas las funcionalidades activas');
