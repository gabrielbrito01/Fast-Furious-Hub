'use client';
import { useState, useEffect } from 'react';

export interface Filme {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

function useFilmes(url: string): Filme[] {
  const [filmes, setFilmes] = useState<Filme[]>([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setFilmes(data.results));
  }, [url]);

  return filmes;
}

export default useFilmes;
