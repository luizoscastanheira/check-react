import axios from "axios";

// Função para pegar a coleção inteira
async function pegarDados (){
    listaDeFatosHistoricos = [];

    try{
        const endPoint = 'https://apifatoshistoricos.onrender.com';
        const listaDeFatosHistoricos = (await axios.get(endPoint)).data;
    } catch (error) {
        console.error("Erro ao caputurar dados", error);
    }

    return listaDeFatosHistoricos;
};

// Função para pegar apenas um ano especificado
async function pegarDadosAno (ano){
    const endPoint = `https://apifatoshistoricos.onrender.com/${ano}`; // usando Template String para facilitar, a outraforma seria usar "+ ano" ao final da url para concatenar
    const listaDeFatosAno = (await axios.get(endPoint)).data;

    return listaDeFatosAno;
};

// Funçao para pegar dados de forma aleatória
async function pegarFatoAleatorio (){
    const endPoint = 'https://apifatoshistoricos.onrender.com/random';
    const listaDeFatosAno = (await axios.get(endPoint)).data;

    return listaDeFatosAno;
};


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

// Teste de console função pegarFatoAleatorio
//const fatoAleatorio = await pegarFatoAleatorio();
//console.log(fatoAleatorio)

export {pegarDados, pegarDadosAno, pegarFatoAleatorio}