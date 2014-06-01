package at.mnm.demo.unfamousquotes;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.rest.core.annotation.HandleBeforeSave;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;

@RepositoryEventHandler(Quote.class)
public class QuoteEventhandler {
    
    final static Logger logger = LoggerFactory.getLogger(QuoteEventhandler.class);

    @HandleBeforeSave
    public void handleBeforeSavingQuoteEvent(Quote p) {
        
        logger.debug("handleQuoteSave --- NOT CALLED, WHYYYYYYYYYYYY!!");
        
    }



}