import type { Livro } from './index';

export function marcarComoLido(livros: Livro[], indice: number, avaliacao: number): void {
  if (indice < 0 || indice >= livros.length) {
    console.log('Índice inválido.');
    return;
  }
  if (avaliacao < 1 || avaliacao > 5) {
    console.log('Avaliação deve ser entre 1 e 5.');
    return;
  }

  const livro = livros[indice]!;
  livro.lido = true;
  livro.avaliacao = avaliacao;
  console.log(`Livro "${livro.titulo}" marcado como lido com avaliação ${avaliacao}.`);
}

export function listarLidos(livros: Livro[]): Livro[] {
  return livros.filter(livro => livro.lido);
}

export function listarPendentes(livros: Livro[]): Livro[] {
  return livros.filter(livro => !livro.lido);
}