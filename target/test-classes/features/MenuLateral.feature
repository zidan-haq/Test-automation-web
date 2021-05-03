# language: pt
@Menu @EndToEnd
Funcionalidade: 

  Contexto:
    Dado que o usuario esteja logado no sistema na pagina principal "standard_user" "secret_sauce"
    E que tenha clicado no botao de menu

  @AllItems
  Cenario: Clicar em All items
    Quando clicar na opcao ALL ITEMS
    Entao a pagina Products deve aparecer

	@About
  Cenario: Clicar em About
    Quando clicar na opcao ABOUT
    Entao a pagina ABOUT deve aparecer

	@Logout
  Cenario: Clicar em Logout
    Quando clicar na opcao LOGOUT
    Entao o usuario deve ser deslogado

	@ResetAppState
	Cenario: Clicar em Reset App State
    Quando clicar na opcao RESET APP STATE
    Entao o carrinho deve ficar vazio
    E a pagina principal nao pode possuir botoes REMOVE

