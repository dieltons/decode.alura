var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");

function criptografar () {
	var texto = textInput.value;
	var resultEncrypt = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
	document.getElementById("output").innerHTML = '<textarea readonly id="input-texto">' + resultEncrypt + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar () {
	var texto = textInput.value;
	var resultDecrypt = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
	document.getElementById("output").innerHTML = '<textarea readonly id="input-texto">' + resultDecrypt + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
	var textoCopy = document.getElementById('input-texto');
	textoCopy.select();
	document.execCommand('copy');
	alert("Texto Copiado!");
}
