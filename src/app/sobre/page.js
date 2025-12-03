import estilos from "./Sobre.module.css";
import Image from "next/image";

import TheLosc from "../../../public/thelosc.png";

export default function Sobre(){
    return(
        <main className={estilos.containerMain}>
            
      <article className={estilos.containerGeral}>

        <h2>O programador</h2>
        <p>Meu nome é Luiz Otávio, sou casado, sou pai e sou graduado em Análise e Desenvolvimento de Sistemas. Como amante de tecnologia sou também aluno da DevMedia em diversas das trilhas de programação.</p>
        <p>Gosto de videogames desde o Atari e de computadores desde o MSX da Sharp o que me coloca com quase 30 anos de estrada na área de tecnologia, desde um começo como instrutor em cursos de Windows/Office até administrador de redes Linux.</p>
        <p>O desafio de hoje é me consolidar como desenvolvedor, com foco em Web, front e back-end.</p>
        <h3>Contatos</h3>
        <ol>
          <li><a href="https://www.linkedin.com/in/luiz-ot%C3%A1vio-da-silva-castanheira-19683696/" target="_blank">Meu LinkedIn</a></li>
          <li><a href="https://luizotavioads.vercel.app/" target="_blank">Site Pessoal</a></li>
        </ol>

        <h3>Agradecimento</h3>
        <p>Primeiro a Deus que não nos desampara, depois à minha esposa que me apoia em todos os momentos, a meu filho que me incentiva e a meus pais que me educaram para ser homem e não moleque.</p>
        
      </article>

      <Image src={TheLosc} alt="Imagem do programador em estilo anime." className={estilos.imagem}/>

      </main>
    );
};