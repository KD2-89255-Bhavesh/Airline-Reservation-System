package com.sunbeam.dto;


import java.util.Map;

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
    private String airline;
    private String source;
    private String destination;
    private String departureTime;
    private String arrivalTime;
    private String duration;
    private Map<String, Integer> prices;
    private Map<String, Long> seatsAvailable;
}
