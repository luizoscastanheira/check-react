import estilos from "./Topo.module.css";
import Link from "next/link";

export default function Topo(){
    return(
    <header className={estilos.containerHeader}>


        <div className={estilos.containerBanner}>
            <h1>Bem-vindo às frases do Chuck Norris!!!</h1>
        </div>

        <small><marquee className={estilos.marca} direction="down" behavior="alternate" scrolldelay="250">Um SPA Retrô Consumindo uma API na Porrada!!!</marquee></small>

        <nav className={estilos.containerNav}>
            <Link className={estilos.navLink} href="/sobre">Sobre o Programador</Link>
            <Link className={estilos.navLink} href="/">Voltar</Link>
        </nav>

    </header>
    );
};