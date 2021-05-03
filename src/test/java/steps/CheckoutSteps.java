package steps;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pageObjects.CheckoutPage;

public class CheckoutSteps {
	WebDriver driver;

	
	@Dado("^que ja tenha feito o checkout$")
	public void queJaTenhaFeitoOCheckout() throws Throwable {
		queAPaginaCheckoutEstejaCarregada();
		adicionarOPrimeiroNomeComo("nome");
		adicionarOSobrenomeComo("sobrenome");
		adicionarOCodigoPostalComo("código postal");
		CheckoutPage check = new CheckoutPage(driver);
		check.clickContinue();
	}
	
	@Dado("^que a pagina checkout esteja carregada$")
	public void queAPaginaCheckoutEstejaCarregada() throws Throwable {
		driver = Hooks.getDriver();
		CheckoutPage check = new CheckoutPage(driver);
		check.checkPage();
	}
	
	@Quando("^adicionar o primeiro nome como \"([^\"]*)\"$")
	public void adicionarOPrimeiroNomeComo(String first) throws Throwable {
		CheckoutPage check = new CheckoutPage(driver);
		check.addFirstName(first);
	}

	@Quando("^adicionar o sobrenome como \"([^\"]*)\"$")
	public void adicionarOSobrenomeComo(String last) throws Throwable {
		CheckoutPage check = new CheckoutPage(driver);
		check.addLastName(last);;
	}
	
	@Quando("^adicionar o codigo postal como \"([^\"]*)\"$")
	public void adicionarOCodigoPostalComo(String postal) throws Throwable {
		CheckoutPage check = new CheckoutPage(driver);
		check.addPostalCode(postal);
	}

	@Entao("^cancelar operacao$")
	public void cancelarOperacao() throws Throwable {
		CheckoutPage check = new CheckoutPage(driver);
		check.clickCancel();;
	}
}
