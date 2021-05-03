package steps;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	private static WebDriver driver;

	@Before
	public void startDriver() {
		
		/**
		 * A importação do drive do chrome está sendo feita pelo POM do maven
		 * Por isso só utilize o método abaixo se seu navegador não for inicializado
		 * Para utilizar descomente o método abaixo e coloque o caminho para o drive do seu chrome.
		 */
		// System.setProperty("webdriver.chrome.driver", "caminho_do_seu_drive");
		
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}

	@After
	public void closeDriver() {
		driver.quit();
	}

	public static WebDriver getDriver() {
		return driver;
	}

	public static void openUrl(String url) {
		driver.get(url);
	}
}
