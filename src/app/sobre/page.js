import estilos from "./Sobre.module.css";
import Image from "next/image";

import TheLosc from "../../../public/thelosc.png";

export default function Sobre(){
    return(
        <main className={estilos.containerMain}>
            
      <article className={estilos.containerGeral}>

        <h2>O programador</h2>
        <p>Meu nome é Luiz Otávio, sou casado, sou pai e sou graduado em Análise e Desenvolvimento de Sistemas. Como amante de tecnologia sou também aluno da DevMedia em diversas das trilhas de programação.</p>
        <p>Gosto de videogames desde o Atari e de computadores desde o MSX da Sharp</p>
        
      </article>

      <Image src={TheLosc} alt="Imagem do programador em estilo anime." className={estilos.imagem}/>

      </main>
    );
};