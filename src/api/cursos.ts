type Aula = {
  id: string;
  slug: string;
  nome: string;
  descricao: string;
  curso_id: string;
  tempo: string;
  ordem: string;
};

type Curso = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
  aulas: Aula[];
};

export async function getCursos() {
  const response = await fetch('https://api.origamid.online/cursos');
  const data = (await response.json()) as Curso[];

  return data;
}

export async function getCurso(curso: string) {
  const response = await fetch(`https://api.origamid.online/cursos/${curso}`);
  const data = (await response.json()) as Curso;

  return data;
}

export async function getAula(curso: string, aula: string) {
  const response = await fetch(
    `https://api.origamid.online/cursos/${curso}/${aula}`,
  );
  const data = (await response.json()) as Aula;

  return data;
}
