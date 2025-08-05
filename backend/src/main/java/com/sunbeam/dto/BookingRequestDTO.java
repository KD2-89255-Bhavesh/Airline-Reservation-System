package com.sunbeam.dto;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import com.sunbeam.entities.Booking.BookingStatus;
import com.sunbeam.entities.Booking.ClassType;
import com.sunbeam.entities.Booking.PaymentMethod;
import com.sunbeam.entities.Booking.PaymentStatus;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BookingRequestDTO {
    // Flight Info
    private Long flightId;
    private String flightNumber;
    private String airline;
    private String source;
    private String destination;
    private LocalDate departureDate;
    private LocalTime departureTime;
    private LocalDate arrivalDate;
    private LocalTime arrivalTime;

    // Booking Info
    private ClassType classType;
    private Integer totalPassengers;
    private BigDecimal totalFare;

    // Passenger Info
    private List<PassengerDTO> passengers;

    // Payment Info
    private PaymentMethod paymentMethod;
    private PaymentStatus paymentStatus;
    private String transactionId;

    // Extra Info
    private BookingStatus bookingStatus;
    private String searchParams;
    private String specialRequests;
    private String notes;
}
