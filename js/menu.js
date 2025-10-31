function crearMenu() {
    var contenido = "";


    contenido += "<h4>Guía Definitiva: HTML</h4>";
    contenido += "<p>Seleccione un ejercicio para practicar las etiquetas solicitadas en clase.</p>";
    contenido += "<br>";
    contenido += "<h5>Ejercicios</h5>";
    contenido += "<ul>";
    contenido += "<li><a href='ejercicio1.html'>Ejercicio #1</a></li>";
    contenido += "</ul>";
    contenido += "<p>H1–H6, varios &lt;p&gt;, &lt;strong&gt;, &lt;em&gt;. Tema: HTML como lenguaje de marcado (no programación).</p>";

    document.body.innerHTML = contenido;
}

crearMenu();
