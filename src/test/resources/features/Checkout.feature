# language: pt
@Checkout @EndToEnd
Funcionalidade: 

  Contexto: 
    Dado que o usuario esteja logado no sistema na pagina principal "standard_user" "secret_sauce"
    E que tenha produtos no carrinho
    E que tenha fechado o carrinho
    E que a pagina checkout esteja carregada

  @fillDatas
  Esquema do Cenário: Preencher dados
    Quando adicionar o primeiro nome como "<first>"
    E adicionar o sobrenome como "<last>"
    E adicionar o codigo postal como "<postal>"
    Entao cancelar operacao

    Exemplos: 
      | first  | last  | postal |
      | Ayrton | senna | f1     |
