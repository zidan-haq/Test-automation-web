package steps;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pageObjects.ShoppingCartPage;

public class ShoppingCartSteps {
	WebDriver driver;
	
	@Dado("^que tenha fechado o carrinho$")
	public void queTenhaFechadoOCarrinho() throws Throwable {
		queTenhaClicadoNoCarrinhoDeCompras();
		ShoppingCartPage shopping = new ShoppingCartPage(driver);
		shopping.clickCheckout();
	}
	
	@Dado("^que tenha clicado no carrinho de compras$")
	public void queTenhaClicadoNoCarrinhoDeCompras() throws Throwable {
		driver = Hooks.getDriver();
		ShoppingCartPage shopping = new ShoppingCartPage(driver);
		shopping.clickCart();
	}
	
	@Dado("^que a pagina esteja carregada$")
	public void queAPaginaEstejaCarregada() throws Throwable {
    	ShoppingCartPage shopping = new ShoppingCartPage(driver);
		shopping.checkShoppingPage();
    }

	@Quando("^comparar a quantidade de itens na lista e no carrinho$")
	public void compararAQuantidadeDeItensNaListaENoCarrinho() throws Throwable {
    	ShoppingCartPage shopping = new ShoppingCartPage(driver);
		shopping.compareQuantities();
	}

	@Quando("^remover todos os itens da lista$")
	public void removerTodosOsItensDaLista() throws Throwable {
		ShoppingCartPage shopping = new ShoppingCartPage(driver);
		shopping.removeItems();
	}

	@Entao("^voltar para a pagina dos produtos$")
	public void voltarParaAPaginaDosProdutos() throws Throwable {
		ShoppingCartPage shopping = new ShoppingCartPage(driver);
		shopping.returnToProducts();
	}
}
