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
public class AirlineDTO {
    private Integer airlineId;
    private String airlineName;
    private Integer noOfFlights;
    private LocalDate date;
    private Integer adminId;
}
