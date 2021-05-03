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

public class OverViewPage extends UsefulMethods {
	
	public OverViewPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(how = How.CLASS_NAME, using = "header_secondary_container")
	private WebElement pageHeader;
	
	@FindBy(how = How.CLASS_NAME, using = "cart_list")
	private WebElement cardList;
	
	@FindBy(how = How.CLASS_NAME, using = "summary_tax_label")
	private WebElement tax;
	
	@FindBy(how = How.CLASS_NAME, using = "summary_total_label")
	private WebElement total;
	
	@FindBy(how = How.ID, using = "cancel")
	private WebElement btnCancel;
	
	@FindBy(how = How.ID, using = "finish")
	private WebElement btnFinish;
	
	public void checkPage() {
		checkHeader(pageHeader, "CHECKOUT: OVERVIEW");
	}
	
	public void checkTotal() {
		waitElement(cardList);
		List<WebElement> list = cardList.findElements(By.className("cart_item"));
		Double sum = 0.0;
		
		for(WebElement product : list) {
			String strPrice = product.findElement(By.className("inventory_item_price")).getText();
			double price = Double.parseDouble(strPrice.replaceAll("[^\\d.]", ""));
			sum += price;
		}
		
		System.out.println("Soma meu brother: " + sum);
		System.out.println("Total meu brother: " + getTotal());
		
		assertTrue(sum + getTax() == getTotal());
	}
	
	public void clickCancel() {
		waitElement(btnCancel);
		btnCancel.click();
	}
	
	public void clickFinish() {
		waitElement(btnFinish);
		btnFinish.click();
	}

	private double getTax() {
		waitElement(tax);
		String strTax = tax.getText().replaceAll("[^\\d.]", "");
		double doubleTax = Double.parseDouble(strTax);
		return doubleTax;
	}
	
	private double getTotal() {
		waitElement(total);
		String strTotal = total.getText().replaceAll("[^\\d.]", "");
		double doubleTotal = Double.parseDouble(strTotal);
		return doubleTotal;
	}
}
