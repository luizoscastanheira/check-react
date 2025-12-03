'use client';
import { useState } from "react";

// importando camada de serviço
import { pegarDados, pegarDadosAno, pegarFatoAleatorio } from "@/servico/dados";

import estilos from "./page.module.css";

export default function Home() {

// Criando variáveis de estado
const [fatoHistorico, setFatoHistorico] = useState("História se Faz com História!");
const [dataFato, setDataFato] = useState("Hoje é Hoje!")

// criando uma função de mudança de estado
// pegando um faato aleatorio
async function mudarFatoHistoricoAleatorio(){
  setDataFato("Aguarde resposta do Servidor......")
  const fatoHistorico = await pegarFatoAleatorio();
  setDataFato(fatoHistorico.Ano)
  setFatoHistorico(fatoHistorico.Fato)
}

// pegando um fato por um ano determinado
async function mudarFatoHistoricoAno(ano){
  const fatoHistorico = await pegarDados(ano);
  setDataFato(fatoHistorico.Ano)
  setFatoHistorico(fatoHistorico.Fato)
}


  return (
    <main className={estilos.containerMain}>
            
      <article className={estilos.containerGeral}>
        
        <h2>{dataFato}</h2>
        <p>{fatoHistorico}</p>
        <button onClick={()=> mudarFatoHistoricoAleatorio()} title="Clique Aqui e Troque o Fato Histórico">Navegue na História com um Click!</button>
        
      </article>

      <article className={estilos.containerGeral}>
        <h3>Descrição do projeto:</h3>
        <p>O objetivo do projeto desta página é puramente acadêmico, um SPA para teste de habilidades de programação com React (State Hooks, evento onClick) e consumo de API's.</p>
        <p>Para construção desta página foi feito uso/consumo da seguinte api: Fatos Históricos - <a href="https://apifatoshistoricos.onrender.com/" target="_blank">https://apifatoshistoricos.onrender.com/</a>, construida por mim e hospedada gentilmente por <a href="https://render.com" target="_blank">https://render.com</a>.</p>
        <p>Os fatos listados estão destituídos de viés politico/ideológico, apenas contam fatos amplamente conhecidos (ok, nem todos)  em livros de história.</p>
        <p>Outras features como buscar por um ano específico ou listar tudo de uma vez serão adicionadas em versões posteriores.</p>
        <h3>Repositórios:</h3>
        <ol>
          <li><a href="https://github.com/luizoscastanheira/check-react" target="_blank">Este SPA</a></li>
          <li><a href="https://github.com/luizoscastanheira/apiFatosHistoricos" target="_blank">API de Fatos Históricos</a></li>
        </ol>
      </article>

    </main>
  );
}
