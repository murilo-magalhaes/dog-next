'use server';

import { cookies } from 'next/headers';

export async function login(user: { name: string; password: string }) {
  try {
    const response = await fetch('https://api.origamid.online/conta/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: user.name,
        password: user.password,
      }),
    });

    const data = await response.json();

    cookies().set('token', data.token, {
      httpOnly: true,
      secure: true,
    });

    return true;
  } catch (err) {
    return false;
  }
}
