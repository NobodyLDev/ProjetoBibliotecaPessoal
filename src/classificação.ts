import type { Livro } from './index';

export function exibirPorDecada(livros: Livro[]): void {
  console.log('=== Livros por Década ===');
  const decadas: { [key: number]: Livro[] } = {};

  livros.forEach(livro => {
    const decada = Math.floor(livro.ano / 10) * 10;
    if (!decadas[decada]) {
      decadas[decada] = [];
    }
    decadas[decada].push(livro);
  });

  for (const decada in decadas) {
    console.log(`Década ${decada}:`);
    const livrosDecada = decadas[decada]!;
    livrosDecada.forEach(livro => {
      console.log(`  - "${livro.titulo}" por ${livro.autor} (${livro.ano})`);
    });
  }
  console.log('=========================\n');
}