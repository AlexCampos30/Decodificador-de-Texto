var texto = document.querySelector('textarea');
var mostraTexto = document.querySelector('#textarea2');
var fundoRecebeTexto = document.querySelector('.texto-resultante');

var botaoCriptografar = document.getElementById('botao-criptografar');
var botaoDescriptografar = document.getElementById('botao-descriptografar');
var botaoCopiar = document.getElementById('botao-copiar');

function tiraImagem() {
    fundoRecebeTexto.style.background = 'white';
}

function criptografaTexto() {
    var criptografia = texto.value;
    criptografia = criptografia.replace(/e/gi , 'enter');
    criptografia = criptografia.replace(/i/gi , 'imes');
    criptografia = criptografia.replace(/a/gi , 'ai');
    criptografia = criptografia.replace(/o/gi , 'ober');
    criptografia = criptografia.replace(/u/gi , 'ufat');

    tiraImagem();
    mostraTexto.innerText = criptografia;
}

function descriptografaTexto() {
    var descriptografia = texto.value;
    descriptografia = descriptografia.replace(/enter/gi , 'e');
    descriptografia = descriptografia.replace(/imes/gi , 'i');
    descriptografia = descriptografia.replace(/ai/gi , 'a');
    descriptografia = descriptografia.replace(/ober/gi , 'o');
    descriptografia = descriptografia.replace(/ufat/gi , 'u');

    tiraImagem();
    mostraTexto.innerText = descriptografia;
}

function copiaTexto() {
    mostraTexto.select();
    mostraTexto.setSelectionRange(0, 99999);
    document.execCommand("copy");
    mostraTexto.innerText = "";
}

botaoCriptografar.onclick = criptografaTexto;
botaoDescriptografar.onclick = descriptografaTexto; 
botaoCopiar.onclick = copiaTexto;