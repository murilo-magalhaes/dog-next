import ProdutosLista from '@/components/produtos/produtos-lista';
import { Suspense } from 'react';

export default async function ProdutosPage() {
  return (
    <main>
      <h1>Produtos</h1>
      <Suspense fallback={'Carregando...'}>
        <ProdutosLista />
      </Suspense>
    </main>
  );
}
