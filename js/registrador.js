var estudiantes = [];

function agregarEstudiante() {
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var identificacion = document.getElementById("identificacion").value;
    var resultado = document.getElementById("resultado");

    if (nombre === "" || edad === "" || identificacion === "") {
        resultado.textContent = " Por favor completa todos los campos.";
        return;
    }

    var nuevo = {
        nombre: nombre,
        edad: parseInt(edad),
        identificacion: parseInt(identificacion)
    };

    estudiantes.push(nuevo);

    resultado.textContent = " Estudiante agregado correctamente.";

    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("identificacion").value = "";
}

function buscarEstudiante() {
    var idBuscar = parseInt(document.getElementById("buscarId").value);
    var resultado = document.getElementById("resultado");

    var encontrado = null;

    for (var i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].identificacion === idBuscar) {
            encontrado = estudiantes[i];
            break;
        }
    }

    if (encontrado) {
        resultado.textContent = " Nombre: " + encontrado.nombre +
            ", Edad: " + encontrado.edad +
            ", Número de Identificación: " + encontrado.identificacion;
    } else {
        resultado.textContent = " No se encontró ningún estudiante con ese número.";
    }
}
