package com.sunbeam.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class CustomerDto {
	private String title;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String mobileNo;
    private String role;
    
}

