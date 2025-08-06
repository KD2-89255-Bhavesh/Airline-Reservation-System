package com.sunbeam.service;

import java.util.List;
import com.sunbeam.dto.AirlineDTO;
import com.sunbeam.dto.FeedbackResponseDTO;
import com.sunbeam.entities.AirlineDetail;
import com.sunbeam.entities.Feedback;


public interface AdminService {
	long getTotalAirlinesCount();
	long getTotalFlightsCount();
	long getTotalBooking();
	long getTotalAmountBooking();
	List<AirlineDetail> getAllAirlines();
	List<Feedback> getAllFeedback();
}
