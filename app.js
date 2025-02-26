let amigos = [];

function adicionarAmigo() {

    if (validarEntrada()) {

        let entrada = document.querySelector('input').value;
        amigos.push(entrada);
        console.log(amigos);
        document.querySelector('input').value = "";
        atualizarLista();

    } else {
        alert("Por favor insira um nome válido");
    }
        
}

function validarEntrada() {
    let entrada = document.querySelector('input').value;

    if (entrada.trim() === "") {
        return false;
    } else {
        return true;
    }
}