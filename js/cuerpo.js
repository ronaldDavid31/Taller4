
function crearElemento(tipo, texto) {
    const elemento = document.createElement(tipo);
    elemento.textContent = texto;
    return elemento;
}

function crearElementoHTML(tipo, contenidoHTML) {
    const elemento = document.createElement(tipo);
    elemento.innerHTML = contenidoHTML;
    return elemento;
}

function agregarAlCuerpo(elemento) {
    document.body.appendChild(elemento);
}


function generarContenido() {
    agregarAlCuerpo(crearElemento("h1", "HTML: Lenguaje de Contenido"));

    agregarAlCuerpo(crearElemento(
        "p",
        "El HTML (HyperText Markup Language) es el lenguaje estándar para la creación de páginas web. Su función principal es estructurar y dar formato al contenido, permitiendo que los navegadores lo interpreten correctamente."
    ));

    agregarAlCuerpo(crearElemento("h2", "No es un lenguaje de programación"));

    agregarAlCuerpo(crearElementoHTML(
        "p",
        "A menudo, los estudiantes confunden HTML con un lenguaje de programación. " +
        "Sin embargo, <b>HTML no permite ejecutar lógica</b>, ni crear algoritmos, " +
        "ni hacer operaciones matemáticas. Su objetivo es <i>describir el contenido</i> que se desea mostrar en una web."
    ));

    agregarAlCuerpo(crearElemento("h2", "El concepto de marcado"));

    agregarAlCuerpo(crearElementoHTML(
        "p",
        "HTML funciona mediante <b>etiquetas</b> o <i>tags</i> que rodean el contenido y le otorgan significado. " +
        "Por ejemplo, la etiqueta <code>&lt;p&gt;</code> indica que el texto es un párrafo, " +
        "mientras que <code>&lt;h1&gt;</code> define un encabezado principal."
    ));

   
    agregarAlCuerpo(crearElemento("h2", "Estructura básica"));

  
    agregarAlCuerpo(crearElementoHTML(
        "p",
        "Una página HTML comienza con la declaración <code>&lt;!DOCTYPE html&gt;</code>, " +
        "seguida por las secciones <code>&lt;head&gt;</code> y <code>&lt;body&gt;</code>. " +
        "En el <i>head</i> se definen los metadatos, mientras que en el <i>body</i> se coloca el contenido visible."
    ));

    agregarAlCuerpo(crearElemento("h2", "El rol de HTML en la web"));

  
    agregarAlCuerpo(crearElementoHTML(
        "p",
        "En el ecosistema web, HTML es el esqueleto. Luego se complementan con <b>CSS</b> " +
        "para estilos y <b>JavaScript</b> para la lógica y la interactividad."
    ));

  
    agregarAlCuerpo(crearElementoHTML(
        "p",
        "Aprender HTML es fundamental para cualquier estudiante de desarrollo web. " +
        "Recordemos: <b>HTML no es programación</b>, sino un <i>lenguaje de marcado</i> que define la estructura del contenido en la web."
    ));

  
   
}


window.onload = generarContenido;
