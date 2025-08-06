package com.sunbeam.service;
<<<<<<< HEAD

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.sunbeam.dto.BookingRequestDto;
import com.sunbeam.dto.BookingResponseDto;
import com.sunbeam.dto.FlightSearchResponseDto;
import com.sunbeam.entities.Booking;

import io.swagger.v3.oas.annotations.servers.Server;


public interface UserService {
    List<FlightSearchResponseDto> flightSearch(String source, String destination, LocalDate departure);
    BookingResponseDto createBooking(BookingRequestDto bookingRequestDto);
    Booking getBookingById(Long bookingId);  // Change from String to Long
   // List<Booking> getBookingsByUserId(Long userId);
    Booking updateBooking(Booking booking);
    void cancelBooking(Long bookingId);
    List<Booking> getAllBookings();
=======

import com.sunbeam.dto.UserDTO;
import com.sunbeam.entities.User;

public interface UserService {
	
	User register(UserDTO data);
	User login(String email,String password);
>>>>>>> main
}
