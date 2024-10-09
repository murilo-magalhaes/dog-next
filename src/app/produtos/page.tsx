import Link from 'next/link';

export type Produto = {
  id?: number;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: 0 | 1;
};

export default async function ProdutosPage() {
  const response = await fetch('https://api.origamid.online/produtos');
  const produtos = (await response.json()) as Produto[];

  return (
    <main>
      <h1>Produtos</h1>
      <ul>
        {produtos.map(p => (
          <li key={p.id}>
            <Link href={`/produtos/${p.id}`}>
              {p.nome}: R$ {p.preco}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
