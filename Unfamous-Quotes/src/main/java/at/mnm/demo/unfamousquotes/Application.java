package at.mnm.demo.unfamousquotes;

import java.util.Date;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan
@EnableAutoConfiguration
public class Application {

    public static void main(String[] args) {

        ConfigurableApplicationContext context = SpringApplication.run(Application.class);
        QuoteRepository repository = context.getBean(QuoteRepository.class);

        // save a couple of customers
        repository.save(new Quote("It wont work!", "Jen", "Markus", new Date()));
        repository.save(new Quote("I dont care.", "Frank", "Markus", new Date()));
        repository.save(new Quote("Do you understand?", "Bob", "Fran", new Date()));

    }
}
