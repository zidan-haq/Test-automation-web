package steps;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pageObjects.MenuPage;

public class MenuSteps {

	WebDriver driver;
	
	@Dado("^que tenha clicado no botao de menu$")
	public void queTenhaClicadoNoBotaoDeMenu() throws Throwable {
		driver = Hooks.getDriver();
		MenuPage menu = new MenuPage(driver);
		menu.clickMenuButton();
	}
	
	@Quando("^clicar na opcao ALL ITEMS$")
	public void clicarNaOpcaoALLITEMS() throws Throwable {
		MenuPage menu = new MenuPage(driver);
		menu.clickAllItems();
	}

	@Entao("^a pagina Products deve aparecer$")
	public void aPaginaProductsDeveAparecer() throws Throwable {
		MenuPage menu = new MenuPage(driver);
		menu.checkPage();
	}

	@Quando("^clicar na opcao ABOUT$")
	public void clicarNaOpcaoABOUT() throws Throwable {
		MenuPage menu = new MenuPage(driver);
		menu.clickAbout();
	}

	@Entao("^a pagina ABOUT deve aparecer$")
	public void aPaginaABOUTDeveAparecer() throws Throwable {
		MenuPage menu = new MenuPage(driver);
		menu.checkPageAbout();
	}

	@Quando("^clicar na opcao LOGOUT$")
	public void clicarNaOpcaoLOGOUT() throws Throwable {
		MenuPage menu = new MenuPage(driver);
		menu.clickLogout();
	}

	@Entao("^o usuario deve ser deslogado$")
	public void oUsuarioDeveSerDeslogado() throws Throwable {
		MenuPage menu = new MenuPage(driver);
		menu.checkLogout();
	}

	@Quando("^clicar na opcao RESET APP STATE$")
	public void clicarNaOpcaoRESETAPPSTATE() throws Throwable {
		MenuPage menu = new MenuPage(driver);
		menu.clickReset();
	}

	@Entao("^o carrinho deve ficar vazio$")
	public void oCarrinhoDeveFicarVazio() throws Throwable {
		MenuPage menu = new MenuPage(driver);
		menu.checkCart();
	}

	@Entao("^a pagina principal nao pode possuir botoes REMOVE$")
	public void aPaginaPrincipalNaoPodePossuirBotoesREMOVE() throws Throwable {
		MenuPage menu = new MenuPage(driver);
		menu.checkProductPage();
	}
}
