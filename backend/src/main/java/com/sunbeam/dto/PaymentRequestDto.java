package com.sunbeam.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
<<<<<<<< HEAD:backend/src/main/java/com/sunbeam/dto/PaymentRequestDto.java
public class PaymentRequestDto {
	 private Integer bookingId;
	 private String paymentMethod;
========
@NoArgsConstructor
public class SignInResponse {
	
	private String jwt;
	private long customerId;

>>>>>>>> main:backend/src/main/java/com/sunbeam/dto/SignInResponse.java
}
