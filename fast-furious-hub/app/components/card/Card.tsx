// src/components/Card/Card.tsx
import React from 'react';
import styles from './Card.module.scss';

// Definindo a interface para o personagem
interface Personagem {
  id: number;
  name: string;
  status: string;
  location: {
    name: string;
  };
  image: string;
}

interface CardProps {
  personagem: Personagem; // Especificando que a propriedade personagem é do tipo Personagem
}

const Card: React.FC<CardProps> = ({ personagem }) => {
  return (
    <div className={styles.card}>
      <img src={personagem.image} alt={personagem.name} className={styles.img} />
      <h2>{personagem.name}</h2>
      <p>Status: {personagem.status}</p>
      <p>Última Localização: {personagem.location.name}</p>
    </div>
  );
};

export default Card;