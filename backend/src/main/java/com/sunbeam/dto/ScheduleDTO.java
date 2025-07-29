package com.sunbeam.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter 
@Setter 
@NoArgsConstructor
@AllArgsConstructor
public class ScheduleDTO {
    private Integer schFlightId;
    private Integer flightId;
    private String source;
    private String destination;
    private LocalDateTime departure;
    private LocalDateTime arrival;
    private Integer seatCostOfEconomy;
    private Integer seatCostOfBusiness;
    private Integer seatCostOfFirst;
}
