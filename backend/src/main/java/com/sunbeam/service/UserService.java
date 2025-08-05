package com.sunbeam.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.sunbeam.dto.BookingRequestDTO;
import com.sunbeam.dto.BookingResponseDTO;
import com.sunbeam.dto.FlightSearchResponseDto;

import io.swagger.v3.oas.annotations.servers.Server;


public interface UserService {
    List<FlightSearchResponseDto> flightSearch(String source, String destination, LocalDate departure);
    BookingResponseDTO createBooking(BookingRequestDTO bookingRequestDto);
}
