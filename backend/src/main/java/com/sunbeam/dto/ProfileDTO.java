package com.sunbeam.dto;

import com.sunbeam.entities.Title;

import jakarta.persistence.Column;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProfileDTO {
    private Title title;
	private String firstName;
	private String lastName;
	private String email;
	private String mobileNo;
}
