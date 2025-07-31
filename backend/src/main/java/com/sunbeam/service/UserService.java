package com.sunbeam.service;import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.UserDao;
import com.sunbeam.dto.UserDTO;
import com.sunbeam.entities.Role;
import com.sunbeam.entities.User;


@Service
public class UserService {
	
	@Autowired
	private UserDao userDao;
	
	
	public User register(UserDTO data) {
		User customer = new User();
		
		customer.setTitle(data.getTitle());
		customer.setFirstName(data.getFirstName());
		customer.setLastName(data.getLastName());
		customer.setEmail(data.getEmail());
		customer.setPasswordHash(data.getPasswordHash()); 
		customer.setMobileNo(data.getMobileNo());
		customer.setRole(data.getRole());
        return userDao.save(customer);
		
	}
	
	
	public User login(String email, String password) {
        return userDao.findByEmail(email)
                .filter(u -> u.getPasswordHash().equals(password))
                .orElseThrow(() -> new RuntimeException("Invalid credentials"));
    }
	
}
