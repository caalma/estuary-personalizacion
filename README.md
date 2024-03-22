# ESTUARY Personalizacion


Estilo visual y funcionalidades para personalizar [Estuary](https://estuary.mcmaster.ca/).

## Modo de uso

1 - Acceder al sitio de Estuary.
2 - Seleccionar "Modo Colaborativo" o "Modo Solo"
3 - Abrir el panel de Herramientas de Desarrollador.
4 - En la pestaña "Consola" ejecutar el siguiente código:

    (function (){
        const css = [
            "@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap');",
            "* { font-family: 'Fira Code' !important; letter-spacing: -0.05em; }"
        ];
        let head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');

        head.appendChild(style);
        style.type = 'text/css';
        style.appendChild(document.createTextNode(css.join('\n')));
    })()
