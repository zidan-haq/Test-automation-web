# language: pt
@OverView @EndToEnd
Funcionalidade: 

  Contexto: 
    Dado que o usuario esteja logado no sistema na pagina principal "standard_user" "secret_sauce"
    E que tenha produtos no carrinho
    E que tenha fechado o carrinho
    E que ja tenha feito o checkout

  @checkTotal
  Cenário: Verificar total
    Quando a pagina overview estiver carregada
    Entao verificar o total da compra
    E cancelar a compra
