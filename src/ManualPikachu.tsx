import React from 'react';
import { gql } from '@apollo/client/core';
import { Pokemon } from './Pokemon';
import { useQuery } from '@apollo/client';

const pikachuQuery = gql`
  query pikachu {
    pokemon(name: "pikachu") {
      name
      image
    }
  }
`;

export function ManualPikachu() {
  const { data, loading } = useQuery(pikachuQuery);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <Pokemon name={data.pokemon.name} imageSrc={data.pokemon.image} />;
}
