import { getCurso } from '@/api/cursos';
import Link from 'next/link';

type PageParams = {
  params: {
    curso: string;
  };
};

export default async function CursoPage({ params }: PageParams) {
  const curso = await getCurso(params.curso);

  return (
    <div>
      <main>
        <h1>{curso.nome}</h1>
        <p>Descrição: {curso.descricao}</p>
        <p>Aulas: {curso.total_aulas}</p>
        <p>Total de horas: {curso.total_horas}</p>
      </main>

      <div>
        <h2>Aulas</h2>
        <ul>
          {curso.aulas.map(aula => (
            <li>
              <h3>
                <Link href={`/cursos/${params.curso}/${aula.slug}`}>
                  {aula.nome}
                </Link>
              </h3>
              <p>{aula.descricao}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
