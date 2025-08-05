package com.sunbeam.dto;


import lombok.*;

import java.math.BigDecimal;

import com.sunbeam.entities.Payment.PaymentMethod;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PaymentDTO {
    private PaymentMethod method;
    private String transactionId;
    private BigDecimal amount;
    private String currency;
    private String paymentDetails; // JSON string
}
