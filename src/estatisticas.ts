import type { Livro } from './index';

export function totalLivros(livros: Livro[]): number {
  return livros.length;
}

export function totalPaginas(livros: Livro[]): number {
  return livros.reduce((total, livro) => total + livro.paginas, 0);
}

export function mediaPaginas(livros: Livro[]): number {
  if (livros.length === 0) return 0;
  return totalPaginas(livros) / livros.length;
}

export function livrosLidos(livros: Livro[]): number {
  return livros.filter(livro => livro.lido).length;
}

export function mediaAvaliacoes(livros: Livro[]): number {
  const lidos = livros.filter(livro => livro.lido);
  if (lidos.length === 0) return 0;
  const soma = lidos.reduce((total, livro) => total + livro.avaliacao, 0);
  return soma / lidos.length;
}

export function autorMaisLido(livros: Livro[]): string {
  const autores = livros.filter(livro => livro.lido).map(livro => livro.autor);
  if (autores.length === 0) return 'Nenhum livro lido';

  const contagem: { [key: string]: number } = {};
  autores.forEach(autor => {
    contagem[autor] = (contagem[autor] || 0) + 1;
  });

  let maxAutor = '';
  let maxCount = 0;
  for (const autor in contagem) {
    const count = contagem[autor]!;
    if (count > maxCount) {
      maxCount = count;
      maxAutor = autor;
    }
  }
  return maxAutor;
}

export function exibirEstatisticas(livros: Livro[]): void {
  console.log('=== Estatísticas da Biblioteca ===');
  console.log(`Total de livros: ${totalLivros(livros)}`);
  console.log(`Total de páginas: ${totalPaginas(livros)}`);
  console.log(`Média de páginas por livro: ${mediaPaginas(livros).toFixed(2)}`);
  console.log(`Livros lidos: ${livrosLidos(livros)}`);
  console.log(`Média de avaliações: ${mediaAvaliacoes(livros).toFixed(2)}`);
  console.log(`Autor mais lido: ${autorMaisLido(livros)}`);
  console.log('===================================\n');
}