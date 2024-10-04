type PageParams = {
  params: {
    slug: string[];
  };
};

export default function ProdutosPage({ params }: PageParams) {
  return (
    <main>
      <h1>Cursos</h1>
      {params.slug.join('/')}
    </main>
  );
}
