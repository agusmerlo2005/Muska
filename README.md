# Muska
¡Excelente! Un archivo README.md es fundamental para cualquier proyecto. Sirve como la carta de presentación de tu repositorio, explicando de qué se trata el proyecto, cómo configurarlo, y cualquier otra información relevante.

Aquí tienes un README.md completo y estructurado para tu proyecto MUSKA | Home & Deco, listo para que lo copies y pegues en un nuevo archivo llamado README.md en la raíz de tu repositorio.

MUSKA | Home & Deco
Descripción del Proyecto
MUSKA | Home & Deco es un proyecto de sitio web de e-commerce simulado, diseñado para una tienda de decoración y artículos para el hogar. El objetivo principal de este proyecto es mostrar una interfaz de usuario atractiva y funcional, con un enfoque en la coherencia de diseño, la usabilidad y la responsividad. La estética predominante se basa en una paleta de colores beige claro, beige oscuro, blanco y un toque de anaranjado cálido, creando un ambiente acogedor y moderno.

El sitio incluye páginas clave como Inicio, Productos, Nosotros, Ayuda y Contacto, todas diseñadas para ofrecer una experiencia de navegación intuitiva.

Características Principales
Diseño Estético y Coherente: Paleta de colores cálidos (beige, blanco, anaranjado) que reflejan la marca "Home & Deco".

Interfaz de Usuario Intuitiva: Navegación clara y estructura de contenido lógica.

Diseño Responsive: Adaptable a diferentes tamaños de pantalla (escritorio, tabletas, móviles) gracias a Bootstrap 5 y Media Queries con SASS.

Efectos Visuales Interactivos: Imágenes de productos que se agrandan ligeramente al pasar el cursor (efecto hover) para una experiencia de usuario más dinámica.

Organización CSS con SASS (SCSS): Código CSS modular y fácil de mantener, estructurado en parciales (_variables, _mixins, _base, _layout, _components).

Funcionalidad Básica de JavaScript: Pequeñas interacciones para mejorar la experiencia del usuario (ej. alerta al añadir producto al carrito).

Tecnologías Utilizadas
HTML5: Estructura semántica del contenido.

SASS (SCSS): Preprocesador CSS para estilos modulares, variables y mixins.

CSS3: Estilos de presentación.

JavaScript (ES6+): Interactividad del lado del cliente.

Bootstrap 5: Framework CSS para componentes y sistema de cuadrícula responsive.

Git & GitHub: Control de versiones y alojamiento del repositorio.

Estructura del Proyecto
muska-home-deco/
├── css/                  # Archivos CSS compilados (generados por SASS)
│   └── main.css
├── scss/                 # Archivos fuente SASS (SCSS)
│   ├── _base.scss        # Estilos base (body, tipografía, reset)
│   ├── _components.scss  # Estilos para elementos reutilizables (botones, tarjetas)
│   ├── _layout.scss      # Estilos para la estructura principal (header, footer, main)
│   ├── _mixins.scss      # Mixins SASS reutilizables (ej. efecto hover)
│   ├── _variables.scss   # Variables de color, fuentes, espaciado
│   └── main.scss         # Archivo principal que importa todos los parciales
├── js/                   # Archivos JavaScript
│   └── main.js           # Scripts personalizados
├── img/                  # Imágenes del proyecto
│   ├── iconos/           # Favicon e íconos de redes sociales
│   ├── otros/            # Imágenes para secciones generales (hero, nosotros)
│   ├── productos/        # Imágenes de los productos
│   └── logo.png          # Logo de MUSKA
├── index.html            # Página de Inicio
├── productos.html        # Catálogo de Productos
├── contacto.html         # Formulario de Contacto
├── ayuda.html            # Preguntas Frecuentes (FAQ)
├── nosotros.html         # Información sobre la marca
└── README.md             # Este archivo