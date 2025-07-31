package com.sunbeam.dto;

import com.sunbeam.entities.Role;
import com.sunbeam.entities.Title;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
	private Long userId;
	private Title title;
    private String firstName;
    private String lastName;
    private String email;
    private String mobileNo;
    private String passwordHash;
    private Role role;
}
