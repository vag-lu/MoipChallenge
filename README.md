# MoipChallenge
Desafio técnico proposto pelo Moip.

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
```json
body: {
  client_id: "Id do cliente",
  amount: "Valor da transação",
  buyer_name: buyer_name.value,
  buyer_cpf: buyer_cpf.value,
  buyer_email: buyer_email.value
}
```
