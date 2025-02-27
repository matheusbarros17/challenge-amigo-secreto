let amigos = [];

function adicionarAmigo() {

    if (validarEntrada()) {

        let entrada = document.querySelector('input').value;
        amigos.push(entrada);
        console.log(amigos);
        document.querySelector('input').value = "";
        atualizarLista();

    } else {
        alert("Por favor, insira um nome");
    }
        
}

function atualizarLista() {

    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = amigos.map(item => `<li>${item}</li>`).join('');
}

function sortearAmigo() {

    if (amigos.length > 0) {
        let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
        document.getElementById('resultado').innerHTML = `O amigo secreto sorteado é: ${sorteado}`;
    } else {
        alert("Adicione pelo menos um amigo para sortear");
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