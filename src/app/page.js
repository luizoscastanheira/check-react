'use client';
import { useState } from "react";

import Link from "next/link";

// importando camada de serviço
import { pegarDados } from "@/servico/dados";

import estilos from "./page.module.css";

export default function Home() {

// Criando variáveis de estado
const [ditado, setDitado] = useState("Chuck Norris is the only one who can install Linux using a Windows CD from a Mac!");
const [imagem, setImagem] = useState();

// criando uma função de mudança de estado
async function mudarDitado(){
  const ditaChuck = await pegarDados();
  setDitado(ditaChuck.value)
  setImagem(ditaChuck.icon_url)
}

  return (
    <main className={estilos.containerMain}>
            
      <article className={estilos.containerGeral}>
        <h2>O Ditado:</h2>
        <p>{ditado}</p>
        <button onClick={mudarDitado}>Mude o Ditado Clicando Aqui!</button>
      </article>

      <article className={estilos.containerGeral}>
        <h3>Descrição do projeto:</h3>
        <p>Para construção desta página foi feito uso/consumo da seguinte api: <a href="https://api.chucknorris.io/" target="_blank">https://api.chucknorris.io/</a>, site ao qual deixo meus agradecimentos e o crédito pela API. </p>
        <p>Os ditados são fornecidos como estão, em inglês e a possibilidade de uma tradução automática está sendo analisada (Se depender de $$, Nunca será ;-)).</p>
        <p></p>
      </article>

    </main>
  );
}
