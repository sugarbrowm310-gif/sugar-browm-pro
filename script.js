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
// Cargar imágenes de la carpeta Sugar en cada producto
// ======================
(function() {
    const imageMap = {
        'Malteada de Cerveza': 'images/Sugar/IMG-20260328-WA0025.jpg',
        'Malteada': 'images/Sugar/IMG-20260328-WA0026.jpg',
        'Milo Frappe': 'images/Sugar/IMG-20260328-WA0027.jpg',
        'Frappuccino': 'images/Sugar/IMG-20260328-WA0028.jpg',
        'Jugos Naturales': 'images/Sugar/IMG-20260328-WA0029.jpg',
        'Limonada Tropical': 'images/Sugar/IMG-20260328-WA0030.jpg',
        'Sodas Italianas': 'images/Sugar/IMG-20260328-WA0031.jpg',
        'Batidos': 'images/Sugar/IMG-20260328-WA0032.jpg',
        'Batidos Saludables': 'images/Sugar/IMG-20260328-WA0033.jpg',
        'Affogato Sugar': 'images/Sugar/IMG-20260328-WA0034.jpg',
        'Affogato': 'images/Sugar/IMG-20260328-WA0035.jpg',
        'Cappuccino': 'images/Sugar/IMG-20260328-WA0036.jpg',
        'Café Espresso': 'images/Sugar/IMG-20260328-WA0037.jpg',
        'Aromática': 'images/Sugar/IMG-20260328-WA0038.jpg',
        'Té': 'images/Sugar/IMG-20260328-WA0039.jpg',
        'Té Chai': 'images/Sugar/IMG-20260328-WA0040.jpg',
        'Arcoíris': 'images/Sugar/IMG-20260328-WA0041.jpg',
        'Atardecer': 'images/Sugar/IMG-20260328-WA0042.jpg',
        'Servicio de Michelada': 'images/Sugar/IMG-20260328-WA0043.jpg',
        'Piña Colada': 'images/Sugar/IMG-20260328-WA0044.jpg',
        'Margarita Tradicional': 'images/Sugar/IMG-20260328-WA0045.jpg',
        'Margarita Cerezada o Mango': 'images/Sugar/IMG-20260328-WA0046.jpg',
        'Mojito': 'images/Sugar/IMG-20260328-WA0047.jpg',
        'Mojito de Fresa': 'images/Sugar/IMG-20260328-WA0048.jpg',
        'Hechizo Sugar': 'images/Sugar/IMG-20260328-WA0049.jpg',
        'Órgasmo': 'images/Sugar/IMG-20260328-WA0050.jpg',
        'Cerveza de Colores': 'images/Sugar/IMG-20260328-WA0051.jpg',
        'Torta Chocolate Premium': 'images/Sugar/IMG-20260328-WA0052.jpg',
        'Torta Fresas Encantada': 'images/Sugar/IMG-20260328-WA0053.jpg',
        'Torta Tres Leches Sugar': 'images/Sugar/IMG-20260328-WA0054.jpg',
        'Torta Zanahoria Gourmet': 'images/Sugar/IMG-20260328-WA0055.jpg',
        'Cheesecake New York': 'images/Sugar/IMG-20260328-WA0056.jpg',
        'Torta Red Velvet': 'images/Sugar/IMG-20260328-WA0057.jpg',
        'Torta Piña Colada': 'images/Sugar/IMG-20260328-WA0058.jpg',
        'Torta Oreo Deluxe': 'images/Sugar/IMG-20260328-WA0059.jpg',
        'Torta Lúcuma Premium': 'images/Sugar/IMG-20260328-WA0060.jpg',
        'Torta Frutos Rojos': 'images/Sugar/IMG-20260328-WA0061.jpg',
        'Lasaña Clásica': 'images/Sugar/IMG-20260328-WA0062.jpg',
        'Sanduche Italiano': 'images/Sugar/IMG-20260328-WA0063.jpg',
        'Cupcake Vainilla': 'images/Sugar/cupcakes/IMG-20260328-WA0064.jpg',
        'Brownie con Helado': 'images/Sugar/IMG-20260328-WA0065.jpg',
        'Magdalena': 'images/Sugar/cupcakes/IMG-20260328-WA0064.jpg'
    };

    const sugarImagePaths = [];
    for (let n = 25; n <= 90; n++) {
        const num = n.toString().padStart(4, '0');
        sugarImagePaths.push(`images/Sugar/IMG-20260328-WA${num}.jpg`);
    }

    const productosCards = document.querySelectorAll('.producto');

    productosCards.forEach((producto, index) => {
        const titulo = producto.querySelector('.producto-info h3')?.textContent.trim() || 'Producto Sugar';
        const imgSrc = producto.dataset.img || imageMap[titulo] || sugarImagePaths[index % sugarImagePaths.length];

        const productoImg = producto.querySelector('.producto-img');
        if (!productoImg) return;

        const badge = productoImg.querySelector('.categoria-badge');
        productoImg.innerHTML = '';

        const imgElement = document.createElement('img');
        imgElement.src = imgSrc;
        imgElement.alt = titulo;
        imgElement.title = titulo;

        productoImg.appendChild(imgElement);
        if (badge) productoImg.appendChild(badge);
    });
})();

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
