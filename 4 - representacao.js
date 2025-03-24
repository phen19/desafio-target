const DADOS = [
    {"estado": "SP", "faturamento": 67836.43},
    {"estado": "RJ", "faturamento": 36678.66},
    {"estado": "MG", "faturamento": 29229.88},
    {"estado": "ES", "faturamento": 27165.48},
    {"estado": "Outros", "faturamento": 19849.53}
]

let valorTotal = 0;

DADOS.forEach(element => {
    valorTotal += element.faturamento;
})


let percentuais = DADOS.map(element =>{
    return{
        estado: element.estado,
        percentual:Number((element.faturamento/valorTotal)*100).toFixed(2)
    }
})
console.log(percentuais)