package runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
				features = "classpath:features",
				glue = { "steps" },
				tags = { "@EndToEnd" },
				plugin = { "pretty", "html:target/cucumber-reports" },
				snippets = SnippetType.CAMELCASE,
				monochrome = true,
				dryRun = false
				)
public class TestRunner {

}
