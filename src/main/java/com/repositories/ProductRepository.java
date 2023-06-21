package com.repositories;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.model.Product;

public interface ProductRepository extends JpaRepository<Product, Integer>{
	
	Product findFirstByCode(String code);
	List<Product> findAllByOrderByIdDesc(Pageable pageable);
	
}