(function (){
    const css = [
        "@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap');",
        "* { font-family: 'Fira Code' !important; letter-spacing: -0.05em; font-size: 0.97em; }"
    ];
    let head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

    head.appendChild(style);
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css.join('\n')));
})()
