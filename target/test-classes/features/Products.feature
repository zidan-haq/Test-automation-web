# language: pt
@Products @EndToEnd
Funcionalidade: 

  Contexto: 
    #Atenção! Coloquei o nome do usuário e senha direto porque os argumentos <user> e <pass> estão apresentando erro aqui no contexto
    Dado que o usuario esteja logado no sistema na pagina principal "standard_user" "secret_sauce"

  @AddProducts
  Esquema do Cenario: Realizar login
    Quando trocar a ordem de apresentacao do filtro para "<option>"
    Entao verificar a lista de produtos
    E clicar no botao adicionar de cada um deles
    E verificar se foram adicionados no carrinho

    Exemplos: 
      | user                    | pass         | option              |
      | standard_user           | secret_sauce | Price (low to high) |
      | locked_out_user         | secret_sauce | Name (A to Z)       |
      | problem_user            | secret_sauce | Name (Z to A)       |
      | performance_glitch_user | secret_sauce | Price (high to low) |
