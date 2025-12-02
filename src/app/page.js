'use client';
import { useState } from "react";

// importando camada de serviço
import { pegarDados, pegarDadosAno } from "@/servico/dados";

import estilos from "./page.module.css";

export default function Home() {

// Criando variáveis de estado
const [fatoHistorico, setFatoHistorico] = useState("História se Faz com História!");

// criando uma função de mudança de estado
async function mudarFatoHistorico(ano){
  const fatoHistorico = await pegarDadosAno(ano);
  setFatoHistorico(fatoHistorico.Fato)
}

  return (
    <main className={estilos.containerMain}>
            
      <article className={estilos.containerGeral}>
        <h2>O Fato Histórico</h2>
        <p>{fatoHistorico}</p>
        <button onClick={()=> mudarFatoHistorico(1939)}>Navegue na História!</button>
      </article>

      <article className={estilos.containerGeral}>
        <h3>Descrição do projeto:</h3>
        <p>O objetivo do projeto desta página é é puramente acadêmico, um SPA para teste de habilidades de programação com React e consumo de API's.</p>
        <p>Para construção desta página foi feito uso/consumo da seguinte api: Fatos Históricos - <a href="https://apifatoshistoricos.onrender.com/" target="_blank">https://apifatoshistoricos.onrender.com/</a>, construida por mim e hospedada gentilmente por <a href="https://render.com" target="_blank">https://render.com</a>.</p>
        <p>Os fatos listados estão destituídos de viés politico/ideológico, apenas contam fatos amplamente conhecidos em livros de história.</p>
        <p></p>
      </article>

    </main>
  );
}
