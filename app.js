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

function atualizarLista() {

    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = amigos.map(item => `<li>${item}</li>`).join('');
}

function validarEntrada() {
    let entrada = document.querySelector('input').value;

    if (entrada.trim() === "") {
        return false;
    } else {
        return true;
    }
}