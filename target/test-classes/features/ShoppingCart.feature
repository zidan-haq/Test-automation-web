# language: pt
@ShoppingCart @EndToEnd
Funcionalidade: 

  Contexto: 
    Dado que o usuario esteja logado no sistema na pagina principal "standard_user" "secret_sauce"
    E que tenha produtos no carrinho
    E que tenha clicado no carrinho de compras
    E que a pagina esteja carregada

  @CartPage
  Cenário: Verificar carrinho
    Quando comparar a quantidade de itens na lista e no carrinho
    E remover todos os itens da lista
    Entao voltar para a pagina dos produtos
