package steps;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pageObjects.OverViewPage;

public class OverViewSteps {

	WebDriver driver;

	
	@Dado("^que os valores estejam de acordo com o esperado$")
	public void queOsValoresEstejamDeAcordoComOEsperado() throws Throwable {
		aPaginaOverviewEstiverCarregada();
		verificarOTotalDaCompra();
		OverViewPage view = new OverViewPage(driver);
		view.clickFinish();
	}
	
	@Quando("^a pagina overview estiver carregada$")
	public void aPaginaOverviewEstiverCarregada() throws Throwable {
		driver = Hooks.getDriver();
		OverViewPage view = new OverViewPage(driver);
		view.checkPage();
	}

	@Entao("^verificar o total da compra$")
	public void verificarOTotalDaCompra() throws Throwable {
		OverViewPage view = new OverViewPage(driver);
		view.checkTotal();
	}

	@Entao("^cancelar a compra$")
	public void cancelarACompra() throws Throwable {
		OverViewPage view = new OverViewPage(driver);
		view.clickCancel();
	}
}
