function inverter(texto){
    let textoInvertido = "";

    for(let i= texto.length; i > 0; i--){
        textoInvertido += texto[i-1];
    }

    return textoInvertido;
}

let teste = inverter("BANANA");
console.log(teste)