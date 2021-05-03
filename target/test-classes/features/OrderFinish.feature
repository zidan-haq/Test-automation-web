# language: pt
@OrderFinish @EndToEnd
Funcionalidade: 

  Contexto: 
    Dado que o usuario esteja logado no sistema na pagina principal "standard_user" "secret_sauce"
    E que tenha produtos no carrinho
    E que tenha fechado o carrinho
    E que ja tenha feito o checkout
    E que os valores estejam de acordo com o esperado

  @GoBack
  Cenário: Voltar ao inicio
    Quando a pagina de conclusao do pedido estiver carregada
    Entao voltar para a pagina principal
