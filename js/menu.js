// Control del Menú Móvil
// =====================

const menuToggle = document.getElementById('menuToggle');
const navbarMenu = document.querySelector('.navbar-menu');

if (menuToggle && navbarMenu) {
    menuToggle.addEventListener('click', function() {
        navbarMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navbarMenu.classList.remove('active');
        });
    });
}

// Cerrar menú al dar clic fuera
document.addEventListener('click', function(event) {
    if (!event.target.closest('.navbar')) {
        navbarMenu?.classList.remove('active');
    }
});

// Cambiar estilo del navbar al hacer scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

console.log('✓ Menu.js cargado');
