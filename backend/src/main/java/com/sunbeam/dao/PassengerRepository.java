package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Passenger;

import java.util.List;

public interface PassengerRepository extends JpaRepository<Passenger, Long> {
  //  List<Passenger> findByBookingId(Long bookingId);
}
