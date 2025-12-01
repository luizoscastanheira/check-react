import "./globals.css";
import Topo from "@/componentes/Topo";

export const metadata = {
  title: "Check Point React",
  description: "Criado por Luiz Otávio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Topo />
        {children}
      </body>
    </html>
  );
}
