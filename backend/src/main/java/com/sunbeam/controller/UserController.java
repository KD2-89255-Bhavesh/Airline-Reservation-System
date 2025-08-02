package com.sunbeam.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.LoginDTO;
import com.sunbeam.dto.UserDTO;
import com.sunbeam.entities.User;
import com.sunbeam.service.UserServiceImpl;

@RestController
@RequestMapping("/customer")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
	
	
	@Autowired
    private UserServiceImpl customerService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody UserDTO dto) {
        return ResponseEntity.ok(customerService.register(dto));
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody LoginDTO loginRequest) {
        return ResponseEntity.ok(customerService.login(loginRequest.getEmail(), loginRequest.getPassword()));
    }
}
