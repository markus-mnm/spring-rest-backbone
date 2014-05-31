package at.mnm.demo.unfamousquotes;

import java.util.List;

import org.apache.commons.collections.IteratorUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class QuoteController {

	@Autowired
	private QuoteRepository repository;

	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/quote", method = RequestMethod.GET)
	public List<Quote> allQuotes() {
		return IteratorUtils.toList(repository.findAll().iterator());
	}

}
