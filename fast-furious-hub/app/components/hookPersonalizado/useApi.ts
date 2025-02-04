'use client'
import { useState, useEffect } from "react";

export default function useFilmes(url: string) {
  const [filmes, setFilmes] = useState<string[]>([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setFilmes(data.results));
  }, [url]);

  return filmes;
}
