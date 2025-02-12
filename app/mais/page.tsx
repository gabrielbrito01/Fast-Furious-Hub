'use client';
import React, { useState } from 'react';
import useFilmes from '../components/hookPersonalizado/useApi';
import { useFavorites } from '../context/favoritosContext';

const FilmesPage = () => {
  const { favoritos, addFavorito, removeFavorito } = useFavorites();
  const [aba, setAba] = useState<'Filmes' | 'favoritos'>('Filmes');
  const filmes = useFilmes('https://api.themoviedb.org/3/movie/popular?api_key=8be73457d0336b61af669ecbd314d429');

  const lista = aba === 'Filmes' ? filmes : favoritos;
  const elementos = [];

  for (let i = 0; i < lista.length; i++) {
    const filme = lista[i];
    const ehFavorito = favoritos.some(favorito => favorito.id === filme.id);
    
    elementos.push(
      <div style={{ border: '1px solid #ddd', margin: '10px', padding: '10px' }}>
        <img
          src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
          alt={filme.title}
          style={{ width: '100%', height: '300px' }}
        />
        <h3>{filme.title}</h3>
        <button 
          onClick={() => ehFavorito ? removeFavorito(filme.id) : addFavorito(filme)}
          style={{ 
            background: ehFavorito ? 'red' : 'green', 
            color: 'white', 
            padding: '5px',
            width: '100%'
          }}
        >
          {ehFavorito ? 'Remover' : 'Favoritar'}
        </button>
      </div>
    );
  }

  return (
    <div>
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <button 
          onClick={() => setAba('Filmes')} 
          style={{ fontWeight: aba === 'Filmes' ? 'bold' : 'normal', margin: '0 10px' }}
        >
          Filmes
        </button>
        <button 
          onClick={() => setAba('favoritos')} 
          style={{ fontWeight: aba === 'favoritos' ? 'bold' : 'normal', margin: '0 10px' }}
        >
          Favoritos ({favoritos.length})
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}>
        {elementos.length > 0 ? elementos : <p>Nenhum filme favoritado</p>}
      </div>
    </div>
  );
};

export default FilmesPage;