package com.sunbeam.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.sunbeam.dto.BookingRequestDto;
import com.sunbeam.dto.BookingResponseDto;
import com.sunbeam.dto.FlightSearchResponseDto;

import io.swagger.v3.oas.annotations.servers.Server;


public interface UserService {
    List<FlightSearchResponseDto> flightSearch(String source, String destination, LocalDate departure);
    BookingResponseDto createBooking(BookingRequestDto bookingRequestDto);
}
