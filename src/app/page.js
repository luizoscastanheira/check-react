'use client';
import { useState } from "react";

import Image from "next/image";

// importando camada de serviço
import { pegarDados } from "@/servico/dados";

import estilos from "./page.module.css";

export default function Home() {

// Criando variáveis de estado
const [ditado, setDitado] = useState('Ditado do Chuck Norris!');
const [imagem, setImagem] = useState();

// criando uma função de mudança de estado
async function mudarDitado(){
  const ditaChuck = await pegarDados();
  setDitado(ditaChuck.value)
  setImagem(ditaChuck.icon_url)
}

  return (
    <main className={estilos.containerMain}>
      
      <header className={estilos.containerHeader}>

        <h1>Bem-vindo à frases do Chuck Norris!!!</h1>
        <small>Teste de API</small>

      </header>
      <section>
        <p>{ditado}</p>
        <img src={imagem} alt="Icone do Chuck Norris"/>
        <button onClick={mudarDitado}>Ditado do Chuck Norris</button>
      </section>

    </main>
  );
}
