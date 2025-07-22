package com.sunbeam.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.CustomerDto;
import com.sunbeam.dto.LoginRequest;
import com.sunbeam.service.CustomerService;

@RestController
@RequestMapping("/customer")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {
	@Autowired
    private CustomerService customerService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody CustomerDto dto) {
        return ResponseEntity.ok(customerService.register(dto));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        return ResponseEntity.ok(customerService.login(loginRequest.getEmail(), loginRequest.getPassword()));
    }
}
