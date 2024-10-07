'use client';

import { revalidatePathAction } from '@/actions/cache/revalidate-path';
import { revalidateTagsAction } from '@/actions/cache/revalidate-tags';
import React from 'react';

export default function Atualizar() {
  async function handleClick() {
    // revalidatePathAction('/acoes-cache');
    revalidateTagsAction(['acoes-cache']);
  }

  /** Exemplo de uso de revalidação em useEffect, NÃO recomendado pois
   * o setInterval faz com que seja feitas requisições o tempo todo
   */
  // React.useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     revalidatePathAction('/acoes-cache');
  //   }, 5000);
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  return <button onClick={handleClick}>Atualizar</button>;
}
