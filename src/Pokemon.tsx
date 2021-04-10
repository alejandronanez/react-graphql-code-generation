import React from 'react';

type Props = {
  name: string;
  imageSrc: string;
};

export function Pokemon({ name, imageSrc }: Props) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={imageSrc} alt={`A wild ${name} appears`} />
    </div>
  );
}
