package pageObjects;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utils.UsefulMethods;

public class LoginPage extends UsefulMethods {
	
	public LoginPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(how = How.ID, using = "user-name")
	public WebElement user;
	
	@FindBy(how = How.ID, using = "password")
	public WebElement pass;
	
	@FindBy(how = How.ID, using = "login-button")
	public WebElement btnLogin;
	
	@FindBy(how = How.ID, using = "header_container")
	public WebElement header;
	
	public void addUserName(String name) {
		waitElement(user);
		user.sendKeys(name);
	}
	public void addPassword(String password) {
		waitElement(pass);
		pass.sendKeys(password);
	}	
	public void clickLogin() {
		waitElement(btnLogin);
		btnLogin.click();
	}
	
	public void checkMainPage() {
		waitElement(header);
		assertTrue(header.isEnabled());
	}
}
