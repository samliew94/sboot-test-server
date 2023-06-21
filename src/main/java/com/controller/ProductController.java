package com.controller;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.service.ProductService;

@RestController
@RequestMapping("/api/products")
public class ProductController{
	
	private static final Logger log = LoggerFactory.getLogger(ProductController.class);
	
	@Autowired
	ProductService productService;
	
	/**
	 * when user loads into application, page and max are both sent together in the GET request which looks like: <br/>
	 * http://domain?page=1&max=10 (assume min=10, max=25). <br/> 
	 * given these 2 variables, compute indexStart and indexEnd. <br/>  
	 * 
	 */
	@GetMapping("")
	public ResponseEntity findAll(@RequestParam(defaultValue = "1") int page, @RequestParam(defaultValue = "10") int max) throws Exception {
		return productService.findAllByPageAndMax(page, max);
	}
	
	@GetMapping("last")
	public ResponseEntity findAll(@RequestParam(defaultValue = "10") int max) throws Exception {
		return productService.findAllByLastPage(max);
	}
	
	@GetMapping("{code}")
	public ResponseEntity findByProductCode(@PathVariable String code) throws Exception {
		return productService.findFirstByProductCode(code);
	}
	
	@PostMapping("")
	public ResponseEntity createNewProduct(@RequestBody Map body) throws Exception {
		
		try {
			return productService.createNewProduct(body);
		} catch (Exception e) {
			log.error(e.getMessage());
			return ResponseEntity.internalServerError().body("An Unexpected Error Has Occured");
		}
	}
	
	@PutMapping("{code}")
	public ResponseEntity updateProduct(@PathVariable String code, @RequestBody Map body) throws Exception {
		
		try {
			return productService.updateProduct(code, body);
		} catch (Exception e) {
			log.error(e.getMessage());
			return ResponseEntity.internalServerError().body("An Unexpected Error Has Occured");
		}
	}
	
	@DeleteMapping("{code}")
	public ResponseEntity deleteProduct(@PathVariable String code) throws Exception {
		
		try {
			return productService.deleteProduct(code);
		} catch (Exception e) {
			log.error(e.getMessage());
			return ResponseEntity.internalServerError().body("An Unexpected Error Has Occured");
		}
	}
	
	
	
}