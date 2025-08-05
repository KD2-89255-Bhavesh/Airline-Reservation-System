package com.sunbeam.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FlightDTO {
    private Long flightId;
    private Long airlineId;
    private String flightNo;
    private String flightClass;
    private Long noOfEconomySeats;
    private Long noOfBusinessSeats;
    private Long noOfFirstSeats;
    private Long totalNoOfSeats;
}
