import type { Livro } from './index';

export function exibirBiblioteca(livros: Livro[]): void {
  console.log('=== Biblioteca Pessoal ===');
  livros.forEach((livro, index) => {
    console.log(`${index + 1}. "${livro.titulo}" por ${livro.autor} (${livro.ano}) - ${livro.paginas} páginas - ${livro.lido ? 'Lido' : 'Não lido'} - Avaliação: ${livro.avaliacao}`);
  });
  console.log('==========================\n');
}

export function buscarPorTitulo(livros: Livro[], titulo: string): Livro[] {
  return livros.filter(livro => livro.titulo.toLowerCase().includes(titulo.toLowerCase()));
}

export function listarPorAutor(livros: Livro[], autor: string): string[] {
  return livros
    .filter(livro => livro.autor.toLowerCase().includes(autor.toLowerCase()))
    .map(livro => livro.titulo);
}