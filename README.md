# Projeto Full-Stack Flask-React

## Visão geral

Este projeto é um aplicativo full-stack que integra:

- API REST com Flask: Fornece informações sobre acomodações, permitindo filtragem por cidade.
- Front-end com React: Consome a API, exibe os resultados, possibilita a busca por cidade e permite favoritar acomodações (armazenadas no localStorage).

## Executando o Projeto com Docker

### Pré-requisitos

- Docker e Docker Compose devem estar instalados.
- Verifique com

```bash
docker --version
docker-compose --version
```

### Build and Run

1. Navegue até a raiz do projeto (flask-react/).
2. Execute o comando:

```bash
docker-compose up --build
```

3. Aguarde o processo de build e inicialização dos containers.

### Acesso

- Front-end (React): http://localhost:3000
- API (Flask): http://localhost:5000

### Para Parar o Projeto

Pressione `Ctrl + C` no terminal ou execute:

```bash
docker-compose down
```

### Funcionalidades Adicionais

- Filtragem por Cidade:
  A API suporta filtragem de acomodações via parâmetro de consulta cidade.
  Exemplo:
  http://localhost:5000/acomodacoes?cidade=Florianópolis

- Acomodações Favoritas:
  As acomodações podem ser favoritada no front-end, e os dados são armazenados no localStorage do navegador.

- Detalhes da Acomodação:
  Cada acomodação possui uma página de detalhes com informações completas.

- Design Responsivo:
  O projeto utiliza Material UI (ou SCSS personalizado) para um design atrativo e responsivo.
