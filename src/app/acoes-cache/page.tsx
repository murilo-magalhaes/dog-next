import Atualizar from '@/components/atualizar';

type Acao = {
  atualizada: string;
  nome: string;
  preco: number;
};

/** Exportando uma constante com nome revalidate, todos os fetchs
 * dessa página terão o tempo de revalidação determinado, exceto os
 * que forem definidos no corpo do fetch
 */
export const revalidate = 5;

export default async function AcoesPage() {
  const response = await fetch('https://api.origamid.online/acoes/lua', {
    // cache: 'no-store',
    next: {
      // revalidate: 5,
      tags: ['acoes-cache'],
    },
  });

  const acao = (await response.json()) as Acao;

  return (
    <main>
      <h1>Acoes</h1>
      <Atualizar />
      <h2>{acao.nome}</h2>
      <p>Preço: {acao.preco}</p>
      <p>Atualizada: {acao.atualizada}</p>
    </main>
  );
}
