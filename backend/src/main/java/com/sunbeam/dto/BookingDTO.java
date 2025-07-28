package com.sunbeam.dto;

import java.time.LocalDateTime;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BookingDTO {
	private Integer bookingId;
    private Integer userId;
    private Integer schFlightId;
    private Integer totalAmount;
    private LocalDateTime bookingTime;
    private Integer numberOfPassenger;
    private List<PassengerDTO> passengers;
    private PaymentDTO payment;
}
