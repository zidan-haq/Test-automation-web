$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Checkout.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "",
  "description": "",
  "id": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@Checkout"
    },
    {
      "line": 2,
      "name": "@EndToEnd"
    }
  ]
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Preencher dados",
  "description": "",
  "id": ";preencher-dados",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 11,
      "name": "@fillDatas"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "adicionar o primeiro nome como \"\u003cfirst\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "adicionar o sobrenome como \"\u003clast\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "adicionar o codigo postal como \"\u003cpostal\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "cancelar operacao",
  "keyword": "Entao "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": ";preencher-dados;",
  "rows": [
    {
      "cells": [
        "first",
        "last",
        "postal"
      ],
      "line": 19,
      "id": ";preencher-dados;;1"
    },
    {
      "cells": [
        "Ayrton",
        "senna",
        "f1"
      ],
      "line": 20,
      "id": ";preencher-dados;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 11688249017,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja logado no sistema na pagina principal \"standard_user\" \"secret_sauce\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "que tenha produtos no carrinho",
  "keyword": "E "
});
formatter.step({
  "line": 8,
  "name": "que tenha fechado o carrinho",
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "que a pagina checkout esteja carregada",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 60
    },
    {
      "val": "secret_sauce",
      "offset": 76
    }
  ],
  "location": "LoginSteps.queOUsuarioEstejaLogadoNoSistemaNaPaginaPrincipal(String,String)"
});
formatter.result({
  "duration": 3743715530,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStep.queTenhaProdutosNoCarrinho()"
});
formatter.result({
  "duration": 1106356684,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartSteps.queTenhaFechadoOCarrinho()"
});
formatter.result({
  "duration": 625879820,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.queAPaginaCheckoutEstejaCarregada()"
});
formatter.result({
  "duration": 311534426,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Preencher dados",
  "description": "",
  "id": ";preencher-dados;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 11,
      "name": "@fillDatas"
    },
    {
      "line": 2,
      "name": "@Checkout"
    },
    {
      "line": 2,
      "name": "@EndToEnd"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "adicionar o primeiro nome como \"Ayrton\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "adicionar o sobrenome como \"senna\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "adicionar o codigo postal como \"f1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "cancelar operacao",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "Ayrton",
      "offset": 32
    }
  ],
  "location": "CheckoutSteps.adicionarOPrimeiroNomeComo(String)"
});
formatter.result({
  "duration": 529722696,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "senna",
      "offset": 28
    }
  ],
  "location": "CheckoutSteps.adicionarOSobrenomeComo(String)"
});
formatter.result({
  "duration": 279511483,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "f1",
      "offset": 32
    }
  ],
  "location": "CheckoutSteps.adicionarOCodigoPostalComo(String)"
});
formatter.result({
  "duration": 112115379,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.cancelarOperacao()"
});
formatter.result({
  "duration": 198784769,
  "status": "passed"
});
formatter.after({
  "duration": 131229684,
  "status": "passed"
});
formatter.uri("features/Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "",
  "description": "",
  "id": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 2,
      "name": "@EndToEnd"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Realizar login",
  "description": "",
  "id": ";realizar-login",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 8,
      "name": "@EnterTheSite"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "adicionar o nome de usuario como \"\u003cuser\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "adicionar a senha como \"\u003cpass\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o sistema deve autorizar o login, e mostrar a pagina Products",
  "keyword": "Entao "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": ";realizar-login;",
  "rows": [
    {
      "cells": [
        "user",
        "pass"
      ],
      "line": 16,
      "id": ";realizar-login;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 17,
      "id": ";realizar-login;;2"
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce"
      ],
      "line": 18,
      "id": ";realizar-login;;3"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 19,
      "id": ";realizar-login;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 846483828,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina de login do site",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.queOUsuarioEstejaNaPaginaDeLoginDoSite()"
});
formatter.result({
  "duration": 920503401,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Realizar login",
  "description": "",
  "id": ";realizar-login;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 2,
      "name": "@EndToEnd"
    },
    {
      "line": 8,
      "name": "@EnterTheSite"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "adicionar o nome de usuario como \"standard_user\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "adicionar a senha como \"secret_sauce\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o sistema deve autorizar o login, e mostrar a pagina Products",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 34
    }
  ],
  "location": "LoginSteps.adicionarONomeDeUsuarioComo(String)"
});
formatter.result({
  "duration": 312625702,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 24
    }
  ],
  "location": "LoginSteps.adicionarASenhaComo(String)"
});
formatter.result({
  "duration": 136822927,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoLogin()"
});
formatter.result({
  "duration": 476841576,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.oSistemaDeveAutorizarOLoginEMostrarAPaginaProducts()"
});
formatter.result({
  "duration": 782822156,
  "status": "passed"
});
formatter.after({
  "duration": 119088784,
  "status": "passed"
});
formatter.before({
  "duration": 795732455,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina de login do site",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.queOUsuarioEstejaNaPaginaDeLoginDoSite()"
});
formatter.result({
  "duration": 1004007586,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Realizar login",
  "description": "",
  "id": ";realizar-login;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 2,
      "name": "@EndToEnd"
    },
    {
      "line": 8,
      "name": "@EnterTheSite"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "adicionar o nome de usuario como \"problem_user\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "adicionar a senha como \"secret_sauce\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o sistema deve autorizar o login, e mostrar a pagina Products",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "problem_user",
      "offset": 34
    }
  ],
  "location": "LoginSteps.adicionarONomeDeUsuarioComo(String)"
});
formatter.result({
  "duration": 347416748,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 24
    }
  ],
  "location": "LoginSteps.adicionarASenhaComo(String)"
});
formatter.result({
  "duration": 157215892,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoLogin()"
});
formatter.result({
  "duration": 286572825,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.oSistemaDeveAutorizarOLoginEMostrarAPaginaProducts()"
});
formatter.result({
  "duration": 261414859,
  "status": "passed"
});
formatter.after({
  "duration": 154480735,
  "status": "passed"
});
formatter.before({
  "duration": 917042297,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina de login do site",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.queOUsuarioEstejaNaPaginaDeLoginDoSite()"
});
formatter.result({
  "duration": 943584360,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Realizar login",
  "description": "",
  "id": ";realizar-login;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 2,
      "name": "@EndToEnd"
    },
    {
      "line": 8,
      "name": "@EnterTheSite"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "adicionar o nome de usuario como \"performance_glitch_user\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "adicionar a senha como \"secret_sauce\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o sistema deve autorizar o login, e mostrar a pagina Products",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "performance_glitch_user",
      "offset": 34
    }
  ],
  "location": "LoginSteps.adicionarONomeDeUsuarioComo(String)"
});
formatter.result({
  "duration": 443025544,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 24
    }
  ],
  "location": "LoginSteps.adicionarASenhaComo(String)"
});
formatter.result({
  "duration": 367420101,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoLogin()"
});
formatter.result({
  "duration": 5391041263,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.oSistemaDeveAutorizarOLoginEMostrarAPaginaProducts()"
});
formatter.result({
  "duration": 429512725,
  "status": "passed"
});
formatter.after({
  "duration": 72879097,
  "status": "passed"
});
formatter.uri("features/MenuLateral.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "",
  "description": "",
  "id": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@Menu"
    },
    {
      "line": 2,
      "name": "@EndToEnd"
    }
  ]
});
formatter.before({
  "duration": 1102560729,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja logado no sistema na pagina principal \"standard_user\" \"secret_sauce\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "que tenha clicado no botao de menu",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 60
    },
    {
      "val": "secret_sauce",
      "offset": 76
    }
  ],
  "location": "LoginSteps.queOUsuarioEstejaLogadoNoSistemaNaPaginaPrincipal(String,String)"
});
formatter.result({
  "duration": 2349312117,
  "status": "passed"
});
formatter.match({
  "location": "MenuSteps.queTenhaClicadoNoBotaoDeMenu()"
});
formatter.result({
  "duration": 364512091,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Clicar em All items",
  "description": "",
  "id": ";clicar-em-all-items",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 9,
      "name": "@AllItems"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "clicar na opcao ALL ITEMS",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "a pagina Products deve aparecer",
  "keyword": "Entao "
});
formatter.match({
  "location": "MenuSteps.clicarNaOpcaoALLITEMS()"
});
formatter.result({
  "duration": 382458659,
  "status": "passed"
});
formatter.match({
  "location": "MenuSteps.aPaginaProductsDeveAparecer()"
});
formatter.result({
  "duration": 59981764,
  "status": "passed"
});
formatter.after({
  "duration": 71606050,
  "status": "passed"
});
formatter.before({
  "duration": 981963872,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja logado no sistema na pagina principal \"standard_user\" \"secret_sauce\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "que tenha clicado no botao de menu",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 60
    },
    {
      "val": "secret_sauce",
      "offset": 76
    }
  ],
  "location": "LoginSteps.queOUsuarioEstejaLogadoNoSistemaNaPaginaPrincipal(String,String)"
});
formatter.result({
  "duration": 2275808962,
  "status": "passed"
});
formatter.match({
  "location": "MenuSteps.queTenhaClicadoNoBotaoDeMenu()"
});
formatter.result({
  "duration": 643055806,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Clicar em About",
  "description": "",
  "id": ";clicar-em-about",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 14,
      "name": "@About"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "clicar na opcao ABOUT",
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "a pagina ABOUT deve aparecer",
  "keyword": "Entao "
});
formatter.match({
  "location": "MenuSteps.clicarNaOpcaoABOUT()"
});
formatter.result({
  "duration": 7506946443,
  "status": "passed"
});
formatter.match({
  "location": "MenuSteps.aPaginaABOUTDeveAparecer()"
});
formatter.result({
  "duration": 84060413,
  "status": "passed"
});
formatter.after({
  "duration": 71265179,
  "status": "passed"
});
formatter.before({
  "duration": 841348400,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja logado no sistema na pagina principal \"standard_user\" \"secret_sauce\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "que tenha clicado no botao de menu",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 60
    },
    {
      "val": "secret_sauce",
      "offset": 76
    }
  ],
  "location": "LoginSteps.queOUsuarioEstejaLogadoNoSistemaNaPaginaPrincipal(String,String)"
});
formatter.result({
  "duration": 1387528320,
  "status": "passed"
});
formatter.match({
  "location": "MenuSteps.queTenhaClicadoNoBotaoDeMenu()"
});
formatter.result({
  "duration": 107484074,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Clicar em Logout",
  "description": "",
  "id": ";clicar-em-logout",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 19,
      "name": "@Logout"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "clicar na opcao LOGOUT",
  "keyword": "Quando "
});
formatter.step({
  "line": 22,
  "name": "o usuario deve ser deslogado",
  "keyword": "Entao "
});
formatter.match({
  "location": "MenuSteps.clicarNaOpcaoLOGOUT()"
});
formatter.result({
  "duration": 245624749,
  "status": "passed"
});
formatter.match({
  "location": "MenuSteps.oUsuarioDeveSerDeslogado()"
});
formatter.result({
  "duration": 60876610,
  "status": "passed"
});
formatter.after({
  "duration": 67845056,
  "status": "passed"
});
formatter.before({
  "duration": 951188008,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja logado no sistema na pagina principal \"standard_user\" \"secret_sauce\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "que tenha clicado no botao de menu",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 60
    },
    {
      "val": "secret_sauce",
      "offset": 76
    }
  ],
  "location": "LoginSteps.queOUsuarioEstejaLogadoNoSistemaNaPaginaPrincipal(String,String)"
});
formatter.result({
  "duration": 1771864456,
  "status": "passed"
});
formatter.match({
  "location": "MenuSteps.queTenhaClicadoNoBotaoDeMenu()"
});
formatter.result({
  "duration": 586444919,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Clicar em Reset App State",
  "description": "",
  "id": ";clicar-em-reset-app-state",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 24,
      "name": "@ResetAppState"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "clicar na opcao RESET APP STATE",
  "keyword": "Quando "
});
formatter.step({
  "line": 27,
  "name": "o carrinho deve ficar vazio",
  "keyword": "Entao "
});
formatter.step({
  "line": 28,
  "name": "a pagina principal nao pode possuir botoes REMOVE",
  "keyword": "E "
});
formatter.match({
  "location": "MenuSteps.clicarNaOpcaoRESETAPPSTATE()"
});
formatter.result({
  "duration": 618166679,
  "status": "passed"
});
formatter.match({
  "location": "MenuSteps.oCarrinhoDeveFicarVazio()"
});
formatter.result({
  "duration": 147537049,
  "status": "passed"
});
formatter.match({
  "location": "MenuSteps.aPaginaPrincipalNaoPodePossuirBotoesREMOVE()"
});
formatter.result({
  "duration": 662157326,
  "status": "passed"
});
formatter.after({
  "duration": 152410415,
  "status": "passed"
});
formatter.uri("features/OrderFinish.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "",
  "description": "",
  "id": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@OrderFinish"
    },
    {
      "line": 2,
      "name": "@EndToEnd"
    }
  ]
});
formatter.before({
  "duration": 890758520,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja logado no sistema na pagina principal \"standard_user\" \"secret_sauce\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "que tenha produtos no carrinho",
  "keyword": "E "
});
formatter.step({
  "line": 8,
  "name": "que tenha fechado o carrinho",
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "que ja tenha feito o checkout",
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "que os valores estejam de acordo com o esperado",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 60
    },
    {
      "val": "secret_sauce",
      "offset": 76
    }
  ],
  "location": "LoginSteps.queOUsuarioEstejaLogadoNoSistemaNaPaginaPrincipal(String,String)"
});
formatter.result({
  "duration": 2312724503,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStep.queTenhaProdutosNoCarrinho()"
});
formatter.result({
  "duration": 1021478503,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartSteps.queTenhaFechadoOCarrinho()"
});
formatter.result({
  "duration": 253237804,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.queJaTenhaFeitoOCheckout()"
});
formatter.result({
  "duration": 754540949,
  "status": "passed"
});
formatter.match({
  "location": "OverViewSteps.queOsValoresEstejamDeAcordoComOEsperado()"
});
formatter.result({
  "duration": 1342352848,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Voltar ao inicio",
  "description": "",
  "id": ";voltar-ao-inicio",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 12,
      "name": "@GoBack"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "a pagina de conclusao do pedido estiver carregada",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "voltar para a pagina principal",
  "keyword": "Entao "
});
formatter.match({
  "location": "OrderFinishSteps.aPaginaDeConclusaoDoPedidoEstiverCarregada()"
});
formatter.result({
  "duration": 89040934,
  "status": "passed"
});
formatter.match({
  "location": "OrderFinishSteps.voltarParaAPaginaPrincipal()"
});
formatter.result({
  "duration": 219464893,
  "status": "passed"
});
formatter.after({
  "duration": 119971784,
  "status": "passed"
});
formatter.uri("features/OverView.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "",
  "description": "",
  "id": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@OverView"
    },
    {
      "line": 2,
      "name": "@EndToEnd"
    }
  ]
});
formatter.before({
  "duration": 842062047,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja logado no sistema na pagina principal \"standard_user\" \"secret_sauce\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "que tenha produtos no carrinho",
  "keyword": "E "
});
formatter.step({
  "line": 8,
  "name": "que tenha fechado o carrinho",
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "que ja tenha feito o checkout",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 60
    },
    {
      "val": "secret_sauce",
      "offset": 76
    }
  ],
  "location": "LoginSteps.queOUsuarioEstejaLogadoNoSistemaNaPaginaPrincipal(String,String)"
});
formatter.result({
  "duration": 1888825742,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStep.queTenhaProdutosNoCarrinho()"
});
formatter.result({
  "duration": 1048605236,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartSteps.queTenhaFechadoOCarrinho()"
});
formatter.result({
  "duration": 441783243,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.queJaTenhaFeitoOCheckout()"
});
formatter.result({
  "duration": 1031066869,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verificar total",
  "description": "",
  "id": ";verificar-total",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 11,
      "name": "@checkTotal"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "a pagina overview estiver carregada",
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "verificar o total da compra",
  "keyword": "Entao "
});
formatter.step({
  "line": 15,
  "name": "cancelar a compra",
  "keyword": "E "
});
formatter.match({
  "location": "OverViewSteps.aPaginaOverviewEstiverCarregada()"
});
formatter.result({
  "duration": 107807230,
  "status": "passed"
});
formatter.match({
  "location": "OverViewSteps.verificarOTotalDaCompra()"
});
formatter.result({
  "duration": 622402884,
  "status": "passed"
});
formatter.match({
  "location": "OverViewSteps.cancelarACompra()"
});
formatter.result({
  "duration": 202524644,
  "status": "passed"
});
formatter.after({
  "duration": 127571455,
  "status": "passed"
});
formatter.uri("features/Products.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "",
  "description": "",
  "id": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@Products"
    },
    {
      "line": 2,
      "name": "@EndToEnd"
    }
  ]
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Realizar login",
  "description": "",
  "id": ";realizar-login",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 9,
      "name": "@AddProducts"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "trocar a ordem de apresentacao do filtro para \"\u003coption\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "verificar a lista de produtos",
  "keyword": "Entao "
});
formatter.step({
  "line": 13,
  "name": "clicar no botao adicionar de cada um deles",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "verificar se foram adicionados no carrinho",
  "keyword": "E "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": ";realizar-login;",
  "rows": [
    {
      "cells": [
        "user",
        "pass",
        "option"
      ],
      "line": 17,
      "id": ";realizar-login;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce",
        "Price (low to high)"
      ],
      "line": 18,
      "id": ";realizar-login;;2"
    },
    {
      "cells": [
        "locked_out_user",
        "secret_sauce",
        "Name (A to Z)"
      ],
      "line": 19,
      "id": ";realizar-login;;3"
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce",
        "Name (Z to A)"
      ],
      "line": 20,
      "id": ";realizar-login;;4"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce",
        "Price (high to low)"
      ],
      "line": 21,
      "id": ";realizar-login;;5"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 1097354233,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#Atenção! Coloquei o nome do usuário e senha direto porque os argumentos \u003cuser\u003e e \u003cpass\u003e estão apresentando erro aqui no contexto"
    }
  ],
  "line": 7,
  "name": "que o usuario esteja logado no sistema na pagina principal \"standard_user\" \"secret_sauce\"",
  "keyword": "Dado "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 60
    },
    {
      "val": "secret_sauce",
      "offset": 76
    }
  ],
  "location": "LoginSteps.queOUsuarioEstejaLogadoNoSistemaNaPaginaPrincipal(String,String)"
});
formatter.result({
  "duration": 2172679386,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Realizar login",
  "description": "",
  "id": ";realizar-login;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@Products"
    },
    {
      "line": 2,
      "name": "@EndToEnd"
    },
    {
      "line": 9,
      "name": "@AddProducts"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "trocar a ordem de apresentacao do filtro para \"Price (low to high)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "verificar a lista de produtos",
  "keyword": "Entao "
});
formatter.step({
  "line": 13,
  "name": "clicar no botao adicionar de cada um deles",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "verificar se foram adicionados no carrinho",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "Price (low to high)",
      "offset": 47
    }
  ],
  "location": "ProductsStep.trocarAOrdemDeApresentacaoDoFiltroPara(String)"
});
formatter.result({
  "duration": 985930474,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStep.verificarAListaDeProdutos()"
});
formatter.result({
  "duration": 58115071,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStep.clicarNoBotaoAdicionarDeCadaUmDeles()"
});
formatter.result({
  "duration": 888234392,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStep.verificarSeForamAdicionadosNoCarrinho()"
});
formatter.result({
  "duration": 189098243,
  "status": "passed"
});
formatter.after({
  "duration": 134721490,
  "status": "passed"
});
formatter.before({
  "duration": 976238766,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#Atenção! Coloquei o nome do usuário e senha direto porque os argumentos \u003cuser\u003e e \u003cpass\u003e estão apresentando erro aqui no contexto"
    }
  ],
  "line": 7,
  "name": "que o usuario esteja logado no sistema na pagina principal \"standard_user\" \"secret_sauce\"",
  "keyword": "Dado "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 60
    },
    {
      "val": "secret_sauce",
      "offset": 76
    }
  ],
  "location": "LoginSteps.queOUsuarioEstejaLogadoNoSistemaNaPaginaPrincipal(String,String)"
});
formatter.result({
  "duration": 1573795276,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Realizar login",
  "description": "",
  "id": ";realizar-login;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@Products"
    },
    {
      "line": 2,
      "name": "@EndToEnd"
    },
    {
      "line": 9,
      "name": "@AddProducts"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "trocar a ordem de apresentacao do filtro para \"Name (A to Z)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "verificar a lista de produtos",
  "keyword": "Entao "
});
formatter.step({
  "line": 13,
  "name": "clicar no botao adicionar de cada um deles",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "verificar se foram adicionados no carrinho",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "Name (A to Z)",
      "offset": 47
    }
  ],
  "location": "ProductsStep.trocarAOrdemDeApresentacaoDoFiltroPara(String)"
});
formatter.result({
  "duration": 672137850,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStep.verificarAListaDeProdutos()"
});
formatter.result({
  "duration": 47849815,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStep.clicarNoBotaoAdicionarDeCadaUmDeles()"
});
formatter.result({
  "duration": 423798633,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStep.verificarSeForamAdicionadosNoCarrinho()"
});
formatter.result({
  "duration": 69619885,
  "status": "passed"
});
formatter.after({
  "duration": 68534094,
  "status": "passed"
});
formatter.before({
  "duration": 988267987,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#Atenção! Coloquei o nome do usuário e senha direto porque os argumentos \u003cuser\u003e e \u003cpass\u003e estão apresentando erro aqui no contexto"
    }
  ],
  "line": 7,
  "name": "que o usuario esteja logado no sistema na pagina principal \"standard_user\" \"secret_sauce\"",
  "keyword": "Dado "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 60
    },
    {
      "val": "secret_sauce",
      "offset": 76
    }
  ],
  "location": "LoginSteps.queOUsuarioEstejaLogadoNoSistemaNaPaginaPrincipal(String,String)"
});
formatter.result({
  "duration": 2140968623,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Realizar login",
  "description": "",
  "id": ";realizar-login;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@Products"
    },
    {
      "line": 2,
      "name": "@EndToEnd"
    },
    {
      "line": 9,
      "name": "@AddProducts"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "trocar a ordem de apresentacao do filtro para \"Name (Z to A)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "verificar a lista de produtos",
  "keyword": "Entao "
});
formatter.step({
  "line": 13,
  "name": "clicar no botao adicionar de cada um deles",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "verificar se foram adicionados no carrinho",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "Name (Z to A)",
      "offset": 47
    }
  ],
  "location": "ProductsStep.trocarAOrdemDeApresentacaoDoFiltroPara(String)"
});
formatter.result({
  "duration": 879426532,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStep.verificarAListaDeProdutos()"
});
formatter.result({
  "duration": 135272313,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStep.clicarNoBotaoAdicionarDeCadaUmDeles()"
});
formatter.result({
  "duration": 1175661294,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStep.verificarSeForamAdicionadosNoCarrinho()"
});
formatter.result({
  "duration": 177995965,
  "status": "passed"
});
formatter.after({
  "duration": 135281749,
  "status": "passed"
});
formatter.before({
  "duration": 883661505,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#Atenção! Coloquei o nome do usuário e senha direto porque os argumentos \u003cuser\u003e e \u003cpass\u003e estão apresentando erro aqui no contexto"
    }
  ],
  "line": 7,
  "name": "que o usuario esteja logado no sistema na pagina principal \"standard_user\" \"secret_sauce\"",
  "keyword": "Dado "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 60
    },
    {
      "val": "secret_sauce",
      "offset": 76
    }
  ],
  "location": "LoginSteps.queOUsuarioEstejaLogadoNoSistemaNaPaginaPrincipal(String,String)"
});
formatter.result({
  "duration": 1509986491,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Realizar login",
  "description": "",
  "id": ";realizar-login;;5",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@Products"
    },
    {
      "line": 2,
      "name": "@EndToEnd"
    },
    {
      "line": 9,
      "name": "@AddProducts"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "trocar a ordem de apresentacao do filtro para \"Price (high to low)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "verificar a lista de produtos",
  "keyword": "Entao "
});
formatter.step({
  "line": 13,
  "name": "clicar no botao adicionar de cada um deles",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "verificar se foram adicionados no carrinho",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "Price (high to low)",
      "offset": 47
    }
  ],
  "location": "ProductsStep.trocarAOrdemDeApresentacaoDoFiltroPara(String)"
});
formatter.result({
  "duration": 805032041,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStep.verificarAListaDeProdutos()"
});
formatter.result({
  "duration": 72482415,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStep.clicarNoBotaoAdicionarDeCadaUmDeles()"
});
formatter.result({
  "duration": 1039065658,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStep.verificarSeForamAdicionadosNoCarrinho()"
});
formatter.result({
  "duration": 158348065,
  "status": "passed"
});
formatter.after({
  "duration": 150697991,
  "status": "passed"
});
formatter.uri("features/ShoppingCart.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "",
  "description": "",
  "id": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@ShoppingCart"
    },
    {
      "line": 2,
      "name": "@EndToEnd"
    }
  ]
});
formatter.before({
  "duration": 950422241,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja logado no sistema na pagina principal \"standard_user\" \"secret_sauce\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "que tenha produtos no carrinho",
  "keyword": "E "
});
formatter.step({
  "line": 8,
  "name": "que tenha clicado no carrinho de compras",
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "que a pagina esteja carregada",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 60
    },
    {
      "val": "secret_sauce",
      "offset": 76
    }
  ],
  "location": "LoginSteps.queOUsuarioEstejaLogadoNoSistemaNaPaginaPrincipal(String,String)"
});
formatter.result({
  "duration": 1361435494,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStep.queTenhaProdutosNoCarrinho()"
});
formatter.result({
  "duration": 1408806528,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartSteps.queTenhaClicadoNoCarrinhoDeCompras()"
});
formatter.result({
  "duration": 362697051,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartSteps.queAPaginaEstejaCarregada()"
});
formatter.result({
  "duration": 170055645,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verificar carrinho",
  "description": "",
  "id": ";verificar-carrinho",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 11,
      "name": "@CartPage"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "comparar a quantidade de itens na lista e no carrinho",
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "remover todos os itens da lista",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "voltar para a pagina dos produtos",
  "keyword": "Entao "
});
formatter.match({
  "location": "ShoppingCartSteps.compararAQuantidadeDeItensNaListaENoCarrinho()"
});
formatter.result({
  "duration": 268215647,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartSteps.removerTodosOsItensDaLista()"
});
formatter.result({
  "duration": 622284331,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartSteps.voltarParaAPaginaDosProdutos()"
});
formatter.result({
  "duration": 154423920,
  "status": "passed"
});
formatter.after({
  "duration": 85340884,
  "status": "passed"
});
});