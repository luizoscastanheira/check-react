// Função
import { pegarDados } from "@/servico/dados";

import estilos from "./page.module.css";

export default function Home() {
  return (
    <main className={estilos.containerMain}>
      
      <header className={estilos.containerHeader}>

        <h1>Bem-vindo à frases do Chuck Norris!!!</h1>
        <small>Teste de API</small>

      </header>

    </main>
  );
}
