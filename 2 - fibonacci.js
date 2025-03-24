function fibonacci(numero) {
    if(numero < 0) {
        return "O número deve ser maior ou igual a 0";
    }

    //início da sequência
    let sequencia = [0,1];

    //preenche a seuquencia enquando o ultimo numero for menor que o numero informado
    while(sequencia[sequencia.length - 1] < numero){
        sequencia.push(sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2]);
    }

    if(sequencia.includes(numero)){
        return "O número informado " + numero+ " pertence à sequência de Fibonacci";
    }else{
        return "O número informado " + numero + " não pertence à sequência de Fibonacci";
    }
}

//chamando função
let teste = fibonacci(7);
console.log(teste)