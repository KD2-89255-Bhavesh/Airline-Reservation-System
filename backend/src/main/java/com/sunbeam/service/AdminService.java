package com.sunbeam.service;

import java.util.List;

import com.sunbeam.dto.AirlineDTO;
import com.sunbeam.entities.AirlineDetail;

public interface AdminService {
	long getTotalAirlinesCount();
	long getTotalFlightsCount();
	long getTotalBooking();
	long getTotalAmountBooking();
	List<AirlineDetail> getAllAirlines();
	AirlineDetail addAirline(AirlineDTO airlineDTO);
}
