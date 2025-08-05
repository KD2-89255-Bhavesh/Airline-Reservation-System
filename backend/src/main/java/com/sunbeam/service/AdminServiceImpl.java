package com.sunbeam.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.AddAirlineDao;
import com.sunbeam.dao.AddFlightDao;
import com.sunbeam.dao.AdminBookingDao;
import com.sunbeam.dao.AdminDao;
import com.sunbeam.dao.AirlineDetailsDao;
import com.sunbeam.dao.FeedbackDao;
import com.sunbeam.dto.AirlineDTO;
import com.sunbeam.dto.FeedbackResponseDTO;
import com.sunbeam.entities.AirlineDetail;
import com.sunbeam.entities.Feedback;

@Service
public class AdminServiceImpl implements AdminService{

	@Autowired
	public AdminDao adminDao;
	
	@Autowired
	public AddFlightDao addFlightDao;
	
	@Autowired
	public AdminBookingDao adminBookingDao;
	
	@Autowired
	public AddAirlineDao airlineDetailsDao;
	
	@Autowired
	private FeedbackDao feedbackDao;
	
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
	public List<Feedback> getAllFeedback() {
		// TODO Auto-generated method stub
		return feedbackDao.findAll();
	}

	
	
}
