import { getCursos } from '@/api/cursos';
import Link from 'next/link';

type Curso = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
};

export default async function CursosPage() {
  const cursos = await getCursos();

  return (
    <main>
      <h1>Cursos</h1>
      <ul>
        {cursos.map(curso => (
          <li key={curso.id}>
            <Link href={`/cursos/${curso.slug}`}>{curso.nome}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
