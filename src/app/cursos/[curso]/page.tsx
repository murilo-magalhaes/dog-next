import { Aula, getCurso, getCursos } from '@/api/cursos';
import Link from 'next/link';

type PageParams = {
  params: {
    curso: string;
  };
};

export async function generateStaticParams() {
  const cursos = await getCursos();
  const aulas = await Promise.all(cursos.map(curso => getCurso(curso.slug)));

  // return cursos.map(c => ({
  //   curso: c.slug,
  // }));

  return aulas
    .reduce((acc: Aula[], curso) => acc.concat(curso.aulas), [])
    .map(aula => ({
      aula: aula.slug,
      curso: cursos.find(c => c.id === aula.curso_id)?.slug,
    }));
}

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
