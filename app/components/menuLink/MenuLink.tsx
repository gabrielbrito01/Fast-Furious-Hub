"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/app/components/ui/menubar";
import Link from "next/link";

export default function MenuLink() {
  return (
    <Menubar className="bg-white p-2 rounded-md shadow-md">
      <MenubarMenu>
        <MenubarTrigger className="text-gray-800 text-base font-semibold hover:bg-gray-200 px-4 py-2 rounded-md transition duration-200">
          Menu
        </MenubarTrigger>
        <MenubarContent className="bg-white border border-gray-200 rounded-md mt-1 shadow-lg">
          <MenubarItem className="text-gray-800 text-sm hover:bg-gray-100 px-4 py-2 rounded-md transition duration-200">
            <Link href="/home">Home</Link>
          </MenubarItem>
          <MenubarItem className="text-gray-800 text-sm hover:bg-gray-100 px-4 py-2 rounded-md transition duration-200">
            <Link href="/personagens">Personagens</Link>
          </MenubarItem>
          <MenubarItem className="text-gray-800 text-sm hover:bg-gray-100 px-4 py-2 rounded-md transition duration-200">
            <Link href="/filmes">Ordem de Filmes</Link>
          </MenubarItem>
          <MenubarSeparator className="border-gray-200" />
          <MenubarItem className="text-gray-800 text-sm hover:bg-gray-100 px-4 py-2 rounded-md transition duration-200">
            <Link href="/galeria">Galeria</Link>
          </MenubarItem>
          <MenubarSeparator className="border-gray-200" />
          <MenubarItem className="text-gray-800 text-sm hover:bg-gray-100 px-4 py-2 rounded-md transition duration-200">
            <Link href="/contato">Contato</Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}