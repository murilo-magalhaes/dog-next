'use client';

import { adicionarProduto } from '@/actions/adicionar-produto';
import { Produto } from '@/components/produtos/produtos-lista';
import React, { FormEvent } from 'react';

export default function AdicionarProduto() {
  const [produto, setProduto] = React.useState<Produto>({
    nome: '',
    descricao: '',
    estoque: 0,
    preco: 0,
    importado: 0,
  });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    adicionarProduto(produto);
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <label htmlFor="name">Nome</label>
      <input
        type="text"
        name="name"
        placeholder="Ex.: Notebook Azul"
        value={produto.nome}
        onChange={e => setProduto({ ...produto, nome: e.target.value })}
      />
      <label htmlFor="preco">Preço</label>
      <input
        type="number"
        step={0.01}
        name="preco"
        placeholder="Ex.: 0,00"
        value={produto.preco}
        onChange={e =>
          setProduto({ ...produto, preco: Number(e.target.value) })
        }
      />
      <label htmlFor="descricao">Descrição</label>
      <input
        type="text"
        name="descricao"
        placeholder="Ex.: Notebook de alta qualidade..."
        value={produto.descricao}
        onChange={e => setProduto({ ...produto, descricao: e.target.value })}
      />
      <label htmlFor="estoque">Estoque</label>
      <input
        type="number"
        name="estoque"
        placeholder="Ex.: 0"
        value={produto.estoque}
        onChange={e =>
          setProduto({ ...produto, estoque: Number(e.target.value) })
        }
      />
      <input
        type="checkbox"
        name="importado"
        value={produto.importado}
        // onClick={
        //   e => console.log(e.currentTarget.value)

        //   // setProduto({ ...produto, importado:  })
        // }
        onChange={e => {
          setProduto(prevState => {
            return {
              ...prevState,
              importado: prevState.importado === 0 ? 1 : 0,
            };
          });
        }}
      />
      Importado
      <button type="submit">Adicionar</button>
    </form>
  );
}
