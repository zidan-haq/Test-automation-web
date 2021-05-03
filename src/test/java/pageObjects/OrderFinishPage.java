package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utils.UsefulMethods;

public class OrderFinishPage extends UsefulMethods {

	public OrderFinishPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(how = How.CLASS_NAME, using = "header_secondary_container")
	private WebElement pageHeader;
	
	@FindBy(how = How.ID, using = "back-to-products")
	private WebElement back;
	
	public void checkPage() {
		checkHeader(pageHeader, "CHECKOUT: COMPLETE!");
	}
	
	public void clickBack() {
		waitElement(back);
		back.click();
	}
}
