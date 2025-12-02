import axios from "axios";

// Função para pegar a coleção inteira
async function pegarDados (){
    const endPoint = 'https://apifatoshistoricos.onrender.com';
    const listaDeFatosHistoricos = (await axios.get(endPoint)).data;

    return listaDeFatosHistoricos;
}

// Função para pegar apenas um ano especificado
async function pegarDadosAno (ano){
    const endPoint = `https://apifatoshistoricos.onrender.com/${ano}`; // usando Template String para facilitar, a outraforma seria usar "+ ano" ao final da url para concatenar
    const listaDeFatosAno = (await axios.get(endPoint)).data;

    return listaDeFatosAno;
}

// função de aleatoriedade

function gerarAnoAleatorio() {
    // Definindo o intervalo (inclusivo)
    const min = 1914;
    const max = 2022;

    // Calcula a diferença entre o máximo e o mínimo + 1
    // (2022 - 1914 + 1 = 109)
    const range = max - min + 1;

    // 1. Math.random() gera um número entre [0, 1)
    // 2. Multiplica por 'range' para ter um número entre [0, 109)
    // 3. Math.floor() arredonda para o número inteiro mais próximo (0 a 108)
    // 4. Adiciona 'min' (1914) para deslocar o intervalo para [1914, 2022]
    const ano = Math.floor(Math.random() * range) + min;

    return ano;
}
// teste da função
const anoSorteado = gerarAnoAleatorio();
console.log(anoSorteado); // Exemplo: 1985


// Teste de console funçao pegarDados()
// const fatos = await pegarDados();
// console.log(fatos);
// console.log(fatos[0]);
// console.log(fatos[0].Ano);
// console.log(fatos[0].Fato);

// Teste de console funcão pegarDadosAno()
//const fatoAno = await pegarDadosAno(1914);
//console.log(fatoAno)
//console.log(fatoAno.Ano)
//console.log(fatoAno.Fato)

export {pegarDados, pegarDadosAno}