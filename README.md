# projeto20-driviagens
# Top News
Aplicação de back-end para o desafio técnico da vaga de back-end node júnior. Neste projeto, você poderá gerenciar o back-end de uma aplicação relacionada a viagens, implementando funcionalidades essenciais através de requisições HTTP(s) seguindo a convenção REST.

# Demo
[Link do projeto]()

# Como funciona?
Este projeto é uma API REST desenvolvida para atender a aplicação de viagens da Driviagens. A principal entidade do sistema é passenger, e outras entidades como cities, flights, e travels também estão presentes. As características dessas entidades estão definidas no arquivo de modelagem do banco de dados.

Para cada entidade, foram criadas rotas específicas:

- POST /passengers: Cria um novo passageiro. Deve receber um corpo no formato:
  ```
  {
    "firstName": "Joana",
    "lastName": "Alves"
  }
  ```
O primeiro nome e o último nome devem ter no mínimo 2 caracteres e no máximo 100.
Ambos os campos são obrigatórios.

- POST /cities: Cria uma nova cidade. Deve receber um corpo no formato:
   ```
  {
    "name": "Salvador"
  }
  ```
O nome da cidade é obrigatório e deve ter no mínimo 2 caracteres e no máximo 50.
Não é permitido adicionar cidades com nomes repetidos, caso isso aconteça, será retornado o erro 409 (Conflict).

- POST /flights: Cria um novo voo. Deve receber um corpo no formato:
  ```
  {
    "origin": 1,
    "destination": 5,
    "date": "24-12-2023"
  }
  ```

O formato esperado de data é: dd-mm-aaaa. Caso não seja, o erro será tratado pelo Joi e retornará o erro 422 (Unprocessable Entity).
As cidades de origem e destino devem ser IDs de cidades existentes na tabela cities. Caso não sejam, será retornado o erro 404 (Not Found).
Origem e destino devem ser diferentes. Caso não seja, será retornado o erro 409 (Conflict).
A data do voo deve ser maior do que a data atual, caso não seja, será retornado o erro 422 (Unprocessable Entity)

- POST /travels: Cria uma nova viagem. Deve receber um corpo no formato:
  ```
  {
   "passengerId": 12,
    "flightId": 8
  }
  ```
  O ID do passageiro e do voo devem ser IDs existentes. Caso não sejam, será retornado o erro 404 (Not Found).
  
- GET /flights: Retorna a relação dos voos com os nomes das cidades de origem e destino, bem como a data do voo e o ID.

O resultado é ordenado por datas, da mais próxima para a mais distante.
Aceita as queries origin, destination, bigger-date, e smaller-date para filtrar a busca. Pode usar todas as queries juntas.

- GET /passengers/travels: Retorna a relação de todos os passageiros com suas respectivas quantidades de viagens.

O resultado é ordenado por viagens, do maior para o menor.
Aceita a query name para filtrar a busca.


# Motivação (opcional)
Este projeto foi desenvolvido para praticar a construção de uma API REST usando o ecossistema Node e Express, juntamente com as tecnologias TypeScript e Prisma.

# Tecnologias utilizadas
Para este projeto, foram utilizadas:

- Node (versão 18.17.0);
- Express;
- TypeScript;
- Postgres;
- MongoDb;
- Joi;

# Como rodar em desenvolvimento
Para executar este projeto em desenvolvimento, é necessário seguir os passos abaixo:

Para executar este projeto em desenvolvimento, siga os passos abaixo:

Clone o repositório.
Baixe as dependências necessárias com o comando: npm install.
Crie o arquivo .env com base no .env.example.
Para executar os testes, será necessário criar outro arquivo .env.test com base no .env.example.
O arquivo .env é composto pela seguinte propriedade:
```
  DATABASE_URL="postgresql://postgres..."
```
A propriedade DATABASE_URL é usada para fazer a conexão com o banco de dados.
Execute o Prisma para criar o banco de dados e as tabelas necessárias: npx prisma migrate dev.
Para rodar o projeto em desenvolvimento, execute o comando npm run dev.
Testes manuais podem ser feitos através do Thunder Client. Na raiz do projeto há uma coleção chamada thunder-collection.json que pode ser carregada na ferramenta.
