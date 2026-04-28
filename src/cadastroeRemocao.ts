import { Livro } from './index';

export function adicionarLivro(
  livros: Livro[],
  titulo: string,
  autor: string,
  ano: number,
  paginas: number,
): void {
  if (ano <= 0) {
    console.log('Erro: Ano deve ser maior que 0.');
    return;
  }
  if (paginas <= 0) {
    console.log('Erro: Número de páginas deve ser maior que 0.');
    return;
  }

  const livro: Livro = {
    titulo,
    autor,
    ano,
    paginas,
    lido: false,
    avaliacao: 0,
  };

  livros.push(livro);
  console.log(`Livro "${titulo}" adicionado com sucesso!`);
}

export function removerLivro(livros: Livro[], indice: number): void {
  if (indice < 0 || indice >= livros.length) {
    console.log('Índice inválido. Nenhum livro removido.');
    return;
  }

  const removidos = livros.splice(indice, 1);
  const removido = removidos[0];
  if (!removido) {
    console.log('Erro inesperado ao remover o livro.');
    return;
  }

  console.log(`Livro "${removido.titulo}" removido com sucesso!`);
}