package com.sunbeam.service;

import java.time.LocalDate;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.BookingRepository;
import com.sunbeam.dao.ScheduleFlightRepository;
import com.sunbeam.dao.UserDao;
import com.sunbeam.dto.BookingRequestDto;

import com.sunbeam.dto.BookingResponseDto;

import com.sunbeam.dto.FlightSearchResponseDto;
import com.sunbeam.entities.Booking;
import com.sunbeam.entities.User;

import jakarta.persistence.EntityNotFoundException;


@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private ScheduleFlightRepository scheduleRepo;

    @Autowired
    private BookingRepository bookingRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private UserDao userDao;
    @Override
    public List<FlightSearchResponseDto> flightSearch(String source, String destination, LocalDate departure) {
        List<FlightSearchResponseDto> flights = scheduleRepo.searchFlights(source, destination, departure);
        return flights.stream()
                .map(flight -> modelMapper.map(flight, FlightSearchResponseDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public BookingResponseDto createBooking(BookingRequestDto bookingRequestDTO) {
        // ✅ Configure ModelMapper to handle User entity mapping
        modelMapper.typeMap(BookingRequestDto.class, Booking.class)
                .addMappings(mapper -> {
                    mapper.skip(Booking::setUser); // Skip the user field during mapping
                });
        
        // Map DTO to Entity (excluding User)
        Booking booking = modelMapper.map(bookingRequestDTO, Booking.class);
        
        // ✅ Manually set the User entity
        if (bookingRequestDTO.getUserId() != null) {
            User user = userDao.findById(bookingRequestDTO.getUserId())
                    .orElseThrow(() -> new EntityNotFoundException("User not found with ID: " + bookingRequestDTO.getUserId()));
            booking.setUser(user);
        }
        
        Booking savedBooking = bookingRepo.save(booking);
        return modelMapper.map(savedBooking, BookingResponseDto.class);
    }
}
