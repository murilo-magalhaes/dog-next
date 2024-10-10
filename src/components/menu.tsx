'use client';

import Link from 'next/link';
import { useParams, usePathname, useRouter } from 'next/navigation';
import React from 'react';

export default function Menu() {
  const params = useParams();
  const pathName = usePathname();

  const router = useRouter();

  const [pageChanges, setPageChanges] = React.useState(0);

  // React.useEffect(() => {
  //   console.log({ router });
  //   setTimeout(() => {
  //     router.push('/');
  //   }, 5000);
  // }, [router]);

  React.useEffect(() => {
    setPageChanges(prevState => (prevState += 1));
  }, [pathName]);

  return (
    <div
      style={{
        padding: '10px',
        paddingBottom: 0,
        backgroundColor: '#000',
        color: '#fff',
        width: '100vw',
        height: '10vh',
      }}
    >
      Trocas de página: {pageChanges}
      <ul className="menu">
        <li>
          <Link style={{ color: '#fff' }} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link style={{ color: '#fff' }} href="/sobre">
            Sobre
          </Link>
        </li>
        <li>
          <Link style={{ color: '#fff' }} href="/login">
            Login
          </Link>
        </li>
        <li>
          <Link style={{ color: '#fff' }} href="/imc">
            IMC
          </Link>
        </li>
        <li>
          <Link style={{ color: '#fff' }} href="/produtos">
            Produtos
          </Link>
        </li>
        <li>
          <Link style={{ color: '#fff' }} href="/animais">
            Animais
          </Link>
        </li>
        <li>
          <Link style={{ color: '#fff' }} href="/produtos/adicionar">
            Adicionar produto
          </Link>
        </li>
        <li>
          <Link style={{ color: '#fff' }} href="/cursos">
            Cursos
          </Link>
        </li>
        <li>
          <Link style={{ color: '#fff' }} href="/acoes-server">
            Ações Server
          </Link>
        </li>
        <li>
          <Link style={{ color: '#fff' }} href="/acoes-client">
            Ações Client
          </Link>
        </li>
        <li>
          <Link style={{ color: '#fff' }} href="/cookie">
            Cookie
          </Link>
        </li>
        <li>
          <Link style={{ color: '#fff' }} href="/acoes-cache">
            Ações Cache
          </Link>
        </li>
      </ul>
    </div>
  );
}
