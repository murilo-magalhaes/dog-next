'use client';

import { setCookie } from '@/actions/set-cookie';
import ClientFetch from '@/components/client-fetch';
import ServerFetch from '@/components/server-fetch';
import React from 'react';

export default function HomePage() {
  const [valor, setValor] = React.useState('');

  async function handleSetCookie() {
    const response = await setCookie(
      'segredo',
      (Math.random() * 1000000).toFixed(0).toString(),
    );
    setValor(response.value);
  }

  return (
    <main>
      <h1>Home: {valor}</h1>

      <button onClick={handleSetCookie}>Definir cookie</button>

      {/* <div className="flex">
        <div>
          <h2>Server fetch</h2>
          <ServerFetch />
        </div>
        <div>
          <h2>Client fetch</h2>
          <ClientFetch />
        </div>
      </div> */}
    </main>
  );
}
