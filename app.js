let amigos = [];

function validarEntrada() {
    let entrada = document.querySelector('input').value;

    if (entrada.trim() === "") {
        return false;
    } else {
        return true;
    }
}