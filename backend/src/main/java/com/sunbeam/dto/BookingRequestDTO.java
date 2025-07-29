package com.sunbeam.dto;

import java.util.List;

import com.sunbeam.entities.Payment.PaymentMethod;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BookingRequestDTO {
    private Integer userId;
    private Integer schFlightId;
    private List<PassengerDTO> passengers;
    private PaymentMethod paymentMethod;
}
