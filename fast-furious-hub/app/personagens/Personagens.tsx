// src/pages/personagens.tsx
"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/card/Card'; 

interface Personagem {
  id: number;
  name: string;
  status: string;
  location: {
    name: string;
  };
  image: string;
}

const Personagens: React.FC = () => {
  const [personagens, setPersonagens] = useState<Personagem[]>([]); 

  useEffect(() => {
    const fetchPersonagens = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        setPersonagens(response.data.results);
      } catch (error) {
        console.error('Erro ao buscar personagens:', error);
      }
    };

    fetchPersonagens();
  }, []);

  return (
    <div>
      <h1>Personagens</h1>
      <div className="card-container">
        {personagens.map((personagem) => (
          <Card key={personagem.id} personagem={personagem} />
        ))}
      </div>
    </div>
  );
};

export default Personagens;