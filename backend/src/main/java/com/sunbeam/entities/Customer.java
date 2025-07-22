package com.sunbeam.entities;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "users")	
@Getter
@Setter
public class Customer {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;
    private String title;
    private String firstName;
    private String lastName;
    private String email;
    private String passwordHash;
    private String mobileNo;
    private String role;

    private LocalDateTime createdAt = LocalDateTime.now();
	
}
