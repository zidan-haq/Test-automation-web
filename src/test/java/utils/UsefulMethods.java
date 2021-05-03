package utils;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import steps.Hooks;

public abstract class UsefulMethods {
	protected WebDriver driver;
	
	public void waitElement(WebElement element) {
		driver = Hooks.getDriver();
		
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.visibilityOf(element));
	}
	
	public void selectOption(WebElement element, String text) {
		driver = Hooks.getDriver();
		Select dropDown = new Select(element);
		dropDown.selectByVisibleText(text);
	}
	
	protected void checkHeader(WebElement pageHeader, String value) {
		waitElement(pageHeader);
		WebElement title = pageHeader.findElement(By.className("title"));
		assertTrue(title.getText().equals(value));
	}
}
