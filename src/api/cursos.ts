export type Aula = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  curso_id: number;
  tempo: string;
  ordem: string;
};

export type Curso = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
  aulas: Aula[];
  error?: string;
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
