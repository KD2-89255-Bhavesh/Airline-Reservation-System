package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sunbeam.entities.Booking;

@Repository
public interface AdminBookingDao extends JpaRepository<Booking, Long>{
//	@Query("select sum(totalAmount) from Booking")
//	Double getTotalAmountBookingPassenger();
}
