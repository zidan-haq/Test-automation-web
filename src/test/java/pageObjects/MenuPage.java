package pageObjects;

import static org.junit.Assert.assertTrue;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utils.UsefulMethods;

public class MenuPage extends UsefulMethods {

	public MenuPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	@FindBy(how = How.ID, using = "react-burger-menu-btn")
	private WebElement menu;

	@FindBy(how = How.ID, using = "inventory_sidebar_link")
	private WebElement allItems;

	@FindBy(how = How.ID, using = "about_sidebar_link")
	private WebElement about;

	@FindBy(how = How.ID, using = "template__page")
	private WebElement pageAbout;

	@FindBy(how = How.ID, using = "logout_sidebar_link")
	private WebElement logout;

	@FindBy(how = How.ID, using = "login_button_container")
	private WebElement loginPage;

	@FindBy(how = How.ID, using = "reset_sidebar_link")
	private WebElement reset;

	@FindBy(how = How.ID, using = "shopping_cart_container")
	private WebElement cart;

	@FindBy(how = How.CLASS_NAME, using = "inventory_list")
	private WebElement inventoryList;

	public void clickMenuButton() {
		waitElement(menu);
		menu.click();
	}

	public void clickAllItems() {
		waitElement(allItems);
		allItems.click();
	}

	public void checkPage() {
		waitElement(inventoryList);
		assertTrue(inventoryList.isEnabled());
	}

	public void clickAbout() {
		waitElement(about);
		about.click();
	}

	public void checkPageAbout() {
		waitElement(pageAbout);
		assertTrue(pageAbout.isEnabled());
		String dataPage = pageAbout.getAttribute("data-page");
		assertTrue(!dataPage.contains("error"));
	}

	public void clickLogout() {
		waitElement(logout);
		logout.click();
	}

	public void checkLogout() {
		waitElement(loginPage);
		assertTrue(loginPage.isEnabled());
	}

	public void clickReset() {
		waitElement(reset);
		reset.click();
	}

	public void checkCart() {
		waitElement(cart);
		WebElement content = cart.findElement(By.className("shopping_cart_link"));
		String text = content.getText();
		assertTrue(text.equals(""));
	}

	public void checkProductPage() {
		waitElement(inventoryList);

		List<WebElement> list = inventoryList.findElements(By.className("inventory_item"));

		for (WebElement product : list) {
			WebElement button = product.findElement(By.tagName("button"));
			assertTrue(!button.getText().equals("Remove"));
		}
	}
}
