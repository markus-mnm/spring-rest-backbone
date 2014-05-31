package at.mnm.demo.unfamousquotes;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface QuoteRepository extends CrudRepository<Quote, Long> {
	List<Quote> findByQuoteSource(String sourceName);

	List<Quote> findBySubmitter(String submitter);
}
