package com.sunbeam.dao;


import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Booking;

import java.util.List;
import java.util.Optional;

public interface BookingRepository extends JpaRepository<Booking, Long> {
//    Optional<Booking> findByBookingId(String bookingId);
//    Optional<Booking> findByPnr(String pnr);
   // List<Booking> findByUserId(Long userId);
}

