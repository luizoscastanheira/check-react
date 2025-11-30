import axios from "axios";

async function pegarDados (){
    const endPoint = 'https://api.chucknorris.io/jokes/random';
    const listaChuck = (await axios.get(endPoint)).data;

    return listaChuck;
}

const ditaChuck = await pegarDados();
console.log(ditaChuck);

console.log(ditaChuck.value);
console.log(ditaChuck.icon_url);

export {pegarDados}