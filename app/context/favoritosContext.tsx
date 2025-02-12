"use client";
import { createContext, useContext, useState, ReactNode } from 'react';

type Filme = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
};

type ContextType = {
  favoritos: Filme[];
  addFavorito: (filme: Filme) => void;
  removeFavorito: (id: number) => void;
};

const FavoritosContext = createContext<ContextType>({} as ContextType);

export const FavoritosProvider = ({ children }: { children: ReactNode }) => {
  const [favoritos, setFavoritos] = useState<Filme[]>([]);

  const addFavorito = (filme: Filme) => {
    if (!favoritos.find(f => f.id === filme.id)) {
      setFavoritos(prev => [...prev, filme]);
    }
  };

  const removeFavorito = (id: number) => {
    setFavoritos(prev => prev.filter(filme => filme.id !== id));
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, addFavorito, removeFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritosContext);