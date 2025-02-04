'use client';
import React from 'react';
import useFilmes, { Filme } from '../components/hookPersonalizado/useApi';

const FilmesPage = () => {
  const url =
    'https://api.themoviedb.org/3/movie/popular?api_key=8be73457d0336b61af669ecbd314d429';
  const filmes: Filme[] = useFilmes(url);

  if (filmes.length === 0) {
    return <p>Carregando filmes...</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>
        Filmes Populares
      </h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
        }}
      >
        {filmes.map((filme: Filme) => (
          <div
            key={filme.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#fff',
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
              alt={filme.title}
              style={{
                width: '100%',
                height: '350px',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            <div style={{ padding: '10px' }}>
              <h2 style={{ fontSize: '1.2rem', margin: '0 0 10px' }}>
                {filme.title}
              </h2>
              <p style={{ fontSize: '0.9rem', color: '#555' }}>
                {filme.overview}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilmesPage;
