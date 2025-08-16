package com.sunbeam.request;

import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FlightSearchRequestDto {
	private String source;
    private String destination;
    private LocalDate departureTime;
}
