package com.sunbeam.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FlightSearchDTO {
    private String flightNumber;
    private String source;
    private String destination;
    private LocalDate departure;
    private LocalDate arrival;
    private Integer seatCostOfEconomy;
    private Integer seatCostOfBusiness;
    private Integer seatCostOfFirst;
}
