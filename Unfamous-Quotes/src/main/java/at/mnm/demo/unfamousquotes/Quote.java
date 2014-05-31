package at.mnm.demo.unfamousquotes;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Quote {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String quoteText;
    private String quoteSource;
    private String submitter;
    private Date firstUttered;

    public Quote() {

    }

    public Quote(String quoteText, String quoteSource, String submitter, Date firstUttered) {
        this.quoteText = quoteText;
        this.quoteSource = quoteSource;
        this.submitter = submitter;
        this.firstUttered = firstUttered;
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

    public Date getFirstUttered() {
        return firstUttered;
    }

    public void setFirstUttered(Date firstUttered) {
        this.firstUttered = firstUttered;
    }

    public String getSubmitter() {
        return submitter;
    }

    public void setSubmitter(String submitter) {
        this.submitter = submitter;
    }

}
