# Biblioteca Pessoal

Sistema de gerenciamento de biblioteca pessoal desenvolvido em TypeScript. Permite cadastrar, remover, buscar livros, marcar como lidos, visualizar estatísticas e classificar por décadas.

## Funcionalidades

- **Cadastro e Remoção**: Adicionar e remover livros da biblioteca
- **Consulta e Exibição**: Exibir todos os livros, buscar por título, listar por autor
- **Status de Leitura**: Marcar livros como lidos com avaliação, listar lidos e pendentes
- **Estatísticas**: Total de livros, páginas, médias, autor mais lido
- **Classificação**: Agrupar livros por décadas

## Estrutura do Projeto

src/
├── index.ts              # Dados iniciais e demo
├── cadastroeRemocao.ts   # Funções de cadastro e remoção
├── consultaeExibição.ts  # Funções de consulta e exibição
├── statusLeitura.ts      # Funções de status de leitura
├── estatisticas.ts       # Funções estatísticas
└── classificação.ts      # Funções de classificação

## Tecnologias

- TypeScript
- Node.js
- ts-node (para execução direta)

### Pré-requisitos

- Node.js instalado
- npm ou yarn

### Instalação

1. Clone ou baixe o projeto
2. Instale as dependências:
npm install

### Execução
compile e execute:
npm run build
npm start

## Desenvolvimento

Para desenvolvimento, use:
npm run dev

## Desenvolvido por

Letícia Schiffel Mariano  
Aluna do curso de ADS - 2º Semestre