package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utils.UsefulMethods;

public class CheckoutPage extends UsefulMethods {
	
	public CheckoutPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(how = How.CLASS_NAME, using = "header_secondary_container")
	private WebElement pageHeader;
	
	@FindBy(how = How.ID, using = "first-name")
	private WebElement firstName;

	@FindBy(how = How.ID, using = "last-name")
	private WebElement lastName;
	
	@FindBy(how = How.ID, using = "postal-code")
	private WebElement postalCode;
	
	@FindBy(how = How.ID, using = "cancel")
	private WebElement btnCancel;
	
	@FindBy(how = How.ID, using = "continue")
	private WebElement btnContinue;
	
	
	public void checkPage() {
		checkHeader(pageHeader, "CHECKOUT: YOUR INFORMATION");
	}
	
	public void addFirstName(String first) {
		waitElement(firstName);
		firstName.sendKeys(first);
	}
	
	public void addLastName(String last) {
		waitElement(lastName);
		lastName.sendKeys(last);
	}
	
	public void addPostalCode(String postal) {
		waitElement(postalCode);
		postalCode.sendKeys(postal);
	}
	
	public void clickCancel() {
		waitElement(btnCancel);
		btnCancel.click();
	}
	
	public void clickContinue() {
		waitElement(btnContinue);
		btnContinue.click();
	}
}
