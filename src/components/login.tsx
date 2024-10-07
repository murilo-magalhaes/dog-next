'use client';

import React from 'react';

export default function Login() {
  const [user, setUser] = React.useState<{ name: string; password: string }>({
    name: '',
    password: '',
  });

  const handleSubmit = async () => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (response.ok) window.location.href = '/';
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <label htmlFor="name">Nome</label>
      <input
        type="text"
        id="name"
        value={user.name}
        onChange={e => setUser({ ...user, name: e.target.value })}
      />
      <label htmlFor="password">Senha</label>
      <input
        type="password"
        id="password"
        onChange={e => setUser({ ...user, password: e.target.value })}
      />
      <button type="submit">Entrar</button>
    </form>
  );
}
