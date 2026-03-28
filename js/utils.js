// Funciones Utilitarias
// =====================

/**
 * Valida si un email es correcto
 * @param {string} email - Email a validar
 * @returns {boolean} - True si es válido
 */
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/**
 * Valida si un teléfono es correcto
 * @param {string} telefono - Teléfono a validar
 * @returns {boolean} - True si es válido
 */
function validarTelefono(telefono) {
    const regex = /^[0-9]{7,15}$/;
    return regex.test(telefono.replace(/[\s\-\(\)]/g, ''));
}

/**
 * Obtiene parámetros de la URL
 * @param {string} param - Nombre del parámetro
 * @returns {string|null} - Valor del parámetro
 */
function obtenerParametroURL(param) {
    const parametros = new URLSearchParams(window.location.search);
    return parametros.get(param);
}

/**
 * Copia texto al portapapeles
 * @param {string} texto - Texto a copiar
 */
function copiarAlPortapapeles(texto) {
    navigator.clipboard.writeText(texto).then(() => {
        console.log('Texto copiado al portapapeles');
    }).catch(() => {
        console.error('Error al copiar');
    });
}

/**
 * Espera un tiempo específico
 * @param {number} ms - Milisegundos a esperar
 * @returns {Promise}
 */
function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Debounce para funciones
 * @param {function} func - Función a ejecutar
 * @param {number} espera - Tiempo de espera en ms
 * @returns {function}
 */
function debounce(func, espera) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), espera);
    };
}

/**
 * Throttle para funciones
 * @param {function} func - Función a ejecutar
 * @param {number} limite - Tiempo límite en ms
 * @returns {function}
 */
function throttle(func, limite) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limite);
        }
    };
}

/**
 * Formatea una fecha
 * @param {Date} fecha - Fecha a formatear
 * @param {string} formato - Formato deseado (es: español)
 * @returns {string}
 */
function formatearFecha(fecha, formato = 'es') {
    const opciones = {
        es: { year: 'numeric', month: 'long', day: 'numeric' },
        short: { year: 'numeric', month: '2-digit', day: '2-digit' }
    };
    return new Date(fecha).toLocaleDateString(
        formato === 'es' ? 'es-ES' : 'en-US',
        opciones[formato]
    );
}

/**
 * Genera un ID único
 * @returns {string}
 */
function generarID() {
    return 'id_' + Math.random().toString(36).substr(2, 9);
}

/**
 * Verifica si el usuario usa dispositivo móvil
 * @returns {boolean}
 */
function esMobil() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    );
}

// Exportar funciones (si se usa como módulo)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validarEmail,
        validarTelefono,
        obtenerParametroURL,
        copiarAlPortapapeles,
        esperar,
        debounce,
        throttle,
        formatearFecha,
        generarID,
        esMobil
    };
}
