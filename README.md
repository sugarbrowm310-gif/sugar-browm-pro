# Sugar Brown Pro - Estructura de Proyecto

## 📁 Estructura del Proyecto

```
sugar-browm-pro/
├── index.html                 # Página principal
├── style.css                  # Estilos globales (raíz)
├── script.js                  # JavaScript principal (raíz)
├── README.md                  # Documentación del proyecto
├── .gitignore                 # Configuración de Git
│
├── /css/                      # Estilos adicionales
│   ├── variables.css          # Variables CSS
│   ├── responsive.css         # Estilos responsivos
│   └── utilities.css          # Clases utilitarias
│
├── /js/                       # Archivos JavaScript modular
│   ├── main.js                # Script principal
│   ├── utils.js               # Funciones utilitarias
│   ├── menu.js                # Control del menú
│   └── form.js                # Manejo de formularios
│
├── /pages/                    # Páginas adicionales
│   ├── servicios.html         # Página de servicios
│   ├── galeria.html           # Página de galería
│   └── about.html             # Página de nosotros
│
├── /images/                   # Imágenes del proyecto
│   ├── placeholder-1.jpg      # Imágenes placeholder
│   ├── placeholder-2.jpg
│   ├── placeholder-3.jpg
│   └── placeholder-4.jpg
│
└── /Assets/                   # Recursos adicionales
    ├── /fonts/                # Fuentes personalizadas
    └── /icons/                # Iconos SVG
```

## 🎨 Características del Proyecto

### HTML (index.html)
- Estructura semántica y accesible
- Meta etiquetas para SEO
- Navegación responsiva
- Secciones claramente organizadas
- Formulario de contacto funcional

### CSS (style.css)
- Variables CSS para mantenimiento fácil
- Sistema de colores consistente
- Diseño responsive (mobile-first)
- Animaciones suaves
- Grid y Flexbox layout
- Media queries para todos los tamaños

### JavaScript (script.js)
- Menú móvil interactivo
- Navegación suave (smooth scroll)
- Validación de formulario
- Sistema de notificaciones
- Animaciones al scroll
- Código modular y comentado

## ⚙️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos, animaciones y diseño responsivo
- **JavaScript Vanilla** - Funcionalidad interactiva
- **CSS Grid & Flexbox** - Layouts modernos

## 📱 Responsive Design

- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (480px - 767px)
- ✅ Small Mobile (-480px)

## 🚀 Cómo Comenzar

1. Abre `index.html` en tu navegador
2. Todos los estilos y scripts se cargan automáticamente
3. Personaliza los colores en las variables CSS
4. Reemplaza las imágenes placeholder con tus propias imágenes

## 🎯 Secciones Principales

### Navbar
- Logo de marca
- Menú de navegación sticky
- Menú hamburguesa para móvil

### Hero Section
- Título y subtítulo
- Botón de llamada a la acción
- Degradado visual atractivo

### Servicios
- 3 tarjetas de servicios
- Iconos emoji
- Hover effects

### Galería
- Grid responsive
- Efecto de zoom en hover
- Captions con overlay

### Contacto
- Formulario funcional
- Validación de datos
- Notificaciones de envío

### Footer
- Información de copyright
- Mensajes personalizados

## 📝 Personalización

### Cambiar Colores
Edita las variables en `:root` en `style.css`:
```css
:root {
    --color-primary: #8B4513;
    --color-secondary: #D2691E;
    --color-accent: #F4A460;
    /* ... más variables */
}
```

### Agregar Nuevas Páginas
1. Crea archivo HTML en `/pages/`
2. Copia la estructura de navegación
3. Importa el CSS y JavaScript

### Optimizar para Producción
1. Minifica CSS y JavaScript
2. Optimiza imágenes
3. Implementa lazy loading
4. Agrega caché del navegador

## 🔗 Enlaces Útiles

- [MDN - CSS Grid](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid)
- [MDN - Flexbox](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [Web.dev - Responsive Design](https://web.dev/responsive-web-design-basics/)

## 📄 Licencia

Este proyecto es de código abierto y disponible bajo la licencia MIT.

## ✉️ Contacto

Para preguntas o sugerencias sobre el proyecto, contacta a Sugar Brown Pro.

---

**Última actualización:** 26 de marzo de 2026
