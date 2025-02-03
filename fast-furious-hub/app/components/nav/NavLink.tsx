"use client";
import MenuLink from "../menuLink/MenuLink";

export default function NavLink() {
  return (
    <>
      <nav className="h-20 flex items-center justify-between px-4 gap-4">        
        <MenuLink texto="Home" href="/" />
        <MenuLink texto="Galeria" href="/personagens" />
        <MenuLink texto="Documentos" href="/ordem-de-filmes" />
        <MenuLink texto="Contato" href="/galeria" />
       
      </nav>
    </>
  );
}