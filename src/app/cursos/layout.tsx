import { getCursos } from '@/api/cursos';
import CursosNav from '@/components/cursos-nav';
import Link from 'next/link';
import React from 'react';

/**
 * Uma página layout se mantém nas sub páginas
 */

export default async function CursosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cursos = await getCursos();

  return (
    <div className="flex">
      <CursosNav />
      {children}
    </div>
  );
}
