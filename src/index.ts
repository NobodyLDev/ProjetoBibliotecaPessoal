export type Livro = {
  titulo: string;
  autor: string;
  ano: number;
  paginas: number;
  lido: boolean;
  avaliacao: number;
};

export const livros: Livro[] = [
  { titulo: 'O Hobbit', autor: 'J.R.R. Tolkien', ano: 1937, paginas: 310, lido: true, avaliacao: 5 },
  { titulo: 'Clean Code', autor: 'Robert C. Martin', ano: 2008, paginas: 464, lido: true, avaliacao: 4 },
  { titulo: '1984', autor: 'George Orwell', ano: 1949, paginas: 328, lido: false, avaliacao: 0 },
  { titulo: 'Dom Casmurro', autor: 'Machado de Assis', ano: 1899, paginas: 256, lido: true, avaliacao: 5 },
  { titulo: 'O Nome do Vento', autor: 'Patrick Rothfuss', ano: 2007, paginas: 662, lido: false, avaliacao: 0 },
];

// Demo final - Exercitando todas as funções
import { adicionarLivro, removerLivro } from './cadastroeRemocao';
import { exibirBiblioteca, buscarPorTitulo, listarPorAutor } from './consultaeExibição';
import { marcarComoLido, listarLidos, listarPendentes } from './statusLeitura';
import { exibirEstatisticas } from './estatisticas';
import { exibirPorDecada } from './classificação';

// 1. Exibir biblioteca inicial
exibirBiblioteca(livros);

// 2. Adicionar livros
console.log(' Adicionar Livros: ');
adicionarLivro(livros, 'O Senhor dos Anéis', 'J.R.R. Tolkien', 1954, 1216);
adicionarLivro(livros, 'JavaScript: The Good Parts', 'Douglas Crockford', 2008, 176);
adicionarLivro(livros, 'A Revolução dos Bichos', 'George Orwell', 1945, 112);
console.log();

// 3. Remover um livro
console.log(' Remover Livros:');
removerLivro(livros, 2); // Remove "1984"
console.log();

// 4. Marcar como lido
console.log(' Marcando como lido: ');
marcarComoLido(livros, 5, 5); // Marcar "A Revolução dos Bichos"
marcarComoLido(livros, 6, 4); // Marcar "JavaScript: The Good Parts"
console.log();

// 5. Buscar por título
console.log('Busca por título "Hobbit":');
const resultadosBusca = buscarPorTitulo(livros, 'Hobbit');
resultadosBusca.forEach(livro => console.log(`  - "${livro.titulo}" por ${livro.autor}`));
console.log();

// 6. Listar por autor
console.log('Livros de Tolkien:');
const livrosTolkien = listarPorAutor(livros, 'Tolkien');
livrosTolkien.forEach(titulo => console.log(`  - ${titulo}`));
console.log();

// 7. Listar lidos e pendentes
console.log('Livros lidos:');
const lidos = listarLidos(livros);
lidos.forEach(livro => console.log(`  - "${livro.titulo}" (Avaliação: ${livro.avaliacao})`));
console.log();

console.log('Livros pendentes:');
const pendentes = listarPendentes(livros);
pendentes.forEach(livro => console.log(`  - "${livro.titulo}"`));
console.log();

// 8. Estatísticas
exibirEstatisticas(livros);

// 9. Classificação por década
exibirPorDecada(livros);


