package com.sunbeam.dao;


import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Booking;

import java.util.List;
import java.util.Optional;

public interface BookingRepository extends JpaRepository<Booking, Long> {
    Optional<Booking> findByBookingId(Long bookingId);
    
    // Alternative: Since bookingId is the primary key (@Id), you can also use:
    // The inherited findById(Long id) method - this is equivalent to findByBookingId(Long bookingId)
    
    // Other useful query methods
    List<Booking> findByUserId(Long userId);
    List<Booking> findByFlightNumber(String flightNumber);
    List<Booking> findByBookingStatus(Booking.BookingStatus bookingStatus);
    List<Booking> findByTransactionId(String transactionId);
}


