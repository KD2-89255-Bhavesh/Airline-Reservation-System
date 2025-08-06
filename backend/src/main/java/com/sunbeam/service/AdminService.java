package com.sunbeam.service;

import java.util.List;
import java.util.Optional;

import com.sunbeam.dto.AirlineDTO;
import com.sunbeam.entities.AirlineDetail;
import com.sunbeam.entities.Feedback;
import com.sunbeam.entities.User;


public interface AdminService {
	long getTotalAirlinesCount();
	long getTotalFlightsCount();
	long getTotalBooking();
//	Double getTotalAmountBooking();
	List<AirlineDetail> getAllAirlines();
	List<Feedback> getAllFeedback();
	User getProfileData(String email);
}
