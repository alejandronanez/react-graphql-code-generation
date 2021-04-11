import React from 'react';
import { gql } from '@apollo/client/core';
import { Pokemon } from './Pokemon';
import { useQuery } from '@apollo/client';
import { GetPikachuQuery } from './__generated__/graphql-types';

const query = gql`
  query GetPikachu {
    pokemon(name: "pikachu") {
      name
      image
    }
  }
`;

export function ManualPikachu() {
  const { data, loading } = useQuery<GetPikachuQuery>(
    query,
  );
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Pokemon
      name={data!.pokemon!.name!}
      imageSrc={data!.pokemon!.image!}
    />
  );
}
