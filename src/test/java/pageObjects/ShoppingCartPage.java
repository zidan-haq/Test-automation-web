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

public class ShoppingCartPage extends UsefulMethods {
	
	public ShoppingCartPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(how = How.ID, using = "shopping_cart_container")
	private WebElement cart;
	
	@FindBy(how = How.CLASS_NAME, using = "header_secondary_container")
	private WebElement pageHeader;
	
	@FindBy(how = How.ID, using = "cart_contents_container")
	private WebElement cardList;
	
	@FindBy(how = How.ID, using = "continue-shopping")
	private WebElement returnButton;

	@FindBy(how = How.ID, using = "checkout")
	private WebElement btnCheckout;
	
	public void clickCart() {
		waitElement(cart);
		cart.click();
	}
	
	public void checkShoppingPage() {
		checkHeader(pageHeader, "YOUR CART");
	}
	
	public void compareQuantities() {
		waitElement(cardList);
		int quantity = cardList.findElements(By.className("cart_item")).size();
		assertTrue(quantity == getCartQuantity());
	}
	
	public void removeItems() {
		waitElement(cardList);
		List<WebElement> list = cardList.findElements(By.className("cart_item"));
		
		for(WebElement product : list) {
			WebElement button = product.findElement(By.tagName("button"));
			button.click();
		}
	}
	
	public void returnToProducts() {
		waitElement(returnButton);
		returnButton.click();
	}
	
	public void clickCheckout() {
		waitElement(btnCheckout);
		btnCheckout.click();
	}
	
	private int getCartQuantity() {
		waitElement(cart);
		String quantity = cart.findElement(By.className("shopping_cart_badge")).getText();
		quantity = quantity.equals("") ? "0" :  quantity;
		return Integer.parseInt(quantity);
	}
}
