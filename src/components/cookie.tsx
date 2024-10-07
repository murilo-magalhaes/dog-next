'use client';

import { getCookie } from '@/actions/get-cookie';
import React from 'react';

export default function Cookie() {
  const [cookie, setCookie] = React.useState('');

  async function handleClick() {
    const token = await getCookie('token');
    if (token) setCookie(token);
  }

  return (
    <div>
      <p>Cookie: {cookie}</p>
      <button onClick={handleClick}>Pegar Cookie</button>
    </div>
  );
}
