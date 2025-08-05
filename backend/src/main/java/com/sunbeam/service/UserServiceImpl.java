package com.sunbeam.service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.BookingRepository;
import com.sunbeam.dao.ScheduleFlightRepository;
import com.sunbeam.dto.BookingRequestDTO;

import com.sunbeam.dto.BookingResponseDTO;
import com.sunbeam.dto.FlightRequestDTO;
import com.sunbeam.dto.FlightSearchRequestDto;
import com.sunbeam.dto.FlightSearchResponseDto;
import com.sunbeam.entities.Booking;
import com.sunbeam.entities.ScheduleFlight;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private ScheduleFlightRepository scheduleRepo;

    @Autowired
    private BookingRepository bookingRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<FlightSearchResponseDto> flightSearch(String source, String destination, LocalDate departure) {
        List<FlightSearchResponseDto> flights = scheduleRepo.searchFlights(source, destination, departure);
        return flights.stream()
                .map(flight -> modelMapper.map(flight, FlightSearchResponseDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public BookingResponseDTO createBooking(BookingRequestDTO bookingRequestDTO) {
        Booking booking = modelMapper.map(bookingRequestDTO, Booking.class);
        Booking savedBooking = bookingRepo.save(booking);
        return modelMapper.map(savedBooking, BookingResponseDTO.class);
    }
}
