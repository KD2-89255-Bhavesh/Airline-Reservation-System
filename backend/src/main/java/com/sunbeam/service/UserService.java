package com.sunbeam.service;

import java.time.LocalDate;
import java.util.List;

import com.sunbeam.dto.FlightSearchDTO;

public interface UserService {
	List<FlightSearchDTO> flightSearch(String source,String destination,LocalDate departure );
}
