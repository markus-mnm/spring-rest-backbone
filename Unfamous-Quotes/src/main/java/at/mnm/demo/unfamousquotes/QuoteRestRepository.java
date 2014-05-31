package at.mnm.demo.unfamousquotes;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "quotes", path = "quotes")
public interface QuoteRestRepository extends PagingAndSortingRepository<Quote, Long> {

    List<Quote> findByQuoteSource(String sourceName);

    List<Quote> findBySubmitter(String submitter);
}
