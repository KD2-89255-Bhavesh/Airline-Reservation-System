package com.sunbeam.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserRegisterDTO {
	 private String title;
	 private String firstName;
	 private String lastName;
	 private String mobileNo;
	 private String email;
	 private String password;
}
