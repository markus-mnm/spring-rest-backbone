package at.mnm.demo.unfamousquotes;

import static org.springframework.util.StringUtils.hasLength;

import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

public class QuoteValidator implements Validator {

    @Override
    public boolean supports(Class<?> clazz) {
        return Quote.class.equals(clazz);
    }

    @Override
    public void validate(Object target, Errors errors) {

        if (! (target instanceof Quote)) {
            errors.reject("What is this?");
        } else {
            Quote quote = (Quote) target;
            
            if (!hasLength(quote.getQuoteText())) {
                errors.rejectValue("quoteText", "quote.quotetext.mandatory");
            }
            if (!hasLength(quote.getQuoteSource())) {
                errors.rejectValue("quoteSource", "quote.quotesource.mandatory");
            }
            if (!hasLength(quote.getSubmitter())) {
                errors.rejectValue("submitter", "quote.submitter.mandatory");
            }

        }

    }

}
