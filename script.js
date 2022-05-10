var criptografado = false;


function criptografa() {
    let texto = [... document.querySelector("input").value.toLowerCase()];
    let vogais = ['a', 'e', 'i', 'o', 'u'];
    let cripto = ['ai', 'enter', 'imes', 'ober', 'ufat'];
    let textoCripto = [];
    let contador = 0;
    let achou = false;
    let campoTexto = document.getElementById("texto");

    if(criptografado) alert("Você já criptografou esse texto. Descriptografe ou insira um novo texto a ser criptografado.");

    if(document.querySelector("input").value.trim() != "") {

    } else {
        alert("Você precisa inserir um texto a ser criptografado.");
        return;
    }

    if(textoCripto.join("") != document.querySelector("input").value.trim() && document.querySelector("input").value.trim() != "") {
        criptografado = false;
    } else {
        alert("Você só pode criptografar um texto descriptografado");
        return;
    }

    while(contador < texto.length) {
        achou = false;

        for(i = 0; i < vogais.length; i++) {

            console.log(texto[contador] , vogais[i]); 

            if(texto[contador] == vogais[i]){
                achou = true;
                textoCripto.push(cripto[i]);

            }

        }

        if(!achou) {
            textoCripto.push(texto[contador]);
        }

        console.log("FIM");
        contador++;

    }

    campoTexto.innerHTML = (textoCripto.join(""));
    campoTexto.style.background = "none";
    criptografado = true;

}

function descriptografa() { 

    let vogais = ['a', 'e', 'i', 'o', 'u'];
    let cripto = ['ai', 'enter', 'imes', 'ober', 'ufat'];
    let textoDescripto = document.querySelector("input").value;
    let campoTexto = document.getElementById("texto");
    let vetorAuxiliar = [];
    let contador = 0;

    if(document.querySelector("input").value.trim() != "") {
        
    } else {

        alert("Você precisa inserir um texto a ser descriptografado.");
        return;

    }

    for(i = 0; i < cripto.length; i++) {

        let regex = new RegExp(cripto[i], 'g');
        vetorAuxiliar[i] = textoDescripto.match(regex);

        if(vetorAuxiliar[i] != null) {
            contador += 1;
        }

        textoDescripto = textoDescripto.replace(regex, vogais[i]);
    } 

    if(contador != 0) {

        campoTexto.style.background = "none";
        campoTexto.innerHTML = (textoDescripto);
        criptografado = false;

    } else {

        alert("Você precisa inserir um texto criptografado para poder descriptografar.");

    }

}
