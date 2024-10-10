'use client';

import { Curso, getCursos } from '@/api/cursos';
import Link from 'next/link';
import React from 'react';

export default function CursosNav() {
  const [navVisible, setNavVisible] = React.useState(true);

  const [cursos, setCursos] = React.useState<Curso[]>([]);

  async function loadCursos() {
    const data = await getCursos();
    setCursos(data);
  }

  React.useEffect(() => {
    loadCursos();
  }, []);

  return (
    <div className="flex" style={{ margin: '-1rem', marginRight: '5rem' }}>
      {navVisible && (
        <nav
          style={{
            padding: '1rem',
            backgroundColor: '#8900bf',
            height: '90vh',
          }}
        >
          <h1
            onClick={() => (window.location.href = '/cursos')}
            style={{ textAlign: 'center' }}
          >
            Cursos
          </h1>
          <ul style={{ listStyleType: 'none', padding: 10 }}>
            {cursos.map(curso => (
              <li key={curso.id}>
                <Link style={{ color: '#fff' }} href={`/cursos/${curso.slug}`}>
                  {curso.nome}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <button
        onClick={() => setNavVisible(prevState => !prevState)}
        style={{
          height: '5vh',
          fontWeight: 'bold',
        }}
      >
        {navVisible ? `<` : '>'}
      </button>
    </div>
  );
}
