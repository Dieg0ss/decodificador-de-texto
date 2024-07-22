const cifraDicionario = {
    'a': 'ai', 'b': 'b', 'c': 'c', 'd': 'd', 'e': 'enter',
    'f': 'f', 'g': 'g', 'h': 'h', 'i': 'imes', 'j': 'j',
    'k': 'k', 'l': 'l', 'm': 'm', 'n': 'n', 'o': 'ober',
    'p': 'p', 'q': 'q', 'r': 'r', 's': 's', 't': 't',
    'u': 'ufat', 'v': 'v', 'w': 'w', 'x': 'x', 'y': 'y',
    'z': 'z', ' ': ' '
};

function mostrarTag(tagId, modoDaTag) {
    document.getElementById(tagId).style.display = modoDaTag;
}

function validarTexto(textoUsuario) { 
    const regex = /^[a-z0-9 ]*$/;
    return regex.test(textoUsuario);
}

function criptografarTexto() {
    let textoUsuario = document.getElementById('texto-digitado').value;
    let mensagemErro = document.getElementById('mensagem-erro');

    if (validarTexto(textoUsuario) == false) {
        mensagemErro.innerText = "Texto inválido! Letras maiúsculas e caracteres especiais não são aceitos.";
        return;
    } else if (textoUsuario == '') {
        mensagemErro.innerText = 'Nenhum texto inserido!';
        return;
    } else {
        mensagemErro.innerText = '';
    }
    let encriptadoLista = [];
    for (let caractere of textoUsuario) {
        encriptadoLista.push(cifraDicionario[caractere]);
    }
    let textoCriptografado = encriptadoLista.join('');
    mostrarResultado(textoCriptografado);
}

function descriptografarTexto() {
    let textoUsuario = document.getElementById('texto-digitado').value;
    let mensagemErro = document.getElementById('mensagem-erro');

    if (validarTexto(textoUsuario) == false) {
        mensagemErro.innerText = 'Texto inválido! Letras maiúsculas e caracteres especiais não são aceitos.';
        return;
    } else if (textoUsuario == '') {
        mensagemErro.innerText = 'Nenhum texto inserido!';
        return;
    } else {
        mensagemErro.innerText = '';
    }

    let textoDescriptografado = textoUsuario;
    for (let chave in cifraDicionario) {
        let valor = cifraDicionario[chave];
        textoDescriptografado = textoDescriptografado.split(valor).join(chave);
    }
    mostrarResultado(textoDescriptografado);
}

function mostrarResultado(resultadoTexto) {
    let saidaTexto = document.getElementById('saida-texto');
    saidaTexto.value = resultadoTexto;
    mostrarTag('saida-texto', 'block');
    mostrarTag('botao-copiar', 'block');
}

function copiarTexto() {
    let textoGerado = document.getElementById('saida-texto').value;
    navigator.clipboard.writeText(textoGerado);
    alert('Texto copiado para a área de transferência!');
}

function limparConteudo() {
    document.getElementById('texto-digitado').value = '';
    document.getElementById('saida-texto').value = '';
    mostrarTag('botao-copiar', 'none');
    mostrarTag('saida-texto', 'none');
}
