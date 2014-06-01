package at.mnm.demo.unfamousquotes;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.event.ValidatingRepositoryEventListener;
import org.springframework.data.rest.webmvc.config.RepositoryRestMvcConfiguration;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;

@Configuration
public class CustomRestMvcConfiguration extends RepositoryRestMvcConfiguration {

    
    @Bean
    public LocalValidatorFactoryBean getLocalValidatorFactoryBean() {
        return new LocalValidatorFactoryBean();
    }
    
    
    @Override
    protected void configureValidatingRepositoryEventListener(ValidatingRepositoryEventListener v) {
        QuoteValidator quoteValidator = new QuoteValidator();
        v.addValidator("beforeCreate", quoteValidator);
        v.addValidator("beforeCreate", getLocalValidatorFactoryBean());
        v.addValidator("beforeSave", quoteValidator);
        
    }
}
