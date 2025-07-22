package com.sunbeam.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.CustomerDao;
import com.sunbeam.dto.CustomerDto;
import com.sunbeam.entities.Customer;

@Service
public class CustomerService {
	
	@Autowired
	private CustomerDao customerDao;
	
	
	public Customer register(CustomerDto data) {
		Customer customer = new Customer();
		
		customer.setTitle(data.getTitle());
		customer.setFirstName(data.getFirstName());
		customer.setLastName(data.getLastName());
		customer.setEmail(data.getEmail());
		customer.setPasswordHash(data.getPassword()); 
		customer.setMobileNo(data.getMobileNo());
		customer.setRole("customer");
        return customerDao.save(customer);
		
	}
	
	
	public Customer login(String email, String password) {
        return customerDao.findByEmail(email)
                .filter(u -> u.getPasswordHash().equals(password))
                .orElseThrow(() -> new RuntimeException("Invalid credentials"));
    }
	
}
