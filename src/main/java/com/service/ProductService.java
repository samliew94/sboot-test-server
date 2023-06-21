package com.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import com.model.Product;
import com.repositories.ProductRepository;

import jakarta.persistence.EntityManager;

/**
 * concurrency is overkill for this test I suppose, should be fine to assume all components as singleton.
 * @author mlmsa
 *
 */
@Service
public class ProductService{

	Logger logger = LoggerFactory.getLogger(getClass());
	
	@Autowired
	ProductRepository productRepository;
	
	@Autowired
	EntityManager em;
	
	/**
	 * Input=[3,10] <br/>
	 * Output=[20,29] <br/>
	 * Explanation: page 1 fetches 0-9, page 2 fetches 10-19, page 3 fetches 20-29.<br/><br/>
	 * 
	 * Input [3,25] <br/>
	 * Output [50,74] <br/>
	 * Explanation: page 1 fetches 0-24, page 2 fetches 25-49, page 3 fetches 50-74 <br/><br/>
	 * 
	 */
	public ResponseEntity<Map<String, Object>> findAllByPageAndMax(int page, int max) throws Exception {
		
		Map<String, Object> responseMap = new HashMap<>();
		
		// in-case user somehow managed to send invalid inputs
		page -= 1;
		if (page < 0)
			page = 0;
		
		if (max < 10)
			max = 10;
		else if (max > 25)
			max = 25;
		
		Pageable pageable = PageRequest.of(page, max, Sort.by("id").ascending());
		
		List<Product> products = productRepository.findAll(pageable).getContent();
		
		if (page == 0 && products.isEmpty()) { // return empty products as usual
			
		} else if (products.isEmpty()) // not at page 0 but it's empty
			return findAllByLastPage(max);
		
		responseMap.put("page", page);
		responseMap.put("max", max);
		responseMap.put("products", products);
		
		return ResponseEntity.ok(responseMap);
	}
	
	public ResponseEntity<Map<String, Object>> findAllByLastPage(int max) throws Exception{
		
		 // given the size of the products, compute the last page possible page with max
		int n = productRepository.findAll().size();
		
		// Calculate the total number of possible pages
	    int totalPages = (n + max - 1) / max;

	    // Calculate the last page based on the total pages
	    int lastPage = Math.max(1, totalPages);
		
		return findAllByPageAndMax(lastPage, max);
		
	}

	
	public ResponseEntity<Product> findFirstByProductCode(String code) throws Exception {
		
		Product product = productRepository.findFirstByCode(code.toUpperCase());
		
		return ResponseEntity.ok(product);
		
	}
	
	/**
	 * when creating new product, should also consider concurrency.<br/>
	 * prevent any instances from reading/select the product code until this block is complete  
	 */
	@Transactional(isolation = Isolation.SERIALIZABLE)
	public ResponseEntity createNewProduct(Map body) throws Exception {
		
		// mandatory fields
		String code = (String) body.get("code");
		String name = (String) body.get("name");
		String category = (String) body.get("category");
		
		final List<String> errors = new ArrayList<>();
		
		if (code == null || code.trim().isEmpty())
			errors.add("Invalid Code!");
		if (name == null || name.trim().isEmpty())
			errors.add("Invalid Name!");
		if (category == null || category.trim().isEmpty())
			errors.add("Invalid Category!");
		
		if (!errors.isEmpty())
			return ResponseEntity.badRequest().body(new HashMap() {{ put("errors", errors); }});
		
		code = code.toUpperCase();
		
		// optional fields
		String brand = (String) body.get("brand");
		String type = (String) body.get("type");
		String description = (String) body.get("description");
		
		// check for duplicates, if exist return bad request.
		// Transaction Isolation Serializable blocks all concurrent access until this block exits.
		Product product = productRepository.findFirstByCode(code);
		
		if (product != null) {
			errors.add("Duplicate Product Code!");
			return ResponseEntity.badRequest().body(new HashMap() {{ put("errors", errors); }});
		}
		
		// can't use build cause it requires auto gen value 'id'
		product = Product.builder()
				.code(code)
				.name(name)
				.category(category)
				.brand(brand)
				.type(type)
				.description(description)
				.build();
		
		em.persist(product);
		
		return ResponseEntity.ok().build();
		
	}
	
	@Transactional(isolation = Isolation.SERIALIZABLE)
	public ResponseEntity updateProduct(String code, Map body) throws Exception {
		
		Product product = productRepository.findFirstByCode(code.toUpperCase());
		
		final List<String> errors = new ArrayList<>();
		
		if (product == null)
			errors.add("Invalid Product Code!");
			
		String name = (String) body.get("name");
		String category = (String) body.get("category");
		
		if (name == null || name.trim().isEmpty())
			errors.add("Invalid Name!");
		
		if (category == null || category.trim().isEmpty())
			errors.add("Invalid Category!");
		
		if (!errors.isEmpty())
			return ResponseEntity.badRequest().body(new HashMap() {{ put("errors", errors); }});
		
		// optional fields
		String brand = (String) body.get("brand");
		String type = (String) body.get("type");
		String description = (String) body.get("description");
		
		product.setName(name);
		product.setCategory(category);
		product.setBrand(brand);
		product.setType(type);
		product.setDescription(description);
		
		return ResponseEntity.ok().build();
		
	}
	
	@Transactional(isolation = Isolation.SERIALIZABLE)
	public ResponseEntity deleteProduct(String code, Map body) throws Exception {
		
		Product product = productRepository.findFirstByCode(code.toUpperCase());
		
		if (product == null)
			return ResponseEntity.badRequest().body("Invalid Product Code");
		
		String name = (String) body.get("name");
		String category = (String) body.get("category");
		
		if (name == null || name.trim().isEmpty() || category == null || category.trim().isEmpty())
			return ResponseEntity.badRequest().body("Invalid Name or Category");

		// optional fields
		String brand = (String) body.get("brand");
		String type = (String) body.get("type");
		String description = (String) body.get("description");
		
		product.setName(name);
		product.setCategory(category);
		product.setBrand(brand);
		product.setType(type);
		product.setDescription(description);
		
		return ResponseEntity.ok().build();
		
	}
	
	@Transactional(isolation = Isolation.SERIALIZABLE)
	public ResponseEntity deleteProduct(String code) {
		
		Product product = productRepository.findFirstByCode(code.toUpperCase());
		
		if (product == null)
			return ResponseEntity.badRequest().body("Invalid Product Code");
		
		productRepository.delete(product);
		
		return ResponseEntity.ok().build();
	}
	
}