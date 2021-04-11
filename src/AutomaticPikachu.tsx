import React from 'react';
import { useGetPikachuQuery } from './__generated__/graphql-types';
import { Pokemon } from './Pokemon';

export function AutomaticPikachu() {
  const { data, loading } = useGetPikachuQuery();

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <Pokemon
      name={data!.pokemon!.name!}
      imageSrc={data!.pokemon!.image!}
    />
  );
}
