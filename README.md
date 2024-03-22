# ESTUARY Personalizacion


Estilo visual y funcionalidades para personalizar [Estuary](https://estuary.mcmaster.ca/).

## Modo de uso

1 - Acceder al sitio de Estuary.
2 - Seleccionar "Modo Colaborativo" o "Modo Solo"
3 - Abrir el panel de Herramientas de Desarrollador.
4 - En la pestaña "Consola" ejecutar el siguiente código:

    let s = document.createElement('script');
    s.src = 'https://caalma.github.io//estuary-personalizacion/personalizacion.js';
    document.head.appendChild(s);
