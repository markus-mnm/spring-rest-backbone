package at.mnm.demo.unfamousquotes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@ComponentScan
@EnableJpaRepositories
@Import(CustomRestMvcConfiguration.class)
@EnableAutoConfiguration
public class Application {

    public static void main(String[] args) {

        ConfigurableApplicationContext context = SpringApplication.run(Application.class);
        QuoteRestRepository repository = context.getBean(QuoteRestRepository.class);

        // save a couple of customers
        repository.save(new Quote("It wont work!", "Jen", "Markus", "some time ago"));
        repository.save(new Quote("I dont care.", "Frank", "Markus", "way to often"));
        repository.save(new Quote("Do you understand?", "Bob", "Fran", "never"));

    }
}
