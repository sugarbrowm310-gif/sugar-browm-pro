// ====================== 
// Modal para Cartas
// ====================== 
const cartaItems = document.querySelectorAll('.carta-item');
const modalCarta = document.getElementById('modal-carta');
const modalImgCarta = document.getElementById('modal-img-carta');
const cerrarModalBtn = document.getElementById('cerrar-modal-carta');

if (cartaItems && modalCarta) {
    // Abrir modal al hacer clic en una carta
    const cartaImages = {
        'tortas': 'images/tortas.jpeg',
        'cocteles': 'images/carta.jpeg'
    };

    cartaItems.forEach(item => {
        item.addEventListener('click', function() {
            const tipoCarta = this.getAttribute('data-carta');
            const img = this.querySelector('.carta-img');
            let src = img ? img.src : '';

            if (!src && tipoCarta && cartaImages[tipoCarta]) {
                src = cartaImages[tipoCarta];
            }

            if (src) {
                modalImgCarta.src = src;
                modalCarta.classList.add('activo');
                document.body.style.overflow = 'hidden'; // Prevenir scroll
            }
        });
    });

    // Cerrar modal al hacer clic en el botón X
    if (cerrarModalBtn) {
        cerrarModalBtn.addEventListener('click', function() {
            modalCarta.classList.remove('activo');
            document.body.style.overflow = 'auto'; // Restaurar scroll
        });
    }

    // Cerrar modal al hacer clic fuera de la imagen
    modalCarta.addEventListener('click', function(e) {
        if (e.target === modalCarta) {
            modalCarta.classList.remove('activo');
            document.body.style.overflow = 'auto';
        }
    });

    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalCarta.classList.contains('activo')) {
            modalCarta.classList.remove('activo');
            document.body.style.overflow = 'auto';
        }
    });
}

// ====================== 
// Control del Menú Móvil
// ====================== 
const menuToggle = document.getElementById('menuToggle');
const navbarMenu = document.querySelector('.navbar-menu');

if (menuToggle) {
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

// ====================== 
// Filtrado de Productos
// ====================== 
const filtroBtns = document.querySelectorAll('.filtro-btn');
const productos = document.querySelectorAll('.producto');

filtroBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const filtroSeleccionado = this.getAttribute('data-filtro');
        
        // Actualizar botón activo
        filtroBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // Filtrar productos
        productos.forEach(producto => {
            const dataFiltro = producto.getAttribute('data-filtro');
            
            if (filtroSeleccionado === 'todos' || dataFiltro === filtroSeleccionado) {
                producto.style.display = 'block';
                setTimeout(() => {
                    producto.style.opacity = '1';
                }, 10);
            } else {
                producto.style.display = 'none';
                producto.style.opacity = '0';
            }
        });
    });
});

// ====================== 
// Scroll Suave para Enlaces de Navegación
// ====================== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ====================== 
// Manejo del Formulario de Contacto
// ====================== 
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores del formulario
        const nombre = document.getElementById('nombre');
        const email = document.getElementById('email');
        const mensaje = document.getElementById('mensaje');
        
        // Validar si los campos no están vacíos
        if (!nombre.value.trim() || !email.value.trim() || !mensaje.value.trim()) {
            mostrarNotificacion('Por favor completa todos los campos', 'error');
            return;
        }
        
        // Validar formato del email
        if (!validarEmail(email.value)) {
            mostrarNotificacion('Por favor ingresa un email válido', 'error');
            return;
        }
        
        // Simular envío del formulario
        const btnSubmit = contactForm.querySelector('button[type="submit"]');
        const textOriginal = btnSubmit.textContent;
        btnSubmit.textContent = 'Enviando...';
        btnSubmit.disabled = true;
        
        setTimeout(function() {
            mostrarNotificacion('¡Mensaje enviado con éxito! Nos contactaremos pronto.', 'success');
            contactForm.reset();
            btnSubmit.textContent = textOriginal;
            btnSubmit.disabled = false;
        }, 1500);
    });
}

// Función para validar email
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// ====================== 
// Sistema de Notificaciones (Toast)
// ====================== 
function mostrarNotificacion(mensaje, tipo = 'info') {
    // Crear contenedor de notificación si no existe
    let contenedor = document.getElementById('notificaciones-container');
    if (!contenedor) {
        contenedor = document.createElement('div');
        contenedor.id = 'notificaciones-container';
        contenedor.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            max-width: 400px;
        `;
        document.body.appendChild(contenedor);
    }
    
    // Crear elemento de notificación
    const notificacion = document.createElement('div');
    notificacion.className = `notificacion notificacion-${tipo}`;
    notificacion.textContent = mensaje;
    notificacion.style.cssText = `
        background-color: ${tipo === 'success' ? '#25D366' : tipo === 'error' ? '#E74C3C' : '#3498DB'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        margin-bottom: 10px;
        animation: slideIn 0.3s ease-out;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        font-weight: 500;
    `;
    
    contenedor.appendChild(notificacion);
    
    // Eliminar notificación después de 4 segundos
    setTimeout(() => {
        notificacion.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            notificacion.remove();
        }, 300);
    }, 4000);
}

// ====================== 
// Galería en cada producto (miniaturas desde carpeta 'images')
// ====================== 
(function() {
    const galleryImages = [
        'images/tortas.jpeg',
        'images/tortas (2).jpeg',
        'images/carta.jpeg'
    ];

    const productosCards = document.querySelectorAll('.producto');

    productosCards.forEach(producto => {
        const productoInfo = producto.querySelector('.producto-info');
        if (!productoInfo) return;

        const galleryContainer = document.createElement('div');
        galleryContainer.className = 'producto-gallery';

        galleryImages.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = 'Galería Sugar Browm';
            img.title = 'Ver imagen en grande';
            img.addEventListener('click', function() {
                if (modalImgCarta) {
                    modalImgCarta.src = src;
                    modalCarta.classList.add('activo');
                    document.body.style.overflow = 'hidden';
                }
            });
            galleryContainer.appendChild(img);
        });

        const precio = productoInfo.querySelector('.precio');
        if (precio) {
            productoInfo.insertBefore(galleryContainer, precio);
        } else {
            productoInfo.appendChild(galleryContainer);
        }
    });
})();

// ====================== 
// Log de Carga
// ====================== 
console.log('✓ Sugar Browm - Script cargado correctamente');
console.log('✓ Funcionalidades: Menú móvil, filtros de productos, formulario, notificaciones');
