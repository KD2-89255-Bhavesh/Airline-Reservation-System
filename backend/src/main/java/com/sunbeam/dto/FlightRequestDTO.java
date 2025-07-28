package com.sunbeam.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FlightRequestDTO {
    private Integer airlineId;
    private String flightNo;
    private String flightClass;
    private Integer noOfEconomySeats;
    private Integer noOfBusinessSeats;
    private Integer noOfFirstSeats;
}
