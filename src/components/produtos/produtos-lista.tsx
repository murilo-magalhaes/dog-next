import Link from 'next/link';

export type Produto = {
  id?: number;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: 0 | 1;
};

export default async function ProdutosLista() {
  const response = await fetch('https://api.origamid.online/produtos', {
    cache: 'no-store',
  });
  if (!response.ok) throw new Error('Erro ao carregar os produtos');

  const produtos = (await response.json()) as Produto[];

  return (
    <ul>
      {produtos.map(p => (
        <li key={p.id}>
          <Link href={`/produtos/${p.id}`}>
            {p.nome}: R$ {p.preco}
          </Link>
        </li>
      ))}
    </ul>
  );
}
