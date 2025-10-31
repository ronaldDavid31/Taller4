var numeroSecreto = 0;

function iniciarJuego() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
}

function verificarNumero() {
    var entrada = document.getElementById("entrada");
    var numeroUsuario = parseInt(entrada.value);
    var resultado = document.getElementById("resultado");

    if (isNaN(numeroUsuario)) {
        resultado.textContent = "Por favor escribe un número válido.";
        return;
    }

    if (numeroUsuario === numeroSecreto) {
        resultado.textContent = "¡Felicidades! Adivinaste el número.";
    } else if (numeroUsuario < numeroSecreto) {
        resultado.textContent = " El número es más alto.";
    } else {
        resultado.textContent = " El número es más bajo.";
    }

    entrada.value = "";
    entrada.focus();
}

iniciarJuego();
