package com.sunbeam.dto;

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
	private String title;
    private String firstName;
    private String lastName;
    private String email;
    private String mobileNo;
    private String role;
}
