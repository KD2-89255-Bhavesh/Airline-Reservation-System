package com.sunbeam.dto;


import lombok.*;


import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

import com.sunbeam.entities.Booking.BookingStatus;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BookingResponseDto {
    private String bookingId;
    private String pnr;
    private BookingStatus bookingStatus;
    private com.sunbeam.entities.Booking.PaymentStatus paymentStatus;
    private String transactionId;
    private BigDecimal totalFare;
    private LocalDateTime bookingDate;
    private List<PassengerDto> passengers;
}

