package page;

import org.openqa.selenium.By;
import org.openaq.selenium.keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.chromeDriver;


public class GoogleSearchpage {
	 
	 private static WebElement element = null;
	
	public static WebElement textbox_search(Webdriver driver) {
		element = driver.findElement(By.name("q"));
		return element;
		
	}
	public static WebElement button_search(webDriver driver) {
		
		element = driver.findElement(By.name("btnK"));
		return element;
		
	}

}
