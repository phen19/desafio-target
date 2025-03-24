import { readFile} from "fs/promises";

const json = JSON.parse(await readFile("desafio-target/dados.json", "utf-8"));
console.log(json)

//Atribuindo maior valor possível;
let menorValor= Infinity;

//Atribuindo menor valor possível
let maiorValor= -Infinity;
let diasComFaturamento = 0;
let total = 0;
let media;

json.forEach(element => {

    if(element.valor > 0){
        diasComFaturamento++;
        total += element.valor;
        if(element.valor < menorValor){
            menorValor = element.valor;
        }
    
        if(element.valor > maiorValor){
            maiorValor = element.valor;
        }
    }

})

media = total/diasComFaturamento;

console.log("O maior faturamento foi de: " + maiorValor);
console.log("O menor faturamento foi de: " + menorValor);
console.log("A média faturamento foi de: " + media + " com o total de " + total + " faturamento em " + diasComFaturamento + " dias com faturamento.");