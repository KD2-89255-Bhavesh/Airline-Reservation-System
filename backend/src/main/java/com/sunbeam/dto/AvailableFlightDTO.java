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
public class AvailableFlightDTO {
    private Integer schFlightId;
    private String flightNo;
    private String airlineName;
    private String source;
    private String destination;
    private LocalDateTime departure;
    private LocalDateTime arrival;
    private Integer economySeatsAvailable;
    private Integer businessSeatsAvailable;
    private Integer firstSeatsAvailable;
    private Integer economyPrice;
    private Integer businessPrice;
    private Integer firstPrice;
}
