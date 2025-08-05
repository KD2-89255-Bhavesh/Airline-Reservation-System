package com.sunbeam.dto;


import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

import com.sunbeam.entities.Booking.BookingStatus;
import com.sunbeam.entities.Payment.PaymentStatus;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BookingResponseDTO {
    private String bookingId;
    private String pnr;
    private BookingStatus bookingStatus;
    private PaymentStatus paymentStatus;
    private String transactionId;
    private BigDecimal totalFare;
    private LocalDateTime bookingDate;
    private List<PassengerDTO> passengers;
}

