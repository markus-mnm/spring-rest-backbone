package at.mnm.demo.unfamousquotes;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Size;

@Entity
public class Quote {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Size(max = 2000)
    private String quoteText;

    @Size(max = 50)
    private String quoteSource;
    
    @Size(max = 50)
    private String submitter;
    private String firstDocumentedOccurence;

    public Quote() {

    }

    public Quote(String quoteText, String quoteSource, String submitter, String firstDocumentedOccurence) {
        this.quoteText = quoteText;
        this.quoteSource = quoteSource;
        this.submitter = submitter;
        this.firstDocumentedOccurence = firstDocumentedOccurence;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getQuoteText() {
        return quoteText;
    }

    public void setQuoteText(String quoteText) {
        this.quoteText = quoteText;
    }

    public String getQuoteSource() {
        return quoteSource;
    }

    public void setQuoteSource(String quoteSource) {
        this.quoteSource = quoteSource;
    }

    public String getFirstDocumentedOccurence() {
        return firstDocumentedOccurence;
    }

    public void setFirstDocumentedOccurence(String firstDocumentedOccurence) {
        this.firstDocumentedOccurence = firstDocumentedOccurence;
    }

    public String getSubmitter() {
        return submitter;
    }

    public void setSubmitter(String submitter) {
        this.submitter = submitter;
    }

}
