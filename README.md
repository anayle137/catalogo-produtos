# Catálogo de Produtos

Um sistema simples de catálogo de produtos com um frontend em React e um backend em Node.js, totalmente containerizado com Docker para facilitar a execução e a portabilidade.

## Tecnologias Utilizadas

-   **Frontend**: React, TypeScript, Vite, Tailwind CSS
-   **Backend**: Node.js, TypeScript, Express, Knex.js
-   **Banco de Dados**: MySQL
-   **Containerização**: Docker & Docker Compose

---

## Como Executar o Projeto

Para executar este projeto, você precisa ter o Docker e o Docker Compose instalados na sua máquina.

-   [Instalar Docker Desktop](https://www.docker.com/get-started)

Com os pré-requisitos instalados, siga os passos abaixo.

### 1. Clonar o Repositório

Primeiro, clone este repositório para a sua máquina local:
```bash
git clone <https://github.com/anayle137/catalogo-produtos>
cd catalogo-produtos
```

### 2. Iniciar os Containers

O Docker Compose vai orquestrar toda a construção das imagens e a inicialização dos serviços (frontend, backend e banco de dados).

Na pasta raiz do projeto, execute o seguinte comando:
```bash
docker-compose up --build
```
Este comando irá:
-   Construir as imagens do `frontend` e do `backend`.
-   Iniciar os três containers.
-   Conectar os serviços em uma rede interna do Docker.

Você verá os logs de todos os serviços no seu terminal.

### 3. Executar as Migrações do Banco

Com os containers no ar, o banco de dados está rodando, mas ainda está vazio. Precisamos criar as tabelas.

**Abra um novo terminal**, navegue até a mesma pasta do projeto e execute:
```bash
docker-compose exec backend npm run knex -- migrate:latest
```
Este comando executa as migrações do Knex dentro do container do `backend`, preparando o banco de dados para uso.

### 4. Acessar a Aplicação

Pronto! A aplicação está totalmente configurada e no ar.

Abra seu navegador e acesse: **[http://localhost](http://localhost)**

---