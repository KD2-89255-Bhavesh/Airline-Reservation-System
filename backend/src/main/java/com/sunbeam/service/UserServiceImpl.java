package com.sunbeam.service;
import java.time.LocalDate;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.ScheduleFlightRepository;
import com.sunbeam.dto.FlightSearchDTO;
import com.sunbeam.entities.ScheduleFlight;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;



@Service
@Transactional
@AllArgsConstructor
public class UserServiceImpl implements UserService{

	@Autowired
	private ScheduleFlightRepository scheduleRepo;
	private ModelMapper modelMapper;

	@Override
	public List<FlightSearchDTO> flightSearch(String source, String destination, LocalDate departure) {
		// TODO Auto-generated method stub
		List<ScheduleFlight> flights = scheduleRepo.findBySourceAndDestinationAndDeparture(source, destination, departure);
		
		
		//return flights.stream().map(flight -> modelMapper.map(flight, FlightSearchDTO.class)).collect(Collectors.toList());
		return flights.stream()
		        .map(flight -> {
		            FlightSearchDTO dto = new FlightSearchDTO();
		            dto.setFlightNumber(flight.getFlight().getFlightNo()); // from AddFlights
		            dto.setSource(flight.getSource());
		            dto.setDestination(flight.getDestination());
		            dto.setDeparture(flight.getDeparture());
		            dto.setArrival(flight.getArrival());
		            dto.setSeatCostOfEconomy(flight.getSeatCostOfEconomy());
		            dto.setSeatCostOfBusiness(flight.getSeatCostOfBusiness());
		            dto.setSeatCostOfFirst(flight.getSeatCostOfFirst());
		            return dto;
		        })
		        .collect(Collectors.toList());
	}

	
	

	
}
