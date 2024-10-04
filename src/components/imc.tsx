'use client';

import React from 'react';
import toFixed from '../../utils/number/toFixed';

export default function IMC() {
  const [altura, setAltura] = React.useState(0);
  const [peso, setPeso] = React.useState(0);
  const [imc, setImc] = React.useState(0);

  const calcular = () => {
    setImc(toFixed(peso / (altura * altura)));
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        calcular();
      }}
    >
      <label htmlFor="weight">Peso (em Kg)</label>
      <input
        type="number"
        step="0.01"
        name="weight"
        placeholder="62.0"
        onChange={e => setPeso(Number(e.target.value))}
      />
      <label htmlFor="height">Altura (em m)</label>
      <input
        type="number"
        step="0.01"
        placeholder="1.87"
        name="height"
        onChange={e => setAltura(Number(e.target.value))}
      />
      <button type="submit">Calcular</button>
      <p>Seu IMC é: {imc}</p>
    </form>
  );
}
