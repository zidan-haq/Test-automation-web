# language: pt
@Login @EndToEnd
Funcionalidade: 

  Contexto: 
    Dado que o usuario esteja na pagina de login do site

  @EnterTheSite
  Esquema do Cenario: Realizar login
    Quando adicionar o nome de usuario como "<user>"
    E adicionar a senha como "<pass>"
    E clicar no botao Login
    Entao o sistema deve autorizar o login, e mostrar a pagina Products

    Exemplos: 
      | user                    | pass         |
      | standard_user           | secret_sauce |
      | problem_user            | secret_sauce |
      | performance_glitch_user | secret_sauce |
