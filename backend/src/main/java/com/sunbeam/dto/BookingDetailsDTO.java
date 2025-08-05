package com.sunbeam.dto;


import lombok.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BookingDetailsDTO {
    private String bookingId;
    private String pnr;
    private String flightNumber;
    private String airline;
    private String source;
    private String destination;
    private LocalDate departureDate;
    private LocalTime departureTime;
    private LocalDate arrivalDate;
    private LocalTime arrivalTime;
    private String classType;
    private Integer totalPassengers;
    private String bookingStatus;
    private List<PassengerDTO> passengers;
}
