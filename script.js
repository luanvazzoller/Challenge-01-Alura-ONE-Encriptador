var criptografado = false;

function criptografa() {
    let texto = [... document.querySelector("input").value.toLowerCase()];
    let vogais = ['a', 'e', 'i', 'o', 'u'];
    let cripto = ['ai', 'enter', 'imes', 'ober', 'ufat'];
    let textoCripto = [];
    let contador = 0;
    let achou = false;
    let p = document.querySelector(".demo");

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

    p.innerHTML = (textoCripto.join(""));
    p.style.background = "none";
    criptografado = true;

}

function descriptografa() { 
    let vogais = ['a', 'e', 'i', 'o', 'u'];
    let cripto = ['ai', 'enter', 'imes', 'ober', 'ufat'];
    let textoDescripto = document.querySelector("input").value;
    let p = document.querySelector(".demo");

    for(i = 0; i < cripto.length; i++) {

        let regex = new RegExp(cripto[i], 'g');
        textoDescripto = textoDescripto.replace(regex, vogais[i]);
        
    }

    p.style.background = "none";
    p.innerHTML = (textoDescripto);


}

