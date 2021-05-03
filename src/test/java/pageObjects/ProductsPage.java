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

public class ProductsPage extends UsefulMethods {

	public ProductsPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	@FindBy(how = How.CLASS_NAME, using = "inventory_list")
	private WebElement inventoryList;

	@FindBy(how = How.ID, using = "shopping_cart_container")
	private WebElement cart;
	
	@FindBy(how = How.CLASS_NAME, using = "product_sort_container")
	private WebElement comboBox;

	
	public void filter(String option) {
		waitElement(comboBox);
		selectOption(comboBox, option);
	}
	
	public void checkInventoryList() {
		waitElement(inventoryList);
		assertTrue(inventoryList.isEnabled());
	}
	
	public void addProducts() {
		waitElement(inventoryList);
		
		List<WebElement> list = inventoryList.findElements(By.className("inventory_item"));

		for (WebElement product : list) {
			WebElement button = product.findElement(By.tagName("button"));
			button.click();
		}
	}
	
	public void checkCart() {
		waitElement(cart);
		WebElement content = cart.findElement(By.className("shopping_cart_link"));
		String text = content.getText();
		assertTrue(!text.equals(""));
	}
}
