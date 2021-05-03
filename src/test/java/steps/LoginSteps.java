package steps;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pageObjects.LoginPage;

public class LoginSteps {

	WebDriver driver;

	@Dado("^que o usuario esteja logado no sistema na pagina principal \"([^\"]*)\" \"([^\"]*)\"$")
	public void queOUsuarioEstejaLogadoNoSistemaNaPaginaPrincipal(String name, String password) throws Throwable {
		Hooks.openUrl("https://www.saucedemo.com/");
		driver = Hooks.getDriver();
		adicionarONomeDeUsuarioComo(name);
		adicionarASenhaComo(password);
		clicarNoBotaoLogin();
	}

	@Dado("^que o usuario esteja na pagina de login do site$")
	public void queOUsuarioEstejaNaPaginaDeLoginDoSite() throws Throwable {
		Hooks.openUrl("https://www.saucedemo.com/");
		driver = Hooks.getDriver();
	}

	@Quando("^adicionar o nome de usuario como \"([^\"]*)\"$")
	public void adicionarONomeDeUsuarioComo(String name) throws Throwable {
		LoginPage page = new LoginPage(driver);
		page.addUserName(name);
	}

	@Quando("^adicionar a senha como \"([^\"]*)\"$")
	public void adicionarASenhaComo(String password) throws Throwable {
		LoginPage page = new LoginPage(driver);
		page.addPassword(password);
	}

	@Quando("^clicar no botao Login$")
	public void clicarNoBotaoLogin() throws Throwable {
		LoginPage page = new LoginPage(driver);
		page.clickLogin();
	}

	@Entao("^o sistema deve autorizar o login, e mostrar a pagina Products$")
	public void oSistemaDeveAutorizarOLoginEMostrarAPaginaProducts() throws Throwable {
		LoginPage page = new LoginPage(driver);
		page.checkMainPage();
	}
}
