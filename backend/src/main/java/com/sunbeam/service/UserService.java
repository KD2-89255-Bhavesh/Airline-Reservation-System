package com.sunbeam.service;

import com.sunbeam.dto.UserDTO;
import com.sunbeam.entities.User;

public interface UserService {
	
	User register(UserDTO data);
	User login(String email,String password);
}
