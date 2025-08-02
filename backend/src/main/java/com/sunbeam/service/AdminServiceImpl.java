package com.sunbeam.service;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.AddFlightDao;
import com.sunbeam.dao.AdminBookingDao;
import com.sunbeam.dao.AdminDao;
import com.sunbeam.dao.AirlineDetailsDao;
import com.sunbeam.dto.AirlineDTO;
import com.sunbeam.entities.AirlineDetail;

@Service
public class AdminServiceImpl implements AdminService{

	@Autowired
	public AdminDao adminDao;
	
	@Autowired
	public AddFlightDao addFlightDao;
	
	@Autowired
	public AdminBookingDao adminBookingDao;
	
	@Autowired
	public AirlineDetailsDao airlineDetailsDao;
	
	@Override
	public long getTotalAirlinesCount() {
		return adminDao.count();
	}

	@Override
	public long getTotalFlightsCount() {
		return addFlightDao.count();
	}

	@Override
	public long getTotalBooking() {
		return adminBookingDao.count();
	}

	@Override
	public long getTotalAmountBooking() {
		return adminBookingDao.getTotalAmountBookingPassenger();
	}

	@Override
	public List<AirlineDetail> getAllAirlines() {
		return airlineDetailsDao.findAll();
	}

	@Override
	public AirlineDetail addAirline(AirlineDTO airlineDTO) {
		
		AirlineDetail airlineDetail = new AirlineDetail();
		airlineDetail.setAirlineName(airlineDTO.getAirlineName());
		airlineDetail.setDate(LocalDate.now());
		airlineDetail.setNoOfFlights(airlineDTO.getNoOfFlights());
		airlineDetail.setAdmin(airlineDetail.getAdmin());
		
		return airlineDetailsDao.save(airlineDetail);
		
	}
	
}
