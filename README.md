# MoipChallenge
Desafio técnico proposto pelo Moip.

## Requisitos de banco
  Esta API utiliza o PostgresDB. Faça o download do banco em https://www.postgresql.org/download/. Crie um banco de dados com o nome de `moip_ch`. Crie o usuário `vagner` com o password `vagner`. As tabelas do banco serão criadas pela API.

## Setup 
* Clone este repositório: `git@github.com:vag-lu/MoipChallenge.git`
* Acesse a pasta: `cd MoipCheckout`
* Installe as dependências: `npm install`
* Inicie o servidor: `npm start`
* Verifique se a API está em execução acessando: `http://localhost:3000`

## Rotas
* Para transações via boleto utilize a rota `/boleto`.
* Para transações via carão de crádito utilize `/creditcard`.
  
## Requisições
### POST
Requisição POST de transações do tipo Boleto para a API:
```
body: {
  client_id: "Id do cliente",
  amount: "Valor da transação",
  buyer_name: "Nome do comprador",
  buyer_cpf: "CPF do comprador",
  buyer_email: "Email do comprador"
}
```
Retorno da API:
```
{
  id_transactio: "Id da transação",
  return: "Para Boleto esse campo vai possuir o numero do boleto (numero aleatório)"
}
```

Requisição POST de transações do tipo Cartão de Crédito para a API:
```
body: {
  client_id: "Id do cliente",
  amount: "Valor total da transação",
  buyer_name: "Nome do comprador",
  buyer_cpf: "CPF do comprador",
  buyer_email: "Email do comprador",
  card_number: "Numero do cartão",
  cvv: "CVV do cartão",
  card_holder: "Nome do portador do cartão",
  exp_date: "Data de experação do cartão"
}
```
Retorno da API:
```
{
  id_transactio: "Id da transação",
  return: "Para Cartão deCrédito, esse campo vai possuir o status da transação (aprovada ou recusada)"
}
```

### GET
  Em qualquer uma das rotas `/boleto` ou `/creditcard` a requisição GET irá retornar todas as transações do tipo escolhido. Para trazer uma transação expecífica utilize `/boleto/<id>` ou `/creditcard/<id>`.


