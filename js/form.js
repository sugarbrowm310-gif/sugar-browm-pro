// Manejo de Formularios
// =====================

/**
 * Inicializa el formulario de contacto
 */
function inicializarFormularioContacto() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        manejarEnvioFormulario(contactForm);
    });
}

/**
 * Maneja el envío del formulario
 * @param {HTMLFormElement} form - Formulario a procesar
 */
function manejarEnvioFormulario(form) {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    
    // Validaciones
    if (!nombre.trim() || !email.trim() || !mensaje.trim()) {
        mostrarNotificacion('Por favor completa todos los campos', 'error');
        return;
    }
    
    if (!validarEmail(email)) {
        mostrarNotificacion('Por favor ingresa un email válido', 'error');
        return;
    }
    
    if (mensaje.length < 10) {
        mostrarNotificacion('El mensaje debe tener al menos 10 caracteres', 'error');
        return;
    }
    
    // Procesar envío
    procesarEnvio(form);
}

/**
 * Procesa el envío del formulario
 * @param {HTMLFormElement} form - Formulario a procesar
 */
function procesarEnvio(form) {
    const btnSubmit = form.querySelector('button[type="submit"]');
    const textOriginal = btnSubmit.textContent;
    
    btnSubmit.textContent = 'Enviando...';
    btnSubmit.disabled = true;
    
    // Simular envío (reemplaza con tu endpoint real)
    setTimeout(function() {
        mostrarNotificacion('¡Mensaje enviado con éxito!', 'success');
        form.reset();
        btnSubmit.textContent = textOriginal;
        btnSubmit.disabled = false;
    }, 1500);
}

/**
 * Muestra notificación visual
 * @param {string} mensaje - Mensaje a mostrar
 * @param {string} tipo - Tipo: 'success' o 'error'
 */
function mostrarNotificacion(mensaje, tipo = 'info') {
    const notificacion = document.createElement('div');
    const bgColor = tipo === 'success' ? '#4CAF50' : tipo === 'error' ? '#f44336' : '#2196F3';
    
    notificacion.className = `notificacion notificacion-${tipo}`;
    notificacion.textContent = mensaje;
    notificacion.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background-color: ${bgColor};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
        font-weight: 500;
        max-width: 400px;
        word-wrap: break-word;
    `;
    
    document.body.appendChild(notificacion);
    
    setTimeout(function() {
        notificacion.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notificacion.remove(), 300);
    }, 3000);
}

// Inicializar al cargar el DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarFormularioContacto);
} else {
    inicializarFormularioContacto();
}

console.log('✓ Form.js cargado');
