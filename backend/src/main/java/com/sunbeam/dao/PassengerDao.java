package com.sunbeam.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sunbeam.entities.Passenger;

public interface PassengerDao extends JpaRepository<Passenger, Long> {
//    List<Passenger> findByBookingId(Long bookingId);
	
	@Query("SELECT p FROM Passenger p JOIN FETCH p.booking b JOIN FETCH b.user")
    List<Passenger> findAllWithBookingAndUser();
	
}
