"use client";
import Link, { LinkProps } from "next/link";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"

interface TextLinksProps extends LinkProps {
  texto: string;  
  alt?: string;
}

export default function MenuLink ({ texto, href, ...rest }: TextLinksProps){
  return (
  <Menubar>
  <MenubarMenu>
    <MenubarTrigger>Menu</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Personagens </MenubarItem>
      <MenubarItem>Ordem de Filmes</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Galeria</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
  )
}