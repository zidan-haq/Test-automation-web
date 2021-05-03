package steps;

import org.openqa.selenium.WebDriver;

import cucumber.api.PendingException;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pageObjects.ProductsPage;

public class ProductsStep {
	WebDriver driver;

	@Dado("^que tenha produtos no carrinho$")
	public void queTenhaProdutosNoCarrinho() throws Throwable {
		driver = Hooks.getDriver();
		clicarNoBotaoAdicionarDeCadaUmDeles();
	}
	
	@Quando("^trocar a ordem de apresentacao do filtro para \"([^\"]*)\"$")
	public void trocarAOrdemDeApresentacaoDoFiltroPara(String option) throws Throwable {
	    driver = Hooks.getDriver();
	    ProductsPage page = new ProductsPage(driver);
	    page.filter(option);
	}

	@Entao("^verificar a lista de produtos$")
	public void verificarAListaDeProdutos() throws Throwable {
	    ProductsPage page = new ProductsPage(driver);
	    page.checkInventoryList();
	}

	@Entao("^clicar no botao adicionar de cada um deles$")
	public void clicarNoBotaoAdicionarDeCadaUmDeles() throws Throwable {
	    ProductsPage page = new ProductsPage(driver);
	    page.addProducts();
	    }

	@Entao("^verificar se foram adicionados no carrinho$")
	public void verificarSeForamAdicionadosNoCarrinho() throws Throwable {
	    ProductsPage page = new ProductsPage(driver);
	    page.checkCart();
	}
}
