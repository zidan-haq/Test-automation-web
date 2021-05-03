package steps;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pageObjects.OrderFinishPage;

public class OrderFinishSteps {
	
	WebDriver driver;

	@Quando("^a pagina de conclusao do pedido estiver carregada$")
	public void aPaginaDeConclusaoDoPedidoEstiverCarregada() throws Throwable {
		driver = Hooks.getDriver();
		OrderFinishPage finish = new OrderFinishPage(driver);
		finish.checkPage();
	}

	@Entao("^voltar para a pagina principal$")
	public void voltarParaAPaginaPrincipal() throws Throwable {
		OrderFinishPage finish = new OrderFinishPage(driver);
		finish.clickBack();
	}
}
